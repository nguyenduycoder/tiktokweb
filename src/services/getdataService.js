import request from "~/utils/httprequest";

export const getUser = async (type) => {
    try {
        const res = await request.get('user', {
            params: {
                type
            }
        })
        return res.data;
    } catch (error) {
        console.log(error)
    }
}