import React from 'react'
import Artist from '../img/artist.jpg'
import Verified from '../img/verified.png'
import {FaEllipsisH, FaHeadphones, FaCheck} from 'react-icons/fa'
function Banner() {
  return (
    <div className='banner'>
        <img src={Artist} alt='' className='bannerImg'/>
        
        <div className='content'>
            <div className='breadCrump'>
                <p>
                    Home<span>/Popular Artist</span>
                </p>
                <i>
                    <FaEllipsisH/>
                </i>
            </div>
            <div className='artist'>
                <div className='left'>
                    <div className='name'>
                        <h2>Rafael Lechowski</h2>
                        <img src={Verified} alt=""/>
                    </div>

                    <p><i><FaHeadphones/></i>
                    134,916 <span>monthly listeners</span>
                    </p>
                </div>
                <div className='right'>
                    <a href='#'>Play</a>
                    <a href='#'><i><FaCheck/></i> Following</a>

                </div>
            </div>
        </div>

        <div className='bottomLayer'></div>
    </div>
  )
}

export { Banner }