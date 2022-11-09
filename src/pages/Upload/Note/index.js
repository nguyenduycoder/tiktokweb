import classNames from 'classnames/bind'
import { forwardRef, useEffect, useRef, useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { useDebounce } from '~/hook'
import API from '~/utils/Services'


import styles from './Note.module.scss'



const cx = classNames.bind(styles)


function Note(props, ref) {
    const refinput = useRef(null)

    const [resultSuggest, SetResultSuggest] = useState([])
    const [resultRecent, SetResultRecent] = useState([])
    const [nameFriend, setNameFriend] = useState('')
    const debouned = useDebounce(nameFriend, 800)

    useEffect(() => {


        const callapi = async () => {
            const type = 'less'
            await API.getUserType(type).then(res => {
                SetResultSuggest(res.result)
                SetResultRecent(res.result.slice(0, 1))
            }
            )
        }
        callapi()

    }, [])
    // useEffect(() => {
    //     setTimeout(() => { refinput.current.focus() }, 200)
    // }, [props.showFriend])



    useEffect(() => {
        const callapi2 = async () => {
            const type = 'less'
            await API.getUserType(type).then(res => {
                SetResultSuggest(res.result)

            }
            )
        }
        if (!debouned.trim()) {
            callapi2()
            return;
        }
        const callapi = async () => {

            await API.getUserSearch(debouned).then(res => {
                SetResultSuggest(res.result)
            })
        }
        callapi();
    }, [debouned])

    // const handlerAddFriend = () => {
    //     setShowFriend(!showFriend)
    // }



    return (
        <div className={cx('caption-wrap')}>
            <div className={cx('container-form')}>
                <div className={cx('jsx-1717967343')} style={{ visibility: !props.showFriend ? 'visible' : 'hidden' }}>
                    <div className={cx('text-container')}>
                        <span className={cx('text-v1')}>Caption</span>
                        <span className={cx('require-font')}>
                            <span className={cx('text-v2')}>{props.note.length}</span>/ 150</span>
                    </div>
                    <div className={cx('note-input')}>
                        <div className={cx('note-container-v2')}>
                            <div className={cx('note-editor')}>
                                <div className={cx('note-draftEditor-alignLeft')}>
                                    <div className={cx('note-editorContainer')}>
                                        <div className={cx('note-public-DraftEditor-content')}>
                                            <div className={cx('note-DraftStyleDefault')}>
                                                <ContentEditable
                                                    innerRef={ref}
                                                    html={props.note}
                                                    onChange={props.handlerSetnote}
                                                    className={cx('inputEditable')}
                                                    spellCheck={false} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('note-icon-stylev1')} onClick={props.handlerAddFriend}>
                                <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/at.062a03e9.svg" alt="@" />
                            </div>
                            <div className={cx('note-icon-stylev2')} onClick={props.handlerAddHtag}>
                                <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/hashtag.234f1b9c.svg" alt="htag" /></div>
                        </div>
                    </div>
                </div>
                <div className={cx('container-at2')} style={{ visibility: !props.showFriend ? 'hidden' : 'visible' }}>
                    <span className={cx('title-font-v2')}>@ Friends</span>
                    <div className={cx('inputfriend-v2')}>
                        <div>
                            <div className={cx('input-container-v2')}>
                                <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/search.a65ed16d.svg" className={cx('search-icon')} alt='hehe' />
                                <input ref={refinput} className={cx('search-friends')} value={nameFriend} onChange={(e) => setNameFriend(e.target.value)} />
                                <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/close.ab98f6c7.svg" className={cx('close-icon')} onClick={props.handlerCloseFriend} alt='hehe' />
                            </div>
                            <div className={cx('content-list')}>
                                <div className={cx('scrollparent')}>
                                    <div>
                                        <div className={cx('container-list')}>
                                            <div className={cx('user-col')}>
                                                <div className={cx('title')}>Following</div>
                                                {resultSuggest.map((res, index) => {
                                                    return (<div className={cx('container-user')} key={index} onClick={() => props.handlerGetnickname(res.nickname)} >
                                                        <img src={res.avatar} alt="hello" />
                                                        <div className={cx('info-user')}>
                                                            <span className={cx('fullname')}>{res.full_name}</span>
                                                            <span className={cx('nickname')}>@{res.nickname}</span>
                                                        </div>
                                                    </div>)
                                                })
                                                }

                                            </div>
                                            <div className={cx('user-col')}>
                                                <div className={cx('title')}>Recent</div>
                                                {resultRecent.map((res, index) => {
                                                    return (<div className={cx('container-user')} key={index} >
                                                        <img src={res.avatar} alt="hello" />
                                                        <div className={cx('info-user')}>
                                                            <span className={cx('fullname')}>{res.full_name}</span>
                                                            <span className={cx('nickname')}>@{res.nickname}</span>
                                                        </div>
                                                    </div>)
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

Note.propTypes = {

}
export default forwardRef(Note)