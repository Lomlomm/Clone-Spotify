import React from 'react'
import {FaHeadphones, FaHeart, FaRegHeart, FaRegClock} from 'react-icons/fa'
import {Songs} from './Songs'

function AudioList() {
  return (
    <div className='audioList'>
        <h2 className='title'>
            The list <span>{Songs.length} songs</span>
        </h2>
        <div className='songsContainer'>
          {
            Songs && Songs.map((song, index) => (
              <div className='songs' key={song.id}>
            <div className='count'>#{song.id}</div>
            <div className='song'>
              <div className='imageBox'>
                <img src={song?.imgSrc} alt='' />
              </div>
              <div className='section'>
                <p className='songName'>
                  {song.songName}
                  <span className='songArtist'>Artist name</span>
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
                  <div className ='favourites'>
                    <i><FaHeart/></i>
                    <i><FaRegHeart/></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
            ))
          }
          
        </div>
    </div>
  )
}

export {AudioList}