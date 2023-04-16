import React from 'react'
import {FaHeadphones, FaHeart, FaRegHeart, FaRegClock} from 'react-icons/fa'
import {Songs} from './Songs'
import { MusicPlayer } from './MusicPlayer'
import { useState, useEffect } from 'react'

function AudioList() {
  const [songs, setSongs] = useState(Songs)
  const [song, setSong] = useState(Songs[0].songSrc); 
  const [songName, setSongName] = useState(Songs[0].songName); 
  const [imgSrc, setImgSrc] = useState(Songs[0].imgSrc)
  useEffect(() => {
    const songs = document.querySelectorAll('.songs')

        function changeMenuActive(){
            songs.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
            console.log(this)
        }

    songs.forEach(n => n.addEventListener('click', changeMenuActive))
  }, []);

  const changeFavorite = (id) => {
    Songs.forEach(song => {
      if (song.id == id){
        song.favourite = !song.favourite
      }
    })
    setSongs([...Songs]);
  }

  const setMainSong =(song, img, name) =>{
    setSong(song); 
    setImgSrc(img); 
    setSongName(name)
  }

  return (
    <div className='audioList'>
        <h2 className='title'>
            Popular <span>{Songs.length} songs</span>
        </h2>
        <div className='songsContainer'>
          {
            songs && songs.map((song, index) => (
              <div className='songs' key={song.id}
                onClick={()=> setMainSong(song?.songSrc, song?.imgSrc, song?.songName)}
              >
            <div className='count'>{song.id}</div>
            <div className='song'>
              <div className='imageBox'>
                <img src={song?.imgSrc} alt='' />
              </div>
              <div className='section'>
                <p className='songName'>
                  {song.songName}
                  <span className='songArtist'>{song?.songArtist}</span>
                </p>
                <div className='hits'>
                  <p className='hit'>
                    <i>
                      <FaHeadphones />
                    </i>
                    95,490,102
                  </p>
                  <p className='duration'>
                    <i><FaRegClock /></i>
                    03.04
                  </p>
                  <div className ='favourites'
                    onClick={() => changeFavorite(song?.id)}
                  >
                   { song?.favourite ? 
                    <i><FaHeart/></i> : 
                    <i><FaRegHeart/></i>
                   }
                  </div>
                </div>
              </div>
            </div>
          </div>
            ))
          }
          
        </div>

        <MusicPlayer song={song} />
    </div>
  )
}

export {AudioList}