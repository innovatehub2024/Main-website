import React from 'react';
import './coursepage.css';


const Courses = () => {
      return (
        <div>
          <meta charSet="utf-8" />
         
          {/* Favicon */}
          <link href="img/favicon.ico" rel="icon" />
          {/* Google Web Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet" />
          {/* Icon Font Stylesheet */}
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
          {/* Libraries Stylesheet */}
          <link href="lib/animate/animate.min.css" rel="stylesheet" />
          <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
          {/* Customized Bootstrap Stylesheet */}
          <link href="css/bootstrap.min.css" rel="stylesheet" />
          {/* Template Stylesheet */}
          <link href="css/style.css" rel="stylesheet" />
          {/* Spinner Start */}
          <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          {/* Spinner End */}
          {/* Carousel Start */}
          <div className="container-fluid p-0 mb-5">
            <div className="owl-carousel header-carousel position-relative">
              <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(24, 29, 56, .7)'}}>
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-sm-10 col-lg-8">
                        <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                        <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                        <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                        <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                        <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(24, 29, 56, .7)'}}>
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-sm-10 col-lg-8">
                        <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                        <h1 className="display-3 text-white animated slideInDown">Get Educated Online From Your Home</h1>
                        <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                        <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                        <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel End */}
          {/* Service Start */}
          <div className="container-xxl py-5">
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="service-item text-center pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
                      <h5 className="mb-3">Skilled Instructors</h5>
                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="service-item text-center pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-globe text-primary mb-4" />
                      <h5 className="mb-3">Online Classes</h5>
                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="service-item text-center pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-home text-primary mb-4" />
                      <h5 className="mb-3">Home Projects</h5>
                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                  <div className="service-item text-center pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-book-open text-primary mb-4" />
                      <h5 className="mb-3">Book Library</h5>
                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Service End */}
          {/* About Start */}
          <div className="container-xxl py-5">
            <div className="container">
              <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
                  <div className="position-relative h-100">
                    <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{objectFit: 'cover'}} />
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                  <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                  <h1 className="mb-4">Welcome to eLEARNING</h1>
                  <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                  <div className="row gy-2 gx-4 mb-4">
                    <div className="col-sm-6">
                      <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Skilled Instructors</p>
                    </div>
                    <div className="col-sm-6">
                      <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Online Classes</p>
                    </div>
                    <div className="col-sm-6">
                      <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />International Certificate</p>
                    </div>
                    <div className="col-sm-6">
                      <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Skilled Instructors</p>
                    </div>
                    <div className="col-sm-6">
                      <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Online Classes</p>
                    </div>
                    <div className="col-sm-6">
                      <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />International Certificate</p>
                    </div>
                  </div>
                  <a className="btn btn-primary py-3 px-5 mt-2" href>Read More</a>
                </div>
              </div>
            </div>
          </div>
          {/* About End */}
          {/* Categories Start */}
          <div className="container-xxl py-5 category">
            <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
                <h1 className="mb-5">Courses Categories</h1>
              </div>
              <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                  <div className="row g-3">
                    <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                      <a className="position-relative d-block overflow-hidden" href>
                        <img className="img-fluid" src="img/cat-1.jpg" alt="" />
                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                          <h5 className="m-0">Web Design</h5>
                          <small className="text-primary">49 Courses</small>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                      <a className="position-relative d-block overflow-hidden" href>
                        <img className="img-fluid" src="img/cat-2.jpg" alt="" />
                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                          <h5 className="m-0">Graphic Design</h5>
                          <small className="text-primary">49 Courses</small>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                      <a className="position-relative d-block overflow-hidden" href>
                        <img className="img-fluid" src="img/cat-3.jpg" alt="" />
                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                          <h5 className="m-0">Video Editing</h5>
                          <small className="text-primary">49 Courses</small>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: '350px'}}>
                  <a className="position-relative d-block h-100 overflow-hidden" href>
                    <img className="img-fluid position-absolute w-100 h-100" src="img/cat-4.jpg" alt="" style={{objectFit: 'cover'}} />
                    <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                      <h5 className="m-0">Online Marketing</h5>
                      <small className="text-primary">49 Courses</small>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Categories Start */}
          {/* Courses Start */}
          <div className="container-xxl py-5">
            <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                <h1 className="mb-5">Popular Courses</h1>
              </div>
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="course-item bg-light">
                    <div className="position-relative overflow-hidden">
                      <img className="img-fluid" src="img/course-1.jpg" alt="" />
                      <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: '30px 0 0 30px'}}>Read More</a>
                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: '0 30px 30px 0'}}>Join Now</a>
                      </div>
                    </div>
                    <div className="text-center p-4 pb-0">
                      <h3 className="mb-0">$149.00</h3>
                      <div className="mb-3">
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small>(123)</small>
                      </div>
                      <h5 className="mb-4">Web Design &amp; Development Course for Beginners</h5>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />John Doe</small>
                      <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />1.49 Hrs</small>
                      <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />30 Students</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="course-item bg-light">
                    <div className="position-relative overflow-hidden">
                      <img className="img-fluid" src="img/course-2.jpg" alt="" />
                      <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: '30px 0 0 30px'}}>Read More</a>
                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: '0 30px 30px 0'}}>Join Now</a>
                      </div>
                    </div>
                    <div className="text-center p-4 pb-0">
                      <h3 className="mb-0">$149.00</h3>
                      <div className="mb-3">
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small>(123)</small>
                      </div>
                      <h5 className="mb-4">Web Design &amp; Development Course for Beginners</h5>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />John Doe</small>
                      <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />1.49 Hrs</small>
                      <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />30 Students</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="course-item bg-light">
                    <div className="position-relative overflow-hidden">
                      <img className="img-fluid" src="img/course-3.jpg" alt="" />
                      <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: '30px 0 0 30px'}}>Read More</a>
                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: '0 30px 30px 0'}}>Join Now</a>
                      </div>
                    </div>
                    <div className="text-center p-4 pb-0">
                      <h3 className="mb-0">$149.00</h3>
                      <div className="mb-3">
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small>(123)</small>
                      </div>
                      <h5 className="mb-4">Web Design &amp; Development Course for Beginners</h5>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />John Doe</small>
                      <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />1.49 Hrs</small>
                      <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />30 Students</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Courses End */}
          {/* Team Start */}
          <div className="container-xxl py-5">
            <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
                <h1 className="mb-5">Expert Instructors</h1>
              </div>
              <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item bg-light">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/team-1.jpg" alt="" />
                    </div>
                    <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
                      <div className="bg-light d-flex justify-content-center pt-2 px-1">
                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <h5 className="mb-0">Instructor Name</h5>
                      <small>Designation</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="team-item bg-light">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/team-2.jpg" alt="" />
                    </div>
                    <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
                      <div className="bg-light d-flex justify-content-center pt-2 px-1">
                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <h5 className="mb-0">Instructor Name</h5>
                      <small>Designation</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="team-item bg-light">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/team-3.jpg" alt="" />
                    </div>
                    <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
                      <div className="bg-light d-flex justify-content-center pt-2 px-1">
                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <h5 className="mb-0">Instructor Name</h5>
                      <small>Designation</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                  <div className="team-item bg-light">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/team-4.jpg" alt="" />
                    </div>
                    <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
                      <div className="bg-light d-flex justify-content-center pt-2 px-1">
                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <h5 className="mb-0">Instructor Name</h5>
                      <small>Designation</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Team End */}
          {/* Testimonial Start */}
          <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
              <div className="text-center">
                <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                <h1 className="mb-5">Our Students Say!</h1>
              </div>
              <div className="owl-carousel testimonial-carousel position-relative">
                <div className="testimonial-item text-center">
                  <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" style={{width: '80px', height: '80px'}} />
                  <h5 className="mb-0">Client Name</h5>
                  <p>Profession</p>
                  <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  </div>
                </div>
                <div className="testimonial-item text-center">
                  <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style={{width: '80px', height: '80px'}} />
                  <h5 className="mb-0">Client Name</h5>
                  <p>Profession</p>
                  <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  </div>
                </div>
                <div className="testimonial-item text-center">
                  <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-3.jpg" style={{width: '80px', height: '80px'}} />
                  <h5 className="mb-0">Client Name</h5>
                  <p>Profession</p>
                  <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  </div>
                </div>
                <div className="testimonial-item text-center">
                  <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-4.jpg" style={{width: '80px', height: '80px'}} />
                  <h5 className="mb-0">Client Name</h5>
                  <p>Profession</p>
                  <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial End */}
          {/* Back to Top */}
          <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
          {/* JavaScript Libraries */}
          {/* Template Javascript */}
        </div>
      );
    }
  
  export default Courses;
