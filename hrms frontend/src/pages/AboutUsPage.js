import React from 'react'
import { Divider, Icon, Header, Grid, Image, List} from "semantic-ui-react";

export default function AboutUsPage() {
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
                  Görkem Yelken
                </Header>
              </Divider>
              <br />
              <br />
              <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQGqqmpqVZLpGA/profile-displayphoto-shrink_400_400/0/1598041821284?e=1640822400&v=beta&t=pon8Kfee1YC7V_-zn1cdMzdUIZ0A5Grs3LUTI1w92UI" centered size="medium" circular />
              <br />
              <Header as='h3'>
                Full Stack Developer
              </Header>
              <br />
              <br />
              <Icon name="mail" />
              gorkemyelken@gmail.com
              <br />
              <br />
              <List link horizontal>
                <List.Item href="https://www.github.com/grkmylkn" target="blank">
                  <Icon name="github" size="large" />
                </List.Item>
                <List.Item href="https://www.linkedin.com/in/gorkemyelken/" target="blank">
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
            </Grid.Row>
          </Grid.Column>

        </Grid.Row>
      </Grid>

    </div >
    )
}
