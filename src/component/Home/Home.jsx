import "./App.css";
import { useContext, useState, useEffect } from 'react';
import logo from './assests/images/logo.png'
import ak_homebanner from './assests/images/ak_banner1.png'
import ak_virtusebanner from './assests/images/ak_virtuse_banner.png'
import ak_getstartedbanner from './assests/images/ak_getstarted_banner.png'
import ak_homeimage1 from './assests/images/ak_image1.png'
import ak_automatedbanner from './assests/images/ak_automated_banner.png'
import ak_bitcoinbanner from './assests/images/ak_bitcoin_banner.png'
import ak_compoundbanner from './assests/images/ak_compound_banner.png'
import ak_devices from './assests/images/ak_devices.png'
import ak_mobile from './assests/images/ak_mobile.png'
import ak_notebook from './assests/images/ak_notebook.png'
import ak_playstore from './assests/images/ak_playstore.png'
import ak_appstore from './assests/images/ak_appstore.png'
import ak_line from './assests/images/ak_line.png'
// Contact 
import ak_contactbanner from './assests/images/ak_contact_banner.png'
import ak_locationicon from './assests/images/ak_location_icon.png'
import ak_footerimage from './assests/images/ak_footer_image.png'
// Learning Center

import ak_learningbanner from './assests/images/ak_learning_banner.png'
import ak_learningbg from './assests/images/ak_virtusenews_bg.png'
import ak_learning1 from './assests/images/ak_learningcard_1.png'
import ak_learning2 from './assests/images/ak_learningcard_2.png'
import ak_learning3 from './assests/images/ak_learningcard_3.png'
import ak_logowhite from './assests/images/logo_white.png'
import ak_aboutbanner from './assests/images/ak_about_banner.png'
import ak_aboutbg from './assests/images/ak_about_bg.png'
import { AccordionContext, useAccordionButton, Accordion, Card } from 'react-bootstrap'

// About
import ak_aboutimage3 from './assests/images/ak_about_image3.png'
import ak_faqbanner from './assests/images/ak_faq_banner.png'
import ak_sliderimg1 from './assests/images/ak_sliderimage_1.png'

// Pricing

import ak_pricingbanner from './assests/images/ak_pricing_banner.png' 
import ak_pricingbg from './assests/images/ak_pricing_bg.png' 

// Home

import virtuse_img1 from "./assests/images/virtuse img1.png"
import virtuse_img2 from "./assests/images/virtuse img2.png"
import virtuse_img3 from "./assests/images/virtuse img3.png"
import automated_invest from "./assests/images/Automated Investing.png"
import started_mob from "./assests/images/started_mob.png"

import ak_homeslider1 from './assests/images/ak_homeslider_1.png';
import ak_homeslider2 from './assests/images/ak_homeslider_2.png';
import ak_homeslider3 from './assests/images/ak_homeslider_3.png';
import ak_homeslider4 from './assests/images/ak_homeslider_4.png';






