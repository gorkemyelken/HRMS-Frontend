import React, { useEffect, useState } from 'react'
import EmployerService from '../services/employerService'
import { Image, Card, Grid, Divider, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function EmployerList() {
    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result => setEmployers(result.data.data))
    })
    return (
        <div>
            <br/>
            <Divider horizontal fitted>
                <Header as='h4'>
                    <Icon name='building' />
                    Companies
                </Header>
            </Divider>
            <br/>
            <br/>
            <Grid columns={4} divided="vertically">
                <Grid.Row>
                    {employers.map((employer) => (
                        <Grid.Column>
                            
                            <Card >
                            
                                        <Image src={employer.imageUrl}  />
                                    
                                <Card.Content>
                                    <Card.Header><Link to={`/companies/${employer.id}`}>
                                        {employer.companyName}
                                    </Link></Card.Header>
                                    <Card.Description>
                                        {employer.webAddress}
                                    </Card.Description>
                                   
                                </Card.Content>
                            </Card>

                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </div>
    )
}
