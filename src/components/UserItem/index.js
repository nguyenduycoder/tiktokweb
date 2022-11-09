import PropTypes from 'prop-types'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import styles from './UserItem.module.scss'
import Button from '../Button';


const cx = classNames.bind(styles)
function UserItem({ data, tippyoff }) {

    return (
        <div className={cx('tippystyle')}>
            <Tippy
                visible={tippyoff}
                interactive
                placement="bottom"
                delay={[1000, 0]}
                render={attrs => (
                    <div className={cx('tippy-wrapper')} tabIndex="-1" {...attrs}>
                        <div className={cx('tippy-lines1')}>
                            <NavLink>
                                <span className={cx('avatar-tippy')}>
                                    <img className={cx('avatar-tippy-img')} src={data.avatar} alt={data.nickname}></img>
                                </span>
                            </NavLink>
                            <Button primary > Following</Button>
                        </div>
                        <NavLink className={cx('tippy-lines2')}>
                            <span>{data.nickname}</span>
                            {data.tick === 1 && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}
                        </NavLink>
                        <br />
                        <NavLink className={cx('tippy-lines3')}><span>{data.full_name}</span></NavLink>
                        <div className={cx('tippy-lines4')}>
                            <p className={cx('tippy-following')} ><span className={cx('tippy-number')} >{'52.0M'}</span> Following</p>
                            <p className={cx('tippy-likes')}><span className={cx('tippy-number')} >{'52.0M'}</span> Likes</p>
                        </div>

                    </div>
                )
                }
            >
                <div className={cx('wrapper')}>
                    <NavLink className={cx('avatar-link')}>
                        <div className={cx('avatar-div')}>
                            <span className={cx('avatar-span')}>
                                <img className={cx('avatar-img')} src={data.avatar} alt={data.nickname}></img>
                            </span>
                        </div>
                    </NavLink>
                    <NavLink className={cx('info')}>
                        <div className={cx('name-info')}>
                            <h4>{data.nickname}</h4>
                            <div className={cx('tick-info')} >{data.tick === 1 && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}</div>

                        </div>
                        <p className={cx('nickname-info')}>{data.full_name}</p>
                    </NavLink>

                </div>
            </Tippy>
        </div>
    );
}
UserItem.propTypes = {
    data: PropTypes.object.isRequired,
    // tippyoff: PropTypes.bool.isRequired
}

export default UserItem