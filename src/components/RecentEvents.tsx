import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import YouTubeVideo from "./YouTubeVideo"

interface EventNode {
  id: string
  date: string
  title: string
  youtube: string
}

type EventsQuery = {
  allEventsYaml: {
    edges: { node: EventNode }[]
  }
}

export default function RecentEvents() {
  const data = useStaticQuery<EventsQuery>(graphql`
    {
      allEventsYaml(sort: { date: DESC }, limit: 6) {
        edges {
          node {
            id
            date(formatString: "MMMM DD, YYYY")
            title
            youtube
          }
        }
      }
    }
  `)
  const events = data.allEventsYaml.edges
  if (events.length === 0) {
    return null
  }

  return (
    <>
      <header className="major">
        <h2>Recent Events</h2>
        <span className="byline">Recitals, performances and other events</span>
      </header>
      <div className="row">
        <div className="12u events-container">
          {events.map(e => (
            <Event key={e.node.id} event={e.node} />
          ))}
        </div>
      </div>
    </>
  )
}

function Event({ event }: { event: EventNode }) {
  return (
    <div className="event">
      <div>
        <YouTubeVideo url={event.youtube} width={400} />
      </div>
      <div>
        <h3>{event.title}</h3>
        {event.date}
      </div>
    </div>
  )
}
