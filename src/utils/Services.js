import callApi from "./Api"
const HOST = 'http://192.168.1.5:3001/api/';

const API = {
    //auth
    loginQR: (form) => {
        let url = HOST + 'login/checkTokenQR'
        let data = form
        console.log(data)
        return callApi(url, 'POST', data)
    },
    getTokenQR: () => {
        let url = HOST + 'login/createQR'

        return callApi(url, 'GET', null)
    },
    getUserSearch: (q) => {
        let url = HOST + `user/search?q=${q}&type=less`
        // let data = form
        return callApi(url, 'GET', null)
    },
    getUserType: (type) => {
        let url = HOST + `user?q=''&type=${type}`
        // let data = form
        return callApi(url, 'GET', null)
    },
    getUser: (id) => {
        let url = HOST + `user/details/${id}`
        // let data = form
        return callApi(url, 'GET', null)
    },
    uploadVideo: (form) => {
        let url = HOST + 'upload/video'
        let data = form
        return callApi(url, 'POST', data)
    },
    getVideo: () => {
        let url = HOST + 'upload/getallvideo'

        return callApi(url, 'GET', null)
    },
    getVideobyiduser: (iduser) => {
        let url = HOST + `upload/video/${iduser}`

        return callApi(url, 'GET', null)
    }
}
export default API;