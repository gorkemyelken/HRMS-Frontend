import React, { useState } from 'react'
import { Container, Menu, Dropdown, Image } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
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
                    <Menu.Item as={NavLink} to="/companies" content="Companies" />
                    <Menu.Item as={NavLink} to="/candidates" content="Candidates" />
                    <Menu.Item as={NavLink} to="/jobadvertisements" content="Job Postings" />
                    <Menu.Item position="right" as={NavLink} to="/aboutus" content="About Us" />
                    <Menu.Item>
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
                    <Menu.Menu position="right">
                        <Menu.Item position="right">
                            <SignedIn />
                        </Menu.Item>
                        <Menu.Item position="right">
                            <SignedOut />
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    )
}
