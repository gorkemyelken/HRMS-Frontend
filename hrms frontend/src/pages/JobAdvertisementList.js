import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Card, Grid, Header, Divider, Button, Form, GridColumn } from "semantic-ui-react";
import CityService from "../services/cityService";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementList({ type, companyName }) {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [cities, setCities] = useState([]);

  const [cityId, setCityId] = useState(0);

  let cityService = new CityService()
  let jobAdvertisementService = new JobAdvertisementService()

  useEffect(() => {
    if (type === "byEmployer") {
      jobAdvertisementService.getByEmployer(companyName).then((result) => setJobAdvertisements(result.data.data));
    } else {
      jobAdvertisementService.getJobAdvertisements().then((result) => setJobAdvertisements(result.data.data));
      cityService.getCities().then((result) => setCities(result.data.data));
    }
  }, []);


  const cityOptions = cities.map((city) => ({
    key: city.id,
    text: city.cityName,
    value: city,
  }));
 

  const handleCity = (value) => {
    setCityId(value);
  };


  const handleClearFilter = () => {
    window.location.reload();
  }; 

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
      
      <Grid columns="2">
    <Grid.Row>
      <Grid.Column width="13">
        
      <Grid columns={4} divided="vertically">
      {jobAdvertisements.map((jobAdvertisement) => (
        <Grid.Column>
        
        <Grid.Row>
          
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
                    <Button color='twitter'>
                     <Icon name="hand point right"/><Link to={`/jobadvertisements/${jobAdvertisement.id}`}>
                     &nbsp;&nbsp;View Detail
                  </Link>
                    </Button>
                </Card.Content>
              </Card>

            </Grid.Column>
          
        </Grid.Row>
       
        </Grid.Column>
         ))}
      </Grid>



      </Grid.Column>
      <Grid.Column width="3">
        

      <Form>
            <Form.Select
              name="jobPosition"
              placeholder="Job Position"

            />
            <Form.Select
              name="city"
              placeholder="City"
              options={cityOptions}
              onChange={(data) => handleCity(data.value)}
            />
            <Form.Select
              name="workingTime"
              placeholder="Working Time"
              
              
            />
            <Form.Select
              name="workingType"
              placeholder="Working Type"
             
              
            />
            <br />

            <Button circular fluid color="yellow" content="Filter" />
            <br />
            <Button circular fluid color="teal" content="Clear Filter" onClick={() => handleClearFilter()}/>
          </Form>


      </Grid.Column>
    </Grid.Row>
    </Grid>

    </div>

  );
}