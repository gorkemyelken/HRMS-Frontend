import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CityService from '../services/cityService';
import JobPositionService from '../services/jobPositionService';
import DateLabel from "./../layouts/DateLabel";
import { Form, Grid, Button, Header, Divider, Icon, GridColumn } from "semantic-ui-react";


export default function JobAdvertisementAdd() {
    let {id} = useParams();

    
    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);

    let jobPositionService = new JobPositionService()
    let cityService = new CityService()

    useEffect(() => {
        jobPositionService.getJobPositions().then((result) => setJobPositions(result.data.data))
        cityService.getCities().then((result) => setCities(result.data.data))
    })


    const jobPositionOptions = jobPositions.map((jobPosition) => ({
        key: jobPosition.id,
        text: jobPosition.position,
        value: jobPosition,
      }));

      const cityOptions = cities.map((city) => ({
        key: city.id,
        text: city.cityName,
        value: city,
      }));


    return (
        <div>
           <br/>
           <br/>
            <Divider horizontal fitted>
                <Header as='h4'>
                    <Icon name='suitcase' />
                    Post A Job
                </Header>
            </Divider>
            <br/>
            <br/>
        

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
             

            <DateLabel value={new Date().toDateString()} />
            <br/>
            <br/>
            <br/>
                <Form>
                  <Form.Select
                    name="jobPosition"
                    label="Job Position"
                    options={jobPositionOptions}
                    
                  />
                    <Form.Select
                    name="city"
                    label="City"
                    options={cityOptions}
                    
                  />
                  <Form.Group widths="equal">
                    <Form.Select
                      name="workingTime"
                      label="Working Time"
                    />
                    <Form.Select
                      name="workingType"
                      label="Working Type"
                    />
                  </Form.Group>
                  <Form.TextArea
                    name="jobDescription"
                    label="Job Description"
                    placeholder=". . ."
                  />
                  <Form.Group widths="equal">
                    <Form.Input
                      name="numberOfOpenPositions"
                      label="Number of Open Positions"
                      placeholder="1"
                    />
                    <Form.Input
                      name="closingDate"
                      label="Closing Date"
                      placeholder="DD/MM/YYYY"
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input
                      name="salaryMin"
                      label="Salary Min (Optional)"
                      placeholder="5000 ₺"
                    />
                    <Form.Input
                      name="salaryMax"
                      label="Salary Max (Optional)"
                      placeholder="10000 ₺"
                    />
                  </Form.Group>
                  <Button circular fluid type="submit" color="yellow" content="Post" />
                </Form>
    
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

    
        </div>
    )
}
