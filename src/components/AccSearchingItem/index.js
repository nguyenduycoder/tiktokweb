
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './AccSearchingItem.module.scss'

const cx = classNames.bind(styles)
function AccSearchingItem({ result }) {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
            <p className={cx('lable-result')}>{result}</p>
        </div>
    );
}

export default AccSearchingItem