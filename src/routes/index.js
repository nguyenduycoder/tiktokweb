import { FullLayout, HeaderOnly } from "~/layout"
import Following from "~/pages/Following"
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import Search from "~/pages/Search"
import Upload from "~/pages/Upload"
import Live from "~/pages/Live"
import routesConfig from "~/config/routes"
import DetailsMV from "~/pages/DetailsMV"



const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile, layout: FullLayout },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.live, component: Live },
    { path: routesConfig.detailsmv, component: DetailsMV, layout: FullLayout }
]
const privateRoutes = []

export { publicRoutes, privateRoutes }