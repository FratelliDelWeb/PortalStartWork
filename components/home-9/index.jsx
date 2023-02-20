import Header from "./Header";
import Hero9 from "../hero/hero-9";
import Hero12 from "../hero/hero-12";
import Link from "next/link";
import CallToAction7 from "../call-to-action/CallToAction7";
import Candidates from "../candidates/Candidates";
import Blog from "../blog/Blog";
import CallToAction6 from "../call-to-action/CallToAction6";
import Footer from "./Footer";
import Funfact from "../fun-fact-counter/Funfact";
import Testimonia4 from "../testimonial/Testimonial4";
import JobCategorie1 from "../job-categories/JobCategorie1";
import JobCategorie7 from "../job-categories/JobCategorie7";
import  About9 from "../about/About9"
import  About10 from "../about/About10"

import Block6 from "../block/Block6";
import JobFeatured3 from "../job-featured/JobFeatured3";
import LoginPopup from "../common/form/login/LoginPopup";
import CandidatiPopup from "../common/form/candidati/CandidatiPopup";

import MobileMenu from "../header/MobileMenu";
import RegBanner2 from "../block/RegBanner2";

import DefaulHeader2 from "../header/DefaulHeader2";


const index = ({dataCL ,dataOL}) => {
console.log(dataCL )
console.log(dataOL )
  return (
    <>
      <LoginPopup />
      <CandidatiPopup></CandidatiPopup>
      {/* End Login Popup Modal */}
      <div class="mb-30">
      <DefaulHeader2 />
      </div>
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}
      <div class="mt-56">
      <Hero12  />
        </div>
    
      {/* <!-- End Hero Section --> */}
      
      <section className="layout-pt-120 layout-pb-60">
        <div className="auto-container">
          <div className="row justify-content-between align-items-end">
            <div className="col-lg-6">
              <div className="sect-title">
                <h2 className="fw-700">Categorie candidati</h2>
                <div className="text mt-9">
                  Scopri tutti gli ambiti ricoperti dai nostri profesisoniscti
                </div>
              </div>
            </div>
            {/* End sectitle */}
            <div className="col-auto">
              <a href="#" className="button-icon -arrow text-dark-blue">
                Vedi Tutti
                <span className="fa fa-angle-right ms-1"></span>
              </a>
            </div>
          </div>
          {/* End .row */}

          <div className="row grid-flex pt-50" data-aos="fade-up">
            <JobCategorie7 />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* <!-- End Job Categories --> */}
      <section className="registeration-banners">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            <About10/>
          </div>
        </div>
      </section>


      <div className="auto-container">
          <div className="text-center">
            <h2>Utlime Offerte di lavoro </h2>
            <div className="text">
            Conosci il tuo valore e trova il lavoro che qualifica la tua vita!
            </div>
          </div>
          {/* End .sec-title */}

          <div className="row" data-aos="fade-up">
            <JobFeatured3 dataOL={dataOL} />
          </div>

          <div className="btn-box">
            <Link
              href="/job-list-v3"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Vedi tutte le offerte</span>
            </Link>
          </div>
        </div>
        <About9 />
      <section className="candidates-section">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Ultimi candidati inseriti</h2>
            <div className="text">
            Scopri i nuovi candidati , visualizza la scheda e contattaci 
            </div>
          </div>
          <Candidates dataCL = {dataCL} />
          <div className="carousel-outer" data-aos="fade-up">
            <div className="candidates-carousel default-dots">
            
            </div>
          </div>
        </div>
      </section>



     
      {/* <!-- End Candidates Section --> */}
       {/*
      <section className="job-section">
        <div className="auto-container wow fadeInUp">
          <div className="sec-title text-center">
            <h2>Featured Jobs</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>
          <div className="job-carousel gap-x25" data-aos="fade-up">
            <JobFeatured12 />
          </div>
        </div>
      </section>
      <!-- End Job Section --> */}
     
      {/* <!-- End Registeration Banners --> */}
    
            {/* <!-- End Steps Section --> */}

     {/*  <CallToAction7 /> */}
      {/* <!-- End Call To Action --> */}
  {/*
      <section className="job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Popular Job Categories</h2>
            <div className="text">2020 jobs live - 293 added today.</div>
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Category Block --> 
            <JobCategorie1 />
          </div>
        </div>
      </section>
      {/* End Job Categorie Section 

      <section
        className="testimonial-section style-two alternate"
        style={{ backgroundImage: "url(images/background/9.png)" }}
      >
        <div className="auto-container">
          {/* <!-- Sec Title --> 
          <div className="sec-title light text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            {/* <!-- Testimonial Carousel -->
            <div className="testimonial-carousel-three gap-x25">
              <Testimonia4 />
            </div>
          </div>
          {/* End .carousel-outer
        </div>
        {/* End auto-container 
      </section>
      {/* <!-- End Testimonial Section --> */}

      {/* <!-- Fun Fact Section --> 
      <div className="fun-fact-section style-two">
        <div className="auto-container">
          <div className="row" data-aos="fade-in">
            <Funfact />
          </div>
        </div>
      </div>
      {/* <!-- Fun Fact Section --> 

      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
            <div className="text">
              Fresh job related news content posted each day.
            </div>
          </div>
          {/* End ."sec-title 
          <div className="row" data-aos="fade-up">
            <Blog />
          </div>
        </div>
      </section>*/}
      {/* <!-- End News Section --> */}

      <CallToAction6 />
      {/* <!-- End Call To Action --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};



export default index;
