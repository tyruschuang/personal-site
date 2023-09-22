import {useCallback} from "react";
import {loadSlim} from "tsparticles-slim";
import Particles from "react-particles";

export function ParticlesBackground(props) {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);
    return <Particles
        style={{
            zIndex: 1,
        }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            background: {
                color: {
                    value: "#fff",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "attract",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#333",
                },
                links: {
                    color: "#333",
                    distance: 150,
                    enable: true,
                    opacity: 0.05,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 4,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 70,
                },
                opacity: {
                    value: 0.05,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: {min: 1, max: 5},
                },
            },
            detectRetina: true,
        }}
    />;
}