import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faEarthAfrica, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons' //faCircleXmark,
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useState } from 'react'
import { Wrapper as ProperWrapper } from '~/components/Proper'
import AccountItem from '~/components/AccountItem'
import AccSearchingItem from '~/components/AccSearchingItem'
import Button from '~/components/Button'
import Menu from '~/components/Proper/Menu'
import { useWindowDimensions } from '~/config'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'



const cx = classNames.bind(styles)


function Header() {
    const [searchResult, setsearchResult] = useState([]);
    const { width } = useWindowDimensions();
    setTimeout(() => { setsearchResult([]) }, 1000)

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
            <div className={cx('logo')}>
                <img src={images.logo} alt='logotiktok' />
            </div>
            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <ProperWrapper>
                            <div className={cx('search-accounts')}>
                                <AccSearchingItem result={searchResult[0]} />
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <div className={cx('search-allresult')}>
                                    <p>Xem tất cả kết quả dành cho "{searchResult[0]}"</p>
                                </div>
                            </div>
                        </ProperWrapper>
                    </div>

                )}>
                {width >= 780 && <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false}></input>

                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    {/* <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button> */}


                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>}

            </Tippy>
            <div className={cx('action')}>
                <Button second href='/upload'
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