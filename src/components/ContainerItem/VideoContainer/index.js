import PropTypes from 'prop-types'
import classNames from 'classnames/bind'



import styles from './VideoContainer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-regular-svg-icons'
import TimeSlider from "react-input-slider";
import secondsToTime from '~/config/convertJS'
import { NotVoiceIcon, StartIcon, VoiceIcon } from '~/icons/icons'
import { useEffect, useRef, useState } from 'react'

import { useElementOnScreen } from '~/hook'


const cx = classNames.bind(styles)


function VideoContainer({ videosrc, imagecover }) {


    const [mode, setMode] = useState(false)
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [modeVolume, setModeVolume] = useState(false);
    const [durationvolume, setDurationVolume] = useState(0);
    const [mute, setMute] = useState(true);
    const [autoplay, setAutoplay] = useState(true);
    const [memoryvolume, setMemoryVolume] = useState(() => { return 0 });
    const [size, setSize] = useState(false);
    const videoref = useRef(null)
    const vidcontrol = videoref.current
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    }
    const isVisibile = useElementOnScreen(options, videoref)
    useEffect(() => {
        if (isVisibile) {
            if (!mode) {
                videoref.current.play();
                setMode(true)
            }
        }
        else {
            if (mode) {
                videoref.current.pause();
                setMode(false)
            }
        }
    }, [isVisibile])


    const handlerOnmode = () => {

        if (mode) {
            videoref.current.pause();
            setMode(!mode);
            setMute(false)
            setAutoplay(false)
        } else {
            videoref.current.play();
            setMode(!mode);
        }
    }
    const handlerPlay = () => {
        vidcontrol.play()
    }
    const handleTimeSliderChange = ({ x }) => {
        videoref.current.currentTime = x;
        setCurrentTime(x);

        // if (!isPlay) {
        //     setPlay(true);
        //     audioRef.current.play();
        // }
    };

    const handleVolumeChange = ({ y }) => {
        const convert = 1 - (y / 100)
        videoref.current.volume = convert.toFixed(1);
        setDurationVolume(y);
        setMemoryVolume(y)

        // if (!isPlay) {
        //     setPlay(true);
        //     audioRef.current.play();
        // }
    };
    const handleLoadedData = () => {
        setDuration(videoref.current.duration);
        // if (isPlay) audioRef.current.play();
    };
    const handlerModeVolume = (Volume) => {
        const convert = 1 - (memoryvolume / 100)
        if (Volume) {
            setDurationVolume(memoryvolume)
            videoref.current.volume = convert
        } else {
            setDurationVolume(100)
            videoref.current.volume = 0
        }
        setModeVolume(!modeVolume)
    }
    const handlerOpenmodal = () => {

    }
    const converttime = secondsToTime(duration)
    const converttiming = secondsToTime(currentTime)
    return (
        <div className={cx('div-video-container')}>
            <canvas width="52.25" height="100" className={cx('canvas-videocontainer')}> </canvas>
            <div className={cx('div-videoplayercontainer')}>
                <div className={cx('divcontainer-vdo')} >
                    <img mode="0"
                        src={imagecover} alt="imagecover"
                        loading="lazy"
                        className={cx('img-containaer')}
                    ></img>
                    <div className={cx('divbasicplayer')} onClick={() => handlerOpenmodal()}>
                        <div className={cx('xgplayer-container')}>
                            <video
                                ref={videoref}
                                muted={mute}
                                autoplay={autoplay}
                                mediatype="video"
                                onLoadedData={handleLoadedData}
                                onTimeUpdate={() => setCurrentTime(videoref.current.currentTime)}
                                onEnded={() => handlerPlay()}
                                src={videosrc} />
                            <xg-bar class="xg-top-bar" data-index="-1"></xg-bar>
                            <xg-bar class="xg-left-bar" data-index="-1"></xg-bar>
                            <xg-bar class="xg-right-bar" data-index="-1"></xg-bar>
                        </div>

                    </div>
                </div>
                <div className={cx('div-playicon-container')} onClick={() => handlerOnmode()}>
                    {mode ? <StartIcon /> : <FontAwesomeIcon icon={faPlay} className={cx('iconPlay')} />}
                </div>
                <div className={cx('div-videovoice-container')}>
                    <div className={cx('div-control-voice')}>

                        <TimeSlider
                            axis="y"
                            ymax={100}
                            y={durationvolume}
                            onChange={handleVolumeChange}
                            styles={{
                                track: {
                                    backgroundColor: "#fff",
                                    width: "2px",
                                    height: "48px"
                                },
                                active: {
                                    backgroundColor: "grey",
                                    width: "2px",
                                    height: "48px"

                                },
                                thumb: {
                                    width: "10px",
                                    height: "10px",
                                    backgroundColor: "#fff",
                                    borderRadius: 50,
                                },

                            }}
                        />
                    </div>
                    <div className={cx('div-video-mute')} onClick={() => handlerModeVolume(modeVolume)}>
                        {durationvolume < 100 ? <VoiceIcon /> : <NotVoiceIcon />}
                    </div>
                </div>
                {duration >= 31 &&
                    <div className={cx('div-videocontrol-container')} onMouseLeave={() => setSize(false)} onMouseEnter={() => setSize(true)}>
                        <TimeSlider
                            axis="x"
                            xmax={duration}
                            x={currentTime}
                            onChange={handleTimeSliderChange}
                            styles={{
                                track: {
                                    backgroundColor: "grey",
                                    height: size ? "4px" : "2px",
                                },
                                active: {
                                    backgroundColor: "#fff",
                                    height: size ? "4px" : "2px",

                                },
                                thumb: {
                                    width: size ? "10px" : "0px",
                                    height: size ? "10px" : "0px",
                                    backgroundColor: "#fff",
                                    borderRadius: 50,
                                },
                            }}
                        />
                        <div className={cx('div-seekbartimecontainer')}>{`${converttiming.m}:${converttiming.s}`}/{`${converttime.m}:${converttime.s}`}</div>
                    </div>
                }
                <div className={cx('div-videobottom-container')}></div>
                <p className={cx('div-reportstext-container')}>
                    <FontAwesomeIcon icon={faFlag} className={cx('icon-report')} /> report
                </p>
            </div>

        </div >
    )
}

VideoContainer.propTypes = {
    videosrc: PropTypes.string.isRequired
}
export default VideoContainer