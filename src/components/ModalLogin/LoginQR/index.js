
import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types'

import QRCode from 'qrcode.react';
import classNames from 'classnames/bind'
import { useSelector, useDispatch } from 'react-redux'
import ReactLoading from "react-loading";
import { useAlert } from 'react-alert'


import styles from './LoginQR.module.scss'
import { setUserInfo } from '~/Redux/Slices/userInfo';
import API from '~/utils/Services';


import { useNavigate } from 'react-router-dom'





const cx = classNames.bind(styles)
function LoginQR({ handlercloseModal, handlersetchoseModal }) {

    const navigate = useNavigate();
    const { user_id,/*name*/ } = useSelector(state => state.userInfo);
    const { url } = useSelector(state => state.urlNavigation);

    const [checkscan, setCheckscan] = useState(false)
    const [loading, setLoading] = useState(false)
    const [checkexp, setCheckexp] = useState(false)
    const [changekey, setChangekey] = useState(false)

    const alert = useAlert()

    // const { user_id, name } = useSelector(state => state.userInfo);
    const dispatch = useDispatch();
    useEffect(() => {
        let counter = 60;
        let tokenresult = ''
        setLoading(true)

        const callapiget = async () => {
            await API.getTokenQR().then(res =>
                tokenresult = res.token
            )
            setTimeout(() => { setLoading(false) }, 1500)
        }

        const settime = setInterval(() => {
            const callapi = async () => {
                let data = { token: tokenresult }
                console.log(data.token)
                await API.loginQR(data).then(res => {
                    console.log(res)
                    if (res.result.scan === 1) {
                        setCheckscan(true)
                        if (res.result.idActive !== null) {
                            dispatch(setUserInfo({ user_id: res.result.idActive, name: 'nguyen duy' }))
                            handlercloseModal()
                            handlersetchoseModal()
                            setTimeout(() => { navigate(url) }, 1000)
                            alert.show('Bạn đã đăng nhập thành công!', { type: 'success' })

                        }
                    }
                })

            }
            callapi()
            counter--
            if (counter === 0) {
                setCheckexp(true)
                setCheckscan(false)
                clearInterval(settime)
            }
        }, 1000)
        callapiget()
        return () => clearInterval(settime)
    }, [changekey])

    const handlerChangeQR = () => {
        setChangekey(!changekey)
        setCheckexp(false)
        // handlercloseModal()
    }
    return (<div className={cx('divQRContentBody')}>
        <div className={cx('divtextcontainer')} >
            <div className={cx('divcodeimage')} >
                <QRCode
                    id='qrcode'
                    value={'tiktok.com'}
                    size={180}
                    level={'H'}
                    includeMargin={true}
                />
                {loading && <div className={cx('DivCodeMask')}>
                    <div type="button" className={cx('Styledloading')} >
                        <ReactLoading type={"bubbles"} color="red" />
                    </div>
                </div>}
                {checkexp && <div className={cx('DivCodeMask')}>
                    <p className={cx('PCodeTip')}>Mã QR đã hết hạn </p>
                    <button type="button" className={cx('StyledButtonRefresh')} onClick={() => handlerChangeQR()} >
                        <svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.051 22.8851L14.4088 20.7087C14.8146 20.3341 15.4472 20.3594 15.8218 20.7652L17.1687 22.2242C17.547 22.6342 17.5169 23.2744 17.1016 23.6469L11.3567 28.8C10.5679 29.5281 9.34497 29.5591 8.58592 28.8L3.30668 23.6213C2.90974 23.2319 2.90667 22.5935 3.29985 22.2003L4.70724 20.7929C5.09776 20.4024 5.73093 20.4024 6.12145 20.7929L8.05023 22.7217C8.70151 14.4828 15.5936 8 23.9999 8C32.8365 8 39.9999 15.1634 39.9999 24C39.9999 32.8366 32.8365 40 23.9999 40C20.0354 40 16.4047 38.5559 13.6104 36.1683C13.1906 35.8095 13.1823 35.1738 13.5665 34.777L14.9578 33.3402C15.3419 32.9435 15.9726 32.9369 16.3997 33.287C18.4702 34.9839 21.1147 36 23.9999 36C30.6273 36 35.9999 30.6274 35.9999 24C35.9999 17.3726 30.6273 12 23.9999 12C17.7484 12 12.6135 16.7804 12.051 22.8851Z"></path></svg>
                    </button>
                </div>}

                {checkscan && !checkexp && <div className={cx('DivCodeMask')}>
                    <span className={cx('SpanSuccessIcon')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" width="2em" height="2em">
                            <path fill="#0BE09B" fillRule="evenodd" d="M42.692 12.722a1 1 0 01-.03 1.414L18.886 36.944a2 2 0 01-2.8-.03L5.294 26.121a1 1 0 010-1.414l1.414-1.414a1 1 0 011.414 0l9.408 9.408 22.365-21.452a1 1 0 011.414.03l1.384 1.443z" clipRule="evenodd"></path></svg>
                    </span>
                    <p className={cx('PCodeTip')}>Đã quét mã QR</p>
                </div>}
            </div>
            <div className={cx('divstepcontainer')}>
                <p className={cx('pstep')} >1. Mở ứng dụng TikTok trên thiết bị di động của bạn</p>
                <p className={cx('pstep')}>2. Trên Hồ sơ, nhấn vào <svg width="16" height="16" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13.0001 13C13.0001 9.68629 15.6864 7 19.0001 7C22.3139 7 25.0001 9.68629 25.0001 13C25.0001 16.3137 22.3139 19 19.0001 19C15.6864 19 13.0001 16.3137 13.0001 13ZM19.0001 3C13.4773 3 9.00015 7.47715 9.00015 13C9.00015 18.5228 13.4773 23 19.0001 23C24.523 23 29.0001 18.5228 29.0001 13C29.0001 7.47715 24.523 3 19.0001 3ZM5.19435 40.9681C6.70152 35.5144 10.0886 32.2352 13.9162 30.738C17.7125 29.2531 22.0358 29.4832 25.6064 31.2486C26.1015 31.4934 26.7131 31.338 26.9931 30.8619L28.0072 29.1381C28.2872 28.662 28.1294 28.0465 27.6384 27.7937C23.0156 25.4139 17.4034 25.0789 12.4591 27.0129C7.37426 29.0018 3.09339 33.3505 1.2883 40.0887C1.14539 40.6222 1.48573 41.1592 2.02454 41.2805L3.97575 41.7195C4.51457 41.8408 5.04724 41.5004 5.19435 40.9681ZM37.0002 26C37.5525 26 38.0002 26.4477 38.0002 27V34H45.0002C45.5525 34 46.0002 34.4477 46.0002 35V37C46.0002 37.5523 45.5525 38 45.0002 38H38.0002V45C38.0002 45.5523 37.5525 46 37.0002 46H35.0002C34.448 46 34.0002 45.5523 34.0002 45V38H27.0002C26.448 38 26.0002 37.5523 26.0002 37V35C26.0002 34.4477 26.448 34 27.0002 34H34.0002V27C34.0002 26.4477 34.448 26 35.0002 26H37.0002Z"></path></svg></p>
                <p className={cx('pstep')}>3. Nhấn vào <svg width="16" height="16" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 17V10C6 7.79086 7.79086 6 10 6H17C17.5523 6 18 6.44772 18 7V9C18 9.55228 17.5523 10 17 10H11C10.4477 10 10 10.4477 10 11V17C10 17.5523 9.55228 18 9 18H7C6.44772 18 6 17.5523 6 17ZM42 17V10C42 7.79086 40.2091 6 38 6H31C30.4477 6 30 6.44772 30 7V9C30 9.55228 30.4477 10 31 10H37C37.5523 10 38 10.4477 38 11V17C38 17.5523 38.4477 18 39 18H41C41.5523 18 42 17.5523 42 17ZM42 38V31C42 30.4477 41.5523 30 41 30H39C38.4477 30 38 30.4477 38 31V37C38 37.5523 37.5523 38 37 38H31C30.4477 38 30 38.4477 30 39V41C30 41.5523 30.4477 42 31 42H38C40.2091 42 42 40.2091 42 38ZM6 31V38C6 40.2091 7.79086 42 10 42H17C17.5523 42 18 41.5523 18 41V39C18 38.4477 17.5523 38 17 38H11C10.4477 38 10 37.5523 10 37V31C10 30.4477 9.55228 30 9 30H7C6.44772 30 6 30.4477 6 31ZM7 22C6.44772 22 6 22.4477 6 23V25C6 25.5523 6.44772 26 7 26H41C41.5523 26 42 25.5523 42 25V23C42 22.4477 41.5523 22 41 22H7Z"></path></svg> rồi quét mã QR để xác nhận thông tin đăng nhập của bạn</p>
            </div>
        </div>
        <img src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/b6d3cc69d3525571aef0.gif" className={cx('imagetip')} alt="imagett" />
    </div>)
}
export default LoginQR