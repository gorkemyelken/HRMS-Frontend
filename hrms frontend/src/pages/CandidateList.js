import React from 'react'
import CandidateService from '../services/candidateService'
import { Image, Divider, Icon, Header, Card, CardHeader } from 'semantic-ui-react'
import { useState, useEffect } from "react";
import person from '../images/person.jpg';

export default function CandidateList() {
    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result => setCandidates(result.data.data))
    })

    return (
        <div>
            <Divider horizontal fitted>
                <Header as='h4'>
                    <Icon name='user' />
                    Candidates
                </Header>
            </Divider>
            {candidates.map((candidate) => (
                <Card key={candidate.id}>
                    <Image src={person} wrapped ui={false} />
                    <CardHeader>{candidate.firstName} {candidate.lastName}</CardHeader>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                        Open to work.
                    </Card.Description>




                </Card>
            ))}

        </div>
    )
}
