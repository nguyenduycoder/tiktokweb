import classNames from 'classnames/bind'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faAdd, faEarthAfrica, faEllipsisVertical, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { useAlert } from 'react-alert'
import { useSelector, useDispatch } from 'react-redux'

//faCircleXmark,
// optional
import styles from './Header.module.scss'
import images from '~/assets/images'
import Menu from '~/components/Proper/Menu'
import { useWindowDimensions } from '~/config'
import Search from '../Search'
import routesConfig from '~/config/routes'
import { BoxMessIcon, SendMessIcon } from '~/icons/icons'
import { useState } from 'react';
import ModalLogin from '~/components/ModalLogin'
import Button from '~/components/Button'
import { setUserInfo } from '~/Redux/Slices/userInfo'
import { setUrl } from '~/Redux/Slices/urlnavigation'




const cx = classNames.bind(styles)


function Header({ onlyheader, defaults, className }) {
    const navigate = useNavigate();

    const { user_id,/*name*/ } = useSelector(state => state.userInfo);
    const dispatch = useDispatch();

    const { width } = useWindowDimensions();
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const alert = useAlert()


    const DATA_MENU = [
        {
            icon: <FontAwesomeIcon icon={faEarthAfrica} />,
            title: 'English'
        },
        {
            icon: <FontAwesomeIcon icon={faQuestionCircle} />,
            title: 'Feedback and help',
            to: '/help'
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts'
        },
    ]

    const handlercloseModal = () => {
        setModalIsOpen(false)

    }
    const classesiner = cx('inner', {
        [className]: className,
        onlyheader,
        defaults
    })
    const logOut = () => {
        dispatch(setUserInfo({ user_id: '', name: '' }))
        alert.show('Bạn đã đăng xuất thành công!')
    }
    const handlerLogin = (index) => {
        setModalIsOpen(true)
        if (index === 1) { dispatch(setUrl({ url: '/' })) }
        else if (index === 2) {
            { dispatch(setUrl({ url: '/upload' })) }
        }

    }


    return <header className={cx('wrapper')}>
        <div className={classesiner}>
            <Link to={routesConfig.home} className={cx('logo')}>
                <img src={images.logo} alt='logotiktok' />
            </Link>
            {width >= 780 && <Search />}
            {user_id !== '' ?
                <div className={cx('actionuser')}>
                    <Button second href={routesConfig.upload}
                        lefticon={<FontAwesomeIcon icon={faAdd} className={cx('icon-add')} />}
                        className={cx('button-custom')}>
                        Upload
                    </Button>
                    <div className={cx('actionsendmess')}>
                        <NavLink>
                            <SendMessIcon />
                        </NavLink>
                    </div>
                    <div className={cx('actionboxmess')}>
                        <BoxMessIcon />
                    </div>
                    <div className={cx('actionavataruser')} onClick={() => logOut()}>
                        <p>D</p>
                    </div>
                </div> :
                <div className={cx('action')}>
                    <Button second onClick={() => handlerLogin(2)}
                        lefticon={<FontAwesomeIcon icon={faAdd} className={cx('icon-add')} />}
                        className={cx('button-custom')}>
                        Upload
                    </Button>

                    <Button primary onClick={() => handlerLogin(1)}>Login</Button>
                    <Menu items={DATA_MENU}>
                        <button className={cx('move-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            }
        </div>
        <ModalLogin modalIsOpen={modalIsOpen} handlercloseModal={handlercloseModal} />


    </header >
}
export default Header