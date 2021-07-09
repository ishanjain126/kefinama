import React from 'react'
import ReactPlayer from 'react-player/youtube'

function YTCard({videoId, height, width}) {

    return (
        <div className="ytCardWrapper">
            <ReactPlayer 
            url={`https://www.youtube.com/watch?v=${videoId}`}
            // height="125px"
            // width="180px"
            height={height}
            width={width}
            />
        </div>
    )
}

export default YTCard
