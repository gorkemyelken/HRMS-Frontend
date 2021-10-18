import React, { useState, useEffect } from "react";
import { useParams } from 'react-router'
import { Card } from 'semantic-ui-react'
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementDetail() {
  let { name } = useParams()

  const [jobAdvertisement, setJobAdvertisement] = useState({})

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService()
    jobAdvertisementService.getByJobPosition(name).then(result => setJobAdvertisement(result.data.data))
  }, [])
  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header>{jobAdvertisement.maxSalary}</Card.Header>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}

