import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'


import styles from './FooterContainer.module.scss'



const cx = classNames.bind(styles)
function FooterContainer({ check }) {

    return (
        <div className={cx('div-footer-container')} >
            <div className={cx('footer-div')}>
                <NavLink className={cx('footer-link')}><p>Introduce</p></NavLink>
                <NavLink className={cx('footer-link')}><p>TikTokBrowse</p></NavLink>
                <NavLink className={cx('footer-link')}><p>News</p></NavLink>
                <NavLink className={cx('footer-link')}><p>Contact</p></NavLink>
                <NavLink className={cx('footer-link')}><p>Career</p></NavLink>
                <NavLink className={cx('footer-link')}><p>ByteDance</p></NavLink>
            </div>
            <div className={cx('footer-div')}>
                <NavLink className={cx('footer-link')}><p>TikTok For God</p></NavLink>
                <NavLink className={cx('footer-link')}><p>Advertisement</p></NavLink>
                <NavLink className={cx('footer-link')}><p>Developers</p></NavLink>
                <NavLink className={cx('footer-link')}><p>Transparency</p></NavLink>
                <NavLink className={cx('footer-link')}><p>TikTok Rewards</p></NavLink>
            </div>
            <div className={cx('footer-div')}>
                <NavLink className={cx('footer-link')}><p>Help</p></NavLink>
                <NavLink className={cx('footer-link')}><p>Rules</p></NavLink>
                <NavLink className={cx('footer-link')}><p>SafePrivacy</p></NavLink>
                <NavLink className={cx('footer-link')}><p>Creator</p></NavLink>
                <NavLink className={cx('footer-link')}><p>PortalCommunity</p></NavLink>
                <NavLink className={cx('footer-link')}><p>Guide</p></NavLink>
            </div>
            <div className={cx('footer-div')}>
                <span>More</span>
            </div>
            <span className={cx('footer-content')} >
                <p>©</p>
                <p className={cx('title-content')}>2022 TikTok</p>
            </span>

        </div>
    )
}

FooterContainer.propTypes = {
    check: PropTypes.node

}
export default FooterContainer