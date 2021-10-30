import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Divider, Form, Grid, Segment, Icon, Container } from 'semantic-ui-react'

export default function HomePage() {
    return (
        <div>
            <Container className = "homepage">
           <Segment basic>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                        <Form>
                            <Grid columns={2}>
                                <Grid.Column>
                                    <Button circular color="green"><Icon name='user' />Candidate</Button>
                                </Grid.Column>
                                <Grid.Column>
                                    <Button circular color="facebook"><Icon name='building' />Company</Button>
                                </Grid.Column>
                            </Grid>
                            <Form.Input
                                icon='user'
                                iconPosition='left'
                                label='Username'
                                placeholder='Username'
                            />
                            <Form.Input
                                icon='lock'
                                iconPosition='left'
                                label='Password'
                                type='password'
                                placeholder='Password'
                            />

                            <Button circular content='Login' color="green" />
                        </Form>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                        <Button circular as={NavLink} to="/individualsignup" content='Sign up' icon='signup' size='big' color="teal" ></Button>
                        <br />
                        <br />
                        <br />
                        <Button circular as={NavLink} to="/letscallyou" content="Let's Call You!" icon='phone volume' size='big' color="orange" ></Button>
                    </Grid.Column>

                </Grid>

                <Divider vertical>Or</Divider>
            </Segment>
    </Container>
    <br/>
    <br/>
    <br/>
        </div>
    )
}
