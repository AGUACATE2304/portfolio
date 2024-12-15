import { useEffect } from "react";

const LandingPage = () => {
    useEffect(() => {
        const parallax_el = document.querySelectorAll(".parallax");

        const handleMouseMove = (e) => {
            const xValue = e.clientX - window.innerWidth / 2;
            const yValue = e.clientY - window.innerHeight / 2;

            parallax_el.forEach((el) => {
                let speedx = el.dataset.speedx;
                let speedy = el.dataset.speedy;

                let isInLeft = 
                    parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
                let zVaulue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft;
                
                el.style.transform = `translateX(calc(-50% + ${
                    -xValue * speedx
                }px)) translateY(calc(-50% + ${
                    yValue * speedy
                }px)) perspective(2300px) translateZ(${zVaulue}px)`;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            // Restart Listener
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []); // Only run at start

    return (
        <div className="LandingPage-Container">
            <div className="vignette"></div>
            <img src="src/assets/images/landingPage/background.png" className="parallax bg-img" data-speedx="0.3" data-speedy="0.38" data-speedz="0" />
            <img src="src/assets/images/landingPage/fog_7.png" className="parallax fog-7" data-speedx="0.27" data-speedy="0.32" data-speedz="0"/>
            <img src="src/assets/images/landingPage/mountain_10.png" className="parallax mountain-10" data-speedx="0.195" data-speedy="0.305" data-speedz="0"/>
            <img src="src/assets/images/landingPage/mountain_10.png" className="parallax mountain-10-1" data-speedx="0.25" data-speedy="0.28" data-speedz="0"/>
            <img src="src/assets/images/landingPage/fog_6.png" className="parallax fog-6" data-speedx="0.25" data-speedy="0.28" data-speedz="0"/>
            <img src="src/assets/images/landingPage/mountain_9.png" className="parallax mountain-9" data-speedx="0.125" data-speedy="0.155" data-speedz="0.15"/>
            <img src="src/assets/images/landingPage/mountain_8.png" className="parallax mountain-8" data-speedx="0.1" data-speedy="0.11" data-speedz="0"/>
            <img src="src/assets/images/landingPage/fog_5.png" className="parallax fog-5" data-speedx="0.16" data-speedy="0.105" data-speedz="0"/>
            <img src="src/assets/images/landingPage/mountain_7.png" className="parallax mountain-7" data-speedx="0.1" data-speedy="0.11" data-speedz="0"/>
            <div className="text parallax" data-speedx="0.07" data-speedy="0.07">
                <h2>Front-End Developer</h2>
                <h1>ALAN CASTILLO ESQUINA</h1>
            </div>
            <img src="src/assets/images/landingPage/mountain_6.png" className="parallax mountain-6" data-speedx="0.065" data-speedy="0.038" data-speedz="0.05"/>
            <img src="src/assets/images/landingPage/fog_4.png" className="parallax fog-4" data-speedx="0.135" data-speedy="0.32" data-speedz="0"/>
            <img src="src/assets/images/landingPage/mountain_5.png" className="parallax mountain-5" data-speedx="0.02" data-speedy="0.035" data-speedz="0.13"/>
            <img src="src/assets/images/landingPage/fog_3.png" className="parallax fog-3" data-speedx="0.11" data-speedy="0.018" data-speedz="0"/>
            <img src="src/assets/images/landingPage/mountain_4.png" className="parallax mountain-4" data-speedx="0.039" data-speedy="0.024" data-speedz="0.35"/>
            <img src="src/assets/images/landingPage/mountain_3.png" className="parallax mountain-3" data-speedx="0.04" data-speedy="0.018" data-speedz="0.32"/>
            <img src="src/assets/images/landingPage/fog_2.png" className="parallax fog-2" data-speedx="0.15" data-speedy="0.0115" data-speedz="0"/>
            <img src="src/assets/images/landingPage/mountain_2.png" className="parallax mountain-2" data-speedx="0.0235" data-speedy="0.013" data-speedz="0.42"/>
            <img src="src/assets/images/landingPage/mountain_1.png" className="parallax mountain-1" data-speedx="0.027" data-speedy="0.018" data-speedz="0.53"/>
            <img src="src/assets/images/landingPage/sun_rays.png" className="parallax sun-rays"/>
            <img src="src/assets/images/landingPage/black_shadow.png" className="parallax black-shadow"/>
            <img src="src/assets/images/landingPage/fog_1.png" className="parallax fog-1" data-speedx="0.12" data-speedy="0.01"/>
        </div>
    );
};

export default LandingPage;