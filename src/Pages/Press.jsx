import React from "react";
import pr1 from "../Images/1.jpg";
import pr2 from "../Images/2.jpg";
import pr3 from "../Images/3.jpg";
import pr4 from "../Images/4.jpg";
import pr5 from "../Images/5.jpg";
import pr6 from "../Images/6.jpg";
import pr7 from "../Images/7.jpg";
import pr8 from "../Images/8.jpg";
import pr9 from "../Images/9.jpg";
import pr10 from "../Images/10.jpg";
import pr11 from "../Images/11.jpg";
import pr12 from "../Images/12.jpg";
import { Col, Container, Row } from "react-bootstrap";

const Press = () => {
  // Assuming you have an array of photo URLs
  const photos = [
    pr1,
    pr2,
    pr3,
    pr4,
    pr5,
    pr7,
    pr8,
    pr9,
    pr10,
    pr11,
    pr12,
    pr6,
  ];

  return (
    <Container>
      <Row className="mt-3">
        {photos.map((photo, index) => (
          <Col className="p-3" key={index} xs={12} sm={6} md={6} lg={4}>
            <div className="photo-item">
              <img
                src={photo}
                alt=""
                className="img-fluid fixed-image"
                loading="lazy"
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Press;
