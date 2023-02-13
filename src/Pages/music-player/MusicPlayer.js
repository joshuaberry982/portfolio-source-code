import React from 'react';
import './musicplayer.css';
import flag from './flag.jpg';
import iconprev from './iconprev.png';
import iconnext from './iconnext.png';
import iconplay from './iconplay.png';

export default function MusicPlayer() {
  return (
    <div className="musicplayer3">
      <h1>Music Player</h1>

      <div className="music-container3">

        <div className="music-info3">
          <h4 className="title3">Country Roads</h4>
          <div className="progress-container3">
            <div className="progress3"></div>
          </div>
        </div>

        <audio src="./countryroads.mp3" id="audio"></audio>

        <div className="img-container3">
          <img src={flag} alt="music-cover" className="cover3" />
        </div>

        <div className="navigation3">
          <button className="action-btn3 prev3">
            <img src={iconprev} alt="prev" className="fas3 fa-backward3" />
          </button>
          <button className="action-btn3 action-btn-big3 play3">
              <img src={iconplay} alt="play" className="fas3 fa-play3" />
          </button>
          <button className="action-btn3 next3">
              <img src={iconnext} alt="next" className="fas3 fa-forward3" />
          </button>
        </div>

      </div>

    </div>
  )
}

{/*
const musicContainer = document.querySelector('.music-container3');
const playBtn = document.querySelector('.play3');
const prevBtn = document.querySelector('.prev3');
const nextBtn = document.querySelector('.next3');
const audio = document.querySelector('.audio3');
const progress = document.querySelector('.progress3');
const progressContainer = document.querySelector('.progress-container3');
const title = document.querySelector('.title3');
const cover = document.querySelector('.cover3');

//Song Titles
const songs = ['1 - Alkaline - Champion Boy', '2 - Elephant Man - Ketch Di Dance', '3 - Vybz Kartel - Chain', '4 - Skeng - Canada', '5 - Tommy Lee Sparta - Lolly Gill'];

//Keep track of songs
let songIndex = 0;

//Initially load song info DOM
loadSong(songs[songIndex]);

//Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    //cover.src = `flag.png`;
}

function playSong() {
    musicContainer.classList.add('play3');
    playBtn.querySelector('img.fas3').classList.remove('fa-play3');
    playBtn.querySelector('img.fas3').classList.add('fa-pause3');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play3');
    playBtn.querySelector('img.fas3').classList.add('fa-play3');
    playBtn.querySelector('img.fas3').classList.remove('fa-pause3');

    audio.pause();
}

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

//Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

//Change song events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);
*/}