import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import EmployerService from '../services/employerService';
import { Image, Icon, Header, Grid, Divider, Button} from "semantic-ui-react";
import JobAdvertisementList from './JobAdvertisementList';
import { Link } from 'react-router-dom';

export default function EmployerDetail() {
    let{id} = useParams();
    const[employer, setEmployer] = useState({})

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.findById(id).then(result=>setEmployer(result.data.data))
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
                  <Icon name='building' />
                  {employer.companyName}
                </Header>
              </Divider>
              <br />
              <br />
              <Image src={employer.imageUrl} centered size="medium" circular />
              <br />
              <Icon name="linkify" />
              {employer.webAddress}
              <br />
              <br />
              <Icon name="mail" />
              {employer.email}
              <br />
              <br />
              <Icon name="phone" />
              {employer.phoneNumber}
              <br />
              <br/>
              <Button circular color="orange"><Link to={`/jobadvertisementadd`}>
                                        Post A Job
                                    </Link></Button>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width="3" />
        </Grid.Row>
      </Grid>

      <JobAdvertisementList type="byEmployer" companyName={employer.companyName}/>
        </div>
    )
}