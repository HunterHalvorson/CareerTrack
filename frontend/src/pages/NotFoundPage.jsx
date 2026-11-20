import React from 'react'
import './css/NotFoundPage.css'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {

    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/');
    }

    return (
        <div className = 'page-container'>
            <div className = 'page-container-sub'>
                <h1>Page Not Found</h1>
                <button onClick = {returnHome}>Return To Log in!</button>
            </div>
        </div>
    )
    }

export default NotFoundPage
