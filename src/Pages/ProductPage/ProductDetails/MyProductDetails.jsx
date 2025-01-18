import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { GetAPI } from '../../../Components/API';
import axios from "axios";


function MyProductDetails() {

    
    let cart = JSON.parse(sessionStorage.getItem('cart')) ?? [];

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


    const { id } = useParams();


    const [cartQuantity, setCartQuantity] = useState(0);


    const [spdata, setSpData] = useState({ product: {}, isLoading: false });
    useEffect(() => {
        GetAPI({
            method: 'GET',
            url: `https://dummyjson.com/products/${id}`
        })
            .then(
                kQ => {
                    setSpData({ product: kQ, isLoading: true });



                }
            ).then(
                () => {
                    if (spdata.isLoading) {
                        console.log('kết quả product:')
                        console.log(spdata.product);
                    }
                    // console.log('ảnh 0: '+spdata.product.images[1]);


                    // spdata.product.images.map(
                    //     i => console.log('info ảnh: ' + i)
                    // )
                }
            )
            .catch(e => console.log(e));
    }, [id]);

    const [quantity, setQuantity] = useState(1);


    let them_CapNhat_SPGH = () => {
        cart = JSON.parse(sessionStorage.getItem('cart')) ?? [];
        
        if(Number(id)>0)
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(kq => {
                // tìm sản phẩm có tồn tại trong giỏ hàng hay không
                let sanpham = cart.find(i => i.id == kq.data.id);
    
                // sanpham đang tham chiếu đến một phần tử cụ thể trong mảng cart chứ không phải tạo ra một bản sao
                // không phải là 2 biến độc lập
                // => biến tạm sanpham thay đổi số lượng thì giá trị của biến gốc trong cart[] cũng tăng theo.
    
                if (!sanpham) {
                    cart.push({
                        id: kq.data.id,
                        thumbnail: kq.data.thumbnail,
                        title: kq.data.title,
                        price: kq.data.price,
                        quantity: quantity
    
                    });
                    
    
                } else {
                    sanpham.quantity+=quantity;
                }
    
                sessionStorage.setItem('cart', JSON.stringify(cart));

                alert('Thêm vào giỏ hàng thành công')
            })
            .catch(e => console.log(e))
    }


    if (spdata.isLoading) {
        return (

            <>
                {/* breadcrumb part start*/}
                <section className="breadcrumb_part single_product_breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb_iner"></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb part end*/}
                {/*================Single Product Area =================*/}
                <div className="product_image_area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">

                                <OwlCarousel className="owl-carousel testimonial-carousel" {...options}>

                                    {
                                        spdata.product.images.map(i => <ItemPicture key={i} data={i} />)
                                    }



                                </OwlCarousel>

                            </div>
                            <div className="col-lg-8">
                                <div className="single_product_text text-center">
                                    <h3>
                                        {
                                            spdata.product.title
                                        }
                                    </h3>
                                    <p>
                                        {
                                            spdata.product.description
                                        }
                                    </p>
                                    <div className="card_area">
                                        <div className="product_count_area">
                                            <p>Quantity</p>
                                            <div className="product_count d-inline-block">
                                                <span 
                                                    onClick={()=>{quantity>0?setQuantity(quantity-1):{}}} 
                                                    className="product_count_item inumber-decrement">
                                                    {" "}
                                                    <i className="ti-minus" />
                                                </span>
                                                <input
                                                    className="product_count_item input-number"
                                                    type="text"
                                                    value={quantity}
                                                    min={Math.min(1,spdata.product.stock)}
                                                    max={spdata.product.stock}
                                                    onChange={(e) => setQuantity(e.target.value)}
                                                />
                                                <span 
                                                    onClick={()=>{quantity<spdata.product.stock?setQuantity(quantity+1):alert('vượt quá số lượng tồn')}}
                                                    className="product_count_item number-increment">
                                                    {" "}
                                                    <i className="ti-plus" />
                                                </span>
                                            </div>
                                            <p>${spdata.product.price}</p>
                                        </div>
                                        <div className="add_to_cart">
                                            <a className="btn_3" onClick={()=>them_CapNhat_SPGH()}>
                                                add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*================End Single Product Area =================*/}
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

let ItemPicture = ({ data }) => {
    return (
        <div className="single_product_img">
            <img
                style={{ height: '300px', width: '100%', objectFit: 'contain' }}
                src={data}
                alt="#"
                className="img-fluid"
            />
        </div>
    )
}

export default MyProductDetails;


