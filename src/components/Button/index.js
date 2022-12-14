import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom';
import styles from './Button.module.scss'


const cx = classNames.bind(styles)

function Button({ to, href, primary, second, small, disabled, large, outline, className, rounded, children, righticon, lefticon, onClick, ...passProps }) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }

        })
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }


    const classes = cx('wrapper', {
        [className]: className,
        primary,
        second,
        outline,
        small,
        large,
        disabled,
        rounded
    })
    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('text')}>{children}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    second: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    disabled: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    righticon: PropTypes.node,
    lefticon: PropTypes.node,
    onClick: PropTypes.func
}
export default Button