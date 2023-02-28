import React, { useRef } from 'react';
import './player.scss';
import iconprev from './iconprev.png';
import iconnext from './iconnext.png';
import iconplay from './iconplay.png';
import iconpause from './iconpause.png';

const Player = ({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs})=> {

  const clickRef = useRef();

  const PlayPause = ()=>
  {
    setisplaying(!isplaying);

  }


  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;

  }

  const skipBack = async ()=>
  {
    await setisplaying(false);

    const index = songs.findIndex(x=>x.title == currentSong.title);
    if (index == 0)
    {
      setCurrentSong(songs[songs.length - 1])
    }
    else
    {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;
    
    await setisplaying(true);
  }


  const skiptoNext = async ()=>
  {
    await setisplaying(false);

    const index = songs.findIndex(x=>x.title == currentSong.title);

    if (index == songs.length-1)
    {
      setCurrentSong(songs[0])
    }
    else
    {
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0;

    await setisplaying(true);
  }

  return (
    <div className='player_container'>
      <div className="title">
        <p>{currentSong.title}</p>
      </div>
      <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
        </div>
      </div>

      <div className="controls">
        <img src={iconprev} alt="prev" className='btn_action' onClick={skipBack} />

        {isplaying ? <img src={iconpause} alt="pause" width='50px' className='btn_action pp' onClick={PlayPause} /> : <img src={iconplay} alt="play" width='50px' className='btn_action pp' onClick={PlayPause} />}

        <img src={iconnext} alt="next" className='btn_action' onClick={skiptoNext} />
      </div>
    </div>
  
  )
}

export default Player