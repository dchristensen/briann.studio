import React from "react"
import PageLayout from "../components/PageLayout"

export default function Calendar() {
  const width = 800;
  const height = width * 0.75;
  return (
    <PageLayout>
      <div className="calendar-container">
        <iframe src={"https://calendar.google.com/calendar/embed?wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&src=aGVhdnlkLm5ldF8xYWdiZ3B2dmhhajk5M2psdG1sNGJxNG9yY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&height=" + height} style={{ border: "solid 1px #777" }} width={width} height={height} scrolling="no"></iframe>
      </div>
    </PageLayout>
  )
}
