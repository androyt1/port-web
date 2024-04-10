import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import PropsType from "prop-types";

const ThemeSwitcher = ({ isLightMode, toggleIsLightMode }) => {
    return (
        <button
            className='text-white w-10 h-10 flex justify-center text-2xl items-center p-2 rounded-full bg-indigo-600/50'
            onClick={toggleIsLightMode}>
            {isLightMode ? <FaSun /> : <FaMoon />}
        </button>
    );
};
ThemeSwitcher.propTypes = {
    isLightMode: PropsType.bool.isRequired,
    toggleIsLightMode: PropsType.func.isRequired,
};

export default ThemeSwitcher;
