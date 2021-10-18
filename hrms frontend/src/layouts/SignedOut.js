import React from 'react'
import { Button} from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Button.Group>
                <Button size="huge" onClick={props.signIn}>Log In</Button>
                <Button.Or size ="huge"/>
                <Button size="huge" positive>Sign Up</Button>
            </Button.Group>
        </div>
    )
}
