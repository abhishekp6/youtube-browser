import React from "react";
import urls from "../../environments/urls";

const VidepoDetail = ({ video }) => {
    if(!video){
        return <div>Loading ..... </div>;
    }
    const videoSrc = `${urls.youtubeIframe}${video.id.videoId}`
    return(
        <div>
            <div className="ui embed">
                <iframe title="Video Player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VidepoDetail;