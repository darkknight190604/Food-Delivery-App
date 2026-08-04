import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>Download our app for the best experience <br /> Tomato App </p>
        <div className="app-download-platforms">
            <img src = {assets.play_store} alt="Google Play Store" />
            <img src = {assets.app_store} alt="Apple Store" />
        </div>
      
    </div>
  )
}

export default AppDownload
