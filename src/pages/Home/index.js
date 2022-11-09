import { useEffect, useState } from "react";
import Contentitem from "~/components/ContainerItem";
import Loadingformhome from "~/components/Loadingform/Loadingformhome";
import API from "~/utils/Services";
import classNames from 'classnames/bind'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)
function Home() {
    const [datavideo, setDataVideo] = useState([])

    useEffect(() => {
        const calldata = async () => {
            await API.getVideo().then(res => {
                setTimeout(() => {
                    setDataVideo(res.result)
                }, 500)

            })
        }
        calldata()
    }, [])


    return (
        <div className={cx('content')}>
            <div>
                {datavideo.length !== 0 ? datavideo.map((res, index) => { return <Contentitem data={res} key={index} index={index} /> }) :
                    <Loadingformhome />
                }
            </div>
        </div>
    )
}
export default Home;