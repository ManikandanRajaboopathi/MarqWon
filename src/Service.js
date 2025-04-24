import { useNavigate } from 'react-router-dom';
import serviceBanner from './servicebanner.avif'
import wave from './cta.gif'
import service1 from './service1.png'
import service2 from './service2.png'
import service3 from './service3.png'
import service4 from './service4.jpeg'
import service5 from './service5.jpeg'
import service6 from './service6.jpeg'


function Service(){
    const navigate = useNavigate();
    return(
        <>
        <section className='servicebg commonbg'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
             <h1 className='fw-bold'>Tech That Works for You, Not Against You.</h1>
             <p>Businesses today don't just need technology—they need the right technology. That's where we come in. MarqWon Dynamics builds solutions that solve real-world problems, automate workflows, and drive measurable growth.</p>
             <button class="btn-reverse btn-arrow"  onClick={() => navigate('/contactus')}>
                        <span>Contact
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                      </svg>
                          </span>
        </button>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='container'>
                <h2 className='text-center fw-bold mb-5'>Services We Offer</h2>
            {/* <div className='row align-items-center pt-4'>
                <div className='col-lg-4'>
                <div class="service-box">
            <div class="content">
                <div class="icons">
                    <i class="fa-solid fa-code"></i>
                </div>
                <div class="title-area">
                    <h3>Custom Software Development  </h3>
                    <span> Scalable, secure, and designed for impact. </span>
                </div>
            </div>
                </div>
                <div class="service-box">
            <div class="content">
                <div class="icons">
                    <i class="fa-solid fa-code"></i>
                </div>
                <div class="title-area">
                    <h3>Web & Mobile App Development  </h3>
                    <span> User-first experiences that drive engagement.  </span>
                </div>
            </div>
                </div>
                <div class="service-box">
            <div class="content">
                <div class="icons">
                    <i class="fa-solid fa-code"></i>
                </div>
                <div class="title-area">
                    <h3>AI & Automation Solutions  </h3>
                    <span> Let AI handle the heavy lifting. </span>
                </div>
            </div>
                </div>
                </div>
                <div className='col-lg-4 text-center'>
                <img src={serviceBanner} className="img-fluid" alt="service"/>
                </div>
                <div className='col-lg-4'>
                <div class="service-box">
            <div class="content">
                <div class="icons">
                    <i class="fa-solid fa-code"></i>
                </div>
                <div class="title-area">
                    <h3> Cloud & DevOps Services  </h3>
                    <span> Optimize, scale, and stay secure in the cloud. </span>
                </div>
            </div>
                </div>
                <div class="service-box">
            <div class="content">
                <div class="icons">
                    <i class="fa-solid fa-code"></i>
                </div>
                <div class="title-area">
                    <h3> Cybersecurity & Data Protection  </h3>
                    <span> Because your data is your most valuable asset.  </span>
                </div>
            </div>
                </div>
                <div class="service-box">
            <div class="content">
                <div class="icons">
                    <i class="fa-solid fa-code"></i>
                </div>
                <div class="title-area">
                    <h3>Business IT Consulting  </h3>
                    <span> We don’t just build tech; we strategize for growth.  </span>
                </div>
            </div>
                </div>
                </div>
            </div> */}
            {/* <div className='row'>
                <div className='col-md-6 col-lg-4 col-xl-3'>
                    <div className='service-container'>
                    <div className='servicescard'>
                    <img src={service1} className='img-fluid' alt='service'/>
                    <h4>Custom Software Development</h4>
                    </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-4 col-xl-3'></div>
                <div className='col-md-6 col-lg-4 col-xl-3'></div>
                <div className='col-md-6 col-lg-4 col-xl-3'></div>
                <div className='col-md-6 col-lg-4 col-xl-3'></div>
                <div className='col-md-6 col-lg-4 col-xl-3'></div>
            </div> */}
            <div class="row">
        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-12">
            <div class="card mb-3">
                <img class="card-img-top" src={service1} height="300" alt="Card image cap"/>
                <div class="product-detail">
                    <h5 class="card-title heading text-center">Custom Software Development  </h5>
                    <blockquote>
                   <p> Scalable, secure, and designed for impact. </p>
                    </blockquote>
                   </div>
            </div>
        </div>
        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-12">
                <div class="card mb-3">
                        <img class="card-img-top" src={service2} height="300" alt="Card image cap"/>
                        <div class="product-detail">
                            <h5 class="card-title heading text-center">Web & Mobile App Development  </h5>
                            <blockquote>
                                <p> User-first experiences that drive engagement.  </p>
                            </blockquote>                            
                           </div>
                    </div>
        </div>
        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-12">
            <div class="card mb-3">
                <img class="card-img-top" src={service3} height="300"  alt="Card image cap"/>
                <div class="product-detail">
                    <h5 class="card-title heading text-center">AI & Automation Solutions  </h5>
                    <blockquote>
                        <p> Let AI handle the heavy lifting. </p>
                    </blockquote>
                   </div>
            </div>
        </div>
        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-12">
            <div class="card mb-3">
                <img class="card-img-top" src={service4} height="300"  alt="Card image cap"/>
                <div class="product-detail">
                    <h5 class="card-title heading text-center"> Cloud & DevOps Services  </h5>
                    <blockquote>
                        <p> Optimize, scale, and stay secure in the cloud. </p>
                    </blockquote>
                   </div>
            </div>
        </div>
        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-12">
            <div class="card mb-3">
                <img class="card-img-top" src={service5} height="300"  alt="Card image cap"/>
                <div class="product-detail">
                    <h5 class="card-title heading text-center">  Cybersecurity & Data Protection    </h5>
                    <blockquote>
                        <p> Because your data is your most valuable asset.   </p>
                    </blockquote>
                   </div>
            </div>
        </div>
        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-12">
            <div class="card mb-3">
                <img class="card-img-top" src={service6} height="300"  alt="Card image cap"/>
                <div class="product-detail">
                    <h5 class="card-title heading text-center"> Business IT Consulting    </h5>
                    <blockquote>
                        <p> We don’t just build tech; we strategize for growth.  </p>
                    </blockquote>
                   </div>
            </div>
        </div>
    </div>
            </div>
        </section>
        <section className="ctasec py-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                     <img src={wave} className='img-fluid' alt='img'/>
                    </div>
                    <div className="col-lg-6">
                        <h2>Join us in building what's next.</h2>
                         <button class="btn-reverse btn-arrow mt-3">
                        <span>Let's Talk.
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                      </svg>
                          </span>
                      </button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Service