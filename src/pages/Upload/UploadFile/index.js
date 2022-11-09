import classNames from 'classnames/bind'
import { forwardRef } from 'react'


import styles from './UploadFile.module.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';



const cx = classNames.bind(styles)


function UploadFile(props, ref) {
    return (
        <div className={cx('uploader')}>
            <div className={cx('upload')} >
                <input type="file" accept="video/*" className={cx('jsx-2404389384')} style={{ display: 'none' }} ref={ref} onChange={(e) => { props.handlerChangeFile(e) }} />
                {props.file === '' && props.upload < 100 ? <div className={cx('upload-card')} onClick={() => props.handlerClickinput()}>

                    <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg" alt='hehe' />
                    <div className={cx('text-main')}>
                        <span>Select video to upload</span>
                    </div>
                    <div className={cx('text-sub')}>
                        <span>Or drag and drop files</span>
                    </div>
                    <div className={cx('text-video-info')}>
                        <div className={cx('text-video')}>
                            <span >MP4 or WebM</span>
                        </div>
                        <div className={cx('text-video')}>
                            <span >Resolution 720x1280 or higher</span>
                        </div>
                        <div className={cx('text-video')}>
                            <span >Up to 10 minutes</span>
                        </div>
                        <div className={cx('text-video')}>
                            <span >Less than 2 GB</span>
                        </div>
                    </div>
                    <div className={cx('file-select-button')}>
                        <button className={cx('btn')}>
                            <div className={cx('box-btn')}>
                                <div className={cx('text-btn')}>Select file</div>
                            </div>
                        </button>
                    </div>
                </div> :
                    props.upload < 100 ? <div className={cx('upload-card')}>
                        < div className={cx('progressbar')}>
                            <CircularProgressbar value={props.upload} text={`${props.upload}%`} strokeWidth={5} styles={buildStyles({
                                textColor: "black",
                                pathColor: 'red',
                                // trailColor: "gold"
                            })} />
                        </div>
                        <div className={cx('div-namefile')}>
                            Uploading {props.file.name}
                        </div>
                        <button className={cx('btn-cancel')} onClick={() => props.handlerCancel()}>
                            <div className={cx('box-btncancel')}>
                                <div className={cx('text-btncancel')}>Huỷ</div>
                            </div>
                        </button>
                    </div> :
                        <div>
                            <div className={cx('upload-card')}>
                                <video controls src={props.srcvideo} muted autoPlay preload='true' style={{ width: 259, height: 486 }} />
                            </div>
                            <div className={cx('change-video-btn')}>
                                <div className={cx('file')}>
                                    <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/check_icon.8e166106.svg" alt="checkicon" />
                                    <div className={cx('file-text')}>{props.file.name}</div>
                                </div>
                                <div className={cx('btn-changevideo')} onClick={() => props.handlerChangeFilev2()}>Change video</div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

UploadFile.propTypes = {

}
export default forwardRef(UploadFile)