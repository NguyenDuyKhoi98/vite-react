import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function MyHeader() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [accessToken, setAccessToken] = useState('');

  function getUserDataFromToken(accessToken) {
    try {
      const decodedToken = jwtDecode(accessToken);
      return {
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
      };
    } catch (error) {
      console.log("Lỗi giải mã token:", error);
      return null; // hoặc ném lỗi tùy thuộc vào cách xử lý lỗi của bạn
    }
  }

  

  useEffect(() => {
    setAccessToken(localStorage.getItem('user')); // Lấy accessToken từ localStorage
    console.log('kết quả token: ' + !!accessToken);
    console.log('token: ' + accessToken);
    if (accessToken) {
      let data = getUserDataFromToken(accessToken);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      console.log('tên user:');
      console.log(firstName + ' ' + lastName);

    }
  }, [accessToken]);

  if (lastName != '' && firstName != '')
    console.log(firstName + ' ' + lastName);
  else console.log('no data');

  let cart = JSON.parse(sessionStorage.getItem('cart')) ?? [];


  const handleLogout = () => {
    localStorage.removeItem('user');
    setAccessToken('');
    window.location.href = '/login';
  };


  return (
    <>
      {/*::header part start::*/}
      <header className="main_menu home_menu">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to={'/'}>

                  <img src="/img/logo.png" alt="logo" />
                  <img src="/img/mygif.gif" alt="logo" style={{ maxHeight: 50 }} />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="menu_icon">
                    <i className="fas fa-bars" />
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse main-menu-item"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to={'/'}>
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
                        <Link className="dropdown-item" to={'/product-list/all/newest/1'}>
                          {" "}
                          product list
                        </Link>
                        <Link className="dropdown-item" to={'/details/1'}>
                          product details
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown_3"
                        role="button"
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
                        {
                          console.log('đã đăng nhập? ' + !!accessToken)
                        }
                        {
                          console.log('firstname là ' + firstName)
                        }

                        {!!accessToken ? (
                          <Link className="dropdown-item" to="/" onClick={handleLogout}>Logout</Link>
                        ) : (
                          <Link className="dropdown-item" to="/login">Login</Link>
                        )}

                        {/* <Link className="dropdown-item" to={'/login'}>
                          login
                        </Link> */}
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
                <div className="hearer_icon d-flex align-items-center">
                  <a id="search_1" href="javascript:void(0)">
                    <i className="ti-search" />
                  </a>
                  <Link to={'/cart'}>
                    <i className="flaticon-shopping-cart-black-shape" /> &nbsp; {cart.length}
                  </Link>
                </div>
              </nav>
              <p style={{ textAlign: "right" }}>
                {
                  !!firstName? `hello ${firstName} ${lastName}` :''
                }
              </p>
            </div>
          </div>
        </div>

        <div className="search_input" id="search_input_box">
          <div className="container ">
            <form className="d-flex justify-content-between search-inner">
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn" />
              <img src="/img/mygif.gif" alt="logo" style={{ maxHeight: 30 }} />
              <span className="ti-close" id="close_search" title="Close Search" />
            </form>
          </div>
        </div>

      </header>
      {/* Header part end*/}
    </>





  )
}

export default MyHeader