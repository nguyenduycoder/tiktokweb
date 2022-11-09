
import { faHeart, faShare, faCommentDots } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"

import styles from './ButtonCircle.module.scss'

const cx = classNames.bind(styles)
function ButtonCircle() {
    const ButtonCustom = ({ result, children }) => {
        return (
            <div className={cx('container')}>
                <div className={cx('wrapper')} >
                    {children}
                </div>
                <p>{result}</p>
            </div>


        )
    }
    return (<div>
        <ButtonCustom result={'200M'}><FontAwesomeIcon icon={faHeart} /></ButtonCustom>
        <ButtonCustom result={'1903'}><FontAwesomeIcon icon={faCommentDots} /></ButtonCustom>
        <ButtonCustom result={'200'}><FontAwesomeIcon icon={faShare} /></ButtonCustom>
    </div>)
}
export default ButtonCircle