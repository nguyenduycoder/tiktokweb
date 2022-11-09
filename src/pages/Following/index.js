import { useEffect, useState } from "react";
import classNames from 'classnames/bind'
import { useSelector, /*useDispatch*/ } from 'react-redux'




import Contentitem from "~/components/ContainerItem";
import API from "~/utils/Services";
import styles from './Following.module.scss'
import Loadingformhome from "~/components/Loadingform/Loadingformhome";

import CardItem from "./CardItem";








const cx = classNames.bind(styles)
function Following() {

    const [datavideo, setDataVideo] = useState([])
    const { user_id, /*name*/ } = useSelector(state => state.userInfo);
    const [indexvideo, setIndexVideo] = useState(0)


    useEffect(() => {
        const calldata = async () => {
            await API.getVideo().then(res => {
                setTimeout(() => {
                    setDataVideo(res.result)
                }, 500)
            })
        }
        const callapi = async () => {
            const type = 'large'
            // const result = await searchServices.getUser(type)
            await API.getUserType(type).then(res =>
                setDataVideo(res.result)
            )

        }
        user_id === '' ? callapi() : calldata()

    }, [user_id])





    const handerGetID = (index) => {
        if (index !== indexvideo) {
            setIndexVideo(index)
        }

    }


    return (
        <>
            {
                user_id !== '' ?
                    <div className={cx('content')}>
                        <div>
                            {datavideo.length !== 0 ? datavideo.map((res, index) => { return <Contentitem data={res} key={index} index={index} /> }) :
                                <Loadingformhome />
                            }
                        </div>
                    </div> :
                    datavideo.length !== 0 ? <div className={cx('container-cards')}>
                        <div className={cx('content-cards')}>
                            {datavideo?.map((res, index) => {
                                return <CardItem data={res} key={index} handerGetID={handerGetID} index={index} indexvideo={indexvideo} />
                            })}
                        </div>
                    </div> :
                        <div className={cx('container-cards-loading')} >
                            <div className={cx('content-cards-loading')}>
                                {Array(9).fill('').map((res, index) =>
                                    <div className={cx('card-item-loading')} key={index}></div>)}
                            </div>
                        </div>


            }


        </>
    )
}
export default Following;