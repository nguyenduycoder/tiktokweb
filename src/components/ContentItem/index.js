import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPause, faPlay, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-regular-svg-icons'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import TimeSlider from "react-input-slider";

import styles from './ContentItem.module.scss'
import Button from '../Button'
import { MusicIcon, StartIcon, VoiceIcon } from '~/icons/icons'
import ButtonCircle from './ButtonCircle'
import { calculateNewValue } from '@testing-library/user-event/dist/utils'


const cx = classNames.bind(styles)
function ContentItem({ data }) {

    const [mode, setMode] = useState(true)
    const videoref = useRef()
    const vidcontrol = videoref.current

    useEffect(() => {
        mode ? vidcontrol.play() : vidcontrol.pause()
    }, [mode])


    const handlerOnmode = () => {
        setMode(!mode)

    }
    const handlerPlay = () => {
        vidcontrol.play()
    }

    return (
        <div className={cx('wrapper')}>
            <NavLink className={cx('avatar')}>
                <div className={cx('div-avatar')} >
                    <span className={cx('span-avatar')}>
                        <img src={data.avatar} alt="img" />
                    </span>
                </div>
            </NavLink>
            <div className={cx('container')} >
                <div className={cx('title-container')}>
                    <div className={cx('div-info-user')}>
                        <NavLink className={cx('link-info')}>
                            <h3 className={cx('text-info')}>{data.nickname} {data.tick === 1 && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}</h3>
                            <h4 >{data.fullname}</h4>
                        </NavLink>
                    </div>
                    <Button outline className={cx('button-following')}>Follow</Button>
                    <div className={cx('div-title-container')}>
                        <span className={cx('titlecontent')}>{data.title} </span>
                        <NavLink className={cx('htag-container')}><span>#duytham </span></NavLink>
                        <NavLink className={cx('htag-container')}><span>#Schannel </span></NavLink>

                    </div>
                    <h4 className={cx('music-name-content')}>
                        <NavLink className={cx('name-content')}>
                            <MusicIcon />
                            {data.namemusic}
                        </NavLink>
                    </h4>

                </div>
                <div className={cx('video-container')}>
                    <div className={cx('div-video-container')}>
                        <canvas width="52.25" height="100" className={cx('canvas-videocontainer')}> </canvas>
                        <div className={cx('div-videoplayercontainer')}>
                            <div className={cx('divcontainer-vdo')} >
                                <img mode="0"
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/7ccc55ec9721497d92a1f77437b59675_1664362733~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1666080000&amp;x-signature=1r3xd7FRLsyFi0G1zpHGHoOOVM8%3D" alt="Unbox phong bì mừng cưới anh em Schannel (Phần 1) #duytham #schannel "
                                    loading="lazy"
                                    className={cx('img-containaer')}
                                ></img>
                                <div className={cx('divbasicplayer')}>
                                    <div className={cx('xgplayer-container')}>
                                        <video
                                            ref={videoref}
                                            // controls
                                            playsinline="true"
                                            x5-playsinline="true"
                                            webkit-playsinline="true"
                                            tabindex="2"
                                            mediatype="video"
                                            onEnded={() => handlerPlay()}
                                            src={data.videosrc}></video>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('div-playicon-container')} onClick={() => handlerOnmode()}>
                                {mode ? <StartIcon /> : <FontAwesomeIcon icon={faPlay} className={cx('iconPlay')} />}

                            </div>
                            <div className={cx('div-videovoice-container')}>
                                <div className={cx('div-control-voice')}>
                                    <div className={cx('div-process')}></div>
                                    <div className={cx('div-circel')} ></div>
                                    <div className={cx('div-bar')}></div>
                                </div>
                                <div className={cx('div-video-mute')}>
                                    <VoiceIcon />
                                </div>
                            </div>
                            <div className={cx('div-videocontrol-container')}>
                                <div className={cx('div-videoseek-container')}>
                                    {/* <div className={cx('div-seekbarprogress')}></div>
                                    <div className={cx('div-seekbarcircle')} style={{ left: 9.7961 }}></div>
                                    <div className={cx('div-seekbar')} style={{ transform: 0.09 }}></div> */}
                                    <TimeSlider
                                        axis="x"
                                        // xmax={duration}
                                        // x={currentTime}
                                        // onChange={handleTimeSliderChange}
                                        styles={{
                                            track: {
                                                backgroundColor: "#e3e3e3",
                                                height: "2px",
                                                opacity: 0.5
                                            },
                                            active: {
                                                backgroundColor: "#fff",
                                                height: "2px",
                                                opacity: 1
                                            },
                                            thumb: {
                                                marginTop: "-3px",
                                                width: "8px",
                                                height: "8px",
                                                backgroundColor: "#fff",
                                                borderRadius: 50,
                                            },
                                        }}
                                    />
                                </div>
                                <div className={cx('div-seekbartimecontainer')}>00:10/01:58</div>
                            </div>
                            <div className={cx('div-videobottom-container')}></div>
                            <p className={cx('div-reportstext-container')}>
                                <FontAwesomeIcon icon={faFlag} className={cx('icon-report')} /> report
                            </p>
                        </div>
                    </div>
                    <div className={cx('div-action-container')}>
                        <ButtonCircle />
                    </div>

                </div>
            </div>
        </div >
    );
}
ContentItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default ContentItem