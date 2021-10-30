import React from "react";
import { Label, Grid } from "semantic-ui-react";

export default function DateLabel({value}) {
  return (
      <Label circular basic color="teal">
        <Grid>
          <Grid.Row>
            <Grid.Column width="2" />
            <Grid.Column width="12">
            {value}
            </Grid.Column>
            <Grid.Column width="2"/>
          </Grid.Row>
        </Grid>
      </Label>
  );
}