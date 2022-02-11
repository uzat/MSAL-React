import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";

export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">MSAL React Demo</a>
                { isAuthenticated ? <span>Signed In</span> : <SignInButton /> }
            </Navbar>
            <h5><center>Welcome to the Microsoft Authentication Library for React</center></h5>
            <br />
            <br />
            {props.children}
        </>
    );
};