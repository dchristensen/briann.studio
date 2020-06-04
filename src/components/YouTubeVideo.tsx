import React from "react"

export interface YouTubeVideoProps {
  url: string
}

const VideoIdRegex = /(.*?)(^|\/|v=)([a-z0-9_-]{11})(.*)?/im

export default function YouTubeVideo({ url }: YouTubeVideoProps) {
  const videoId = url.match(VideoIdRegex)
  if (videoId === null || videoId.length !== 5) {
    return null
  }

  return (
    <iframe
      className="yt-video"
      src={"https://www.youtube.com/embed/" + videoId[3]}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}
