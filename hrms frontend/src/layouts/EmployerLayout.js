import React from 'react'
import EmployerList from "../pages/EmployerList";
import { Container } from 'semantic-ui-react'

export default function EmployerLayout() {
  return (
    <div>
      
      <Container className="employer">
      <br />
        <EmployerList />
      </Container>
    </div>
  )
}
