/*
Footer - this component displays the nesccary links needed for users to go to when they reach the bottom of the page
*/

import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="main_footer">
            <div className="welcome_links">
                    <ul>
                        <li><a href="#">What we Do</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="social_links">
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook fa-2x"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter fa-2x"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram fa-2x"></i></a></li>
                        <li><a href="#"><i class="fab fa-github fa-2x"></i></a></li>
                    </ul>
                </div>

                <div className="personal_info">
                    <h4>99 Road Lane Townsville NE34 1JU</h4>
                    <h4>07263634786</h4>
                    <h4><a href="#">myemail@gmail.com</a></h4>
                    <hr></hr>
                    <h3>Copyright &copy; 2015 SomeCompany Ltd</h3>
                </div>
            </footer>
        </div>
    )
}

export default Footer

