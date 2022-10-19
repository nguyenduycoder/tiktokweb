import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'


import styles from './Sidebar.module.scss'
import routesConfig from "~/config/routes"
import SidebarMenuItem from './MenuItem'
import { CameraIcon, HomeIcon, PeopleIcon, HomecheckIcon, CameracheckIcon, PeoplecheckIcon, HtagIcon } from '~/icons/icons'
import Button from '~/components/Button'
import UserItem from '~/components/UserItem'
import { NavLink } from 'react-router-dom'
import Discover from './Discover'
import * as searchServices from '~/services/getdataService'
import { useWindowDimensions } from '~/config'

const cx = classNames.bind(styles)


function Sidebar() {
    const [resultSuggest, SetResultSuggest] = useState([])
    const [moreAll, setMoreAll] = useState(false)

    const { width } = useWindowDimensions();
    useEffect(() => {
        const callapi = async () => {
            const type = moreAll ? 'large' : 'less'
            const result = await searchServices.getUser(type)
            SetResultSuggest(result.result)
        }
        callapi()
    }, [moreAll])

    const handlerMoreAll = () => {
        setMoreAll(!moreAll)
    }

    return (
        <div>
            <div>
                <div></div>
                <div className={cx('divsidemask')}>
                    <div className={cx('wrapper')}>
                        <div className={cx('content')}>
                            <div className={cx('div-content-menu')} >
                                <SidebarMenuItem title='For you' to={routesConfig.home} icon_notcheck={<HomeIcon />} icon_active={<HomecheckIcon />} />
                                <SidebarMenuItem title='Following' to={routesConfig.following} icon_notcheck={<PeopleIcon />} icon_active={<PeoplecheckIcon />} />
                                <SidebarMenuItem title='LIVE' to={routesConfig.live} icon_notcheck={<CameraIcon />} icon_active={<CameracheckIcon />} />
                            </div>

                            <div className={cx('div-content-frame')} >
                                <p>Sign in to follow authors, like videos, and view comments.</p>
                                <Button outline onClick={() => alert('xin chào đến tiktok')} className={cx('btn-frame')}>Login</Button>
                            </div>

                            <div className={cx('div-user-container')} >

                                <p className={cx('p-user-recommend')}>Recommended account</p>
                                {resultSuggest.map((res, index) => { return <UserItem data={res} key={index} /> })
                                }

                                <div className={cx('div-user-showmore')} onClick={() => handlerMoreAll()}>
                                    <p className={cx('p-user-showmore')}>{moreAll ? 'Hide' : 'See All'}</p>
                                </div>


                            </div>

                            <div className={cx('div-discover-container')} >
                                <p className={cx('p-discover-recommend')}>Discover</p>
                                <Discover />
                            </div>

                            <div className={cx('div-footer-container')} >
                                <div className={cx('footer-div')}>
                                    <NavLink className={cx('footer-link')}><p>Introduce</p></NavLink>
                                    <NavLink className={cx('footer-link')}><p>TikTokBrowse</p></NavLink>
                                    <NavLink className={cx('footer-link')}><p>News</p></NavLink>
                                    <NavLink className={cx('footer-link')}><p>Contact</p></NavLink>
                                    <NavLink className={cx('footer-link')}><p>Career</p></NavLink>
                                    <NavLink className={cx('footer-link')}><p>ByteDance</p></NavLink>
                                </div>
                                <div className={cx('footer-div')}>
                                    <NavLink className={cx('footer-link')}><p>TikTok For God</p></NavLink>
                                    <NavLink className={cx('footer-link')}><p>Advertisement</p></NavLink>
                                    <NavLink className={cx('footer-link')}><p>Developers</p></NavLink>
                                    <NavLink className={cx('footer-link')}><p>Transparency</p></NavLink>
                                    <NavLink className={cx('footer-link')}><p>TikTok Rewards</p></NavLink>
                                </div>
                                <div className={cx('footer-div')}>
                                    <NavLink className={cx('footer-link')}><p>Help</p></NavLink>
                                    <NavLink className={cx('footer-link')}><p>Rules</p></NavLink>
                                    <NavLink className={cx('footer-link')}><p>SafePrivacy</p></NavLink>
                                    <NavLink className={cx('footer-link')}><p>Creator</p></NavLink>
                                    <NavLink className={cx('footer-link')}><p>PortalCommunity</p></NavLink>
                                    <NavLink className={cx('footer-link')}><p>Guide</p></NavLink>
                                </div>
                                <div className={cx('footer-div')}>
                                    <span>More</span>
                                </div>
                                <span className={cx('footer-content')} >
                                    <p>©</p>
                                    <p className={cx('title-content')}>2022 TikTok</p>
                                </span>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar