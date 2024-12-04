import { useEffect } from "react";

const LandingPage = () => {
    useEffect(() => {
        const parallax_el = document.querySelectorAll(".parallax");

        const handleMouseMove = (e) => {
            const xValue = e.clientX - window.innerWidth / 2;
            const yValue = e.clientY - window.innerHeight / 2;

            parallax_el.forEach((el) => {
                let speedx = el.dataset.speedx;
                el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * 0.1}px))`;
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
            <img src="src/assets/images/landingPage/background.png" className="parallax bg-img" data-speedx="0.01" />
            <img src="src/assets/images/landingPage/fog_7.png" className="parallax fog-7" data-speedx="0.27"/>
            <img src="src/assets/images/landingPage/mountain_10.png" className="parallax mountain-10" data-speedx="0.015" />
            <img src="src/assets/images/landingPage/mountain_10.png" className="parallax mountain-10-1" data-speedx="0.015" />
            <img src="src/assets/images/landingPage/fog_6.png" className="parallax fog-6" data-speedx="0.025"/>
            <img src="src/assets/images/landingPage/mountain_9.png" className="parallax mountain-9" data-speedx="0.01"/>
            <img src="src/assets/images/landingPage/mountain_8.png" className="parallax mountain-8" data-speedx="0.024"/>
            <img src="src/assets/images/landingPage/fog_5.png" className="parallax fog-5" data-speedx="0.0927"/>
            <img src="src/assets/images/landingPage/mountain_7.png" className="parallax mountain-7" data-speedx="0.014"/>
            <div className="text parallax">
                <h2>Front-End Developer</h2>
                <h1>ALAN CASTILLO ESQUINA</h1>
            </div>
            <img src="src/assets/images/landingPage/mountain_6.png" className="parallax mountain-6" data-speedx="0.045"/>
            <img src="src/assets/images/landingPage/fog_4.png" className="parallax fog-4" data-speedx="0.135"/>
            <img src="src/assets/images/landingPage/mountain_5.png" className="parallax mountain-5" data-speedx="0.048"/>
            <img src="src/assets/images/landingPage/fog_3.png" className="parallax fog-3" data-speedx="0.11"/>
            <img src="src/assets/images/landingPage/mountain_4.png" className="parallax mountain-4" data-speedx="0.059"/>
            <img src="src/assets/images/landingPage/mountain_3.png" className="parallax mountain-3" data-speedx="0.04"/>
            <img src="src/assets/images/landingPage/fog_2.png" className="parallax fog-2" data-speedx="0.15"/>
            <img src="src/assets/images/landingPage/mountain_2.png" className="parallax mountain-2" data-speedx="0.0235"/>
            <img src="src/assets/images/landingPage/mountain_1.png" className="parallax mountain-1" data-speedx="0.027"/>
            <img src="src/assets/images/landingPage/sun_rays.png" className="parallax sun-rays"/>
            <img src="src/assets/images/landingPage/black_shadow.png" className="parallax black-shadow"/>
            <img src="src/assets/images/landingPage/fog_1.png" className="parallax fog-1" data-speedx="0.12"/>
        </div>
    );
};

export default LandingPage;