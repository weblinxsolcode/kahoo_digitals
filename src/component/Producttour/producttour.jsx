import React from 'react'
import './producttour.css' 
import { useContext, useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import logo from '../../assests/images/logo.png'
import ak_line from '../../assests/images/ak_line.png'

import ak_homeimage1 from '../../assests/images/ak_product_image1.png'

import ak_homeslider1 from '../../assests/images/ak_homeslider_1.png';
import ak_homeslider2 from '../../assests/images/ak_homeslider_2.png';
import ak_homeslider3 from '../../assests/images/ak_homeslider_3.png';
import ak_homeslider4 from '../../assests/images/ak_homeslider_4.png';

import virtuse_img1 from "../../assests/images/virtuse img1.png"
import virtuse_img2 from "../../assests/images/virtuse img2.png"
import virtuse_img3 from "../../assests/images/virtuse img3.png"


import  ak_homeimage2 from "../../assests/images/ak_product_image2.png"

import { AccordionContext, useAccordionButton, Accordion, Card } from 'react-bootstrap'





const Producttour = () => {
  function ContextAwareToggle({ children, eventKey, callback }) {


    const { activeEventKey } = 
    useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <button
        type="button"
        onClick={decoratedOnClick}
        className="acc-toggler"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        {isCurrentEventKey ? <i class="fas fa-minus" style={{ marginRight: "25px", color: "#148dea" }}></i> : <i class="fas fa-plus" style={{ marginRight: "25px", color: "white" }}></i>}
      </button>
    );
  }
  return (
    <div className="ak_product">
      <header className="header-wrapper my-0">
        <nav class="navbar navbar-expand-lg ">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img className="ak_brandlogo img-fluid" src={logo} alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span class="navbar-toggler-icon"></span> */}
              <i className="navbar-toggler-icon fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 py-0">
                <li class="nav-item">
                  <Link to="/Home">
                    <a class="nav-link " aria-current="page" href="#">
                      Home
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/product-tour">
                    <a class="nav-link " href="#">
                      Product tour
                    </a>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/Pricing">
                    <a class="nav-link" href="#">
                      Pricing
                    </a>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/About">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/LearningCenter">
                    <a class="nav-link" href="#">
                      Learning center
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Contact">
                    <a class="nav-link" href="#">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
              <form class="d-flex justify-content-center align-items-center">
                <button class=" btn-custom-1" type="submit">
                  <a href="">Get Started</a>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <section className="ak_product_section">
        <div className="container-fluid ak_productbanner">
          <div className="container">
            <div className="row mx-0 justify-content-center align-items-center"></div>
          </div>
        </div>
      </section>

      <section className="home_only_bit_parent my-5">
        <div className="home_only_bit_text ">
          <img src={ak_line} alt="" />

          <p className="bitcoin_head mb-0 text-center">
            The only Bitcoin app you need
          </p>
          <p className="bitcoin_para mb-0 text-center">
            Virtuse helps new and experienced investors securely accumulate
            Bitcoin.
          </p>
        </div>
        <div className="bitcoin_cards">
          <div
            className="pd_akcard border-primary mb-3"
            style={{ maxWidth: "18rem" }}
          >
            {/* <div className="card-header">Header</div> */}
            <div className="card-body text-white text-start">
              <h5 className="card-title">Secure & Protected</h5>
              <div className="for_border"></div>
              <p className="card-text">
                99% of users' funds are kept in a cold storage with the world’s
                leading licensed custodian guarded by multi-signature technology
                and a host of other controls. <a href="">Read more »</a>
              </p>
            </div>
          </div>
          <div
            className="pd_akcard border-primary mb-3"
            style={{ maxWidth: "18rem" }}
          >
            {/* <div className="card-header">Header</div> */}
            <div className="card-body text-white text-start">
              <h5 className="card-title">Fiat Gateway</h5>
              <div className="for_border"></div>
              <p className="card-text">
                You can purchase Bitcoin with EUR on mobile app and web with a
                EUR deposit from your bank via SWIFT wire or SEPA transfer. We
                also partnered with Banxa to allow all users to deposit and
                trade with over 20 other fiat currencies.{" "}
                <a href="">Read more »</a>
              </p>
            </div>
          </div>
          <div
            className="pd_akcard border-primary mb-3"
            style={{ maxWidth: "18rem" }}
          >
            {/* <div className="card-header">Header</div> */}
            <div className="card-body text-white text-start">
              <h5 className="card-title">DevOps & Cloud Solutions</h5>
              <div className="for_border"></div>
              <p className="card-text">
                Make instant purchases or set up a recurring investment from as
                little as $50 a month. The Virtuse platform is the easiest way
                to invest in Bitcoin. <a href="">Read more »</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-center align-items-center flex-column ak_invest_now">
        <img src={ak_line} alt="" />

        <div className="Automated">
          <div className="automated_img col-12 col-md-4 col-lg-4 my-5">
            <img className="" src={ak_homeimage1} alt="" />
          </div>
          <div className="col-0 col-md-1 col-lg-1"></div>
          <div className="automated_content col-12 col-md-7 col-lg-7">
            <div className="d-flex justify-content-start align-items-start">
              <p className="ease  ">Invest with ease</p>
              <p className=" ms-4">Invest with ease</p>
            </div>
            <p className="automated_head">Invest with ease</p>
            <p className="automated_para">
              Make your first crypto purchase in under 5 minutes, from as little
              as $50, all from the palm of your hand. No other product comes
              close.
            </p>
            <div className="automated_bullet">
              <div className="bullet_border"></div>
              <div className="bullet_content">Instant Buy. Instant Sell. </div>
            </div>
            <div className="automated_bullet">
              <div className="bullet_border"></div>
              <div className="bullet_content">
                Automated recurring purchases
              </div>
            </div>
            <div className="automated_bullet">
              <div className="bullet_border"></div>
              <div className="bullet_content">
                Credit Card and SEPA payments{" "}
              </div>
            </div>
            <div className="automated_bullet mb-4">
              <div className="bullet_border"></div>
              <div className="bullet_content">Accumulate real wealth.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="ak_slider_2">
        <div className="">
          <div className="container my-5">
            <h5 className="text-white text-center">You’re in good company</h5>

            <div className="row mx-0 justify-content-center align-items-center p-0 my-5 mb-4 ak_home_seen2">
              <div className="col-lg-3 d-flex justify-content-center align-items-center p-0">
                <img src={ak_homeslider1} alt="" />
              </div>
              <div className="col-lg-3 d-flex justify-content-center align-items-center p-0">
                <img src={ak_homeslider2} alt="" />
              </div>
              <div className="col-lg-3 d-flex justify-content-center align-items-center p-0">
                <img src={ak_homeslider3} alt="" />
              </div>
              <div className="col-lg-3 d-flex justify-content-center align-items-center p-0">
                <img src={ak_homeslider4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Virtuse_news">
        <div className="Virtuse_news_cont ">
          <img src={ak_line} alt="" />

          <p className="Virtuse_head mb-0 text-center">Virtuse News</p>
          <p className="Virtuse_para mb-0 text-center ">
            Weekly letter to over 15,000 investors about business, technology
            and finance.
          </p>
        </div>
        <div className="Virtuse_cards">
          <div className="card2" style={{ width: "17rem" }}>
            <img src={virtuse_img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text2 text-start">
                26th October,2019
                <br />
                <br />
                Ignore the Bearish Noise and Invest in Technologies and Bitcoin
                <br /> <a href="">learn More »</a>
              </p>
            </div>
          </div>

          <div className="card2" style={{ width: "17rem" }}>
            <img src={virtuse_img2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text2 text-start">
                26th October,2019
                <br />
                <br />
                Ignore the Bearish Noise and Invest in Technologies and Bitcoin
                <br /> <a href="">learn More »</a>
              </p>
            </div>
          </div>

          <div className="card2" style={{ width: "17rem" }}>
            <img src={virtuse_img3} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text2 text-start">
                26th October,2019
                <br />
                <br />
                Ignore the Bearish Noise and Invest in Technologies and Bitcoin
                <br /> <a href="">learn More »</a>
              </p>
            </div>
          </div>
        </div>
        <button className="view_all">View All</button>
      </section>

      <section className="ak_share_send d-flex justify-content-center align-items-center flex-column my-5">
        <div className="Automated">
          <div className="col-0 col-md-1 col-lg-1"></div>
          <div className="automated_content col-12 col-md-7 col-lg-7 ">
            <p className="automated_head ">Share and send</p>
            <p className="automated_para">
              Want to self-custody by sending your bitcoin to a wallet you own?
              No problem. Buy your own Ledger Nano here and take control of your
              Bitcoin anytime.
            </p>
            <div className="automated_bullet">
              <div className="bullet_border"></div>
              <div className="bullet_content">
                Send crypto to any crypto wallet.{" "}
              </div>
            </div>
            <div className="automated_bullet">
              <div className="bullet_border"></div>
              <div className="bullet_content">
                Multi-sig transactions batched daily.
              </div>
            </div>
            <div className="automated_bullet">
              <div className="bullet_border"></div>
              <div className="bullet_content">
                Scan QR or Copy/Paste addresses{" "}
              </div>
            </div>
            <div className="automated_bullet mb-4">
              <div className="bullet_border"></div>
              <div className="bullet_content">
                Not your keys, not your coins approved
              </div>
            </div>
          </div>
          <div className="automated_img col-12 col-md-4 col-lg-4 my-5">
            <img className="" src={ak_homeimage2} alt="" />
          </div>
        </div>
      </section>

      <div className="contianer my-5 pt-5">
        <div className="row mx-0 justify-content-center align-items-center">
          <div className="col-lg-12 text-center">
            <img src={ak_line} alt="" />
            <h3 className="ak_text-custom_about1 my-2">
              Frequently Asked Questions
            </h3>
          </div>
        </div>
      </div>

      <section className="container d-flex justify-content-center align-items-center my-5">
        <Accordion className="w-75">
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="4">+</ContextAwareToggle>
              <div className="mb-0">Lorem Ipsum Dollar</div>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="ans">
                {" "}
                <span className="ps-lg-5 ps-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                </span>{" "}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="5">+</ContextAwareToggle>
              <div className="mb-0">Lorem Ipsum Dollar</div>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body className="ans">
                {" "}
                <span className="ps-lg-5 ps-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                </span>{" "}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="6">+</ContextAwareToggle>
              <div className="mb-0">Lorem Ipsum Dollar</div>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body className="ans">
                {" "}
                <span className="ps-lg-5 ps-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                </span>{" "}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </section>
      <div className="container-fluid ak_faq_bannner1"></div>

      <section className="ak_contactus_2">
        <div className="conatiner-fluid ak_contactbanner2">
          <div className="container">
            <div className="row mx-0 ak_contact2_content">
              <div className="col-lg-6 ">
                <h1 className="ak_contactbanner2_text">
                  Lorem ipsum dolor sit amet, consetetur.
                </h1>
                <button className="btn btn_contact3  ">
                  <a href="">
                    Contact us now <i class="fas fa-long-arrow-right"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="container ak_footer_top  ">
            <div className="row mx-0 justify-content-center">
              <div className="col-lg-1 ak_footer_top_logo">
                <img className="img-fluid" src={logo} alt="" />
              </div>
              <div className="col-lg-4 text-white my-2 ak_footer_top_logo ">
                <p className="ak_footer_toptext">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy tempor invidunt ut labore.
                </p>
              </div>
              <div className="col-lg-7"></div>
            </div>
          </div>
        </div>
      </section>

      <footer class="text-center text-lg-start text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 "></section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4 text-white border-bottom ">
                  Subscribe Now
                </h6>
                <p className="text-white">
                  subscribe to{" "}
                  <span className="fw-bolder border-bottom"> virtuse</span> our
                  monthly look
                </p>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Email address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <span
                      class="input-group-text btn btn_footer my-2"
                      id="basic-addon2"
                    >
                      {" "}
                      <a href="">Subscribe</a>
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                <h6 class="text-uppercase fw-bold mb-4 border-bottom">
                  QUICK LINK
                </h6>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> Abouts us
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> News
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> Buy Crypto
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> FAQ
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> E-shop
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> Token Listing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> Glossary
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                <h6 class="text-uppercase fw-bold mb-4 border-bottom">
                  MARKET DATA
                </h6>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> Markets
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> CoinMarketCap
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> Cryptowisser
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> Fees
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> API
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">
                <h6 class="text-uppercase fw-bold mb-4 border-bottom">
                  Terms & Conditions
                </h6>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> Terms and Conditions
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> AML Cirtificate
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> AMLD5
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    <i className="fas fa-angle-right"></i> Design Manual
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid ak_footer_foot">
          <div className="row mx-0">
            <div className="col-lg-6">
              <div class="text-start p-4 text-white ak_footer_text1 ">
                2021 virtuse. All rights reserved.
              </div>
            </div>
            <div className="col-lg-6 ">
              <div class="text-end p-4 ak_footer_text1   text-white">
                Privacy Policy <span> │ </span> Cookie Policy
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Producttour