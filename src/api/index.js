import post from "./http"
export * from './user'

export const getPageData = (
    url,
    data
) =>
    post({
        url: url,
        data
    })
