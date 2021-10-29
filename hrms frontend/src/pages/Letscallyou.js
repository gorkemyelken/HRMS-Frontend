import React from 'react'
import { Form, Button, Divider, Header, Icon} from "semantic-ui-react";

export default function letscallyou() {
    return (
        <div>
            <br />
            <br />
            <Divider horizontal fitted>
                <Header as='h4'>
                    <Icon name='phone volume' />
                    Let's Call You!
                </Header>
            </Divider>
            <br />
            <br />
            <Form>
                <Form.Field>
                    <label>Phone Number</label>
                    <input placeholder='(XXX) XXX XX XX' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
