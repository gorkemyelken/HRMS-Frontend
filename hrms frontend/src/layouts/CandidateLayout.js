import React from 'react'
import CandidateList from "../pages/CandidateList";
import { Container } from 'semantic-ui-react'

export default function CandidateLayout() {
  return (
    <div>
      
      <Container className="candidate">
      <br />
        <CandidateList />
      </Container>
    </div>
  )
}
