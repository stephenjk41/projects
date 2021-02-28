import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap'
import './App.css'
import './Nav.css'


function Navigation() {
    return (
        <div>
            <Navbar className="justify-content-center color-nav">
                <NavDropdown className="color-drop" title="CORBORATIONS" >
                    <NavDropdown.Item href="/">Home</NavDropdown.Item>
                    <NavDropdown.Item href="/portfolio" >Portfolio</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.solo.to/corbonnabeat" target="_blank" rel="noopener noreferrer">Social Media</NavDropdown.Item>
                    <NavDropdown.Item href="/about">About Corb</NavDropdown.Item>
                    <NavDropdown.Item href="mailto:corbonnabeat@gmail.com">Contact Corb</NavDropdown.Item>


                </NavDropdown>
            </Navbar>
        </div>

    );
}

export default Navigation;
