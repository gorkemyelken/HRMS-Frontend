import React from "react";
import { Grid, Header, Search } from "semantic-ui-react";
import JobPositionList from "../pages/JobPositionList";
import HomePage from "../pages/HomePage";
import { Route } from "react-router";

export default function HomeLayout() {
    return (
        <div >
                    <br/>
                    <br/>
   
            <Grid>
                <Grid.Row>

                    <Grid.Column width={4}>
                        <Route exact path="/" component={JobPositionList} />
                        <Route exact path="/jobpositions" component={JobPositionList} />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Header as='h2'>Search for a position or company</Header>
                        <Search size="massive" showNoResults={false} />
                        <br/>
                        <Route exact path="/" component={HomePage} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
