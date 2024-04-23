import React, { useState,useRef } from'react';
import videoFile from '../../src/components/assets/video1.mp4'
import './Video.css'
import videobgimg from '../../src/components/assets/t20.gif'

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleTogglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="T-video">
        
      <div className="train-video">
        <h1>ARTIFICIAL INTELLIGENCE</h1>
        <video ref={videoRef} controls>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button onClick={handleTogglePlay} id="btp">
          {isPlaying ? "Stop" : "Play"}
        </button>
      </div>
    </section>
  );
};
  


export default Video


