import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="main_footer">
                <div className="social_links">
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook-square fa-3x"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter-square fa-3x"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram-square fa-3x"></i></a></li>
                        <li><a href="#"><i class="fab fa-github-square fa-3x"></i></a></li>
                    </ul>
                </div>

                <div className="personal_projects">
                    <h4>Personal Projects</h4>
                    <ul>
                        <li><a href="#">Project 1</a></li>
                        <li><a href="#">Project 2</a></li>
                    </ul>
                </div>

                <div className="personal_info">
                    <h3>Brendan Ewen</h3>
                    <h4>&copy; Copyrght 2020 - 2021.</h4>
                    <h4>All Rights Reserved. Powered by the ...</h4>
                </div>
            </footer>
        </div>
    )
}

export default Footer

