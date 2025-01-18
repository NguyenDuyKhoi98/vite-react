import axios from "axios"

//Chờ kết của hàm bất đồng bộ thì phải sử dụng await 
// -> hàm chứa từ khóa await là hàm bất đồng bộ
// -> hàm bất đồng bộ là hàm có từ khóa async
// bắt lỗi trong hàm bất đồng bộ thì sử dụng try catch để bắt lỗi
// để lấy dữ liệu từ hàm bất đồng bộ thì sử dụng then
// để bắt lỗi từ hàm bất đồng bộ thì sử dụng catch

//Method GET/ POST / PUT / PATH / DELETE
let GetAPI = async({method, url, data, headers}) => {
    try{
        let respone = await axios({
            method: method,
            url: url,
            data: data,
            headers: headers
        });
        let kQ = respone.data
        return kQ;
    }
    catch(e){
        return e
    }
}




export {GetAPI}