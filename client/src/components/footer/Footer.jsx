import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <section id="footer" class="section-m1">
            <div class="row1">
                <div class="col1">
                    <p><strong>Contact</strong></p>
                    <div class="contact">
                        <p><strong>Address:</strong> 562 Wellington Road, Street32, San Francisco</p>
                        <p><strong>Phone:</strong> +01 2222 365/(+91) 01 2345 6789</p>
                        <p><strong>Hours:</strong> 10:00 - 18:00 Mon-Sat</p>
                    </div>
                    <p><strong>Follow Us</strong></p>
                    <div class="socials">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-pinterest-p"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>

                <div class="col2">
                    <p><strong>About</strong></p>
                    <a href="">About Us</a>
                    <a href="">Delivery Information</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Contact Us</a>
                </div>

                <div class="col3">
                    <p><strong>My Account</strong></p>
                    <a href="">Sign In</a>
                    <a href="">View Cart</a>
                    <a href="">My Wishlist</a>
                    <a href="">Track My Order</a>
                    <a href="">Help</a>
                </div>
                <div class="col4">
                    <p><strong>Install App</strong></p>
                    <p>From App Store or Google Play</p>
                    <div class="app">
                        <img
                            src="https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/pay/app.jpg?raw=true" />
                        <img
                            src="https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/pay/play.jpg?raw=true" />
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img
                        src="https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/pay/pay.png?raw=true" />
                </div>
            </div>
            <div class="row2">
                <p> ©2021. Aahaar Pvt. Ltd.</p>
            </div>
        </section>

    )
}

export default Footer;
