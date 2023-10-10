import gradients from "../assets/gradients.json";

export const getGradient = () => {
    return gradients[Math.floor(Math.random() * gradients.length)];
}

export const getGradientString = (gradient) => {
    return `linear-gradient(${gradient.direction}, ${gradient.colors.join(", ")})`;
}

export const gradient = getGradient();
export const gradientString = getGradientString(gradient);