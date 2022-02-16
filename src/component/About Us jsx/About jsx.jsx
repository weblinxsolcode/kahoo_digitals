import "./About jsx.css";
import { useContext, useState, useEffect } from 'react';
import logo from '../../assests/images/logo.png'
// import ak_homebanner from '../../assests/images/ak_banner1.png'
import ak_virtusebanner from '../../assests/images/ak_virtuse_banner.png'
// import ak_getstartedbanner from '../../assests/images/ak_getstarted_banner.png'
import ak_homeimage1 from '../../assests/images/ak_image1.png'
import ak_automatedbanner from '../../assests/images/ak_automated_banner.png'
import ak_bitcoinbanner from '../../assests/images/ak_bitcoin_banner.png'
import ak_compoundbanner from '../../assests/images/ak_compound_banner.png'
import ak_devices from '../../assests/images/ak_devices.png'
import ak_mobile from '../../assests/images/ak_mobile.png'
import ak_notebook from '../../assests/images/ak_notebook.png'
import ak_playstore from '../../assests/images/ak_playstore.png'
import ak_appstore from '../../assests/images/ak_appstore.png'
import ak_line from '../../assests/images/ak_line.png'
// Contact 
import ak_contactbanner from '../../assests/images/ak_contact_banner.png'
import ak_locationicon from '../../assests/images/ak_location_icon.png'
import ak_footerimage from '../../assests/images/ak_footer_image.png'
// Learning Center

import ak_learningbanner from '../../assests/images/ak_learning_banner.png'
// import ak_learningbg from '../../assests/images/ak_virtusenews_bg.png'
import ak_learning1 from '../../assests/images/ak_learningcard_1.png'
import ak_learning2 from '../../assests/images/ak_learningcard_2.png'
import ak_learning3 from '../../assests/images/ak_learningcard_3.png'
import ak_logowhite from '../../assests/images/logo_white.png'
// import ak_aboutbg from '../../assests/images/ak_about_bg.png'
import { AccordionContext, useAccordionButton, Accordion, Card } from 'react-bootstrap'

// About
import ak_aboutimage3 from '../../assests/images/ak_about_image3.png'
// import ak_faqbanner from '../../assests/images/ak_faq_banner.png'
import ak_sliderimg1 from '../../assests/images/ak_sliderimage_1.png'





