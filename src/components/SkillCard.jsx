import React from "react";
import PropTypes from "prop-types";

const SkillCard = ({ children }) => {
    return (
        <div className=' min-w-[150px] max-w-72 h-32 border flex justify-center items-center bg-white'>
            <div className='text-6xl'>{children}</div>
        </div>
    );
};
SkillCard.propTypes = {
    children: PropTypes.node.isRequired,
};
export default SkillCard;
