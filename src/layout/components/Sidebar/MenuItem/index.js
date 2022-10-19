import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'


import styles from './MenuItem.module.scss'
import { useWindowDimensions } from '~/config'


const cx = classNames.bind(styles)
function SidebarMenuItem({ title, to, icon_notcheck, icon_active, ...passProps }) {
    const { width } = useWindowDimensions()
    return (
        <div className={cx('wraper')}>
            <NavLink to={to} className={(nav) => cx('nav-menuitem', { active: nav.isActive })} end >
                <div className={cx('icon-notactive')}>{icon_notcheck}</div>
                <div className={cx('icon-active')}>{icon_active}</div>
                <h4>{title}</h4>
            </NavLink>
        </div >
    )
}

SidebarMenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,


}
export default SidebarMenuItem