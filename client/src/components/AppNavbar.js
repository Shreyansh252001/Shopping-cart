import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';


class AppNavbar extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        const cartDisp = () => {
            if(this.props.cartItem === 0){
                return 
            }else{
                return <span>{this.props.cartItem}</span>
            }
        }
        console.log(cartDisp)
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Shopping List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar />
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/iAmGroot1/MERN-STARTER-PACK" >
                                    Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <i className="fa fa-shopping-cart" aria-hidden="true">{cartDisp()}</i>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar