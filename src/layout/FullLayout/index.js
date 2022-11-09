import PropTypes from 'prop-types'
import Header from "~/layout/components/Header"
import classNames from 'classnames/bind'
import styles from './FullLayout.module.scss'
import Sidebar from '../components/Sidebar'

const cx = classNames.bind(styles)

function FullLayout({ children }) {

    return <div className={cx('wrapper')}>
        <Header onlyheader />
        <div className={cx('container')}>
            <Sidebar />
            {children}
        </div>
    </div>
}
FullLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default FullLayout