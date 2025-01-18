import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUpdateProduct, initializeCart, removeProduct } from "../../../Components/Reducer/cartSlice";

function MyShoppingCart() {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(initializeCart()); // Load cart from sessionStorage on component mount
    }, [dispatch]);


    const updateCart = (item, newQuantity) => {
        dispatch(addUpdateProduct({ ...item, quantity: newQuantity }));
    };

    const handleRemoveProduct = (id) => {
        dispatch(removeProduct(id));
    };

    if (cart) {
        console.log('cart: ');
        console.log(cart.total);

    }

    
    return (
        <>
            {/* breadcrumb part start*/}
            <section className="breadcrumb_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner">
                                <h2>cart list</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb part end*/}
            {/*================Cart Area =================*/}
            <section className="cart_area section_padding">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {cart.items.map((item) => (
                                        <ItemCart
                                            key={item.id}
                                            item={item}
                                            updateCart={updateCart}
                                            handleRemoveProduct={handleRemoveProduct}
                                        />
                                    ))}

                                    <tr className="bottom_button">
                                        <td>
                                            <a className="btn_1" href="#">
                                                Update Cart
                                            </a>
                                        </td>
                                        <td />
                                        <td />
                                        <td>
                                            <div className="cupon_text float-right">
                                                <a className="btn_1" href="#">
                                                    Close Coupon
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td />
                                        <td />
                                        <td>
                                            <h5>Subtotal</h5>
                                        </td>
                                        <td>
                                            <h5>${cart.total.toFixed(2)}</h5>
                                        </td>
                                    </tr>
                                    <tr className="shipping_area">
                                        <td />
                                        <td />
                                        <td>
                                            <h5>Shipping</h5>
                                        </td>
                                        <td>
                                            <div className="shipping_box">
                                                <ul className="list">
                                                    <li>
                                                        Flat Rate: $5.00
                                                        <input
                                                            type="radio"
                                                            aria-label="Radio button for following text input"
                                                        />
                                                    </li>
                                                    <li>
                                                        Free Shipping
                                                        <input
                                                            type="radio"
                                                            aria-label="Radio button for following text input"
                                                        />
                                                    </li>
                                                    <li>
                                                        Flat Rate: $10.00
                                                        <input
                                                            type="radio"
                                                            aria-label="Radio button for following text input"
                                                        />
                                                    </li>
                                                    <li className="active">
                                                        Local Delivery: $2.00
                                                        <input
                                                            type="radio"
                                                            aria-label="Radio button for following text input"
                                                        />
                                                    </li>
                                                </ul>
                                                <h6>
                                                    Calculate Shipping
                                                    <i className="fa fa-caret-down" aria-hidden="true" />
                                                </h6>
                                                <select className="shipping_select">
                                                    <option value={1}>Bangladesh</option>
                                                    <option value={2}>India</option>
                                                    <option value={4}>Pakistan</option>
                                                </select>
                                                <select className="shipping_select section_bg">
                                                    <option value={1}>Select a State</option>
                                                    <option value={2}>Select a State</option>
                                                    <option value={4}>Select a State</option>
                                                </select>
                                                <input
                                                    className="post_code"
                                                    type="text"
                                                    placeholder="Postcode/Zipcode"
                                                />
                                                <a className="btn_1" href="#">
                                                    Update Details
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="checkout_btn_inner float-right">
                                <a className="btn_1" href="#">
                                    Continue Shopping
                                </a>&nbsp;
                                <a className="btn_1 checkout_btn_1" href="#">
                                    Proceed to checkout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================End Cart Area =================*/}
        </>

    )


}

const ItemCart = ({ item, updateCart, handleRemoveProduct }) => {
    const [product, setProduct] = useState(null);
    const [itemQuantity, setItemQuantity] = useState(item.quantity);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${item.id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [item.id]);

    const handleQuantityChange = (newQuantity) => {
      if (newQuantity >= 0 && newQuantity<=product.stock) {
        setItemQuantity(newQuantity);
        updateCart(item, newQuantity);
      }
    };

    if (!product) {
        return <div>Loading...</div>;
    }
        return (
            <tr>
                <td>
                    <div className="media">
                        <div className="d-flex">
                            <img src={item.thumbnail} alt="" />
                        </div>
                        <div className="media-body">
                            <p>{item.title}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <h5>${product.price}</h5>
                </td>
                <td>
                    <div className="product_count">
                        <span onClick={() => handleQuantityChange(itemQuantity - 1)} disabled={itemQuantity <= 0} className="input-number-decrement">
                            {" "}
                            <i className="ti-minus" />
                        </span>
                        <input type="text" value={itemQuantity} onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10) || 0)} />
                        <span onClick={() => handleQuantityChange(itemQuantity + 1)}  className="input-number-increment">
                            <i className="ti-plus" />
                        </span>
                    </div>
                </td>
                <td>
                    <h5>${(product.price * itemQuantity).toFixed(2)}</h5>
                </td>
                <td> {/* Added remove button */}
                    <button onClick={() => handleRemoveProduct(item.id)}>Remove</button>
                </td>
            </tr>
        );
    

}




export default MyShoppingCart;