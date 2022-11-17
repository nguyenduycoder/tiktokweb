import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'


import styles from './Sidebar.module.scss'
import routesConfig from "~/config/routes"
import SidebarMenuItem from './MenuItem'
import { CameraIcon, HomeIcon, PeopleIcon, HomecheckIcon, CameracheckIcon, PeoplecheckIcon } from '~/icons/icons'
import Button from '~/components/Button'
import UserItem from '~/components/UserItem'
import Discover from './Discover'
import FooterContainer from './FooterContainer'
import { useSelector, /*useDispatch*/ } from 'react-redux'
import API from '~/utils/Services'

const cx = classNames.bind(styles)


function Sidebar({ className, defaults, full }) {


    const { user_id, /*name*/ } = useSelector(state => state.userInfo);
    /* const dispatch = useDispatch();*/
    const [resultSuggest, SetResultSuggest] = useState([])
    const [resultFollowing, SetResultFollowing] = useState([])
    const [moreAll, setMoreAll] = useState(false)
    const [more, setMore] = useState(false)

    useEffect(() => {
        const callapi = async () => {
            const type = moreAll ? 'large' : 'less'
            await API.getUserType(type).then(res =>
                SetResultSuggest(res.result)
            )
        }
        callapi()
    }, [moreAll])
    useEffect(() => {
        const callapi = async () => {
            const type = more ? 'large' : 'less'
            // const result = await searchServices.getUser(type)
            await API.getUserType(type).then(res =>
                SetResultFollowing(res.result)
            )

        }
        callapi()
    }, [more])

    const handlerMoreAll = () => {
        setMoreAll(!moreAll)
    }
    const handlerMore = () => {
        setMore(!more)
    }
    const classewrapper = cx('wrapper', {
        [className]: className,
        defaults,
        full,
    })
    const classesidemask = cx('divsidemask', {
        [className]: className,
        defaults,
        full,
    })

    return (
        <>
            <div>
                <div>
                    <div></div>
                    <div className={classesidemask}>
                        <div className={classewrapper}>
                            <div className={cx('content')}>
                                <div className={cx('div-content-menu')} >
                                    <SidebarMenuItem title='For you' to={routesConfig.home} icon_notcheck={<HomeIcon />} icon_active={<HomecheckIcon />} />
                                    <SidebarMenuItem title='Following' to={routesConfig.following} icon_notcheck={<PeopleIcon />} icon_active={<PeoplecheckIcon />} />
                                    <SidebarMenuItem title='LIVE' to={routesConfig.live} icon_notcheck={<CameraIcon />} icon_active={<CameracheckIcon />} />
                                </div>

                                {user_id === '' && <div className={cx('div-content-frame')} >
                                    <p>Sign in to follow authors, like videos, and view comments.</p>
                                    <Button outline onClick={() => alert('xin chào đến tiktok')} className={cx('btn-frame')}>Login</Button>
                                </div>}

                                {window.location.pathname !== '/following' && <div className={cx('div-user-container')} >
                                    <p className={cx('p-user-recommend')}>Recommended account</p>

                                    {resultSuggest.map((res, index) => { return <UserItem data={res} key={index} /> })
                                    }
                                    <div className={cx('div-user-showmore')} onClick={() => handlerMoreAll()}>
                                        <p className={cx('p-user-showmore')}>{moreAll ? 'Hide' : 'See All'}</p>
                                    </div>
                                </div>}
                                {user_id !== '' && <div className={cx('div-user-container')} >
                                    <p className={cx('p-user-recommend')}>Following account</p>
                                    {resultFollowing.map((res, index) => { return <UserItem data={res} key={index} tippyoff={false} /> })
                                    }
                                    <div className={cx('div-user-showmore')} onClick={() => handlerMore()}>
                                        <p className={cx('p-user-showmore')}>{more ? 'Hide' : 'See More'}</p>
                                    </div>
                                </div>}

                                <div className={cx('div-discover-container')} >
                                    <p className={cx('p-discover-recommend')}>Discover</p>
                                    <Discover />
                                </div>
                                <FooterContainer />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar