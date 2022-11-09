import { useState } from 'react';
// import PropTypes from 'prop-types'
import Modal from 'react-modal';
import classNames from 'classnames/bind'



import styles from './ModalLogin.module.scss'
import { BackIcon, CloseIcon, OnePeoIcon, QRIcon } from '~/icons/icons';
import { NavLink } from 'react-router-dom';
import LoginQR from './LoginQR';
import LoginDF from './LoginDF';



const cx = classNames.bind(styles)
function ModalLogin({ modalIsOpen, handlercloseModal }) {
    const [chose, setChose] = useState(0)

    const handlersetchoseModal = () => {
        setChose(0)
    }



    return (
        <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            ariaHideApp={false}
            onRequestClose={handlercloseModal}
            shouldCloseOnOverlayClick={false}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    borderColor: 'transparent',
                    outline: "none",
                    // WebkitOverflowScrolling: "touch",
                },
                overlay: {
                    backgroundColor: '#0f0f0f80',
                    disable: true,
                    zIndex: 50,
                    position: "fixed",
                }
            }}
        // contentLabel="Example Modal"
        >

            <div className={cx('wraper-modal')}>
                <div className={cx('content-modal')}>
                    <div className={cx('login-container')}>
                        <div className={cx('divlogincontainer')}>
                            {chose !== 0 && <div className={cx('divtitle')}>Đăng nhập {chose === 1 && 'bằng mã QR'}</div>}
                            {chose === 2 &&
                                <LoginDF />
                            }
                            {chose === 1 &&
                                <LoginQR handlercloseModal={handlercloseModal} handlersetchoseModal={handlersetchoseModal} />
                            }
                            {chose === 0 &&
                                <div className={cx('divhomecontainer')}>
                                    <div className={cx('divtitle')}>Đăng nhập vào TikTok</div>
                                    <NavLink className={cx('alink')} onClick={() => setChose(1)} >
                                        <div className={cx('divbox')}>
                                            <div className={cx('divname')}>
                                                <QRIcon />
                                            </div>
                                            Sử dụng mã QR
                                        </div>
                                    </NavLink>
                                    <NavLink className={cx('alink')} onClick={() => setChose(2)}>
                                        <div className={cx('divbox')}>
                                            <div className={cx('divname')}>
                                                <OnePeoIcon />
                                            </div>
                                            Số điện thoại / Email / TikTok ID
                                        </div>
                                    </NavLink>
                                </div>
                            }

                        </div>
                    </div>
                    <div className={cx('signup-container')}>
                        <div>bạn không có tài khoản ?</div>
                    </div>
                </div>
                <div className={cx('close-modal')} onClick={() => handlercloseModal()}>
                    <CloseIcon />
                </div>
                {chose !== 0 &&
                    <div className={cx('back-modal')} onClick={() => setChose(0)}>
                        <BackIcon />
                    </div>}

            </div>
        </Modal>
    );
}
ModalLogin.propTypes = {
    // data: PropTypes.object.isRequired
}

export default ModalLogin