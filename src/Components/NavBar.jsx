import React from 'react'
import { Nav, NavItem, NavLink, } from 'reactstrap';


class NavBar extends React.Component{
    state = {}
    

    render(){
        return(
            <Nav tabs className="nav-bar">
                <NavItem className="nav-item">
                    <NavLink className="nav-link">Home</NavLink>
                </NavItem>
                <NavItem class="nav-item">
                    <NavLink className="nav-link">Profile</NavLink>
                </NavItem>
                <NavItem class="nav-item">
                    <NavLink className="nav-link">Contact</NavLink>
                </NavItem>
                {/* <FormGroup className="form-inline">
                    <Input
                        type="search"
                        name="search"
                        id="exampleSearch"
                        placeholder="search for a book"
                        value={this.state.searchBook}
                        onChange={this.searchForBook}
                    />
                </FormGroup> */}
            </Nav>
        )
    }
}

export default NavBar