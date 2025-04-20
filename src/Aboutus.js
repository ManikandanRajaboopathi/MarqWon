import { useNavigate } from 'react-router-dom';
import Aboutusbanner from './aboutusbg.avif'
import wave from './cta.gif'

function Aboutus(){
    const navigate = useNavigate();
    return(
        <>
        <section className="aboutussec commonbg">
            <div className="container">
                <div className="row align-items-center">
                    {/* <div className="col-lg-6">
                     <img src={Aboutusbanner} className='img-fluid' alt='Aboutys'/>
                    </div> */}
                  <div className="col-lg-6">
                    <h1 className="fw-bold mb-4">The Future Belongs to Those Who Build It.</h1>
                    <p className='fs-6'>MarqWon Dynamics was born from a vision—to <strong>redefine what's possible with technology</strong>. Based in <strong>Madurai, one of the world's oldest cities</strong>, we are a<strong> young, dynamic, and innovation-driven</strong> team that's not just thinking about the future—we're building it. </p>
                    <p className='fs-6'>We believe in <strong>solving real challenges</strong> with <strong>intelligent, high-performance solutions</strong> that push the limits of efficiency, productivity, and innovation.</p>
                  </div>
                </div>
            </div>
        </section>
        <section>
            <div className='container'>
                <h2 className='text-center fw-bold mb-4'>Our DNA</h2>
                    <div className='dna-card'>
                    <div className='row align-items-center flex-column flex-sm-row flex-column flex-sm-row'>
                    <div className='col-3'>
                        <div className='cardimg'>
                    <i class="fa fa-globe"></i>
                        </div>
                    </div>
                    <div className='col-9 text-center text-sm-start mt-3 mt-sm-0'>
                      <h3>Speed & Agility </h3>
                      <p>We move fast, adapt faster, and never settle. </p>
                    </div>
                    </div>
                    </div>
                    <div className='dna-card'>
                    <div className='row align-items-center flex-column flex-sm-row'>
                    <div className='col-3'>
                        <div className='cardimg'>
                    <i class="fa fa-globe"></i>
                        </div>
                    </div>
                    <div className='col-9 text-center text-sm-start mt-3 mt-sm-0'>
                      <h3>Innovation-First Mindset  </h3>
                      <p>Every challenge is an opportunity to disrupt. </p>
                    </div>
                    </div>
                    </div>
                    <div className='dna-card'>
                    <div className='row align-items-center flex-column flex-sm-row'>
                    <div className='col-3'>
                        <div className='cardimg'>
                    <i class="fa fa-globe"></i>
                        </div>
                    </div>
                    <div className='col-9 text-center text-sm-start mt-3 mt-sm-0'>
                      <h3>Next-Gen Thinking  </h3>
                      <p>We focus on the present to shape the future.  </p>
                    </div>
                    </div>
                    </div>
                    <div className='dna-card'>
                    <div className='row align-items-center flex-column flex-sm-row'>
                    <div className='col-3'>
                        <div className='cardimg'>
                    <i class="fa fa-globe"></i>
                        </div>
                    </div>
                    <div className='col-9 text-center text-sm-start mt-3 mt-sm-0'>
                      <h3>Hustle & Passion  </h3>
                      <p>We build because we love what we do. </p>
                    </div>
                    </div>
                    </div>
            </div>
        </section>
        <section className='visiomisionsec'>
            <div className='container'>
              <div className='content-wrapper'>
              <div className='border-custom'>
                <div className='row'>
                  <div className='col-lg-5'>
                    <div className='visioncard'>
                       <h3>Our Vision</h3>
                    </div>
                  </div>
                  <div className='col-lg-7'>
                    <div className='p-5 h-100 d-flex align-items-center'>
                    <p className='fs-6'>At <b>MarqWon Dynamics</b>, we envision a world where <b>technology empowers businesses to achieve more with less</b>—maximizing efficiency, increasing revenue, and reducing time, energy, and capital. Our mission is to break boundaries and stay ahead of time, delivering <b>cutting-edge, intelligent solutions</b> that drive the next generation of digital transformation.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='border-custom'>
                <div className='row'>
                  <div className='col-lg-7'>
                    <div className='p-5 h-100  d-flex align-items-center'>
                    <p className='fs-6'>Our mission is to <b>redefine innovation</b> by developing <b>future-ready, scalable, and high-impact technology solutions</b>. We aim to help businesses <b>adapt, evolve, and thrive</b> in an ever-changing digital landscape by providing <b>custom software development, IT consulting, AI-driven automation, cloud solutions, and cybersecurity services</b>. Driven by a <b>young, dynamic, and disruptive team</b>, we focus on <b>solving real-world challenges with precision, performance, and innovation</b>.</p>
                    </div>
                  </div>
                  <div className='col-lg-5'>
                    <div className='missioncard'>
                       <h3>Our Mission</h3> 
                    </div>
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
                        <h2>Need something custom? We'll make it happen.  </h2>
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

export default Aboutus