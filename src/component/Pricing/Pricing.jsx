import "./Pricing.css";
import { useContext, useState, useEffect } from 'react';
import logo from '../../assests/images/logo.png'
import ak_homebanner from '../../assests/images/ak_banner1.png'
import ak_virtusebanner from '../../assests/images/ak_virtuse_banner.png'
import ak_getstartedbanner from '../../assests/images/ak_getstarted_banner.png'
import ak_homeimage1 from '../../assests/images/ak_image1.png'
import ak_automatedbanner from '../../assests/images/ak_automated_banner.png'
import ak_bitcoinbanner from '../../assests/images/ak_bitcoin_banner.png'
import ak_compoundbanner from '../../assests/images/ak_compound_banner.png'
import ak_devices from '../../assests/images/ak_devices.png'
import ak_mobile from '../../assests/images/ak_mobile.png'
import ak_notebook from '../../assests/images/ak_notebook.png'

import ak_line from '../../assests/images/ak_line.png'
// Contact 
import ak_contactbanner from '../../assests/images/ak_contact_banner.png'
import ak_locationicon from '../../assests/images/ak_location_icon.png'
import ak_footerimage from '../../assests/images/ak_footer_image.png'
// Learning Center

import ak_learningbanner from '../../assests/images/ak_learning_banner.png'
import ak_learningbg from '../../assests/images/ak_virtusenews_bg.png'
import ak_learning1 from '../../assests/images/ak_learningcard_1.png'
import ak_learning2 from '../../assests/images/ak_learningcard_2.png'
import ak_learning3 from '../../assests/images/ak_learningcard_3.png'
import ak_logowhite from '../../assests/images/logo_white.png'
import ak_aboutbanner from '../../assests/images/ak_about_banner.png'
import ak_aboutbg from '../../assests/images/ak_about_bg.png'
import { AccordionContext, useAccordionButton, Accordion, Card } from 'react-bootstrap'

// About
import ak_aboutimage3 from '../../assests/images/ak_about_image3.png'
import ak_faqbanner from '../../assests/images/ak_faq_banner.png'
import ak_sliderimg1 from '../../assests/images/ak_sliderimage_1.png'

// Pricing

import ak_pricingbanner from '../../assests/images/ak_pricing_banner.png' 
import ak_pricingbg from '../../assests/images/ak_pricing_bg.png' 
import { Link } from "react-router-dom";





