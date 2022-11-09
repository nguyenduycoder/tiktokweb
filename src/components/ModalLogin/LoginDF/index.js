
import { useState } from 'react';
// import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { useSelector, useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'


import styles from './LoginDF.module.scss'
import { setUserInfo } from '~/Redux/Slices/userInfo';
// import API from '~/utils/Services';


import { useNavigate } from 'react-router-dom'
import Button from '~/components/Button';





const cx = classNames.bind(styles)
function LoginDF({ handlercloseModal, handlersetchoseModal }) {

    const navigate = useNavigate();

    const { url } = useSelector(state => state.urlNavigation);

    const alert = useAlert()

    // const { user_id, name } = useSelector(state => state.userInfo);
    const dispatch = useDispatch();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handlerSubmit = () => {
        if (username === 'admin' && password === 'admin') {

            dispatch(setUserInfo({ user_id: 1, name: 'nguyen duy' }))
            handlercloseModal()
            handlersetchoseModal()
            alert.show('Bạn đã đăng nhập thành công!', { type: 'success' })




        }
    }

    return (<div className={cx('div-form')}>
        <div className={cx('div-emailname')}>Email or username</div>
        <form>
            <div className={cx('DivInputContainer')}>
                < input type="text" placeholder="Email or username" name="username" className={cx('InputContainer')} value={username} onChange={(e) => setUsername(e.target.value)} />
                <div className={cx('DivIconContainer')}></div>
            </div>
            <div className={cx('DivContainer')}>
                <div className={cx('DivInputContainer')}>
                    <input type="password" placeholder="Password" autocomplete="new-password" className={cx('InputContainer')} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className={cx('DivIconContainer')}>
                        <i className={cx('IPasswordIcon')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="1em" height="1em"><g stroke="#161823" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" opacity="0.5"><path d="M2.8 7.8c2.1 1 4.5 1.6 7 1.6s4.9-.6 7-1.6M9.8 9.8v3M5.1 9.2l-1.5 2.6M14.6 9.2l1.5 2.6"></path></g></svg>
                        </i>
                    </div>
                </div>
            </div>
            <a href="">Forgot password?</a>
            <div>
                <Button primary onClick={() => handlerSubmit()}>Log in</Button>
            </div>
        </form>
    </div>)
}
export default LoginDF