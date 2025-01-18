import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { GetAPI } from '../../../Components/API';

function MyProductList() {

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



    // làm menu
    const [dMenu, setDMenu] = useState([]);
    useEffect(() => {
        GetAPI({ url: 'https://dummyjson.com/products/category-list', method: 'GET' })
            .then(kQ => setDMenu(kQ))
            .catch(e => console.log(e))
    }, [])


    const [currentPage, setCurrentPage] = useState(1);

    let limitItem = 4;


    // làm danh sách sản phẩm
    const [data, setData] = useState({ product: [], isLoading: false })
    const [totalPage, setTotalPage] = useState(0);
    const { cat, sort, page } = useParams();
    console.log('cat: ' + cat);
    console.log('sort: ' + sort);
    console.log('page = ' + page);

    let sort_value = 'id';
    let order_value = 'desc';

    if (sort == 'newest') {
        sort_value = 'id';
        order_value = 'desc';
    }
    else if (sort == 'oldest') {
        sort_value = 'id';
        order_value = 'asc';

    }
    else if (sort == 'cheapest') {
        sort_value = 'price';
        order_value = 'asc';

    }
    else if (sort == 'most-expensive') {
        sort_value = 'price';
        order_value = 'desc';

    }
    else if (sort == 'best-rating') {
        sort_value = 'rating';
        order_value = 'desc';

    }


    let sanpham_url = '';
    if (cat == 'all')
        sanpham_url = `https://dummyjson.com/products?limit=${limitItem}&skip=${page >= 1 ? (page - 1) * limitItem : 0}&sortBy=${sort_value}&order=${order_value}`;
    else if (cat != 'all') sanpham_url = `https://dummyjson.com/products/category/${cat}?limit=${limitItem}&skip=${page >= 1 ? (page - 1) * limitItem : 0}&sortBy=${sort_value}&order=${order_value}`;
    else console.log('Lỗi đường link');

    useEffect(() => {
        GetAPI({
            method: 'GET',
            url: sanpham_url
        })
            .then(
                kQ => {
                    console.log('url: ' + sanpham_url);
                    setData({ product: kQ.products, isLoading: true });
                    setTotalPage(Math.ceil(kQ.total / limitItem));
                }
            )
            .catch(e => console.error(e));
    }, [cat, sanpham_url, currentPage])//Thêm biến toàn cục vào tham số trong useEffect


    if (data.isLoading) {
        return (
            <>
                {/* breadcrumb part start*/}
                <section className="breadcrumb_part">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb_iner">
                                    <h2>product list</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb part end*/}
                {/* product list part start*/}
                <section className="product_list section_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="product_sidebar">
                                    <div className="single_sedebar">
                                        <form action="#">
                                            <input type="text" name="#" placeholder="Search keyword" />
                                            <i className="ti-search" />
                                        </form>
                                    </div>
                                    <div className="single_sedebar">
                                        <div className="select_option">
                                            <div className="select_option_list">
                                                Category <i className="right fas fa-caret-down" />{" "}
                                            </div>
                                            <div className="select_option_dropdown">
                                                <p>
                                                    <a href={'/product-list/all/id/1'}>All</a>
                                                </p>

                                                {/* category từ api */}
                                                {
                                                    dMenu.map((v, i) => (i < 8) ? <p key={i}><Link to={`/product-list/${v}/newest/1`} className="nav-item nav-link" onClick={() => { setValueMenu(v) }}>{v}</Link></p> : '')
                                                }



                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_sedebar">
                                        <div className="select_option">
                                            <div className="select_option_list">
                                                Sort <i className="right fas fa-caret-down" />{" "}
                                            </div>
                                            <div className="select_option_dropdown">

                                                {/* sort */}

                                                <p style={sort == 'newest' ? { fontWeight: 'bold' } : {}}>
                                                    <a href={`/product-list/${cat}/newest/1`}>Newest</a>
                                                </p>
                                                <p style={sort == 'oldest' ? { fontWeight: 'bold' } : {}}>
                                                    <a href={`/product-list/${cat}/oldest/1`}>Oldest</a>
                                                </p>
                                                <p style={sort == 'cheapest' ? { fontWeight: 'bold' } : {}}>
                                                    <a href={`/product-list/${cat}/cheapest/1`}>Cheapest</a>
                                                </p>
                                                <p style={sort == 'most-expensive' ? { fontWeight: 'bold' } : {}}>
                                                    <a href={`/product-list/${cat}/most-expensive/1`}>Most Expensive</a>
                                                </p>
                                                <p style={sort == 'best-rating' ? { fontWeight: 'bold' } : {}}>
                                                    <a href={`/product-list/${cat}/best-rating/1`}>Best Rating</a>
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="product_list">
                                    <div className="row">

                                        {/* danh sách sp từ api */}
                                        {
                                            data.product.map(i => <ItemProduct key={i.id} data={i} />)
                                        }


                                    </div>

                                    <PhanTrang key={1} cat={cat} sort={sort} page={page} totalPage={totalPage} />


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* product list part end*/}
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
    else {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img  src="/img/mygif.gif" alt="logo" />
            </div>
            
        )
    }


}

