import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import PropsType from "prop-types";

const ThemeSwitcher = ({ theme, handleTheme }) => {
    return (
        <button
            className='text-white w-10 h-10 flex justify-center text-2xl items-center p-2 rounded-full bg-indigo-800 dark:bg-indigo-500'
            onClick={handleTheme}>
            {theme === "dark" ? <FaMoon /> : <FaSun />}
        </button>
    );
};
ThemeSwitcher.propTypes = {
    theme: PropsType.string.isRequired,
    handleTheme: PropsType.func.isRequired,
};

export default ThemeSwitcher;
