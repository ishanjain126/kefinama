import React from 'react'
import {absoluteURL} from "../../Utils/index";
import {Link} from "react-router-dom"

function SpotifyCard({bgImage, link, text}) {
    return (
        <div>
            <a href={link} target="_blank" style={{textDecoration:"none"}}>
            <div 
            className="spotifyCard" 
            style={{
                backgroundImage:`url(${absoluteURL(`${bgImage}`)})`
            }}>
            </div>
            <div className="songName">
                {text}
            </div>
            </a>
        </div>
    )
}

export default SpotifyCard
