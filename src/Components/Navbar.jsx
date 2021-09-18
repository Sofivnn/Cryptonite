import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='header'>
            <div className="navbar">
           
                <img src="https://cdn.discordapp.com/attachments/680483078480723976/888415964381716500/Sans_titre-2.png" alt="" />
                <h1>Cryptonite</h1>
            </div>
            <div className="search">
                <input type="text" placeholder='Search' />
                <FaSearch />
            </div>
            <div className="dots">
                <span class="dot red "></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
            </div>
        </div>
    );
};

export default Navbar;