function App() {
  
  function ContextAwareToggle({ children, eventKey, callback }) {


    const { activeEventKey } = useContext(AccordionContext);

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
    <div className="App">
      <header className="header-wrapper ">
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
                    <a class="nav-link" href="#">
                      Product tour
                    </a>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/Pricing">
                    <a class="nav-link " href="#">
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
                    <a class="nav-link " href="#">
                      Learning center
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Contact">
                    <a class="nav-link " href="#">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
              <form class="d-flex justify-content-center align-items-center">
                <button class=" btn-custom-1 " type="submit">
                  <a href="">Get Started</a>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <section className="ak_pricing_section">
        <div className="container-fluid ak_pricingbanner">
          <div className="container">
            <div className="row mx-0 justify-content-center align-items-center"></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid ak_pricingbg ">
          <div className="container">
            <div className="row mx-0 justify-content-center align-items-center pt-5 ">
              <div className="col-lg-12 text-center">
                <img src={ak_line} alt="" />
                <h4 className="text-white pt-3">
                  Bitcoin accessible to everyone
                </h4>
                <p className="ak_pricing_text1">
                  Virtuse Premium and Wealth services help you supercharge your
                  Bitcoin accumulation.
                </p>
              </div>
            </div>
            <div className="row  mx-0 text-center justify-content-center align-items-center">
              <div className="col-lg-6 px-5 my-3">
                <div class=" ak_pricing_premium">
                  <div class="card-body">
                    <h4 class="card-title ak_premium_text1">Virtuse Premium</h4>
                    <h6 class="card-subtitle mb-2 ak_premium_text2">0.15%</h6>
                    <h3 className="ak_premium_text3">from 5€</h3>
                    <p class="card-text ak_premium_text4">
                      With Virtuse Premium enjoy this suite of features and
                      benefits.
                    </p>
                    <div className="d-flex justify-content-center ">
                      <div className="border-bottom1 "></div>
                    </div>
                    <h6 className="ak_premium_text5 ">Features</h6>
                    <div className="pt-4">
                      <h6 className="ak_premium_text6">
                        VEX Basic and VEX Pro platforms
                      </h6>
                      <h6 className="ak_premium_text6">0.15% Fees</h6>
                      <h6 className="ak_premium_text6">Instant Buy/Sell</h6>
                      <h6 className="ak_premium_text6">Recurring Orders</h6>
                      <h6 className="ak_premium_text6">EUR Withdrawals</h6>
                      <h6 className="ak_premium_text6">Tighter spreads</h6>
                      <h6 className="ak_premium_text6">Virtuse News</h6>
                      <h6 className="ak_premium_text6">Virtuse Report</h6>
                      <h6 className="ak_premium_text6">Premium Support</h6>
                    </div>
                  </div>
                  <div className="pt-5 pb-4">
                    <button className="btn btn_pricing1">
                      <a href="">START INVESTING</a>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 px-5 my-3">
                <div class="ak_pricing_premium2 ">
                  <div class="card-body">
                    <h4 class="card-title ak_premium_text1">Virtuse Wealth</h4>
                    {/* <h6 class="card-subtitle mb-2 ak_premium_text2">0.15%</h6> */}
                    <h3 className="ak_premium_text3">performance</h3>
                    <h3 className="ak_premium_text3_1">fee</h3>
                    <p class="card-text ak_premium_text4">
                      Virtuse Wealth helps clients with over 0.5 Bitcoin in AuM
                      to actively manage their digital assets.
                    </p>
                    <div className="d-flex justify-content-center ">
                      <div className="border-bottom1 "></div>
                    </div>
                    <h6 className="ak_premium_text5 ">Features</h6>
                    <div className="pt-4 text-white">
                      <h6 className="ak_premium_text7">
                        VEX Basic and VEX Pro platforms
                      </h6>
                      <h6 className="ak_premium_text7">0.15% Fees</h6>
                      <h6 className="ak_premium_text7">Instant Buy/Sell</h6>
                      <h6 className="ak_premium_text7">Recurring Orders</h6>
                      <h6 className="ak_premium_text7">EUR Withdrawals</h6>
                      <h6 className="ak_premium_text7">Tighter spreads</h6>
                      <h6 className="ak_premium_text7">Virtuse News</h6>
                      <h6 className="ak_premium_text7">Virtuse Report</h6>
                      <h6 className="ak_premium_text7">Premium Support</h6>
                    </div>
                  </div>
                  <div className="pt-5 pb-4">
                    <button className="btn btn_pricing2">
                      <a href="">SCHEDULE A CALL</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ak_pricing_table">
        <div className="container ">
          <div className="row mx-0 justify-content-center align-items-center">
            <div className="col-lg-12 ">
              <h1 className="text-white ak_pricing_head">Pricing</h1>
              <table class="table table-striped my-5">
                <thead className="ak_table_p">
                  <tr className="ak_th">
                    <th c>Lorem ipsum</th>
                    <th>Lorem ipsum</th>
                    <th>Lorem ipsum</th>
                  </tr>
                </thead>
                <tbody className="ak_table_p">
                  <tr className="">
                    <th scope="row">Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                  <tr className="ak_tr1">
                    <th className="ak_tr2" scope="row">
                      Lorem ipsum
                    </th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                  <tr>
                    <th scope="row">Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mx-0 justify-content-center my-5 align-items-center">
            <div className="col-lg-12">
              <h1 className="text-white">Recurring Purchases</h1>
              <table class="table table-striped my-4">
                <thead className="ak_table_p">
                  <tr className="ak_th">
                    <th c>Lorem ipsum</th>
                    <th>Lorem ipsum</th>
                    <th>Lorem ipsum</th>
                  </tr>
                </thead>
                <tbody className="ak_table_p">
                  <tr className="">
                    <th scope="row">Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                  <tr className="ak_tr1">
                    <th scope="row">Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                  <tr>
                    <th scope="row">Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mx-0 justify-content-center my-5 align-items-center">
            <div className="col-lg-12">
              <h1 className="text-white">Trading</h1>
              <table class="table table-striped my-4">
                <thead className="ak_table_p">
                  <tr className="ak_th">
                    <th c>Lorem ipsum</th>
                    <th>Lorem ipsum</th>
                    <th>Lorem ipsum</th>
                  </tr>
                </thead>
                <tbody className="ak_table_p">
                  <tr className="">
                    <th scope="row">Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                  <tr className="ak_tr1">
                    <th scope="row">Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                  <tr>
                    <th scope="row">Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mx-0 justify-content-center my-5 align-items-center">
            <div className="col-lg-12">
              <h1 className="text-white">Funding Options</h1>
              <table class="table table-striped my-4">
                <thead className="ak_table_p">
                  <tr className="ak_th">
                    <th c>Lorem ipsum</th>
                    <th>Lorem ipsum</th>
                    <th>Lorem ipsum</th>
                  </tr>
                </thead>
                <tbody className="ak_table_p">
                  <tr className="">
                    <th scope="row">Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                  <tr className="ak_tr1">
                    <th scope="row">Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                  <tr>
                    <th scope="row">Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                </tbody>
              </table>
            </div>
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

      <section className="container d-flex justify-content-start align-items-center my-5">
        <Accordion className="w-100">
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="0">+</ContextAwareToggle>
              <div className="mb-0">*What is the purpose of this project?</div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="ans">
                {" "}
                <span className="ps-lg-5 ps-0 ms-0">
                  The purpose of this project is to LEGALIZE MARIJUANA so that
                  we can all get HIGH ASF…. KIDDING! Actually, the main goal of
                  this project is to spread awareness, donate to help legally
                  study the medical benefits of weed, and make it where we can
                  all make money together! As many of you know CBD helps with
                  anxiety and depression and has even shown links to help fight
                  cancer and Alzheimer's. The project is going to contribute to
                  research in the medical marijauana industry, which could
                  change the future of medicine and hopefully make this whole
                  community money along the way!
                </span>{" "}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="1">+</ContextAwareToggle>
              <div className="mb-0">How Many Chronic Crocs are there?</div>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="ans">
                {" "}
                <span className="ps-lg-5 ps-0">
                  The Cannabis club will first be open to 1,000 unique NFT’s.
                  Ownership of these NFT’s will always be found on the ethereum
                  network and once you own it, it is yours and only yours! Once
                  50% are sold we will start to unfold the other 9 collections
                  for a total of 10,000 unique NFTS!
                </span>{" "}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="2">+</ContextAwareToggle>
              <div className="mb-0">Why are there only 1,000 Crocs?</div>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="ans">
                {" "}
                <span className="ps-lg-5 ps-0">
                  The Chronic Crocs are not for profit and we want to show you
                  that! The purpose is to build a community, donate for a common
                  cause, and also create a kick ass awesome location where like
                  minded people can chill, talk, and just overall vibe with each
                  other. We will create 9 other collections for a total of
                  10,000 original members as our community grows!
                </span>{" "}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="3">+</ContextAwareToggle>
              <div className="mb-0">Who is the team behind Chronic Crocs?</div>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="ans">
                {" "}
                <span className="ps-lg-5 ps-0">
                  The main team behind Chronic Crocs is a group of five skilled
                  collaborators who all bond over the love of Mary Jane and the
                  culture that comes with it. We have two graphic artists, one
                  developer, a marketing manager, and a head of operations.
                </span>{" "}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="4">+</ContextAwareToggle>
              <div className="mb-0">Can I trade or sell my Chronic Crocs?</div>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="ans">
                {" "}
                <span className="ps-lg-5 ps-0">
                  TAbsolutely! This is your Croc and you can sell it or trade it
                  on an open marketplace like Open Sea.
                </span>{" "}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="5">+</ContextAwareToggle>
              <div className="mb-0">
                Will you be able to breed/mutate the Crocs?
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body className="ans">
                {" "}
                <span className="ps-lg-5 ps-0">
                  Yes!! That is the benefit of having 10 total collections to
                  mix and match. This is part of our future plan and since the
                  Crocs are a DAO, you will actually get to help us finalize
                  this plan and let us know exactly what you want!
                </span>{" "}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="6">+</ContextAwareToggle>
              <div className="mb-0">Is this a Metaverse Project?</div>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body className="ans">
                {" "}
                <span className="ps-lg-5 ps-0">
                  You bet your ass it is! The Chronic Crocs Cannabis Club will
                  be a metaverse where you can build your own smoke spot, buy
                  and sell real estate, art, cannabis or really anything you can
                  create! It will be a completely hyper realistic, finite amount
                  of land, where the members can build spots to enjoy while
                  smoking in virtual reality. Oh you live in middle America? Go
                  enjoy a joint on the beach while you are chilling with your
                  friends who live in Tokyo! Just spent 1500 hours building the
                  most insane smoke spot ever? Now you can even sell it to other
                  members! There will be areas to paint, shows to watch, and
                  even Bob Marley concerts to watch high as tits! All bought and
                  sold using the Chronic Crocs Cannabis Coin. This will be a
                  complete metaverse project 100% run by its members. A DAO
                  Cannabis Utopia.
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

export default App;
