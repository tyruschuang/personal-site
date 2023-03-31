import styled, { keyframes } from "styled-components";

const moveForever = keyframes`
  0% {
    transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
`;

const WavesStyle = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;

  .waves {
    position: absolute;
    width: 100%;
    height: 44vh;
    bottom: 0;
    left: 0;
    fill: #fff;

    .parallax > use {
      animation: ${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    }

    .parallax > use:nth-child(1) {
      animation-delay: -4s;
      animation-duration: 10s;
    }

    .parallax > use:nth-child(2) {
      animation-delay: -6s;
      animation-duration: 15s;
    }

    .parallax > use:nth-child(3) {
      animation-delay: -8s;
      animation-duration: 20s;
    }

    .parallax > use:nth-child(4) {
      animation-delay: -10s;
      animation-duration: 25s;
    }
  }

  @media (max-width: 768px) {
    .waves {
      width: 200%;
      height: 35vh;
    }
  }

  @media (max-width: 480px) {
    .waves {
      width: 250%;
      height: 35vh;
    }
  }
`;

const svgStyle = {
  shapeRendering: "auto",
};

export default function Waves() {
  return (
    <WavesStyle>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 32"
        preserveAspectRatio="none"
        style={svgStyle}
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 58-18 88-18v48h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </WavesStyle>
  );
}
