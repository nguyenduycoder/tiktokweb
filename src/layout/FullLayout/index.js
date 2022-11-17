import PropTypes from 'prop-types'
import Header from "~/layout/components/Header"
import classNames from 'classnames/bind'
import styles from './FullLayout.module.scss'
import Sidebar from '../components/Sidebar'
import Details from '../components/Details'
import { useSelector, /*useDispatch*/ } from 'react-redux'

const cx = classNames.bind(styles)

function FullLayout({ children }) {
    const { isopen, /*name*/ } = useSelector(state => state.modalMode);

    return <div className={cx('wrapper')}>
        <Header onlyheader />
        <div className={cx('container')}>
            <Sidebar full />
            {children}
            {isopen && <Details />}


        </div>
    </div >
}
FullLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default FullLayout