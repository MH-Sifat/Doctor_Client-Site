import React from 'react';
import footer from './../../../assets/images/footer.png'
const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover',
            backgroundPosition:'center'

        }} className="p-10" >
            <div className="footer justify-between">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup
                    </a>
                    <a className="link link-hover">Deep Checkup
                    </a>
                </nav>
                <nav>
                    <header className="footer-title">ORAL HEALTH
                    </header>
                    <a className="link link-hover">Fluoride Treatment
                    </a>
                    <a className="link link-hover">Cavity Filling
                    </a>
                    <a className="link link-hover">Teath Whitening
                    </a>
                </nav>
                <nav>
                    <header className="footer-title">OUR ADDRESS
                    </header>
                    <p>New York - 101010 Hudson</p>

                </nav>

            </div>
            <div className='text-center mt-16'>
                <p>Copyright 2022 All Rights Reserved
                </p>
            </div>

        </footer>
    );
};

export default Footer;