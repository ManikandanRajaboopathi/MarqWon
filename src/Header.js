import logo from './logo.png';
import hamburger from './hamburger.png';
import { Link, useNavigate } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';

function Header() {
  const navigate = useNavigate();

  const closeOffcanvas = () => {
    setTimeout(() => {
      const offcanvasEl = document.getElementById('offcanvasExample');
      if (!offcanvasEl) return;
  
      let bsOffcanvas = Offcanvas.getInstance(offcanvasEl);
      if (!bsOffcanvas) {
        bsOffcanvas = new Offcanvas(offcanvasEl);
      }
  
      bsOffcanvas.hide();
  
      // Manual fallback cleanup for backdrop
      setTimeout(() => {
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop && backdrop.classList.contains('show')) {
          backdrop.classList.remove('show');
          document.body.classList.remove('offcanvas-backdrop');
          backdrop.remove(); // optional
        }
      }, 300); // Wait for Bootstrap's hide animation to complete
    }, 100);
  };
  

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid justify-content-lg-start">
          <a className="navbar-brand" href="/">
            <Link to="/" className="text-decoration-none" onClick={closeOffcanvas}>
              <div className="d-flex align-items-center gap-2">
                <h1 className="logo-font">MarqWon</h1>
                <img src={logo} className="img-fluid logo-img" alt="logo" />
              </div>
            </Link>
          </a>
          <button
            className="navbar-toggler border-0 w-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
              <img src={hamburger} className="img-fluid" alt="hamburger menu" />
            </span>
          </button>
          <div className="d-none d-lg-block w-100">
            <ul className="align-items-center d-flex justify-content-between justify-content-evenly list-unstyled mb-0">
              <li className="nav-link">
                <Link to="/Aboutus" className="text-decoration-none" onClick={closeOffcanvas}>
                  Who we are
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/Service" className="text-decoration-none" onClick={closeOffcanvas}>
                  What we do
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/Product" className="text-decoration-none" onClick={closeOffcanvas}>
                  Products
                </Link>
              </li>
              <li>
                <button className="btn-reverse btn-arrow" onClick={() => { closeOffcanvas(); navigate('/contactus'); }}>
                  <span>
                    Contact
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 
                            .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 
                            8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <Link to="/" className="text-decoration-none" onClick={closeOffcanvas}>
              <div className="d-flex align-items-center gap-2">
                <h1>MarqWon</h1>
                <img src={logo} className="img-fluid logo-img" alt="logo" />
              </div>
            </Link>
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="d-flex flex-column gap-3 list-unstyled mb-0">
            <li className="nav-link">
              <Link to="/Service" className="text-decoration-none" onClick={closeOffcanvas}>
                Our Service
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/Product" className="text-decoration-none" onClick={closeOffcanvas}>
                Product
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/Aboutus" className="text-decoration-none" onClick={closeOffcanvas}>
                About us
              </Link>
            </li>
            <li className="nav-link">
              <button className="btn-reverse btn-arrow" onClick={() => { closeOffcanvas(); navigate('/contactus'); }}>
                <span>
                  Contact
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 
                          .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 
                          8.5H1.5A.5.5 0 0 1 1 8" />
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
