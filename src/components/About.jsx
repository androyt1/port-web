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
import { SiTypescript, SiGraphql } from "react-icons/si";

const About = () => {
    return (
        <div className='min-h-screen pt-28 w-full text-slate-800 dark:text-white p-3 md:p-5'>
            <h2 className='text-5xl font-semibold mb-4'>Who I am</h2>
            <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>
                    <p>
                        Hi Everyone, I am Soumyajit Behera from Bhubaneswar, India. I am currently
                        employed as a software developer at Juspay. I have completed Integrated MSc
                        (IMSc) in Maths and Computing at BIT Mesra.
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
                <div className='flex items-center justify-center'>
                    <img src='/images/about.png' alt='' />
                </div>
            </section>

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
            </section>
        </div>
    );
};

export default About;
