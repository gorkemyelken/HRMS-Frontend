import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Card, Grid, Header, Divider, Button, Form, GridColumn } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementList({ type, companyName }) {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  let jobAdvertisementService = new JobAdvertisementService()

  useEffect(() => {
    if (type === "byEmployer") {
      jobAdvertisementService.getByEmployer(companyName).then((result) => setJobAdvertisements(result.data.data));
    } else {
      jobAdvertisementService.getJobAdvertisements().then((result) => setJobAdvertisements(result.data.data));
    }
  }, []);

  return (

    <div>
      <br />

      <Divider horizontal fitted>
        <Header as='h4'>
          <Icon name='thumbtack' />
          Job Postings
        </Header>
      </Divider>
      <br />
      <br />
      <Grid columns={4} divided="vertically">
        <Grid.Column>
        <Grid.Row>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Grid.Column>
              <Card>
                <Card.Content>

                  <Card.Header><Link to={`/jobadvertisements/${jobAdvertisement.id}`}>
                    {jobAdvertisement.jobPosition.position}
                  </Link></Card.Header>
                  <Card.Description><Icon name="building" />
                    {jobAdvertisement.employer.companyName}
                  </Card.Description>
                  <br/>
                  <Card.Description><Icon name="user" />Number of Open Positions:&nbsp;
                    {jobAdvertisement.numberOfOpenPositions}
                  </Card.Description>
                  <br />
                  <Card.Description><Icon name="map pin" />City:&nbsp;
                    {jobAdvertisement.city.cityName}
                  </Card.Description>
                  <br />
                  <Card.Description><Icon name="calendar alternate" />Closing date:&nbsp;
                    {jobAdvertisement.applicationDeadline}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button basic color='orange'>
                     <Icon name="hand point right"/> View Detail
                    </Button>
                </Card.Content>
              </Card>

            </Grid.Column>
          ))}
        </Grid.Row>
        </Grid.Column>
      </Grid>

    </div>

  );
}