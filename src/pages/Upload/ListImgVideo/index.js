import classNames from 'classnames/bind'
import { useRef, useState } from 'react';
import { getVideoThumbnail } from '~/hook/useGetimage';


import styles from './ListImgVideo.module.scss'



const cx = classNames.bind(styles)


function ListImgVideo({ arrayimage, srcvideo2, getduration, filevideo, getthumnailsimg }) {
    const [value, setvalue] = useState(0)
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(1);
    const videoimageref = useRef(null)
    const handleChange = (e) => {

        const current = (e.target.value * duration) / 600

        videoimageref.current.currentTime = current;
        setvalue(e.target.value)
        getVideoThumbnail(filevideo, current).then(res => {
            getthumnailsimg(res)
        })

    }
    const handleLoadedData = () => {
        setDuration(videoimageref.current.duration);
        getduration(videoimageref.current.duration)
        // if (isPlay) audioRef.current.play();
    };
    const styles = {
        transform: `translate3d(${value}px, 1px, 0px) scaleX(1.1) scaleY(1.1)`
    };
    return (
        <div className={cx('list-videotoimage')}>
            <span>Cover image</span>
            <div className={cx('draggable-video')}>
                <div className={cx('draggable-container')}>
                    {arrayimage.length === 0 ? <div className={cx('img-not')}></div> :
                        arrayimage.map((res, index) => {
                            return <img src={res} key={index} alt="listimg" />
                        })
                    }
                    <input type="range" min="1" max="600" className={cx('slider')} value={value}
                        onChange={(e) => handleChange(e)} />
                </div>
                {arrayimage.length !== 0 && <div className={cx('draggable-chosen-v2')} style={styles} id="knob">
                    <div className={cx('chosen-v2')}>
                        <video
                            ref={videoimageref}
                            src={srcvideo2}
                            preload="auto"
                            draggable="false"
                            onLoadedData={handleLoadedData}
                            onTimeUpdate={() => setCurrentTime(videoimageref.current.currentTime)}
                        />
                    </div>

                </div>}

            </div>
        </div>
    )
}

ListImgVideo.propTypes = {

}
export default ListImgVideo