import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)


function MenuItem({ data, onClick }) {

    const props = {
        onClick,
    };
    let Comp = 'button';
    if (data.to) {

        props.href = data.to;
        Comp = 'a';
    }
    return (
        <Comp className={cx('menu-item-btn')} {...props}>
            {data.icon}
            <span>{data.title}</span>
        </Comp>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func
}
export default MenuItem