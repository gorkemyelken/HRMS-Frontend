import React from 'react'
import { Grid, Search, Header, Divider } from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import JobPositionDetail from '../pages/JobPositionDetail'
import JobPositionList from '../pages/JobPositionList'
import { Route } from 'react-router'
import JobAdvertisementDetail from '../pages/JobAdvertisementDetail'

export default function Dashboard() {
    return (
        <div >
            <Divider horizontal hidden></Divider>
            <Header as='h2'>Search for a position or company</Header>
            <Search size="massive" showNoResults={false} />
            <Divider horizontal hidden></Divider>

            <Grid>
                <Grid.Row>

                    <Grid.Column width={4}>
                        <Route exact path="/" component={JobPositionList} />
                        <Route exact path="/jobpositions" component={JobPositionList} />
                        <Route path="/jobpositions/:name" component={JobPositionDetail} />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={JobAdvertisementList} />
                        <Route exact path="/jobadvertisements" component={JobAdvertisementList} />
                        <Route path="/jobadvertisements/:name" component={JobAdvertisementDetail} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
