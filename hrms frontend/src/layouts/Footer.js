import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Grid, List, Icon, Divider } from 'semantic-ui-react'

export default function Footer() {
    return (
        <Container className="footer">
            <br/>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <Grid>
                <Grid.Row centered>
                    <List link horizontal>
                        <List.Item as={NavLink} to="/" content="Home" />
                        <List.Item as={NavLink} to="/employers" content="Employers" />
                        <List.Item as={NavLink} to="/candidates" content="Candidates" />
                        <List.Item as={NavLink} to="/jobadvertisements" content="Job Postings" />
                    </List>
                </Grid.Row>
                <Grid.Row centered>Görkem Yelken</Grid.Row>
                <Grid.Row centered>
                    <List link horizontal>
                        <List.Item href="https://github.com/grkmylkn" target="blank">
                            <Icon name="github" size="large" />
                        </List.Item>
                        <List.Item href="https://www.linkedin.com/in/gorkemyelken/" target="blank">
                            <Icon name="linkedin" size="large" />
                        </List.Item>
                    </List>
                </Grid.Row>
            </Grid>

        </Container>
    )
}
