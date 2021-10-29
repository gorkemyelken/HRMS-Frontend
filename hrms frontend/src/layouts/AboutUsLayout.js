import React from 'react'
import { Container, Image } from 'semantic-ui-react'
import cv from '../images/cv.png';

export default function CandidateLayout() {
  return (
    <div>
      <Container className="aboutus">
      <Image src={cv}  />
      </Container>
    </div>
  )
}
