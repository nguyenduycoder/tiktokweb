import PropTypes from 'prop-types'

import Header from "~/layout/components/Header"
import Sidebar from "~/layout/components/Sidebar"
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'


const cx = classNames.bind(styles)

function DefaultLayout({ children }) {




    return <div className={cx('wrapper')}>
        <Header defaults />
        <div className={cx('container')}>
            <Sidebar />
            {children}
        </div>
    </div>
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default DefaultLayout