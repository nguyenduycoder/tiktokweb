import PropTypes from 'prop-types'
import Header from "~/layout/components/Header"
import classNames from 'classnames/bind'
import styles from './HeaderOnly.module.scss'

const cx = classNames.bind(styles)

function HeaderOnly({ children }) {

    return <div className={cx('wrapper')}>
        <Header onlyheader />
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('content2')}></div>
                {children}
            </div>
        </div>
    </div>
}
HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired
}
export default HeaderOnly