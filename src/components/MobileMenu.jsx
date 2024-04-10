import PropsTypes from "prop-types";

const MobileMenu = ({ isOpen }) => {
    return (
        <nav
            className={`absolute top-[70px] right-0 transition-transform duration-500 ease-linear bg-indigo-800 dark:bg-white z-10 px-3  w-[120px] ${
                isOpen ? "translate-y-0" : "translate-y-[-300px]"
            }`}>
            <ul
                className={`h-[300px] flex flex-col md:hidden items-start justify-center text-white dark:text-indigo-800 py-3 gap-y-3 font-semibold `}>
                <li className='pt-3'>About</li>
                <li>Experience</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

MobileMenu.propTypes = {
    isOpen: PropsTypes.bool.isRequired,
};

export default MobileMenu;
