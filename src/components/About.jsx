import React from "react";
import { ImPointRight } from "react-icons/im";
import SkillCard from "./SkillCard";
import { FaHtml5, FaCss3, FaVuejs } from "react-icons/fa";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import { SiTypescript, SiGraphql, SiCypress, SiJest, SiPostman, SiSelenium } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const About = () => {
    return (
        <div id='about' className='pt-[90px]'>
            <section className='min-h-screen  w-full text-slate-800 dark:text-white p-3 md:p-5'>
                <h2 className='text-5xl font-semibold mb-4'>Know Who I am</h2>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div>
                        <p>
                            Hi Everyone, I am{" "}
                            <span className='text-indigo-700 font-semibold'>
                                Aghoghovwia Andrew
                            </span>{" "}
                            a Nigerian based in the Uk. I am currently employed as a software
                            developer at Juspay. I have completed Integrated MSc (IMSc) in Maths and
                            Computing at BIT Mesra.
                        </p>
                        <p className='mt-1'>
                            Apart from coding, some other activities that I love to do!
                        </p>

                        <ul className='mt-2'>
                            <li className='flex gap-4 items-center'>
                                <ImPointRight /> Playing Games
                            </li>
                            <li className='flex gap-4 items-center'>
                                <ImPointRight /> Writing Tech Blogs
                            </li>
                            <li className='flex gap-4 items-center'>
                                <ImPointRight /> Travelling
                            </li>
                        </ul>
                        <p>"Strive to build things that make a difference!" Soumyajit</p>
                    </div>
                    <div className='flex items-center justify-center border-2 border-indigo-800/30 rounded-lg'>
                        <img
                            src='/images/about.png'
                            alt=''
                            className='w-full h-full object-cover '
                        />
                    </div>
                </div>

                <div className='flex justify-center items-center mt-28'>
                    <h3 className='text-3xl font-semibold'>Professional Skillset</h3>
                </div>
                <section className='flex justify-center items-center flex-wrap   gap-5 px-3 py-5'>
                    <SkillCard>
                        <FaHtml5 />
                    </SkillCard>
                    <SkillCard>
                        <FaCss3 />
                    </SkillCard>
                    <SkillCard>
                        <DiJavascript1 />
                    </SkillCard>
                    <SkillCard>
                        <FaVuejs />
                    </SkillCard>
                    <SkillCard>
                        <DiReact />
                    </SkillCard>
                    <SkillCard>
                        <DiNodejs />
                    </SkillCard>
                    <SkillCard>
                        <DiJava />
                    </SkillCard>
                    <SkillCard>
                        <DiMongodb />
                    </SkillCard>
                    <SkillCard>
                        <DiPython />
                    </SkillCard>
                    <SkillCard>
                        <DiGit />
                    </SkillCard>
                    <SkillCard>
                        <SiTypescript />
                    </SkillCard>
                    <SkillCard>
                        <SiGraphql />
                    </SkillCard>
                    <SkillCard>
                        <SiJest />
                    </SkillCard>
                    <SkillCard>
                        <SiCypress />
                    </SkillCard>
                    <SkillCard>
                        <SiSelenium />
                    </SkillCard>
                </section>
            </section>
        </div>
    );
};

export default About;
