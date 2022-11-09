// import PropTypes from 'prop-types'
import classNames from 'classnames/bind'



import styles from './Discover.module.scss'
import DiscoverItem from '~/components/DiscoverItem'


const cx = classNames.bind(styles)
function Discover() {
    const data2 = [
        { icon: 'htag', htag: 'turn arround', to: 'hello' },
        { icon: 'htag', htag: 'mackedoi', to: 'hello' },
        { icon: 'htag', htag: 'sansangthaydoi', to: 'hello' },
        { icon: 'music', htag: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n', to: 'hello' },
        { icon: 'music', htag: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng', to: 'hello' },
        { icon: 'music', htag: 'Angel of love -RICKY STAR', to: 'hello' },
        { icon: 'htag', htag: 'genzlife', to: 'hello' },
        { icon: 'htag', htag: '7749hi', to: 'hello' }
    ]
    return (
        <div className={cx('wraper')}>
            {data2.map((res, index) => { return <DiscoverItem key={index} icon={res.icon} htag={res.htag} to={res.to} /> })}
        </div>
    )
}

Discover.propTypes = {



}
export default Discover