
import { faFlag } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import TimeSlider from "react-input-slider";
import { useRef, useState } from 'react'
import Videocustom from '~/components/Videocustom'

import styles from './Details.module.scss'
import { NotVoiceIcon, StartIcon, VoiceIcon } from '~/icons/icons';
import { useDispatch } from 'react-redux';
import { setImode } from '~/Redux/Slices/modalmode';



const cx = classNames.bind(styles)
function Details() {

    const dispatch = useDispatch();


    const [size, setSize] = useState(false)
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [modeVolume, setModeVolume] = useState(false);
    const [durationvolume, setDurationVolume] = useState(0);
    const [memoryvolume, setMemoryVolume] = useState(() => { return 0 });
    const videoref = useRef(null)


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



    // const converttime = secondsToTime(duration)
    // const converttiming = secondsToTime(currentTime)

    return (
        <div className={cx('divbrowsermode-container')}>
            <div className={cx('divvideo-container')}>
                <div className={cx('divblurbackground')} style={{
                    backgroundImage: `url("https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/7c8308e5ad534d35956df47c9c195939_1668148379~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1668520800&x-signature=WSnb9Rh%2F%2B%2BlAt8mNo9C3AS4M%2BQk%3D")`
                }}></div>
                <div className={cx('divvideo-wrapper')}>
                    <div mode="2" className={cx('divcontainer')}>
                        <img mode="2" src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/7c8308e5ad534d35956df47c9c195939_1668148379~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1668520800&amp;x-signature=WSnb9Rh%2F%2B%2BlAt8mNo9C3AS4M%2BQk%3D" alt="Ko biết ko có tội 🤦🏻‍♀️ @Bố Tây ba lô #andreaaybar #beatoflife " loading="lazy" className={cx('ImgPoster')} />
                        <Videocustom src='https://firebasestorage.googleapis.com/v0/b/tiktok-upload-584f0.appspot.com/o/videos%2FSnaptik.app_7138744713179450650.mp4?alt=media&token=e85d5410-8710-43dc-9e5a-da001217cfcb' contain />
                    </div>
                    <div className={cx('divvideocontrol-container')}>
                        <TimeSlider
                            axis="x"
                            xmax={duration}
                            x={currentTime}
                            onChange={handleTimeSliderChange}
                            styles={{
                                track: {
                                    backgroundColor: "grey",
                                    height: size ? "6px" : "4px",
                                    width: '100%'
                                },
                                active: {
                                    backgroundColor: "#fff",
                                    height: size ? "6px" : "4px",
                                },
                                thumb: {
                                    width: size ? "10px" : "0px",
                                    height: size ? "10px" : "0px",
                                    backgroundColor: "#fff",
                                    borderRadius: 50,
                                },
                            }}
                        />
                        <div className={cx('div-seekbartimecontainer')}>{`0:32`}/{`02:00`}</div>
                        {/* <div className={cx('div-seekbartimecontainer')}>{`${converttiming.m}:${converttiming.s}`}/{`${converttime.m}:${converttime.s}`}</div> */}
                    </div>
                    {/* <div class="tiktok-mzxtw3-DivVideoControlTop e1rpry1m7">
                    </div>
                    <div class="tiktok-1ap2cv9-DivVideoControlBottom e1rpry1m6">
                    </div> */}
                </div>
                {/* <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#fff" data-e2e="browse-video-play" class="tiktok-i8t918-SvgPlayIcon e11s2kul10">
                    <use xlink:href="#svg-play-fill"></use>
                </svg> */}
                <div className={cx('icon-playmode')}>
                    <StartIcon />
                </div>


                <button data-e2e="browse-close" className={cx('buttonbrowse-close')} onClick={() => dispatch(setImode({ isopen: false, idpost: '' }))}>
                    <svg width="18" height="18" viewBox="0 0 9 10" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.35299 0.792837L4.49961 3.93944L7.64545 0.792566C7.8407 0.597249 8.15733 0.597223 8.35262 0.792508L8.70669 1.14658C8.90195 1.34184 8.90195 1.65842 8.70669 1.85368L5.56027 5.0001L8.70672 8.14655C8.90198 8.34181 8.90198 8.65839 8.70672 8.85366L8.35316 9.20721C8.1579 9.40247 7.84132 9.40247 7.64606 9.20721L4.49961 6.06076L1.35319 9.20719C1.15793 9.40245 0.841345 9.40245 0.646083 9.20719L0.292629 8.85373C0.0973708 8.65847 0.0973653 8.3419 0.292617 8.14664L3.43895 5.0001L0.292432 1.85357C0.0972034 1.65834 0.0971656 1.34182 0.292347 1.14655L0.645801 0.792924C0.841049 0.597582 1.1577 0.597543 1.35299 0.792837Z"></path>
                    </svg>
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" width="40" height="40" data-e2e="browse-logo" className={cx('stylelogo')}>
                    <g fill-rule="evenodd" clip-path="url(#logo-icon_svg__a)" clip-rule="evenodd">
                        <path fill="#000" d="M0 36c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V12c0-6.628-5.373-12-12-12H12C5.373 0 0 5.372 0 12v24z"></path>
                        <path fill="#25F4EE" d="M30.636 6.288A9.23 9.23 0 0130.35 4h-6.97v26.133c0 3.014-2.056 5.457-5.062 5.457-3.006 0-5.443-2.443-5.443-5.456 0-3.014 2.437-5.457 5.443-5.457.6 0 .797.098 1.337.278v-7.051c-.562-.079-.754-.12-1.337-.12C11.515 17.785 6 23.315 6 30.135c0 6.82 5.515 12.349 12.318 12.349 6.708 0 12.357-5.375 12.51-12.062V17.049c2.528 1.733 5.395 2.746 8.689 2.746V13.19c-4.275 0-7.866-2.933-8.88-6.902z"></path><path fill="#fff" d="M33.12 8.77a9.23 9.23 0 01-.287-2.288h-6.971v26.134c0 3.014-2.055 5.456-5.061 5.456s-5.443-2.442-5.443-5.456a5.45 5.45 0 015.443-5.456c.6 0 .797.097 1.337.277v-7.05c-.562-.08-.754-.12-1.337-.12-6.803 0-12.318 5.529-12.318 12.349S13.998 44.965 20.8 44.965c6.707 0 12.357-5.374 12.51-12.062V19.531c2.528 1.733 5.395 2.747 8.689 2.747v-6.606c-4.275 0-7.866-2.933-8.88-6.901z"></path>
                        <path fill="#FE2C55" d="M15.92 35.033a5.446 5.446 0 01-.562-2.416c0-3.014 2.437-5.457 5.443-5.457.523 0 .739.074 1.143.212l.194.066v-7.051l-.21-.03c-.411-.059-.623-.09-1.127-.09-.386 0-.769.018-1.146.053v4.635l-.194-.066c-.404-.138-.62-.212-1.143-.212-3.006 0-5.443 2.443-5.443 5.457a5.46 5.46 0 003.045 4.9zm-4.972 4.997a12.29 12.29 0 009.853 4.935c6.707 0 12.357-5.374 12.51-12.061V19.532c2.528 1.733 5.395 2.746 8.689 2.746v-6.605a9.2 9.2 0 01-2.483-.341v4.463c-3.294 0-6.161-1.013-8.69-2.746v13.372c-.152 6.688-5.802 12.062-12.509 12.062-2.763 0-5.314-.912-7.37-2.453zm23.455-28.401a9.206 9.206 0 01-3.715-5.146h2.145a9.155 9.155 0 001.57 5.146z"></path>
                    </g>
                    <defs>
                        <clipPath id="logo-icon_svg__a"><rect width="48" height="48" fill="#fff" rx="10.5"></rect></clipPath></defs></svg>
                <div className={cx('divvoicecontrol-container')}>
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
                                    height: "70%"
                                },
                                active: {
                                    backgroundColor: "grey",
                                    width: "2px",
                                    height: "70%"

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
                    <button className={cx('buttonvideo-mute')} /*onClick={() => handlerModeVolume(modeVolume)}*/>
                        {durationvolume < 100 ? <VoiceIcon /> : <NotVoiceIcon />}
                    </button>
                </div>
                <button data-e2e="arrow-left" className={cx('ButtonBasicButtonContainerup')}>
                    <svg width="26" height="26" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.4142 22.5858L18.1213 6.29289C17.7308 5.90237 17.0976 5.90237 16.7071 6.29289L15.2929 7.70711C14.9024 8.09763 14.9024 8.7308 15.2929 9.12132L30.1716 24L15.2929 38.8787C14.9024 39.2692 14.9024 39.9024 15.2929 40.2929L16.7071 41.7071C17.0976 42.0976 17.7308 42.0976 18.1213 41.7071L34.4142 25.4142C35.1953 24.6332 35.1953 23.3668 34.4142 22.5858Z"></path></svg>
                </button>
                <button data-e2e="arrow-right" className={cx('ButtonBasicButtonContainerdown')}>
                    <svg width="26" height="26" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.4142 22.5858L18.1213 6.29289C17.7308 5.90237 17.0976 5.90237 16.7071 6.29289L15.2929 7.70711C14.9024 8.09763 14.9024 8.7308 15.2929 9.12132L30.1716 24L15.2929 38.8787C14.9024 39.2692 14.9024 39.9024 15.2929 40.2929L16.7071 41.7071C17.0976 42.0976 17.7308 42.0976 18.1213 41.7071L34.4142 25.4142C35.1953 24.6332 35.1953 23.3668 34.4142 22.5858Z"></path></svg>
                </button>
                <div data-e2e="browse-report" className={cx('buttonbrowse-report')}>
                    <FontAwesomeIcon icon={faFlag} className={cx('icon-report')} /> {'Report'}
                </div>
            </div>

            <div className={cx('divcontent-container')}>
            </div>
        </div>
    )
}
export default Details