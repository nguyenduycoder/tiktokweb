
import request from "~/utils/httprequest";


export const search = async (q, type) => {
    try {
        const res = await request.get('user/search', {
            params: {
                q,
                type
            }
        })
        return res.data;
    } catch (error) {
        console.log(error)
    }
}