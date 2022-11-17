import Button from "~/components/Button";


import classNames from 'classnames/bind'
import styles from './Profile.module.scss'
import { useEffect, useState } from "react";
import API from "~/utils/Services";
import { NavLink } from "react-router-dom";
import Videocustom from "~/components/Videocustom";
import VideoBoxItem from "./VideoBoxItem";
import Viewtostring from "~/config/convertView";





const cx = classNames.bind(styles)

function Profile() {
    const name = window.location.pathname.slice(2)
    const [transform, setTranform] = useState(false)
    const [result, setResult] = useState(null)
    const [datavideo, setDataVideo] = useState([])
    const [indexvideo, setIndexVideo] = useState(0)
    // const { data } = useParams();
    useEffect(() => {


        const callapi = async () => {
            await API.getUserSearch(name).then(res => {
                setResult(res.result[0])

            })
        }
        callapi();
    }, [name])
    useEffect(() => {
        if (result !== null) {
            const calldata = async () => {
                await API.getVideobyiduser(result?.id).then(res => {
                    setDataVideo(res.result)
                })
            }
            calldata()
        }

    }, [result?.id])

    const handlertranform = () => {
        setTranform(true)
    }
    const handlertranform2 = () => {
        setTranform(false)
    }

    const handerGetID = (index) => {
        if (index !== indexvideo) {
            setIndexVideo(index)
        }

    }


    const styles = { transform: `translateX(${transform ? 230 : 0}px)` }

    const likeconver = Viewtostring(result?.likes_count, 1)
    const followconver = Viewtostring(result?.followers_count, 1)
    const followingconver = Viewtostring(result?.followings_count, 1)
    return (
        <div className={cx('container')}>
            <div className={cx('contentv1')}>
                <div className={cx('content-info')}>
                    <div className={cx('info-v1')}>
                        <div className={cx('avt-info')} >
                            <span shape="circle" data-e2e="" className={cx('spanavatar')}>
                                <img loading="lazy" src={result?.avatar} alt="hehe" />
                            </span>
                        </div>
                        <div className={cx('name-info')}>
                            <h2 data-e2e="user-title" className={cx('nickname')}>{result?.nickname}
                                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#20D5EC"></circle><path fillRule="evenodd" clipRule="evenodd" d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z" fill="white"></path></svg>
                            </h2>
                            <h1 data-e2e="user-subtitle" className={cx('fullname')}>{result?.full_name}</h1>
                            <div className={cx('button-info')}>
                                <Button primary className={cx('btnstyle')}>Follow</Button>
                            </div>
                        </div>
                    </div>
                    <h2 className={cx('countinfo')}>
                        <div className={cx('content-v2')}><strong title="Đang Follow" data-e2e="following-count">{followingconver}</strong><span data-e2e="following" className={cx('title')}>Đang Follow</span></div>
                        <div className={cx('content-v2')}><strong title="Follower" data-e2e="followers-count">{followconver}</strong><span data-e2e="followers" className={cx('title')}>Follower</span></div>
                        <div className={cx('content-v2')}><strong title="Thích" data-e2e="likes-count">{likeconver}</strong><span data-e2e="likes" className={cx('title')}>Thích</span></div>
                    </h2>
                    <h2 data-e2e="user-bio" className={cx('content-bio')}>{result?.bio}</h2>
                    <div className={cx('navlink')}>

                    </div>
                    <div className={cx('btn-share')}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5546 8.35111L13.3171 8.16468V7.37972V3.50006L21.4998 12.0001L13.3171 20.5001V16.3738V15.3664L12.3098 15.3738C8.838 15.3994 5.4275 17.0466 2.49983 19.5882C2.54612 19.2536 2.67769 18.641 2.94391 17.8329C3.3786 16.5132 4.01326 15.1988 4.88691 13.971C6.71045 11.4083 9.24414 9.16046 12.5546 8.35111Z" stroke="#161823" strokeWidth="2"></path></svg></div>
                    <div data-e2e="user-more" className={cx('btn-menu')}><svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 24C4 21.7909 5.79086 20 8 20C10.2091 20 12 21.7909 12 24C12 26.2091 10.2091 28 8 28C5.79086 28 4 26.2091 4 24ZM20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24ZM36 24C36 21.7909 37.7909 20 40 20C42.2091 20 44 21.7909 44 24C44 26.2091 42.2091 28 40 28C37.7909 28 36 26.2091 36 24Z"></path></svg></div>
                </div>
                <div className={cx('listvideo')}>
                    <div className={cx('tabcontainer')}>
                        <p data-e2e="videos-tab" className={cx('tabv1')}><span>Video</span></p>
                        <p data-e2e="liked-tab" className={cx('tabv2')} onMouseMove={() => { handlertranform() }} onMouseOut={() => { handlertranform2() }}><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M24 3C17.9249 3 13 7.92487 13 14V21H8C6.89543 21 6 21.8954 6 23V41C6 42.1046 6.89543 43 8 43H40C41.1046 43 42 42.1046 42 41V23C42 21.8954 41.1046 21 40 21H35V14C35 7.92487 30.0751 3 24 3ZM31 21V14C31 10.134 27.866 7 24 7C20.134 7 17 10.134 17 14V21H31Z"></path></svg><span >Đã thích</span></p>
                        <div className={cx('bottomwidth')} style={styles}></div>
                    </div>
                    <div className={cx('videocontainer')}>
                        <div className={cx('videocontent')}>
                            {datavideo.length !== 0 ?

                                datavideo.map((res, index) => {
                                    return (<VideoBoxItem data={res} key={index} handerGetID={handerGetID} index={index} indexvideo={indexvideo} />)
                                })
                                : <h2>chưa có video nào</h2>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>)
}
export default Profile;