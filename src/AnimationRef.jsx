import React, {useRef} from 'react';
import style from './User.module.css';
// import AnimationRef from './AnimationRef';
// import UseRef from './UseRef';

const AnimationRef = () => {
    let anime = useRef();
    let handleAnime = () => {
        anime.current.style.animation = "move 1s forwards infinite";
    };
  return (
    <div>
      <div className="Container">
          <section className="Box" ref={anime} onClick={handleAnime}></section>
      </div>
    </div>
  );
};

export default AnimationRef;
