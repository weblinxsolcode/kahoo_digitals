import React from 'react'
import logo from '../../assests/images/logo.png';
import './style.css';
import virtuse_img1 from "../../assests/images/virtuse img1.png";
import virtuse_img2 from "../../assests/images/virtuse img2.png";
import virtuse_img3 from "../../assests/images/virtuse img3.png";
import automated_invest from "../../assests/images/Automated Investing.png";
import started_mob from "../../assests/images/started_mob.png";


const Home = () => {
    return (
        <div className='home'>

            {/* header */}
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
                    <p className='bitcoin_head mb-0'>The only Bitcoin app you need</p>
                    <p className='bitcoin_para mb-0'>Virtuse helps new and experienced investors securely accumulate Bitcoin.</p>
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
                    <p className='Virtuse_head mb-0'>Virtuse News</p>
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
            <div className='as_seen'>
                
            </div>

        </div>
    )
}

export default Home