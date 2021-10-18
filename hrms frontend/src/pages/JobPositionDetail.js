import React, { useState, useEffect } from "react";
import { useParams } from 'react-router'
import { Card} from 'semantic-ui-react'
import JobPositionService from "../services/jobPositionService";

export default function JobPositionDetail() {
    let {name} = useParams()

    const [jobPosition, setJobPosition] = useState({})

    useEffect(()=>{
        let jobPositionService = new JobPositionService()
        jobPositionService.getByPosition(name).then(result=>setJobPosition(result.data.data))
    }, [])
    return (
        <div>
            <Card.Group>
    <Card fluid>
      <Card.Content>
        <Card.Header>{jobPosition.position}</Card.Header>
      </Card.Content>
    </Card>
  </Card.Group>
        </div>
    )
}

