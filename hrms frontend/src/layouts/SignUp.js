import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Grid, Form, Icon, Divider, Segment} from "semantic-ui-react";

export default function SignUp() {
  const [open, setOpen] = useState(false);

  const handleModal = (value) => {
    setOpen(value);
  };

  return (
    <Segment basic>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
        <Grid columns={2}>
        <Grid.Column>
        <Button  basic color="teal"><Icon name='user' />Candidate</Button>
        </Grid.Column>
        <Grid.Column>
        <Button  basic color="orange"><Icon name='building' />Company</Button>
        </Grid.Column>
        </Grid>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            placeholder='Password'
          />

          <Button content='Login' color="green" />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button as={NavLink} to="/individualsignup" content='Sign up' icon='signup' size='big' color="teal" ></Button>
        <br/>
        <br/>
        <br/>
        <Button as={NavLink} to="/letscallyou" content="Let's Call You!" icon='phone volume' size='big' color="facebook" ></Button>
      </Grid.Column>
      
    </Grid>

    <Divider vertical>Or</Divider>
    </Segment>
  );
}