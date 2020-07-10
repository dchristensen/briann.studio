import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Music from '../svg/music';

interface FileNode {
  id: string;
  publicURL: string;
}

type FilesQuery = {
  allFile: {
    edges: { node: FileNode }[]
  }
}
export default function UpcomingEvents() {
  const data = useStaticQuery<FilesQuery>(graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "documents"}, name: {eq: "5 piano concert poster"}}) {
    edges {
      node {
        id
        publicURL
      }
    }
  }
}
`);

const pdf = data.allFile.edges[0].node.publicURL;
  return (
    <div className="events-alert">
      <div className="icon"><Music /></div>
      <div className="events-message">
        The Suzuki Association of Utah 5 PIano Concert will be held on August 29, 2020.  For more information <a href={pdf} target="_blank">download the flyer</a>.
      </div>
      <div className="icon"><Music /></div>
    </div>
  )
}