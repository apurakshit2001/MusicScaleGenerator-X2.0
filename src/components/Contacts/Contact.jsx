import React from 'react'
import myimg from '../images/Arpan.jpg'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <div class="profile-card">
                <div class="image">
                    <img src={myimg} alt="Man sitting on a sofa" class="profile-image" />
                </div>
                <div class="text-data">
                    <span class="name">☮PEACE</span>
                    <span class="hobby">PHOTOGRAPHY</span>
                </div>

                <div class="media-buttons">
                    <a href="https://www.facebook.com/arpan.rakshit.18" id="facebook" class="link" target="_blank">
                        <i class='bx bxl-facebook'></i>
                    </a>
                    <a href="https://twitter.com/ArpanRakshit6" id="twitter" class="link" target="_blank">
                        <i class='bx bxl-twitter'></i>
                    </a>
                    <a href="https://www.instagram.com/street_man_2001/" id="instagram" class="link" target="_blank">
                        <i class='bx bxl-instagram'></i>
                    </a>
                    <a href="https://www.youtube.com/@-nijedergaan3631/featured" id="youtube" class="link" target="_blank">
                        <i class='bx bxl-youtube'></i>
                    </a>
                    <a href="https://t.me/Apu_Human_2001" id="telegram" class="link" target="_blank">
                        <i class='bx bxl-telegram'></i>
                    </a>
                </div>

                <div class="buttons">
                    <a href="https://www.youtube.com/@-nijedergaan3631/featured" target="_blank"><button class="buttonCon" >Subscribe</button></a>
                    <a href="mailto:okritrimoj@gmail.com" target="_blank"><button class="buttonCon">Mail</button></a>
                </div>

                <div class="analytics">
                    <div class="data">
                        <i class='bx bx-heart'></i>
                        <span class="number">20k</span>
                    </div>
                    <div class="data">
                        <i class='bx bx-message-rounded'></i>
                        <span class="number">10k</span>
                    </div>
                    <div class="data">
                        <i class='bx bx-share'></i>
                        <span class="number">5k</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
