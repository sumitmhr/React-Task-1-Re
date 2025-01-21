// src/components/LottieAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/animation.json'; // Path to your animation file

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true, // Loop animation
    autoplay: true, // Autoplay the animation
    animationData: animationData, // JSON animation file
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Keep aspect ratio of the animation
    },
  };

  return (
    <div className="lottie-container">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottieAnimation;
