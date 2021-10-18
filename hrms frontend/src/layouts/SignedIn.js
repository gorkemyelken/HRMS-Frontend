import React from 'react'
import { Image, Dropdown, DropdownItem, DropdownMenu, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/89/892b4777083716116a44f9892ab20eca8e1699d2_full.jpg"/>
                <Dropdown pointing="top left" text="Görkem">
                    <DropdownMenu>
                        <DropdownItem text="Info" icon="info"/>
                        <DropdownItem onClick={props.signOut} text="Log Out" icon="sign-out"/>
                    </DropdownMenu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
