import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";
import LeftSideNav from "./../Pages/Shared/LeftSideNav/LeftSideNav";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftSideNav />
          </Col>
          <Col lg="7">
            <Outlet />
          </Col>
          <Col lg="3">
            <RightSideNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
