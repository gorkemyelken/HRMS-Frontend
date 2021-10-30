import React from 'react'
import { Container, Menu, Dropdown, Image } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import logo from '../images/logo-image.jpg';

const languageOptions = [
    { key: 'English', text: 'English', value: 'English' },
    { key: 'French', text: 'French', value: 'French' },
    { key: 'German', text: 'German', value: 'German' },
    { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
]

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top" borderless >

                <Container className="navi">

                    <Image href='/' src={logo} size="tiny" />

                    <Menu.Item href='/' name="Home" />
                    <Menu.Item as={NavLink} to="/companies" content="Companies" icon="building"/>
                    <Menu.Item as={NavLink} to="/candidates" content="Candidates" icon="user"/>
                    <Menu.Item as={NavLink} to="/jobadvertisements" content="Job Postings" icon="thumbtack"/>
                    <Menu.Item position="right" as={NavLink} to="/aboutus" content="About Us" icon="question circle"/>
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
                </Container>
            </Menu>

        </div>
    )
}
