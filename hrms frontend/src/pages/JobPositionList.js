import React, { useState, useEffect } from "react";
import { Icon, Table, Divider, Header } from 'semantic-ui-react'
import JobPositionService from "../services/jobPositionService";
import { Link } from "react-router-dom"

export default function JobPositionList() {

    const [jobPositions, setJobPositions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))
    }, [])

    return (
        <div>
            <Divider horizontal fitted>
                <Header as='h4'>
                    <Icon name='briefcase' />
                    Job Positions
                </Header>
            </Divider>
            <Table celled >
                <Table.Body>
                    {jobPositions.map((jobPosition) => (
                        <Table.Row key={jobPosition.id}>
                            <Table.Cell textAlign="center"><Link to={`/jobpositions/${jobPosition.position}`}>{jobPosition.position}</Link></Table.Cell>
                        </Table.Row>
                    ))
                    }

                </Table.Body>


            </Table>
        </div>
    )
}
