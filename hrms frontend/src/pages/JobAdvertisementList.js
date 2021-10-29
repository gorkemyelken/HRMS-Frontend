import React, { useEffect, useState } from "react";
import { Icon, Card, Grid, Header, Divider } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getJobAdvertisements().then((result) => setJobAdvertisements(result.data.data));
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
        <Grid.Row>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Grid.Column>
              <Card>          
                    <Card.Content>
                        <Card.Header>{jobAdvertisement.jobPosition.position}</Card.Header>
                        <Card.Meta>
                        {jobAdvertisement.jobDescription}
                        </Card.Meta>
                        <Card.Description>Number of Open Positions:&nbsp;
                        {jobAdvertisement.numberOfOpenPositions}
                        </Card.Description>
                        <Card.Description>City:&nbsp;
                        {jobAdvertisement.city.cityName}
                        </Card.Description>
                        <Card.Description>Posting date:&nbsp;
                        {jobAdvertisement.createDate}
                        </Card.Description>
                        <Card.Description>Closing date:&nbsp;
                        {jobAdvertisement.applicationDeadline}
                        </Card.Description>
                    </Card.Content>
                </Card>

            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>

    </div>
  );
}