function Home() {
  
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
 {/* banner */}
 <section className="ak_contact_section">
                <div className="container-fluid ak_contactbanner">
                    <div className="container">
                        <div className="row mx-0">


                        </div>
                    </div>
                </div>
            </section>

            {/* only bitcoin */}
            <section className='home_only_bit_parent'>
                <div className='home_only_bit_text'>
                    <p className='bitcoin_head mb-0 text-center'>The only Bitcoin app you need</p>
                    <p className='bitcoin_para mb-0 text-center'>Virtuse helps new and experienced investors securely accumulate Bitcoin.</p>
                </div>
                <div className='bitcoin_cards'>
                    <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
                        {/* <div className="card-header">Header</div> */}
                        <div className="card-body text-white text-start">
                            <h5 className="card-title">Secure & Protected</h5>
                            <div className='for_border'></div>
                            <p className="card-text">99% of users' funds are kept in a cold storage with the world’s leading licensed custodian guarded by multi-signature technology and a host of other controls. <a href="">Read more »</a></p>
                        </div>
                    </div>
                    <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
                        {/* <div className="card-header">Header</div> */}
                        <div className="card-body text-white text-start">
                            <h5 className="card-title">Fiat Gateway</h5>
                            <div className='for_border'></div>
                            <p className="card-text">You can purchase Bitcoin with EUR on mobile app and web with a EUR deposit from your bank via SWIFT wire or SEPA transfer. We also partnered with Banxa to allow all users to deposit and trade with over 20 other fiat currencies. <a href="">Read more »</a></p>
                        </div>
                    </div>
                    <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
                        {/* <div className="card-header">Header</div> */}
                        <div className="card-body text-white text-start">
                            <h5 className="card-title">DevOps & Cloud Solutions</h5>
                            <div className='for_border'></div>
                            <p className="card-text">Make instant purchases or set up a recurring investment from as little as $50 a month. The Virtuse platform is the easiest way to invest in Bitcoin. <a href="">Read more »</a></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* news */}
            <section className='Virtuse_news'>
                <div className='Virtuse_news_cont'>
                    <p className='Virtuse_head mb-0 text-center'>Virtuse News</p>
                    <p className='Virtuse_para mb-0'>Weekly letter to over 15,000 investors about business, technology and finance.</p>
                </div>
                <div className='Virtuse_cards'>
                    <div className="card2" style={{ width: "17rem" }}>
                        <img src={virtuse_img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text2 text-start">26th October,2019
                                <br /><br />Ignore the Bearish Noise and Invest in Technologies and Bitcoin
                                <br /> <a href="">learn More »</a></p>
                        </div>
                    </div>

                    <div className="card2" style={{ width: "17rem" }}>
                        <img src={virtuse_img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text2 text-start">26th October,2019
                                <br /><br />Ignore the Bearish Noise and Invest in Technologies and Bitcoin
                                <br /> <a href="">learn More »</a></p>
                        </div>
                    </div>

                    <div className="card2" style={{ width: "17rem" }}>
                        <img src={virtuse_img3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text2 text-start">26th October,2019
                                <br /><br />Ignore the Bearish Noise and Invest in Technologies and Bitcoin
                                <br /> <a href="">learn More »</a></p>
                        </div>
                    </div>
                </div>
                <button className='view_all'>View All</button>
            </section>

            {/* stats */}
            <div className='stats'>
                <div className='stats_card mb-2'>
                    <p className='mb-0 count'>100+</p>
                    <p className='mb-0'>countries</p>
                </div>
                <div className='stats_card_blue mb-2'>
                    <p className='mb-0 count'>10m+</p>
                    <p className='mb-0'>AuM</p>
                </div>
                <div className='stats_card3 mb-2'>
                    <p className='mb-0 count'>33K+</p>
                    <p className='mb-0'>registered users</p>
                </div>
            </div>

            {/* Automated Investing */}
            <div className='Automated'>
                <div className="automated_img col-12 col-md-4 col-lg-4">
                    <img className='' src={automated_invest} alt="" />
                </div>
                <div className="col-0 col-md-1 col-lg-1"></div>
                <div className="automated_content col-12 col-md-7 col-lg-7">
                    <p className="automated_head">
                        Automated Investing
                    </p>
                    <p className="automated_para">
                        Dollar-Cost Averaging is by far the smartest way to accumulate wealth. You can purchase automatically using Virtuse's recurring orders. Choose between daily, weekly, or monthly investments.
                    </p>
                    <div className='automated_bullet'>
                        <div className='bullet_border'></div>
                        <div className='bullet_content'>Harness the power “the eighth wonder of the world.”</div>
                    </div>
                    <div className='automated_bullet'>
                        <div className='bullet_border'></div>
                        <div className='bullet_content'>Set aside money to buy Bitcoin automatically</div>
                    </div>
                    <div className='automated_bullet'>
                        <div className='bullet_border'></div>
                        <div className='bullet_content'>Customize your investment schedule</div>
                    </div>
                    <div className='automated_bullet mb-4'>
                        <div className='bullet_border'></div>
                        <div className='bullet_content'>Dollar-Cost Averaging strategy beats 95% of institutional money managers.</div>
                    </div>
                    <p><a href="">learn More »</a></p>
                </div>
            </div>

            {/* getting started */}
            <div className="container get_started">
                <div className="started_content col-12 col-md-8 col-lg-8">
                    <p className="started_head">
                        Get started in 3 minutes
                    </p>
                    <p className="started_para">
                        Dollar-Cost Averaging is by far the smartest way to accumulate wealth. You can purchase automatically using Virtuse’s recurring orders. Choose between daily, weekly, or monthly investments.
                    </p>
                    <div className='start_automated_bullet'>
                        <div className='bullet_border'></div>
                        <div className='bullet_content'>1. <a href="" style={{ textDecoration: "none" }}>Sign up</a> Create your profile and verify your email address.</div>
                    </div>
                    <div className='start_automated_bullet'>
                        <div className='bullet_border'></div>
                        <div className='bullet_content'>2. <a href="" style={{ textDecoration: "none" }}>Fund your wallet</a> Add a deposit to your account using a credit card, bank transfer, stablecoins.</div>
                    </div>
                    <div className='start_automated_bullet'>
                        <div className='bullet_border'></div>
                        <div className='bullet_content'>3. <a href="" style={{ textDecoration: "none" }}>Start investing</a> Make instant purchases or set up an automated investment. It's that easy!</div>
                    </div>
                </div>
                {/* <div className="col-0 col-md-1 col-lg-1"></div> */}
                <div className="col-12 col-md-4 col-lg-4">
                    <img src={started_mob} alt="" />
                </div>
            </div>

            {/* as seen in */}
            <section>
            <div className='as_seen'>

<div className="container">
<h5 className="text-white text-center">As seen in</h5>

    <div className="row mx-0 justify-content-center align-items-center my-5 p-0">

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



            <section className="ak_slider_2">
            <div className=''>

<div className="container my-5">
<h5 className="text-white text-center">You’re in good company</h5>

    <div className="row mx-0 justify-content-center align-items-center p-0 my-5 mb-4">

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
           

           <section>
             <div className="container-fluid   p-0 my-5">
               <div className="row mx-0 ">
                 <h3 className="text-white text-center">Virtuse is available in 100+ countries</h3>
                 <div className="col-lg-12 ak_devices_bg ">

                 </div>
               </div>

             </div>
           </section>







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

export default Home;
