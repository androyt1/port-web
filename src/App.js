import { useState, useEffect } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
    const [theme, setTheme] = useState("light");

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className='  relative'>
            <div className='top-0 left-0 fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
            <div className='max-w-6xl mx-auto font-montserrat'>
                <Navbar theme={theme} handleTheme={handleTheme} />
                <Hero />
                <About />
            </div>
            <AnimatedCursor
                innerSize={20}
                outerSize={20}
                color='49, 43, 200'
                outerAlpha={0.5}
                innerScale={0.7}
                outerScale={5}
            />
        </div>
    );
}
