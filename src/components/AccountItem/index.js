import PropTypes from 'prop-types'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt={data.full_name}></img>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <p>{data.full_name}</p>
                    {data.tick === 1 && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}
                </div>
                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccountItem