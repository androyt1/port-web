import React from "react";
import { TypeAnimation } from "react-type-animation";
import { services } from "../constants";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
    return (
        <div
            className='px-3 pt-[70px] min-h-[calc(100vh-64px)] grid grid-cols-1 md:grid-cols-2 place-items-center  text-slate-800  dark:text-white '
            id='home'>
            <div className='flex w-full'>
                <div
                    data-aos='fade-down'
                    className='flex  flex-col items-center justify-center w-6 h-full mr-3 md:mr-8 '>
                    <div className='w-5 h-5 md:w-10 md:h-10 bg-indigo-500 rounded-full border-t-2 border-white'></div>
                    <div className='h-[300px] md:h-[500px] w-1 md:w-2 bg-gradient-to-b from-indigo-500 border-t-2 border-white'></div>
                </div>
                <div className='flex-1 flex w-full flex-col items-start justify-center pr-3'>
                    <h1
                        data-aos='zoom-in'
                        className='font-bold text-4xl md:text-5xl lg:text-6xl pt-3 uppercase tracking-tighter text-left'>
                        Aghoghovwia,
                        <br />
                        <span className='text-indigo-400'> Andrew</span>
                    </h1>
                    <h2 className='font-normal text-slate-800   dark:text-neutral-200 mt-3 md:mt-10'>
                        <TypeAnimation
                            sequence={services}
                            wrapper='span'
                            cursor={true}
                            repeat={Infinity}
                            className='inline-block text-xl  max-w-[60%]:'
                        />
                    </h2>
                    <div className='mt-6 md:mt-10'>
                        <button
                            data-aos='zoom-in'
                            className='py-2  bg-indigo-600 text-slate-50 w-[200px] md:w-[250px] rounded-md font-normal flex justify-center items-center gap-2'>
                            Download Cv
                            <FaDownload />
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex justify-center md:justify-end items-start md:items-center overflow-hidden relative'>
                <img
                    data-aos='fade-up'
                    src='/images/me.png'
                    alt='Andrew'
                    className='w-full max-w-[380px]  md:w-[380px] object-cover  rounded-xl md:shadow-sm shadow-indigo-800 md:bg-indigo-700/30 z-30'
                />

                <div className='absolute top-[60px] right-[60px] w-[380px] h-[420px]  bg-indigo-500/30 rounded-xl z-10 '></div>
                <div className='absolute top-[80px] right-[30px] w-[380px] h-[420px]  bg-indigo-600/30 rounded-xl z-20 '></div>
            </div>
        </div>
    );
};

export default Hero;
