import React from "react"
import Music from "../svg/music"

export interface AnnouncementProps {
  expires?: Date
}

export default function Announcement({
  children,
  expires,
}: React.PropsWithChildren<AnnouncementProps>) {
  console.log("announcement: ", { expires: expires, now: new Date(Date.now()) })

  if (expires !== undefined && Date.now() > expires.valueOf()) {
    return null
  }

  return (
    <div className="events-alert">
      <div className="icon">
        <Music />
      </div>
      <div className="events-message">{children}</div>
      <div className="icon">
        <Music />
      </div>
    </div>
  )
}
