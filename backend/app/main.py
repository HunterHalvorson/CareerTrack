from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.auth import router
from database import Base, engine
from models.user import User

app = FastAPI()

# CORS configuration
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Register routers
app.include_router(router)

# Create database tables
Base.metadata.create_all(bind=engine)