import React, { useEffect, useState } from "react"
import Music from "../svg/music"

export interface AnnouncementProps {
  expires?: Date
}

export default function Announcement({
  children,
  expires,
}: React.PropsWithChildren<AnnouncementProps>) {
  const [isSSR, setIsSSR] = useState(true)
  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR || (expires !== undefined && Date.now() > expires.valueOf())) {
    return null
  }

  return (
    <div key={isSSR.toString()} className="events-alert">
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
