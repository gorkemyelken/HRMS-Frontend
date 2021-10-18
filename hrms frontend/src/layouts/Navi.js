import React, {useState} from 'react'
import { Container, Menu, Dropdown, Image } from 'semantic-ui-react'
import logo from '../images/logo-image.jpg';
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router';

const languageOptions = [
    { key: 'English', text: 'English', value: 'English' },
    { key: 'French', text: 'French', value: 'French' },
    { key: 'German', text: 'German', value: 'German' },
    { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
]

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const history = useHistory()
    function handleSignIn() {
        setIsAuthenticated(true)
    }

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    return (
        <div>
            <Menu inverted fixed="top" borderless >

                <Container >

                    <Image href='/' src={logo} size="tiny" />

                    <Menu.Item href='/' name="Home" />

                    <Menu.Item position="left">
                        <Dropdown
                            button
                            className='icon'
                            floating
                            labeled
                            icon='world'
                            options={languageOptions}
                            search
                            text='Select Language'
                        />
                    </Menu.Item>


                    <Menu.Item position="right">
                        <Dropdown item text='Employer'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Log In</Dropdown.Item>
                                <Dropdown.Item>Let's call you!</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn}/>}


                    </Menu.Item>

                </Container>
            </Menu>

        </div>
    )
}
