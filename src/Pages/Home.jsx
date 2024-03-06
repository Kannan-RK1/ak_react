import React, { useEffect, useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import banner_1s from "../Images/b1s.jpg";
import banner_2s from "../Images/b2s.jpg";
import banner_3s from "../Images/b3s.jpg";

import banner_1 from "../Images/b1.jpg";
import banner_2 from "../Images/b2.jpg";
import banner_3 from "../Images/b3.jpg";

import img01 from "../Images/p3.jpg";
import img02 from "../Images/p2.jpg";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from Firestore when the component mounts
    fetchReviews();
  }, []);

  // Function to fetch and set reviews data
  const fetchReviews = async () => {
    const querySnapshot = await getDocs(collection(db, "review"));
    const reviewData = [];
    querySnapshot.forEach((doc) => {
      reviewData.push({ id: doc.id, ...doc.data() });
    });
    setReviews(reviewData);
  };

  // Display only the first 8 reviews
  const displayedReviews = reviews.slice(0, 8);

  return (
    <>
      {/*------------------------------ desktop---------------------------------------- */}
      <section className="d-none d-lg-block">
        <Carousel className="bg-body-tertiary">
          <Carousel.Item>
            <img
              className="d-block w-100 image-fluid"
              src={banner_1s}
              alt="First slide"
              loading="lazy"
            />
            <Carousel.Caption>
              <h3
                style={{
                  textShadow: "2px 2px 40px black",
                }}
              >
                Akshath
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner_2s}
              alt="Second slide"
              loading="lazy"
            />
            <Carousel.Caption>
              <h3
                style={{
                  textShadow: "2px 2px 40px black",
                }}
              >
                Akshath
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner_3s}
              alt="Third slide"
              loading="lazy"
            />
            <Carousel.Caption>
              <h3
                style={{
                  textShadow: "2px 2px 40px black",
                }}
              >
                Akshath
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      {/*------------------------------ mobile and tab---------------------------------------- */}
      <section className="d-sm-block d-md-block d-lg-none">
        <Carousel className="bg-body-tertiary">
          <Carousel.Item>
            <img
              className="d-block w-100 image-fluid"
              src={banner_1}
              alt="First slide"
              loading="lazy"
            />
            <Carousel.Caption>
              <h3
                style={{
                  textShadow: "2px 2px 40px black",
                }}
              >
                Akshath
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner_2}
              alt="Second slide"
              loading="lazy"
            />
            <Carousel.Caption>
              <h3
                style={{
                  textShadow: "2px 2px 40px black",
                }}
              >
                Akshath
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner_3}
              alt="Third slide"
              loading="lazy"
            />
            <Carousel.Caption>
              <h3
                style={{
                  textShadow: "2px 2px 40px black",
                }}
              >
                Akshath
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section>
        <Container>
          <Row className="my-4 pt-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center my-3"
            >
              <div>
                <img src={img01} alt="" className="img-fluid" loading="lazy" />
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center my-3"
            >
              <div>
                <p className="fw-bold">Bharathanatyam Artist</p>
                <p style={{ lineHeight: "28px" }}>
                  Akshath is a vibrant dancer who captivates audience with his
                  energy, enthusiasm and dynamic movements. Born and brought up
                  in the United State of America, Akshath understands the
                  cultural context and respect the traditions associated with
                  Bharathanatyam to make it as an authentic performance.
                </p>
                <div class="py-2">
                  <Link
                    type="button"
                    to="/about#awards"
                    className="btn btn-outline-dark"
                  >
                    Awards
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <svg
        className="curve-container__curve"
        viewBox="10 -20 1870 210"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          className="plain fill-n0"
          fill="#eeeeee"
          d="M977.9,76.2 C475.2,-17.4 0.2,132.5 0.2,132.5 L0.2,275.5 L1891.3,275.5 L1891.3,0.7 C1891.3,0.7 1480.6,169.8 977.9,76.2 Z"
          id="Path"
        />
      </svg>

      <section style={{ backgroundColor: "#eeeeee" }}>
        <Container>
          <Row className="py-4">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center my-3"
            >
              <div>
                <h2>
                  An innate sense of rhythm and an understanding of musical
                  nuances makes his dance more versatile in execution.
                </h2>
                <p style={{ lineHeight: "28px" }}>
                  His confidence, charisma, and the ability to command attention
                  on stage are his major strengths to a captivating performance.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center my-3"
            >
              <div>
                <img src={img02} alt="" className="img-fluid" loading="lazy" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <svg
        className="curve-container__curve"
        viewBox="10 -20 1870 210"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ backgroundColor: "#eeeeee" }}
      >
        <path
          className="plain fill-n0"
          fill="white"
          d="M977.9,76.2 C475.2,-17.4 0.2,132.5 0.2,132.5 L0.2,275.5 L1891.3,275.5 L1891.3,0.7 C1891.3,0.7 1480.6,169.8 977.9,76.2 Z"
          id="Path"
        />
      </svg>

      <section>
        <Container className="py-2 mb-3">
          <h3>Reviews</h3>
          <Row className="">
            {displayedReviews.map((review) => (
              <Col lg={6} key={review._id}>
                <div class="" style={{ height: "110px" }}>
                  <div class="p-1">
                    <h6 class="fw-bold">
                      <i class="fa-solid fa-user pe-2"></i>

                      {review.Name}
                    </h6>
                    <div
                      style={{
                        maxHeight: "70px",
                        overflowY: "auto",
                      }}
                    >
                      <p
                        class=""
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        {review.Review}
                      </p>
                      <style>
                        {`
          /* Change the scrollbar's width, color, and thumb appearance */
          div::-webkit-scrollbar {
            width: 3px; /* Adjust the width as desired */
          }

          div::-webkit-scrollbar-thumb {
            background-color: black; /* Change the thumb color */
            border-radius: 5px; /* Round the thumb edges */
          }

          div::-webkit-scrollbar-track {
            background-color: #f0f0f0; /* Change the track color */
          }
        `}
                      </style>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Link
              type="button"
              to="/reviews"
              className="btn btn-outline-dark my-3"
            >
              Leave Your Review
            </Link>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
