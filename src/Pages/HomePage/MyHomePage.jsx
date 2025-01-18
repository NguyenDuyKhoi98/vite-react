import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function MyHomePage() {
  const options = {
    // cho phép chạy lặp
    loop: true,
    // tự động chạy
    autoplay: true,
    // dấu chấm liên kết vs các item
    dots: false,
    margin: 10,
    nav: true,
    // chỉnh số item hiển thị
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  };

  return (

    <>
      {/* banner part start*/}
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h1>Best quality pillow</h1>
                  <p>
                    Seamlessly empower fully researched growth strategies and
                    interoperable internal
                  </p>
                  <a href="product_list.html" className="btn_1">
                    shop now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_img">
          <img src="/img/banner.png" alt="#" className="img-fluid" />
          <img
            src="/img/banner_pattern.png "
            alt="#"
            className="pattern_img img-fluid"
          />
        </div>
      </section>
      {/* banner part start*/}
      {/* product list start*/}
      <section className="single_product_list">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single_product_iner">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_img">
                      <img
                        src="/img/single_product_1.png"
                        className="img-fluid"
                        alt="#"
                      />
                      <img
                        src="/img/product_overlay.png"
                        alt="#"
                        className="product_overlay img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="single_product_content">
                      <h5>Started from $10</h5>
                      <h2>
                        {" "}
                        <a href="single-product.html">
                          Printed memory foam brief modern throw pillow case
                        </a>{" "}
                      </h2>
                      <a href="product_list.html" className="btn_3">
                        Explore Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_product_iner">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_img">
                      <img
                        src="/img/single_product_2.png"
                        className="img-fluid"
                        alt="#"
                      />
                      <img
                        src="/img/product_overlay.png"
                        alt="#"
                        className="product_overlay img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="single_product_content">
                      <h5>Started from $10</h5>
                      <h2>
                        {" "}
                        <a href="single-product.html">
                          Printed memory foam brief modern throw pillow case
                        </a>{" "}
                      </h2>
                      <a href="product_list.html" className="btn_3">
                        Explore Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_product_iner">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_img">
                      <img
                        src="/img/single_product_3.png"
                        className="img-fluid"
                        alt="#"
                      />
                      <img
                        src="/img/product_overlay.png"
                        alt="#"
                        className="product_overlay img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="single_product_content">
                      <h5>Started from $10</h5>
                      <h2>
                        {" "}
                        <a href="single-product.html">
                          Printed memory foam brief modern throw pillow case
                        </a>{" "}
                      </h2>
                      <a href="product_list.html" className="btn_3">
                        Explore Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* product list end*/}
      {/* trending item start*/}
      <section className="trending_items">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_tittle text-center">
                <h2>Trending Items</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single_product_item">
                <div className="single_product_item_thumb">
                  <img
                    src="/img/tranding_item/tranding_item_1.png"
                    alt="#"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  {" "}
                  <a href="single-product.html">
                    Cervical pillow for airplane car office nap pillow
                  </a>{" "}
                </h3>
                <p>From $5</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_product_item">
                <img
                  src="/img/tranding_item/tranding_item_2.png"
                  alt="#"
                  className="img-fluid"
                />
                <h3>
                  {" "}
                  <a href="single-product.html">
                    Foam filling cotton slow rebound pillows
                  </a>{" "}
                </h3>
                <p>From $5</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_product_item">
                <img
                  src="/img/tranding_item/tranding_item_3.png"
                  alt="#"
                  className="img-fluid"
                />
                <h3>
                  {" "}
                  <a href="single-product.html">
                    Memory foam filling cotton Slow rebound pillows
                  </a>{" "}
                </h3>
                <p>From $5</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_product_item">
                <img
                  src="/img/tranding_item/tranding_item_4.png"
                  alt="#"
                  className="img-fluid"
                />
                <h3>
                  {" "}
                  <a href="single-product.html">
                    Cervical pillow for airplane car office nap pillow
                  </a>{" "}
                </h3>
                <p>From $5</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_product_item">
                <img
                  src="/img/tranding_item/tranding_item_5.png"
                  alt="#"
                  className="img-fluid"
                />
                <h3>
                  {" "}
                  <a href="single-product.html">
                    Foam filling cotton slow rebound pillows
                  </a>{" "}
                </h3>
                <p>From $5</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_product_item">
                <img
                  src="/img/tranding_item/tranding_item_6.png"
                  alt="#"
                  className="img-fluid"
                />
                <h3>
                  {" "}
                  <a href="single-product.html">
                    Memory foam filling cotton Slow rebound pillows
                  </a>{" "}
                </h3>
                <p>From $5</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* trending item end*/}
      {/* client review part here */}
      <section className="client_review">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <OwlCarousel className="owl-carousel testimonial-carousel" {...options}>
                <div className="single_client_review">
                  <div className="client_img">
                    <img src="/img/client.png" alt="#" />
                  </div>
                  <p>
                    "Working in conjunction with humanitarian aid agencies, we have
                    supported programmes to help alleviate human suffering.
                  </p>
                  <h5>- Micky Mouse</h5>
                </div>
                <div className="single_client_review">
                  <div className="client_img">
                    <img src="/img/client_1.png" alt="#" />
                  </div>
                  <p>
                    "Working in conjunction with humanitarian aid agencies, we have
                    supported programmes to help alleviate human suffering.
                  </p>
                  <h5>- Micky Mouse</h5>
                </div>
                <div className="single_client_review">
                  <div className="client_img">
                    <img src="/img/client_2.png" alt="#" />
                  </div>
                  <p>
                    "Working in conjunction with humanitarian aid agencies, we have
                    supported programmes to help alleviate human suffering.
                  </p>
                  <h5>- Micky Mouse</h5>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* client review part end */}
      {/* feature part here */}
      <section className="feature_part section_padding">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="feature_part_tittle">
                <h3>
                  Credibly innovate granular internal or organic sources whereas
                  standards.
                </h3>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="feature_part_content">
                <p>
                  Seamlessly empower fully researched growth strategies and
                  interoperable internal or “organic” sources. Credibly innovate
                  granular internal or “organic” sources whereas high standards in
                  web-readiness.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single_feature_part">
                <img src="/img/icon/feature_icon_1.svg" alt="#" />
                <h4>Credit Card Support</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_feature_part">
                <img src="/img/icon/feature_icon_2.svg" alt="#" />
                <h4>Online Order</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_feature_part">
                <img src="/img/icon/feature_icon_3.svg" alt="#" />
                <h4>Free Delivery</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_feature_part">
                <img src="/img/icon/feature_icon_4.svg" alt="#" />
                <h4>Product with Gift</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature part end */}
      {/* subscribe part here */}
      <section className="subscribe_part section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="subscribe_part_content">
                <h2>Get promotions &amp; updates!</h2>
                <p>
                  Seamlessly empower fully researched growth strategies and
                  interoperable internal or “organic” sources credibly innovate
                  granular internal .
                </p>
                <div className="subscribe_form">
                  <input type="email" placeholder="Enter your mail" />
                  <a href="#" className="btn_1">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* subscribe part end */}
    </>






  )
}

export default MyHomePage