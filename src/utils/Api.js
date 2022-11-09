import axios from 'axios';

export default function callApi(url, method, data) {

    return new Promise(function (resolve, reject) {
        axios({
            method,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            },
            url,
            data,
            timeout: 5000
        }).then(res => {
            const { data } = res;
            if (typeof data == 'object' || Array.isArray(data)) {
                resolve(data);
            } else {
                reject({ message: 'Có lỗi xảy ra! Vui lòng thử lại', err: 1 });
            }
        }).catch(async (error) => {
            if (error.response) {
                const { data } = error.response;
                if (typeof data == 'object' || Array.isArray(data)) {
                    resolve(data);
                } else {
                    reject({ message: 'Có lỗi xảy ra! Vui lòng thử lại', err: 1 });
                }
            } else if (error.request) {
                reject({ message: 'Lỗi kết nối mạng!', err: 1 });
            } else {
                reject({ message: 'Có lỗi xảy ra! Vui lòng thử lại', err: 1 });
            }
        })
    })
}