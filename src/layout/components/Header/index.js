import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faAdd, faEarthAfrica, faEllipsisVertical, faKeyboard } from '@fortawesome/free-solid-svg-icons' //faCircleXmark,
// optional
import styles from './Header.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button'
import Menu from '~/components/Proper/Menu'
import { useWindowDimensions } from '~/config'
import Search from '../Search'
import routesConfig from '~/config/routes'



const cx = classNames.bind(styles)


function Header() {

    const { width } = useWindowDimensions();

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



    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to={routesConfig.home} className={cx('logo')}>
                <img src={images.logo} alt='logotiktok' />
            </Link>
            {width >= 780 && <Search />}

            <div className={cx('action')}>
                <Button second href={routesConfig.upload}
                    lefticon={<FontAwesomeIcon icon={faAdd} className={cx('icon-add')} />}
                    className={cx('button-custom')}>
                    Upload
                </Button>
                <Button primary onClick={() => alert('xin chào đến tiktok')}>Login</Button>
                <Menu items={DATA_MENU}>
                    <button className={cx('move-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>


            </div>
        </div>
    </header>
}
export default Header