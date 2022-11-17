import classNames from 'classnames/bind'
import { useDispatch } from 'react-redux'

import styles from './VideoBoxItem.module.scss'
import { NavLink } from "react-router-dom";

import { useEffect, useState } from 'react';
import Videocustom from '~/components/Videocustom';
import Viewtostring from '~/config/convertView';
import { setImode } from '~/Redux/Slices/modalmode';

// import API from '~/utils/Services';




const cx = classNames.bind(styles)


function VideoBoxItem(props, ref) {
    const dispatch = useDispatch();
    // const [datavideo, setDataVideo] = useState(null)

    // const { user_id, /*name*/ } = useSelector(state => state.userInfo);
    useEffect(() => {
        // const calldata = async () => {
        //     await API.getVideobyiduser(props.data.id).then(res => {
        //         setDataVideo(res.result)
        //     })
        // }
        // calldata()

    }, [])

    const viewconver = Viewtostring(props.data.view, 1)


    return (
        <div className={cx('videobox-item')} onMouseOver={() => props.handerGetID(props.index)}>
            <div data-e2e="user-post-item" className={cx('video-box')}>
                <div className={cx('video-boxv2')}>
                    <div className={cx('video-boxcontai')}>
                        <NavLink className={cx('navlink-video')} onClick={() => dispatch(setImode({ isopen: true, idpost: '' }))}>
                            <canvas width="75.38461538461539" height="100" className={cx('canvas-video')}></canvas>
                            <div className={cx('backgroud-video')}>
                                <div mode="1" className={cx('img-cover')}>
                                    <img mode="1" src={props.data.imagecover} alt={props.data.title} loading="lazy" />
                                    {props.index === props.indexvideo && <Videocustom src={props.data.src} cover />}
                                </div>
                                <div className={cx('view-video')}>
                                    <svg width="18" height="18" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg" className={cx('iconview')}><path fillRule="evenodd" clipRule="evenodd" d="M16 10.554V37.4459L38.1463 24L16 10.554ZM12 8.77702C12 6.43812 14.5577 4.99881 16.5569 6.21266L41.6301 21.4356C43.5542 22.6038 43.5542 25.3962 41.6301 26.5644L16.5569 41.7873C14.5577 43.0012 12 41.5619 12 39.223V8.77702Z"></path></svg>
                                    <strong data-e2e="video-views" className={cx('strongview')}>{viewconver}</strong>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className={cx('divtitle-video')}>
                <NavLink className={cx('navlinktitle-video')} >
                    <div className={cx('div-title')}><span className={cx('title-video')}>{props.data.title}</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

VideoBoxItem.propTypes = {

}
export default VideoBoxItem








