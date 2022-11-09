
import PropTypes from 'prop-types'

import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'

import styles from './ContainerItem.module.scss'

import ButtonCircle from './ButtonCircle'

import TitleContainer from './TitleContainer'
import VideoContainer from './VideoContainer'
import { memo, useEffect, useState } from 'react'
import API from '~/utils/Services'


const cx = classNames.bind(styles)
function ContentItem({ data, index }) {
    const [detailsuser, setDetailsuser] = useState(null)
    useEffect(() => {
        const getdetailsUser = async () => {
            await API.getUser(data.iduser).then(res =>
                setDetailsuser(res.result)
            )
        }
        if (data) getdetailsUser()
    }, [data])



    return (
        <div className={cx('wrapper')}>
            <NavLink className={cx('avatar')}>
                <div className={cx('div-avatar')} >
                    <span className={cx('span-avatar')}>
                        <img src={detailsuser?.avatar} alt="img" />
                    </span>
                </div>
            </NavLink>
            <div className={cx('container')} >
                <TitleContainer fullname={detailsuser?.full_name} nickname={detailsuser?.nickname} title={data.title} tick={detailsuser?.tick} htag={null} />
                <div className={cx('video-container')}>
                    <VideoContainer videosrc={data.src} index={index} imagecover={data.imagecover} />
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

export default memo(ContentItem)