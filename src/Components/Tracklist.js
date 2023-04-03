import React from 'react'
import {FaDesktop} from 'react-icons/fa'
import {BsVolumeUpFill, BsMusicNoteList} from 'react-icons/bs'
import Album from '../img/canto_ala_vida.jpg'

function Tracklist() {
  return (
    <div className='trackList'>
        <div className='top'>
            <img src={Album} alt=''/>
            <p className='trackName'>De Paso por lo Eterno<span className='trackSpan'>Rafael Lechowski</span></p>
        </div>
        <div className='bottom'>
            <i><BsVolumeUpFill/></i>
            <input type='range'/>
            <i><BsMusicNoteList/></i>
            <i><FaDesktop/></i>
        </div>
    </div>
  )
}

export {Tracklist}