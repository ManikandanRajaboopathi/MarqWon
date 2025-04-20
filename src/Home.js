import wave from './cta.gif'

function Home(){
    return (
        <>
        <section className="bannersec">
            <div className="container">
                <div className="content-wrapper">
                    <h1 className="fs-1 fw-bold mb-4">Beyond Boundaries, Ahead of Time.</h1>
                    <p className="lh-lg">Tech isn’t just evolving—it’s revolutionizing how businesses operate. At MarqWon Dynamics, we engineer intelligent, scalable, and future-ready solutions that help companies grow faster, work smarter, and stay ahead in a rapidly changing world.</p>
                </div>
            </div>
        </section>
        <section className="whychoose-content-wrapper">
        <div class="container">
      <div class="row">
        <div class="section-head col-sm-12">
          <h4><span>Why </span> MarqWon?</h4>
          <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_one"
          ><i class="fa fa-globe"></i></span>
            <h6>Disruptive Innovation</h6>
            <p>We don’t just follow trends—we create them. </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-anchor"></i></span>
            <h6>Efficiency-Driven</h6>
            <p>More output, less friction. We build solutions that save time, energy, and capital while maximizing results</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_three"><i class="fa fa-hourglass-half"></i></span>
            <h6>Custom-Built for You</h6>
            <p>No cookie-cutter solutions. Every system we create is tailored to fit your unique challenges.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_four"><i class="fa fa-database"></i></span>
            <h6>Next-Gen Tech, Today</h6>
            <p>AI, automation, cloud, cybersecurity—whatever your business needs, we deliver it with <strong>precision and performance.</strong> </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_five"><i class="fa fa-upload"></i></span>
            <h6>Market Strategy</h6>
            <p>Holding back technology to preserve broken business models is like allowing blacksmiths to veto the internal combustion engine in order to protect their horseshoes.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_six"><i class="fa fa-camera"></i></span>
            <h6>Affordable cost</h6>
            <p>Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.</p>
          </div>
        </div>
      </div>
    </div>
        </section>
        <section className="ctasec">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                     <img src={wave} className='img-fluid' alt='img'/>
                    </div>
                    <div className="col-lg-6">
                        <h2>Let’s Build the Future Together </h2>
                        <p>Contact us to start your digital transformation journey.</p>
                         <button class="btn-reverse btn-arrow">
                        <span>Chat with us
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                      </svg>
                          {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 25.8" enable-background="new 0 0 36.1 25.8" xml:space="preserve"><g><line fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9"></line><polyline fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7   "></polyline></g></svg> */}
                          </span>
                      </button>
                    </div>
                </div>
            </div>
        </section>
 </>
    )
}

export default Home