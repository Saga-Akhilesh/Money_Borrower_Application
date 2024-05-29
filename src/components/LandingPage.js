import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div fluid>
        <Container fluid>
          <h1 className="display-3"><center>Money Borrower Application</center></h1>
          <p className="lead"><center>Register or login to get started.</center></p>
          <div className="button-container">
            <Link to="/register">
              <Button color="success" size="lg" className="login-button mr-3">
                Register
              </Button>
            </Link>
            <Link to="/login">
              <Button color="secondary" size="lg" className="login-button">
                Login
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default LandingPage;

