import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Grid, Icon, Header, Divider } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementDetail() {
    let { id } = useParams();
    const [jobAdvertisement, setJobAdvertisement] = useState({})

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.findById(id).then(result => setJobAdvertisement(result.data.data))
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
                                    <Icon name='thumbtack' />
                                    {jobAdvertisement.jobPosition?.position}
                                </Header>
                            </Divider>
                            <br />
                            <br />
                            <Header as='h3'>
                            {jobAdvertisement.city?.cityName}
                            </Header>
                            <br />
                            <br />
                            <Icon name="mail" />
                            {jobAdvertisement.city?.cityName}
                            <br />
                            <br />
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width="3" />
                </Grid.Row>
            </Grid>
        </div>
    )
}
