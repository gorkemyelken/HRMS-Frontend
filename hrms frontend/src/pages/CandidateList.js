import React, { useState, useEffect } from "react";
import CvService from "../services/cvService";
import { Card, Grid, Image, Divider, Icon, Header, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function CandidateList() {
    const [cvs, setcvs] = useState([]);



    useEffect(() => {
        let cvService = new CvService();
        cvService.getCvs().then((result) => setcvs(result.data.data));
    }, []);

    return (
        <div>
            <br />
            <Divider horizontal fitted>
                <Header as='h4'>
                    <Icon name='user' />
                    Candidates
                </Header>
            </Divider>
            <br />
            <br />
            <Grid columns={4} divided="vertically">
                <Grid.Row>
                    {cvs.map((cv) => (
                        <Grid.Column>

                            <Card>

                                <Image src={cv.imageUrl} circular />

                                <Card.Content>
                                    <Card.Header><Link to={`/candidates/${cv.id}`}>
                                        {cv.candidate.firstName}
                                    </Link>&nbsp;<Link to={`/candidates/${cv.id}`}>{cv.candidate.lastName}</Link></Card.Header>
                                    <Card.Description>
                                    {cv.coverLetter}
                                    </Card.Description>
                                    <br />
                                    <Card.Content extra>
                                        <List link horizontal>
                                            <List.Item href={cv.githubAddress} target="blank">
                                                <Icon name="github" size="large" />
                                            </List.Item>
                                            <List.Item href={cv.linkedinAddress} target="blank">
                                                <Icon name="linkedin" size="large" />
                                            </List.Item>
                                        </List>
                                    </Card.Content>

                                </Card.Content>
                            </Card>

                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </div>
    );
}