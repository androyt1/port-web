import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
    return (
        <div className=' [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
            {/* <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div> */}
            <div className='max-w-6xl mx-auto font-montserrat'>
                <Navbar />
                <Hero />
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
