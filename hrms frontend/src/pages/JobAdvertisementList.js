import React, { useState, useEffect } from "react";
import { Icon, Card, Divider, Header, CardHeader } from 'semantic-ui-react'
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Link } from "react-router-dom"

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
    }, [])

    return (
        <div>
            <Divider horizontal fitted>
                <Header as='h4'>
                    <Icon name='alarm' />
                    Recently Posted
                </Header>
            </Divider>
            {jobAdvertisements.map((jobAdvertisement) => (
                <Card fluid color="green" key={jobAdvertisement.id}>
                    <CardHeader><Link to={`/jobadvertisements/${jobAdvertisement.jobPosition.position}`}>{jobAdvertisement.jobPosition.position}</Link></CardHeader>
                    <Card.Meta>
                        Number of positions: {jobAdvertisement.numberOfOpenPositions}
                    </Card.Meta>




                </Card>
            ))}
        </div>
    )
}
