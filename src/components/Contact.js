import React, { Component } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from 'mdbreact';


class Contact extends Component {
  render() {
    return (
      <>
      <section id="contact">
        <h1>Contact Page</h1>
          <div className="contact-container">
          <MDBCol>
            <MDBCard className="card-container">
              <MDBCardBody>
                <i className="fas fa-phone contact-icon"></i>
                <MDBCardTitle>PHONE</MDBCardTitle>
                <MDBCardText>
                  (530)737-3198
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="card-container">
              <MDBCardBody>
                <i className="fas fa-at contact-icon"></i>
                <MDBCardTitle>EMAIL</MDBCardTitle>
                <MDBCardText>
                richardtrowdavis@gmail.com
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="card-container">
              <MDBCardBody>
                <i className="fas fa-thumbs-up contact-icon"></i>
                <MDBCardTitle>SOCIAL</MDBCardTitle>
                <div className="social-icon-container">
                  <a href="https://www.facebook.com/richard.trow.davis"><i className="fab fa-facebook social-icon"></i></a>
                  <a href="https://www.linkedin.com/in/richard-t-davis/"><i className="fab fa-linkedin social-icon"></i></a>
                  <a href="#"><i className="fab fa-github-square social-icon"></i></a>
                  <a href="#"><i className="fab fa-medium social-icon"></i></a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </div>
      </section>
      </>
    )
  }
}

export default Contact;
