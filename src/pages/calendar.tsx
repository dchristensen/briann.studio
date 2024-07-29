import React from "react"
import { DefaultLayout } from "../components/PageLayout"

export default function Calendar() {
  return (
    <DefaultLayout>
      <div className="calendar-container">
        <iframe
          src={
            "https://calendar.google.com/calendar/embed?wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&src=aGVhdnlkLm5ldF8xYWdiZ3B2dmhhajk5M2psdG1sNGJxNG9yY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0"
          }
          style={{ border: "solid 1px #777" }}
          scrolling="no"
        ></iframe>
      </div>
    </DefaultLayout>
  )
}
