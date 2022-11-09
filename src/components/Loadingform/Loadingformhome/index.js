
import classNames from 'classnames/bind'

import styles from './Loadingformhome.module.scss'

const cx = classNames.bind(styles)
function Loadingformhome() {
    return (
        <div className={cx('loading-form')}>
            <div className={cx('loading-form-div')}>
                <div className={cx('loading-form-avatar')}>
                </div>
                <div className={cx('loading-form-v1')}>
                    <div className={cx('loading-form-titlesub')}>
                        <div className={cx('loading-form-sub')}></div>
                        <div>
                            <div className={cx('loading-form-subv1')}></div>
                            <div className={cx('loading-form-subv2')}></div>
                        </div>
                    </div>
                    <div className={cx('loading-form-title-v1')}>
                    </div>
                    <div className={cx('loading-form-title-v1')}></div>
                </div>
            </div>
        </div>

    );
}


export default Loadingformhome