function About() {
  
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
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Product tour
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Learning center
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn btn-custom-1" type="submit">
                  <a href="">Get Started</a>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <section className="ak_learning_section">
        <div className="container-fluid ak_aboutusbanner">
          <div className="container">
            <div className="row mx-0">


            </div>
          </div>
        </div>
      </section>

<section className="ak_learning_content">
  <div className="container-fluid ak_aboutus_bg">
  <div className="container w-75">
    <div className="row mx-0 justify-content-center align-items-center">
      <div className="col-lg-12 text-center my-5">
        <img src={ak_line} alt="" />
        <h3 className="ak_text-custom_about1">ABOUT US</h3>
        <p className="ak_text-custom_about2  ">Virtuse is Europe’s leading Bitcoin-centric platform and app. The platform is the easiest way to invest and accumulate Bitcoin. Users can deposit and trade Bitcoin with a EUR and set up a recurring investment from as little as 5€ a month. They can also exchange over 20 fiat currencies for cryptocurrency with debit and credit cards, seamlessly connecting the world of Bitcoin and traditional finance.</p>
        <p className="ak_text-custom_about2">Virtuse has a strong commitment to security and compliance. 99% of users’ funds are kept in a cold storage with the world’s leading licensed custodian guarded by multi-signature technology and a host of other controls. The company is registered in the EU commercial registry as a licensed virtual currency exchange and wallet service. And through the partnership with the market leader in online verification and KYC/AML Virtuse adheres to the strictest KYC and AML global compliance standards.</p>

      </div>
    </div>
  </div>

  </div>
  
 



  </section>


<section className="ak_aboutbanner2 my-5">
 <div className="container-fluid ak_about_banner2 p-0">
   
 <div className='stats text-center my-5'>
 <div className="row mx-0">
     <div className="col-lg-4 my-3">
     <div className='stats_card mb-2 '>
                    <p className='mb-0 count'>100+</p>
                    <p className='mb-0'>countries</p>
                </div>
     </div>
     <div className="col-lg-4 my-3">
     <div className='stats_card_blue mb-2'>
                    <p className='mb-0 count'>10m+</p>
                    <p className='mb-0'>AuM</p>
                </div>
   </div>
   <div className="col-lg-4 my-3">
   <div className='stats_card3 mb-2'>
                    <p className='mb-0 count'>33K+</p>
                    <p className='mb-0'>registered users</p>
                </div>
            </div>
   </div>
                
       </div>         
              
   
 </div>
</section>


<section>
  <div className="container">
    <div className="row mx-0 justify-content-center align-items-center">
    <div className="col-lg-6 my-5 ak_about_image2">
      
      <img className="w-100" src={ak_aboutimage3} alt="" />

    </div>
<div className="col-lg-6 my-5  " >
  <h2 className="text-white">The meaning of “Virtuse”</h2>
  <p className="ak_about_textp">The true meaning of the term virtuse was coined at the beginning of the 16th century by Niccolo Machiavelli, an Italian diplomat, politician, and philosopher. According to Machiavelli, virtù is a governing principle of success. He used virtù not as a moral virtue, but as strength, power, control, and the ability to compel objective reality to obey your will. That’s what Bitcoin represents. It gives everyone power and control without considering what others are trying to impose on us. </p>

</div>
    </div>
 
  </div>
</section>

<div className="contianer my-5">
<div className="row mx-0 justify-content-center align-items-center">
    <div className="col-lg-12 text-center">
    <img src={ak_line} alt="" />
        <h3 className="ak_text-custom_about1 my-2" >Our team</h3>
    </div>
  </div>


</div>
<div class='container ak_slider_1 mx-auto mt-5 col-md-10 mt-100'>
   
    <div class="row justify-content-center pb-5">
        <div class="card cardak  col-md-3 mt-100">
            <div class="card-content">
                <div class="card-body card-bodyak p-0">
                    <div class="profile"> <img src={ak_sliderimg1}/> </div>
                    <div class="card-title mt-4">
                      <h5 className="ak_slider_text">John Dao</h5>
                      <h6 className="ak_slider_text2">CEO Abc</h6>
                    </div>
                    <div class="card-subtitle d-flex justify-content-center align-items-center   my-4">
                        <p class="ak_slider_text3"> " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. " </p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>                            






<div className="contianer my-5 pt-5">
<div className="row mx-0 justify-content-center align-items-center">
    <div className="col-lg-12 text-center">
    <img src={ak_line} alt="" />
        <h3 className="ak_text-custom_about1 my-2" >Frequently Asked Questions</h3>
    </div>
  </div>
</div>

<section className="container d-flex justify-content-center align-items-center my-5" >
 
<Accordion className='w-75'>
      
         
     
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="4">+</ContextAwareToggle>
              <div className="mb-0">Lorem Ipsum Dollar</div>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="ans"> <span className="ps-lg-5 ps-0" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no</span> </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="5">+</ContextAwareToggle>
              <div className="mb-0">Lorem Ipsum Dollar</div>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body className="ans"> <span className="ps-lg-5 ps-0" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no</span> </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="6">+</ContextAwareToggle>
              <div className="mb-0">Lorem Ipsum Dollar</div>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body className="ans"> <span className="ps-lg-5 ps-0" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no</span> </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </section>
      <div className="container-fluid ak_faq_bannner1">

      </div>






  <section className="ak_contactus_2">
        <div className="conatiner-fluid ak_contactbanner2">
          <div className="container">
            <div className="row mx-0 ak_contact2_content">
              <div className="col-lg-6 ">
                <h1 className="ak_contactbanner2_text">Lorem ipsum dolor sit amet, consetetur.</h1>
                <button className="btn btn_contact3  "><a href="">Contact us now <i class="fas fa-long-arrow-right"></i></a></button>
              </div>
              
            </div>
          </div>
          <div className="container ak_footer_top  ">
            <div className="row mx-0 justify-content-center" >
              <div className="col-lg-1 ak_footer_top_logo">
                <img  className="img-fluid" src={logo} alt="" />
                
              </div>
              <div className="col-lg-4 text-white my-2 ak_footer_top_logo " >
              <p className="ak_footer_toptext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy tempor invidunt ut labore.</p>
              </div>
              <div className="col-lg-7"></div>
            </div>
          </div>
        </div>

      </section>
  <footer class="text-center text-lg-start text-muted">
 

 <section
   class="d-flex justify-content-center justify-content-lg-between p-4 "
 >
 

 
 </section>



 <section class="">
   <div class="container text-center text-md-start mt-5">
  
     <div class="row mt-3">
  
       <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

         <h6 class="text-uppercase fw-bold mb-4 text-white border-bottom ">
         Subscribe Now
         </h6>
         <p className="text-white">
         subscribe to <span className="fw-bolder border-bottom" > virtuse</span>  our monthly look
         </p>
         <div class="input-group mb-3">
 <input type="text" class="form-control" placeholder="Your Email address" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
 <div class="input-group-append">
   <span class="input-group-text btn btn_footer my-2" id="basic-addon2"> <a href="">Subscribe</a></span>
 </div>
</div>
       </div>
  

  
       <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
   
         <h6 class="text-uppercase fw-bold mb-4 border-bottom" >
         QUICK LINK
         </h6>
         <p>
           <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> Abouts us</a>
         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> News</a>
         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> Buy Crypto</a>
         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> FAQ</a>
         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> E-shop</a>
         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> Token Listing</a>
         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> Glossary</a>
         </p>
       </div>


   
       <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
   
         <h6 class="text-uppercase fw-bold mb-4 border-bottom">
         MARKET DATA
         </h6>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> Markets</a>

         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> CoinMarketCap</a>

         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> Cryptowisser</a>

         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> Pricing</a>

         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> Fees</a>

         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> API</a>

         </p>
       </div>
      

       
       <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">
        
         <h6 class="text-uppercase fw-bold mb-4 border-bottom">
           Terms & Conditions
         </h6>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> Privacy Policy</a>

         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> Terms and Conditions</a>

         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> AML Cirtificate</a>

         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> AMLD5</a>

         </p>
         <p>
         <a href="#!" class="text-reset"><i className="fas fa-angle-right"></i> Design Manual</a>

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

export default About;
