import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f584d4c8d607f9d8e1cd090fe0dde71f~c5_100x100.jpeg?x-expires=1665201600&x-signature=IxYi%2BbKDzpu%2FNKN5UAv3uzNpFOM%3D" alt='avt'></img>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <p>NguyenDuyjr</p>
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                </p>
                <p className={cx('username')}>nguyenvanduy</p>
            </div>
        </div>
    );
}
export default AccountItem