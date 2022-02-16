import "./Learning Center.css";
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
import ak_playstore from '../../assests/images/ak_playstore.png'
import ak_appstore from '../../assests/images/ak_appstore.png'
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




function App() {
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
        <div className="container-fluid ak_learningbanner">
          <div className="container">
            <div className="row mx-0">


            </div>
          </div>
        </div>
      </section>

<section className="ak_learning_content">
  <div className="container">
    <div className="row mx-0">
      <div className="col-lg-12 text-center my-5">
        <img src={ak_line} alt="" />
        <h3 className="ak_text-custom1">Virtuse News</h3>
        <p className="ak_text-custom2">Weekly letter to over 15,000 investors about business, technology and finance.</p>

      </div>
    </div>
  </div>
  <div className="container-fluid ak_learning_bg">
    <div className="container">
      <div className="row mx-0 ak_learning_bg_cards justify-content-center">
        <div className="col-lg-4">
          <div className="card">
            <img className="img-fluid" src={ak_learning1} alt="" />
            <h6>26th October,2019</h6>
            <p>Ignore the Bearish Noise and
                Invest in Technologies and
                Bitcoin</p>
                <a href="">Learn more <i class="fas fa-long-arrow-right"></i></a>
          </div>

        </div>
        <div className="col-lg-4">
          <div className="card">
            <img className="img-fluid" src={ak_learning2} alt="" />
            <h6>26th October,2019</h6>
            <p>What’s Happening with Bitcoin?</p>
                <a className="my-4" href="">Learn more <i class="fas fa-long-arrow-right"></i></a>
          </div>

        </div>
        <div className="col-lg-4">
          <div className="card">
            <img className="img-fluid" src={ak_learning3} alt="" />
            <h6>26th October,2019</h6>
            <p>5 Reasons Why You Should Own
                  Bitcoin in 2022</p>
                <a  href="">Learn more <i class="fas fa-long-arrow-right"></i></a>
          </div>

        </div>
      </div>
      <div className="row mx-0 ak_learning_bg_cards justify-content-center my-5">
        <div className="col-lg-4">
          <div className="card">
            <img className="img-fluid" src={ak_learning1} alt="" />
            <h6>26th October,2019</h6>
            <p>Ignore the Bearish Noise and
                Invest in Technologies and
                Bitcoin</p>
                <a href="">Learn more <i class="fas fa-long-arrow-right"></i></a>
          </div>

        </div>
        <div className="col-lg-4">
          <div className="card">
            <img className="img-fluid" src={ak_learning2} alt="" />
            <h6>26th October,2019</h6>
            <p>What’s Happening with Bitcoin?</p>
                <a className="my-4" href="">Learn more <i class="fas fa-long-arrow-right"></i></a>
          </div>

        </div>
        <div className="col-lg-4">
          <div className="card">
            <img className="img-fluid" src={ak_learning3} alt="" />
            <h6>26th October,2019</h6>
            <p>5 Reasons Why You Should Own
                  Bitcoin in 2022</p>
                <a  href="">Learn more <i class="fas fa-long-arrow-right"></i></a>
          </div>

        </div>
      </div>
      <div className="row mx-0 ak_learning_bg_cards justify-content-center">
        <div className="col-lg-4">
          <div className="card">
            <img className="img-fluid" src={ak_learning1} alt="" />
            <h6>26th October,2019</h6>
            <p>Ignore the Bearish Noise and
                Invest in Technologies and
                Bitcoin</p>
                <a href="">Learn more <i class="fas fa-long-arrow-right"></i></a>
          </div>

        </div>
        <div className="col-lg-4">
          <div className="card">
            <img className="img-fluid" src={ak_learning2} alt="" />
            <h6>26th October,2019</h6>
            <p>What’s Happening with Bitcoin?</p>
                <a className="my-4" href="">Learn more <i class="fas fa-long-arrow-right"></i></a>
          </div>

        </div>
        <div className="col-lg-4">
          <div className="card">
            <img className="img-fluid ak_learn_img" src={ak_learning3} alt="" />
            <h6>26th October,2019</h6>
            <p>5 Reasons Why You Should Own
                  Bitcoin in 2022</p>
                <a  href="">Learn more <i class="fas fa-long-arrow-right"></i></a>
          </div>

        </div>
      </div>
      <div className="row mx-0 ak_learning_bg_cards justify-content-center my-5">
        <div className="col-lg-4">
          <div className="card">
            <img className="img-fluid" src={ak_learning1} alt="" />
            <h6>26th October,2019</h6>
            <p>Ignore the Bearish Noise and
                Invest in Technologies and
                Bitcoin</p>
                <a href="">Learn more <i class="fas fa-long-arrow-right"></i></a>
          </div>

        </div>
        <div className="col-lg-4">
          <div className="card">
            <img className="img-fluid" src={ak_learning2} alt="" />
            <h6>26th October,2019</h6>
            <p>What’s Happening with Bitcoin?</p>
                <a className="my-4" href="">Learn more <i class="fas fa-long-arrow-right"></i></a>
          </div>

        </div>
        <div className="col-lg-4">
          <div className="card">
            <img className="img-fluid" src={ak_learning3} alt="" />
            <h6>26th October,2019</h6>
            <p>5 Reasons Why You Should Own
                  Bitcoin in 2022</p>
                <a  href="">Learn more <i class="fas fa-long-arrow-right"></i></a>
          </div>

        </div>
      </div>
    </div>

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
          <div className="container ak_footer_top ">
            <div className="row mx-0 justify-content-center" >
              <div className="col-lg-1 ak_footer_top_logo">
                <img  className="img-fluid" src={ak_logowhite} alt="" />
                
              </div>
              <div className="col-lg-4 text-white my-2 ak_footer_top_logo text-sm-center" >
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

</section>
    



      




    </div>
  );
}

export default App;
