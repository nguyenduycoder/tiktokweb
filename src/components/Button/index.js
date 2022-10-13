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
export default Button