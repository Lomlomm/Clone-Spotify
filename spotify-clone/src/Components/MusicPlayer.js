import React from 'react';
import '../Styles/musicPlayer.css';
import { Spotify } from 'react-spotify-embed';

function MusicPlayer({song}) {
    console.log(song)
  return (
    <div className='musicPlayer'>
        <Spotify wide link= {song} />
    </div>
  )
}

export {MusicPlayer}