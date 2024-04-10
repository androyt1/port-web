import { useState } from "react";
import { RiMenu3Fill, RiMenu2Line } from "react-icons/ri";
import MobileMenu from "./MobileMenu";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <>
            <nav className='h-20  flex justify-between items-center px-3 relative bg-black z-20'>
                <div className='flex-shrink-0'>
                    <h3 className='text-2xl font-normal text-neutral-200'>Androy</h3>
                </div>
                <ul className='hidden md:flex items-center justify-center text-indigo-200/50 gap-2'>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
                <div className='flex gap-2 items-center'>
                    <ThemeSwitcher isLightMode={false} toggleIsLightMode={() => {}} />
                    {isOpen ? (
                        <RiMenu2Line
                            className='text-3xl text-white flex cursor-pointer md:hidden'
                            onClick={toggleIsOpen}
                        />
                    ) : (
                        <RiMenu3Fill
                            className='text-3xl text-white flex cursor-pointer md:hidden'
                            onClick={toggleIsOpen}
                        />
                    )}
                </div>
            </nav>
            <MobileMenu isOpen={isOpen} />
        </>
    );
};

export default Navbar;
