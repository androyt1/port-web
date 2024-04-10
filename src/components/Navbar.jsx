import React from "react";

const Navbar = () => {
    return (
        <nav className='h-20  flex justify-between items-center px-3'>
            <div className='flex-shrink-0'>
                <h3 className='text-2xl font-normal text-neutral-200'>Androy</h3>
            </div>
            <ul className='hidden md:flex items-center justify-center text-indigo-200/50 gap-2'>
                <li>About</li>
                <li>Experience</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
