import { Link } from "react-router-dom";


function MyFooter() {

  return (
    <>
      {/*::footer_part start::*/}
      <footer className="footer_part">
        <div className="footer_iner">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-8">
                <div className="footer_menu">
                  <div className="footer_logo">
                    <a href="index.html">
                      <img src="/img/logo.png" alt="#" />
                    </a>
                  </div>
                  <div
                    className="navbar navbar-expand-lg bg-body-tertiary"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to={'/'} >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={'/about'}>
                          about
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown_1"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          product
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown_1"
                        >
                          <Link className="dropdown-item" to={'/product-list'}>
                            {" "}
                            product list
                          </Link>
                          <Link className="dropdown-item" to={'/product-details'}>
                            product details
                          </Link>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown_3"
                          role="button"
                          href="#"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          pages
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown_2"
                        >
                          <Link className="dropdown-item" to={'/login'}>
                            login
                          </Link>
                          <Link className="dropdown-item" to={'/checkout'}>
                            product checkout
                          </Link>
                          <Link className="dropdown-item" to={'/cart'}>
                            shopping cart
                          </Link>
                          <Link className="dropdown-item" to={'/confirmation'}>
                            confirmation
                          </Link>
                          <Link className="dropdown-item" to={'/elements'}>
                            elements
                          </Link>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown_2"
                          role="button"
                          href="#"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          blog
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown_2"
                        >
                          <Link className="dropdown-item" to={'/blog'}>
                            {" "}
                            blog
                          </Link>
                          <Link className="dropdown-item" to={'/single-blog'}>
                            Single blog
                          </Link>
                        </div>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={'/contact'}>
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="social_icon">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-google-plus-g" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_part">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12">
                <div className="copyright_text">
                  <p>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with{" "}
                    <i className="ti-heart" aria-hidden="true" /> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                  <div className="copyright_link">
                    <a href="#">Turms &amp; Conditions</a>
                    <a href="#">FAQ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*::footer_part end::*/}
    </>



  )
}

export default MyFooter;