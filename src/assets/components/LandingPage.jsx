import { useEffect } from "react";
import gsap from "gsap"; // Import GSAP if using it for animations
import {
    background,
    black_shadow,
    sun_rays,
    fog_1, fog_2, fog_3, fog_4, fog_5, fog_6, fog_7,
    mountain_1, mountain_2, mountain_3, mountain_4, mountain_5, mountain_6, mountain_7, mountain_8, mountain_9, mountain_10
} from "../images/landingPage/index.js"

const LandingPage = () => {
    useEffect(() => {
        const parallax_el = document.querySelectorAll(".parallax");
    
        const handleMouseMove = (e) => {
            const xValue = e.clientX - window.innerWidth / 2;
            const yValue = e.clientY - window.innerHeight / 2;
            const rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
    
            parallax_el.forEach((el) => {
                const speedx = el.dataset.speedx;
                const speedy = el.dataset.speedy;
                const speedz = el.dataset.speedz;
                const rotationSpeed = el.dataset.rotation;
    
                const isInLeft =
                    parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
                const zValue =
                    (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
    
                el.style.transform = `translateX(calc(-50% + ${
                    -xValue * speedx
                }px)) rotateY(${rotateDegree * rotationSpeed}deg) translateY(calc(-50% + ${
                    yValue * speedy
                }px)) perspective(2300px) translateZ(${zValue * speedz}px)`;
            });
        };
    
        // GSAP: Set initial positions
        // parallax_el.forEach((el) => {
        //     const distance = el.dataset.distance || 0; // Usa el atributo data-distance como referencia inicial
        //     gsap.set(el, { top: distance }); // Configura explícitamente la posición inicial
        // });
    
        // // GSAP timeline for initial animation
        // let timeline = gsap.timeline();
    
        // parallax_el.forEach((el) => {
        //     timeline.from(
        //         el, {
        //             top: `${el.offsetHeight / 2 + el.dataset.distance}px`,
        //             duration: 2, // Duración de la animación
        //         },
        //         "1"
        //     )
        // }); 
    
        window.addEventListener("mousemove", handleMouseMove);
    
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            timeline.kill(); // Detiene cualquier animación activa si el componente se desmonta
        };
    }, []); // Solo al cargar el componente


    return (
        <div className="LandingPage-Container">
            <div className="vignette"></div>
            
            <img src={background} className="parallax bg-img" data-speedx="0.3" data-speedy="0.38" data-speedz="0" data-rotation="0" data-distance="-20"/>
            <img src={fog_7} className="parallax fog-7" data-speedx="0.27" data-speedy="0.32" data-speedz="0" data-rotation="0" data-distance="850"/>
            <img src={mountain_10} className="parallax mountain-10" data-speedx="0.195" data-speedy="0.305" data-speedz="0" data-rotation="0" data-distance="1100"/>
            <img src={mountain_10} className="parallax mountain-10-1" data-speedx="0.25" data-speedy="0.28" data-speedz="0" data-rotation="0" data-distance="1100"/>
            <img src={fog_6} className="parallax fog-6" data-speedx="0.25" data-speedy="0.28" data-speedz="0" data-rotation="0" data-distance="1400"/>
            <img src={mountain_9} className="parallax mountain-9" data-speedx="0.125" data-speedy="0.155" data-speedz="0.15" data-rotation="0.02" data-distance="1700"/>
            <img src={mountain_8} className="parallax mountain-8" data-speedx="0.1" data-speedy="0.11" data-speedz="0" data-rotation="0.02" data-distance="1800"/>
            <img src={fog_5} className="parallax fog-5" data-speedx="0.16" data-speedy="0.105" data-speedz="0" data-rotation="0" data-distance="1900"/>
            <img src={mountain_7} className="parallax mountain-7" data-speedx="0.1" data-speedy="0.11" data-speedz="0" data-rotation="0.09" data-distance="2000"/>
            <div className="text parallax" data-speedx="0.07" data-speedy="0.07" data-rotation="0.11" data-distance="0">
                <h2>Front-End Developer</h2>
                <h1>ALAN CASTILLO ESQUINA</h1>
            </div>
            <img src={mountain_6} className="parallax mountain-6" data-speedx="0.065" data-speedy="0.038" data-speedz="0.05" data-rotation="0.12" data-distance="2300"/>
            <img src={fog_4} className="parallax fog-4" data-speedx="0.135" data-speedy="0.32" data-speedz="0" data-rotation="0" data-distance="2400"/>
            <img src={mountain_5} className="parallax mountain-5" data-speedx="0.02" data-speedy="0.035" data-speedz="0.13" data-rotation="0.1" data-distance="2550"/>
            <img src={fog_3} className="parallax fog-3" data-speedx="0.11" data-speedy="0.018" data-speedz="0" data-rotation="0" data-distance="2800"/>
            <img src={mountain_4} className="parallax mountain-4" data-speedx="0.039" data-speedy="0.024" data-speedz="0.35" data-rotation="0.14" data-distance="3200"/>
            <img src={mountain_3} className="parallax mountain-3" data-speedx="0.04" data-speedy="0.018" data-speedz="0.32" data-rotation="0.05" data-distance="3400"/>
            <img src={fog_2} className="parallax fog-2" data-speedx="0.15" data-speedy="0.0115" data-speedz="0" data-distance="3600"/>
            <img src={mountain_2} className="parallax mountain-2" data-speedx="0.0235" data-speedy="0.013" data-speedz="0.42" data-rotation="0.15" data-distance="3800"/>
            <img src={mountain_1} className="parallax mountain-1" data-speedx="0.027" data-speedy="0.018" data-speedz="0.53" data-rotation="0.2" data-distance="4000"/>
            <img src={sun_rays} className="parallax sun-rays"/>
            <img src={black_shadow} className="parallax black-shadow"/>
            <img src={fog_1} className="parallax fog-1" data-speedx="0.12" data-speedy="0.01" data-distance="4200"/>
        </div>
    );
};

export default LandingPage;