import React from 'react'
import JobAdvertisementList from "../pages/JobAdvertisementList";
import { Container } from 'semantic-ui-react'

export default function JobAdvertisementLayout() {
  return (
    <div>
      
      <Container className="jobadvertisement">
      <br />
        <JobAdvertisementList />
      </Container>
    </div>
  )
}
