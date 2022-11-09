import { useState, useRef, useEffect } from 'react'
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'



import { Wrapper as ProperWrapper } from '~/components/Proper'
import AccountItem from '~/components/AccountItem'
import AccSearchingItem from '~/components/AccSearchingItem'
import styles from './Search.module.scss'
import { useDebounce } from '~/hook';
import API from '~/utils/Services';


const cx = classNames.bind(styles)
function Search() {
    const [searchValue, setsearchValue] = useState('');
    const [searchResult, setsearchResult] = useState([]);
    const [showResult, setshowResult] = useState(true)
    const [showLoading, setshowLoading] = useState(false)

    const debouned = useDebounce(searchValue, 800)

    const inputref = useRef()
    useEffect(() => {
        if (!debouned.trim()) {
            setsearchResult([])
            return;
        }


        const callapi = async () => {
            setshowLoading(true)
            await API.getUserSearch(debouned).then(res => {
                setsearchResult(res.result)
            })
            setshowLoading(false)
        }
        callapi();
    }, [debouned])

    const handlerClear = () => {
        setsearchValue('')
        setsearchResult([])
        inputref.current.focus()
    }
    const handlerOutSide = () => {
        setshowResult(false)
    }
    const handlerInput = (e) => {
        const searchinput = e.target.value
        if (!searchinput.startsWith(' ')) {
            setsearchValue(searchinput)
        }

    }

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0 && searchValue !== ''}
                onClickOutside={handlerOutSide}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <ProperWrapper>
                            <div className={cx('search-accounts')}>
                                <AccSearchingItem result={searchValue} />
                                <h4 className={cx('search-title')}>Accounts</h4>
                                {searchResult.map((result) => {
                                    return <AccountItem key={result.id} data={result} />
                                })}
                                <div className={cx('search-allresult')}>
                                    <p>Xem tất cả kết quả dành cho "{searchValue}"</p>
                                </div>
                            </div>
                        </ProperWrapper>
                    </div>

                )}>
                <div className={cx('search')}>
                    <input
                        ref={inputref}
                        value={searchValue}
                        placeholder='Search accounts and videos'
                        spellCheck={false}
                        onChange={handlerInput}
                        onFocus={() => setshowResult(true)}
                    >
                    </input>
                    {searchValue !== '' && !showLoading && <button className={cx('clear')} onClick={handlerClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>}
                    {showLoading &&
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                    }


                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

            </HeadlessTippy>
        </div>

    )
}
export default Search