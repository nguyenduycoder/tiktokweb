import PropTypes from 'prop-types'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { Link, NavLink } from 'react-router-dom'
import styles from './DiscoverItem.module.scss'
import { HtagIcon, MusicIcon } from '~/icons/icons'

const cx = classNames.bind(styles)
function DiscoverItem({ icon, htag, to }) {
    return (
        <NavLink className={cx('discover-link')} to={to}>
            <div className={cx('discover-div')}>
                <div>
                    {icon === 'htag' ? <HtagIcon /> : <MusicIcon />}
                </div>
                <p>{htag}</p>
            </div>
        </NavLink>
    );
}
DiscoverItem.propTypes = {
    icon: PropTypes.node.isRequired,
    htag: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}

export default DiscoverItem