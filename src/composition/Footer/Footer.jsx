import React from "react";
import "./Footer.scss" 

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p><a href="#"><img src="./public/icons/insta.png" alt="instagram"></img></a></p>
                <p>Наша адреса: місто Черкаси, вул.Симоненка </p>
                <p>Телефон: <a href="tel:+380978888888">+380978888888</a></p>
            </div>
        </footer>
    )
}

export default Footer