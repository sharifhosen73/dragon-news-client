import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Log In With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Log In With Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h1>Find us on</h1>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaWhatsapp />
            Whatsapp{" "}
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch />
            Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaLinkedin />
            Linkedin
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;
