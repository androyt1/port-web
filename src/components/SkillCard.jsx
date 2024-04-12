import React from "react";
import PropTypes from "prop-types";

const SkillCard = ({ children }) => {
    return (
        <div className=' min-w-[150px] max-w-72 h-32 border-2 border-indigo-800 dark:border-indigo-200 flex justify-center items-center  dark:text-indigo-200'>
            <div className='text-6xl'>{children}</div>
        </div>
    );
};
SkillCard.propTypes = {
    children: PropTypes.node.isRequired,
};
export default SkillCard;
