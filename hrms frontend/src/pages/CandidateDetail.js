import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import CandidateService from '../services/candidateService';
import { Image, Grid, List, Icon, Header, Divider, CardContent, GridColumn } from "semantic-ui-react";

export default function CandidateDetail() {
  let { id } = useParams();
  const [cv, setCv] = useState({})

  useEffect(() => {
    let candidateService = new CandidateService()
    candidateService.findById(id).then(result => setCv(result.data.data))
  }, [])
  return (
    <div>
      <Grid>
        <Grid.Row>
        <Grid.Column width="3" />
          <Grid.Column width="10">
            <Grid.Row>
              <br />
              <br />
              <Divider horizontal fitted>
                <Header as='h4'>
                  <Icon name='user' />
                  {cv.candidate?.firstName}&nbsp;{cv.candidate?.lastName}
                </Header>
              </Divider>
              <br />
              <br />
              <Image src={cv.imageUrl} centered size="medium" circular />
              <br />
              <Header as='h3'>
                {cv.coverLetter}
              </Header>
              <br />
              <br />
              <Icon name="mail" />
              {cv.candidate?.email}
              <br />
              <br />
              <List link horizontal>
                <List.Item href={cv.githubAddress} target="blank">
                  <Icon name="github" size="large" />
                </List.Item>
                <List.Item href={cv.linkedinAddress} target="blank">
                  <Icon name="linkedin" size="large" />
                </List.Item>
              </List>
              <br />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width="3" />
        </Grid.Row>
      </Grid>


      <Grid>
        <Grid.Row>
        <Grid.Column width="4">
        <Grid.Row>
              <br />
              <br />
              <Divider horizontal fitted>
                <Header as='h5'>
                  <Icon name='compose' />
                  Educations
                </Header>
              </Divider>
              Konya Food and Agriculture University - (2017 - 2022)
            </Grid.Row>
        </Grid.Column>

          <Grid.Column width="4">
            <Grid.Row>
              <br />
              <br />
              <Divider horizontal fitted>
                <Header as='h5'>
                  <Icon name='language'/>
                  Languages
                </Header>
              </Divider>
              Turkish - Native
              <br/>
              English - Professional Working Competence
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width="4">
          <Grid.Row>
              <br />
              <br />
              <Divider horizontal fitted>
                <Header as='h5'>
                  <Icon name='suitcase' />
                  Job Experiences
                </Header>
              </Divider>
              Torku - Intern - ( 08/2021 - 10/2021 )
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width="4">
          <Grid.Row>
              <br />
              <br />
              <Divider horizontal fitted>
                <Header as='h5'>
                  <Icon name='computer' size="small" />
                  Programming Languages
                </Header>
              </Divider>
              Java 
              <br/>
              JavaScript
              <br/>
              PostgreSQL
            </Grid.Row>
          </Grid.Column>

        </Grid.Row>
      </Grid>

    </div >
  )
}
