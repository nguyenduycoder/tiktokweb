import classNames from 'classnames/bind'
// import { useSelector, /*useDispatch*/ } from 'react-redux'

import styles from './CardItem.module.scss'
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import { useEffect, useState } from 'react';
import API from '~/utils/Services';




const cx = classNames.bind(styles)


function CardItem(props, ref) {
    const [datavideo, setDataVideo] = useState(null)

    // const { user_id, /*name*/ } = useSelector(state => state.userInfo);
    useEffect(() => {
        const calldata = async () => {
            await API.getVideobyiduser(props.data.id).then(res => {
                setDataVideo(res.result[0])
            })
        }
        calldata()

    }, [props.data.id])


    return (
        <div className={cx('card-item')} onMouseOver={() => props.handerGetID(props.index)}>
            <Link to={`/@${props?.data.nickname}`}
                target="_blank" params={{ data: props.data }} className={cx('navlink-item')}>
                <div className={cx('div-item')}>
                    <img src={datavideo?.imagecover} alt="coverimg" className={cx('image-cover')}></img>
                    {props.index === props.indexvideo && <div data-e2e="card-background" className={cx('DivBasicPlayerWrapper')}>
                        <div className={cx('DivPlayerWrapper')}>
                            <video mediatype="video" muted autoPlay loop src={datavideo?.src}>
                            </video>
                            <xg-bar class="xg-top-bar" data-index="-1"></xg-bar>
                            <xg-bar class="xg-left-bar" data-index="-1"></xg-bar>
                            <xg-bar class="xg-right-bar" data-index="-1"></xg-bar>
                        </div>
                    </div>
                    }
                </div>
                <div className={cx('div-info')}>
                    <span className={cx('avatar-info')}>
                        <img src={props?.data.avatar} alt="hehehe">
                        </img>
                    </span >
                    <h5>{props?.data.full_name}</h5>
                    <h6 className={cx('name-info')}>
                        <span>{props?.data.nickname}</span>
                        <div className={cx('icon-info')}>
                            <svg width="12" height="12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#20D5EC"></circle><path fillRule="evenodd" clipRule="evenodd" d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z" fill="white"></path></svg>
                        </div>
                    </h6>
                    <div className={cx('btn-following')}>
                        <Button primary className={cx('btn')}>Follow</Button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

CardItem.propTypes = {

}
export default CardItem








