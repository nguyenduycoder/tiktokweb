// import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react';


import styles from './Optioncontainer.module.scss'


const cx = classNames.bind(styles)


function Optioncontainer({ chose, duration, datacheckbox, checkedbox, handleCheck, datachose, handersetchose }) {
    const [show, setShow] = useState(false)
    const [duration2, setDuration2] = useState(0)
    useEffect(() => {
        setDuration2(duration)
        console.log(duration)
    }, [duration])
    const handerchoseoption = (index) => {
        handersetchose(index)
        setShow(!show)
    }



    return (
        <div className={cx('option-container')}>
            <div className={cx('titleoption-v1')}>
                <span>Who can watch this video</span>
            </div>
            <div className={cx('select-option')}>
                <div className={cx('select-v1')} onClick={() => setShow(!show)}>
                    <div className={cx('title-select')}>
                        <span>{datachose[chose]}</span>
                    </div>
                    <div className={cx('icon-select')}>
                        <svg width="14" height="14" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M25.5187 35.2284C24.7205 36.1596 23.2798 36.1596 22.4816 35.2284L8.83008 19.3016C7.71807 18.0042 8.63988 16 10.3486 16H37.6517C39.3604 16 40.2822 18.0042 39.1702 19.3016L25.5187 35.2284Z"></path></svg>
                    </div>
                </div>
                {show && <div style={{ position: 'absolute', left: 0, top: 1 }}>
                    <div className={cx('select-dropdown')} style={{ width: 300 }}>
                        {datachose.map((res, index) => <span className={chose === index ? cx('dropdown-item') : cx('dropdown-item-notchose')} onClick={() => handerchoseoption(index)} key={index}>{res}</span>)}
                    </div>
                </div>}

            </div>
            <div className={cx('titleoption-v1')}>
                <span>Allows users to:</span>
            </div>
            <div className={cx('checkbox-option')} >
                {datacheckbox.map((res, index) => {
                    const check = checkedbox.includes(res.title)
                    const checkdisbaled = duration2 > 60 && index === 1 || duration2 > 60 && index === 2 ? true : false
                    return <div className={cx('checkbox')} key={index} >
                        <div className={cx('inputcheckbox')}>
                            <input type='checkbox' value={res.title} onChange={handleCheck} disabled={checkdisbaled} checked={check} />
                        </div>
                        <span>{res.title}</span>
                    </div>
                })
                }
            </div>
            <div className={cx('titleoption-v2')}>
                <span>Duet/Interaction and Stitch are not available for videos longer than 60 seconds</span>
            </div>
        </div>
    )
}

Optioncontainer.propTypes = {

}
export default Optioncontainer