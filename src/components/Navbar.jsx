import { useState } from "react";
import { RiMenu3Fill, RiMenu2Line } from "react-icons/ri";
import MobileMenu from "./MobileMenu";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = ({ theme, handleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <>
            <nav className='sticky top-0 h-20   flex justify-between items-center px-3  bg-white dark:bg-black z-50'>
                <div className='flex-shrink-0'>
                    <h3 className='text-2xl font-semibold text-slate-800 dark:text-neutral-200'>
                        Androy
                    </h3>
                </div>
                <ul className='hidden md:flex items-center justify-center text-slate-800 dark:text-indigo-200/50 gap-2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
                <div className='flex gap-4 items-center'>
                    <ThemeSwitcher theme={theme} handleTheme={handleTheme} />
                    {isOpen ? (
                        <RiMenu2Line
                            className='text-3xl text-slate-800 dark:text-white flex cursor-pointer md:hidden'
                            onClick={toggleIsOpen}
                        />
                    ) : (
                        <RiMenu3Fill
                            className='text-3xl text-slate-800 dark:text-white flex cursor-pointer md:hidden'
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
