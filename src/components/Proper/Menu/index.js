import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { Wrapper as ProperWrapper } from '~/components/Proper'
import MenuItem from './MenuItem';



const cx = classNames.bind(styles)


function Menu({ items, children }) {
    const renderItem = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />
        )
    }

    return (
        <Tippy
            interactive
            placement="bottom-end"
            render={attrs => (
                <div className={cx('menu-content')} tabIndex="-1" {...attrs}>
                    <ProperWrapper className={cx('menu-list')}>
                        {
                            renderItem()
                        }
                    </ProperWrapper>
                </div>
            )
            }>
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    items: PropTypes.array,
    children: PropTypes.node.isRequired
}

export default Menu