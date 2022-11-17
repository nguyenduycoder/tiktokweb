
// import PropTypes from 'prop-types'

import classNames from 'classnames/bind'


import styles from './Videocustom.module.scss'




const cx = classNames.bind(styles)
function Videocustom({ src, contain, cover }) {


    const classes = cx('video-container', {
        cover,
        contain
    })
    return (
        <div className={cx('divbasicplayer')}>
            <div className={cx('xgplayer-container')}>
                <video
                    muted
                    autoPlay
                    loop
                    mediatype="video"
                    className={classes}
                    src={src} />
                <xg-bar class="xg-top-bar" data-index="-1"></xg-bar>
                <xg-bar class="xg-left-bar" data-index="-1"></xg-bar>
                <xg-bar class="xg-right-bar" data-index="-1"></xg-bar>
            </div>

        </div>
    );
}
Videocustom.propTypes = {
    // data: PropTypes.object.isRequired
}

export default Videocustom