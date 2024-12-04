import React, { useRef, useState } from 'react'
import audio1 from "./assets/audio1.mp3";
import audio2 from "./assets/audio2.mp3";
import audio3 from "./assets/audio3.mp3";
import audio4 from "./assets/audio4.mp3";
import style from "./User.module.css";

const Media = () => {
    let [index , setIndex ] = useState(0);
    let playlist = [audio1,audio2,audio3,audio4]
    let audioRef = useRef();

    let handlePlay = () => {
        audioRef.current.play();
    };

    let handlePause = () => {
        audioRef.current.pause();
    };

    // let handleNext = () => {
    //     audioRef.current.src=audio2;  //playlist
    //     audioRef.current.next();
    // };

    let handleNext = () => {
      let nextIndex = (index + 1) % playlist.length;
      setIndex(nextIndex);
      audioRef.current.src = playlist[nextIndex];
      audioRef.current.play();
    };

    let handlePrevious = () => {
      let prevIndex = (index - 1 + playlist.length) % playlist.length;
      setIndex(prevIndex);
      audioRef.current.src = playlist[prevIndex];
      audioRef.current.play();
  };

  return (
     <div className="media-container">
            <h1 className="title">Heyy.. It's My Music Playlist !!</h1>
            <audio
                src={playlist[index]}
                controls
                ref={audioRef}
                className="audio-player"
            ></audio>
      {/* <audio src={audio1} controls ref={audioRef}></audio>
      <br/><br/> */}
      <div className="button-container">
      <button style={{marginLeft:"10px"}} className="btn" onClick = {handlePrevious}> Previous </button>
      <button style={{marginLeft:"10px"}} className="btn" onClick = {handlePlay}> Play </button>
      <button style={{marginLeft:"10px"}} className="btn" onClick = {handlePause}> Pause </button>
      <button style={{marginLeft:"10px"}} className="btn" onClick = {handleNext}> Next </button>
      </div>
    </div>
  )
}

export default Media

