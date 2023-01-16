import React from "react"
import Music from "../svg/music"

export interface AnnouncementProps {
  expires?: Date
}

export default function Announcement({
  children,
  expires,
}: React.PropsWithChildren<AnnouncementProps>) {
  const isSSR = typeof window === "undefined"

  if (isSSR || (expires !== undefined && Date.now() > expires.valueOf())) {
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
