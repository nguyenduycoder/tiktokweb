import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'

import styles from './TitleContainer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '~/components/Button'
import { MusicIcon } from '~/icons/icons'


const cx = classNames.bind(styles)


function TitleContainer({ fullname, nickname, title, tick, htag }) {
    return (
        <div className={cx('title-container')}>
            <div className={cx('div-info-user')}>
                <NavLink className={cx('link-info')}>
                    <h3 className={cx('text-info')}>{nickname} {tick === 1 && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}</h3>
                    <h4 >{fullname}</h4>
                </NavLink>
            </div>
            <Button outline className={cx('button-following')}>Follow</Button>
            <div className={cx('div-title-container')}>
                <span className={cx('titlecontent')}>{title} </span>
                <NavLink className={cx('htag-container')}><span>#duytham </span></NavLink>
                <NavLink className={cx('htag-container')}><span>#Schannel </span></NavLink>

            </div>
            <h4 className={cx('music-name-content')}>
                <NavLink className={cx('name-content')}>
                    <MusicIcon />
                    {`nhạc nền - ${fullname}`}
                </NavLink>
            </h4>
        </div>
    )
}

TitleContainer.propTypes = {
    fullname: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tick: PropTypes.number.isRequired,
    // htag: PropTypes.node.isRequired,
}
export default TitleContainer