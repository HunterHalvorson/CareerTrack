from fastapi import APIRouter, HTTPException, Depends
from schemas.auth import RegisterRequest, LoginRequest
from sqlalchemy.orm import Session
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from database import get_db
from models.user import User
from pwdlib import PasswordHash

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

password_hash = PasswordHash.recommended()


@router.post("/register", status_code=201)
def register(request: RegisterRequest, db: Session = Depends(get_db)):

    # 1. Check if passwords match
    if request.password != request.confirm_password:
        raise HTTPException(
            status_code=400,
            detail="Passwords do not match!"
        )

    # 2. Check password length
    if len(request.password) < 15:
        raise HTTPException(
            status_code=400,
            detail="Password must be at least 15 characters."
        )

    # 3. Check if email already exists
    existing_user = db.scalar(
        select(User).where(User.email == request.email)
    )

    if existing_user is not None:
        raise HTTPException(
            status_code=409,
            detail="Email already registered!"
        )

    # 4. Hash the password
    hashed_password = password_hash.hash(request.password)

    # 5. Create a User object
    new_user = User(
        email=request.email,
        hashed_password=hashed_password
    )

    # 6. Add the user to the session
    db.add(new_user)

    # 7. Save the user to PostgreSQL
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=409,
            detail="Account conflicts with an existing record."
        )

    # 8. Retrieve the generated database values
    db.refresh(new_user)

    # 9. Return a success response
    return {
        "message": "Account created successfully!",
        "id": new_user.id,
        "email": new_user.email
    }


@router.post("/login", status_code=200)
def login(request: LoginRequest, db: Session = Depends(get_db)):

    # Retrieve user by email
    user = db.scalar(
        select(User).where(User.email == request.email)
    )

    # Check if the user exists
    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    # Verify the submitted password against the stored hash
    if not password_hash.verify(request.password, user.hashed_password):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    # Return successful response
    return {
        "message": "Account login successful",
        "email": user.email
    }
    