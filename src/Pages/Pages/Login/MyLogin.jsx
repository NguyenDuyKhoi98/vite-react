import axios from "axios";
import { useContext, useEffect, useState } from "react";

function MyLogin() {

    if(!!localStorage.getItem('user')){
        window.location.href = '/';
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        console.log(username+' '+password)
        e.preventDefault();
        setMessage(''); // Xóa thông báo cũ

        try {
            let response = await axios.post('https://dummyjson.com/user/login', {
                username,
                password,
                expiresInMins: 30,
            });


            let data = await response.data;
            setMessage('success!');
            // Lưu trữ thông tin đăng nhập (token, user ID,...) vào localStorage hoặc sessionStorage
            localStorage.setItem('user',JSON.stringify(data))
            console.log("Dữ liệu đăng nhập:", data);

            window.location ='/';

        } catch (error) {
            setMessage(`Lỗi: ${error.message}`);
            console.log('Lỗi đăng nhập:', error);
        }
    };

    return (
        <>
            {/* breadcrumb part start*/}
            <section className="breadcrumb_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner">
                                <h2>login</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb part end*/}
            {/*================login_part Area =================*/}
            <section className="login_part section_padding ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="login_part_text text-center">
                                <div className="login_part_text_iner">
                                    <h2>New to our Shop?</h2>
                                    <p>
                                        There are advances being made in science and technology
                                        everyday, and a good example of this is the
                                    </p>
                                    <a href="#" className="btn_3">
                                        Create an Account
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="login_part_form">
                                <div className="login_part_form_iner">
                                    <h3>
                                        Welcome Back ! <br />
                                        Please Sign in now
                                    </h3>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="row contact_form"
                                        action="#"
                                        method="post"
                                        noValidate="novalidate"
                                    >
                                        <div className="col-md-12 form-group p_star">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <div className="creat_account d-flex align-items-center">
                                                <input type="checkbox" id="f-option" name="selector" />
                                                <label htmlFor="f-option">Remember me</label>
                                            </div>
                                            <button type="submit" value="submit" className="btn_3">
                                                log in
                                            </button>
                                            <a className="lost_pass" href="#">
                                                forget password?
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================login_part end =================*/}
        </>

    )
}

export default MyLogin