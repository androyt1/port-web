import React from "react";
import { TypeAnimation } from "react-type-animation";
import { services } from "../constants";

const Hero = () => {
    return (
        <div className='px-3 min-h-[calc(100vh-64px)] grid grid-cols-1 md:grid-cols-2 place-items-center    text-white '>
            <div className='flex w-full'>
                <div className='flex pl-4 flex-col items-center justify-center w-6 h-full mr-6 md:mr-8 '>
                    <div className='w-10 h-10 bg-indigo-500 rounded-full'></div>
                    <div className='h-[400px] md:h-[500px] w-2 bg-gradient-to-b from-indigo-500'></div>
                </div>
                <div className='flex-1 flex w-full flex-col items-start justify-center pr-3'>
                    <h1 className='font-bold text-4xl md:text-5xl lg:text-7xl pt-3 uppercase tracking-tighter text-left'>
                        Aghoghovwia,
                        <br />
                        <span className='text-indigo-400'> Andrew</span>
                    </h1>
                    <h2 className='font-normal  md:text-3xl text-neutral-200 mt-5'>
                        <TypeAnimation
                            sequence={services}
                            wrapper='span'
                            cursor={true}
                            repeat={Infinity}
                            className='inline-block text-2xl max-w-[60%]:'
                        />
                    </h2>
                    <div className='mt-10'>
                        <button className='py-4 bg-indigo-600 text-slate-50 px-28 rounded-md font-semibold'>
                            Projects
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex justify-center md:justify-end items-start md:items-center overflow-hidden'>
                <img
                    src='/images/me.png'
                    alt='Andrew'
                    className='min-w-[250px] max-w-[380px] object-cover  rounded-xl shadow-sm shadow-indigo-800 md:bg-indigo-400/10'
                />
            </div>
        </div>
    );
};

export default Hero;