let PhanTrang = ({ page, totalPage, cat, sort }) => {

    let dsTrang = [];


    if (totalPage <= 7) {
        for (let i = 1; i <= totalPage; i++) {
            dsTrang.push(
                <li className="page-item"><a style={page == i ? { fontWeight: 'bold' } : {}} className="page-link" href={`/product-list/${cat}/${sort}/${i}`}>{i}</a></li>
            );
        }
    } else {
        dsTrang.push(
            <li className="page-item"><a style={page == 1 ? { fontWeight: 'bold' } : {}} className="page-link" href={`/product-list/${cat}/${sort}/1`}>1</a></li>
        );

        if (page > 4) {
            dsTrang.push(
                <li className="page-item"><a className="page-link" >...</a></li>
            )
        }

        let start = Math.max(2, Number(page) - 2);
        let end = Math.min(Number(totalPage) - 1, Number(page) + 2);

        for (let i = start; i <= end; i++) {
            dsTrang.push(
                <li className="page-item"><a style={page == i ? { fontWeight: 'bold' } : {}} className="page-link" href={`/product-list/${cat}/${sort}/${i}`}>{i}</a></li>
            )
        }

        if (end < totalPage - 1) {
            dsTrang.push(
                <li className="page-item"><a class="page-link" >...</a></li>
            )
        }

        dsTrang.push(
            <li className="page-item"><a style={page == totalPage ? { fontWeight: 'bold' } : {}} className="page-link" href={`/product-list/${cat}/${sort}/${totalPage}`}>
                {totalPage}
            </a></li>
        )
    }

    return (
        <nav aria-label="Page navigation example" style={{ display: 'grid', placeItems: 'center' }} >
            <ul className="pagination">
                <li className="page-item"><a class="page-link" href={`/product-list/${cat}/${sort}/${page == 1 ? 1 : (page - 1)}`}>Previous</a></li>

                {
                    dsTrang
                }

                <li className="page-item"><a class="page-link" href={`/product-list/${cat}/${sort}/${page == totalPage ? totalPage : (page + 1)}`}>Next</a></li>
            </ul>
        </nav>
    )

}


let ItemProduct = ({ data }) => {
    return (
        <div className="col-lg-6 col-sm-6">
            <div className="single_product_item">
                <Link to={`/details/${data.id}`}>
                    <img
                        src={data.thumbnail}
                        alt="#"
                        className="img-fluid"
                    />
                    <h3>
                        {" "}
                        <a>
                            {data.title}
                        </a>{" "}
                    </h3>
                    <p>${data.price}</p>
                </Link>

            </div>
        </div>
    )
}

export default MyProductList;