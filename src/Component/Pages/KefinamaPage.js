import React, {useState, useEffect} from 'react'
import {absoluteURL} from "../../Utils/index"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import SocialMediaList from "../Helper/SocialMediaList.json";
import YTCard from '../Helper/YTCard';
import SpotifyCard from '../Helper/SpotifyCard';

function KefinamaPage() {

    const channelId = "UCqRBOilm-3brVlN2qMw2rQw"

    const result = 6

    const YOUTUBE_KEY =  "AIzaSyBB306xqk50yQDgVBK3iZ7_eFQKsiG6pr8"
    // console.log(KEY)

    const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`


    const data = SocialMediaList.SocialMediaList
    // console.log(data);

    const [links, setLinks] = useState({"youtubeLinks":[]})
    // console.log(links.youtubeLinks)

    console.log(finalURL)

    useEffect(() => {
        fetch(finalURL)
        .then((response) => response.json())
        .then((res) => {
            // console.log(res)
            setLinks({
                ...links,
                youtubeLinks:res.items.map(obj => obj.id.videoId)
            })
        })
        .catch((err) => console.log(err))
    }, [])

    console.log(links)

    // const getYoutubeLinks = async() => {
    //     const response = await axios({
    //         method:"GET",
    //         url:finalURL,
    //         headers:{
    //             "Access-Control-Allow-Origin":"*"
    //         },
    //     }).then((response) => {
    //         setLinks({
    //             ...links,
    //             youtubeLinks : response.data
    //         })
    //     }).catch((err) => console.log(err))
    // }

    // useEffect(() => {
    //     getYoutubeLinks()
    //     console.log(links)
    // }, [])

    function getIcons(name){
        switch(name){
            case "fb":
                return <FaIcons.FaFacebookF size="25px" color="#FF9277" />
            case "twitter":
                return <AiIcons.AiOutlineTwitter size="25px" color="#FF9277" />
            case "insta":
                return <AiIcons.AiFillInstagram size="25px" color="#FF9277" />
            case "spotify":
                return <FaIcons.FaSpotify size="25px" color="#FF9277" />
            case "yt":
                return <AiIcons.AiFillYoutube size="25px" color="#FF9277" />
            case "email":
                return <MdIcons.MdEmail size="25px" color="#FF9277" />
        }
    }

    return (
        <div className="homepageWrapper">
            <div className="infoWrapper">
                <div className="bannerImage">
                    <img className="bannerImg" src={absoluteURL("./bannerImage.png")} alt="" />
                </div>
                <div className="profilePhoto">
                    <img className="profileImage" src={absoluteURL("./vandit.png")} alt="" />
                </div>
                <div className="profileCard">
                    <div className="heading">
                        the Kefinama
                    </div>
                    <div className="subHeading">
                        Hi, I make music to express myself!
                    </div>
                </div>
            </div>

            <div className="socialMediaWrapper">
                <div className="socialMediaIcons">
                    {data.map((item, index) => {
                        return(
                            <div key={index} className="icons">
                                <a target="_blank" href={item.link} style={{textDecoration:"none"}}>
                                    {getIcons(item.handle)}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="recentVideo">
                <div className="recentVidHeading">
                    Latest Video
                </div>
                <YTCard videoId={links.youtubeLinks[0]} height="200px" />
            </div>

            <div className="youtubeWrapper">
                <div className="youtubeHeading">
                    YouTube
                </div>
                <div className="youtubeVideos">
                    {/* <YTCard videoId={links.youtubeLinks[0]} /> */}
                    {links.youtubeLinks.map((item, index) => {
                        return(
                            <div className="ytVids">
                                <YTCard videoId={item} height="125px" width="180px" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="spotifyWrapper">
                <div className="spotifyName">
                    Spotify
                </div>
                <div className="spotifySongs">
                    <SpotifyCard
                    text="Dooriyan"
                    bgImage="./dooriyan.png"
                    link="https://open.spotify.com/track/72BryZOv1maI9YLOZq8qcQ?si=AqakxqgATd-UTZia0al1sQ&nd=1"
                    />
                    <SpotifyCard
                    text="Ladta Hoon"
                    bgImage="./ladtaHoon.png"
                    link="https://open.spotify.com/track/7yGPjdVLYgixUulddcHuLA?si=Eb8hP9rIQPK3_KCfpPwP7g&nd=1"
                    />
                </div>
            </div>
            <div className="poweredBy">
                <a href=" https://www.instagram.com/invites/contact/?i=1bqh51djqq8sl&utm_content=kv02yne" target="_blank" style={{textDecoration:"none", color:"#FF9277"}}>
                    Powered by 22by7_pi
                </a>
            </div>
        </div>
    )
}

export default KefinamaPage
