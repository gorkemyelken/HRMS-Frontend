import React from 'react'
import { Form, Divider, Icon, Header } from 'semantic-ui-react'


const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

export default function CandidateSignUp() {
    return (
        <div>
            <br />
            <br />
            <Divider horizontal fitted>
                <Header as='h4'>
                    <Icon name='signup' />
                    Candidate Sign Up
                </Header>
            </Divider>
            <br />
            <br />
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='First Name' />
                    <Form.Input fluid label='Last name' placeholder='Last Name' />
                </Form.Group>
                <Form.Group widths='equal'>

                    <Form.Input fluid label='E-mail' placeholder='example@example.com' />
                    <Form.Select
                        fluid
                        label='Gender'
                        options={options}
                        placeholder='Gender'
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Identity Number' placeholder='XXXXXXXXXXX' />
                    <Form.Input fluid label='Date of Birth' placeholder='YYYY/MM/DD' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Password' />
                    <Form.Input fluid label='Confirm Password' />
                </Form.Group>
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Form.Button circular>Submit</Form.Button>
            </Form>
        </div>
    )

}