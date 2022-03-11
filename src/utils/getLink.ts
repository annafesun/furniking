import { generatePath } from 'react-router-dom'

export const getLink = (route: string, params = {}) => {
    let updatedRoute = route
    try {
        updatedRoute = generatePath(route, params)
    } catch {
        Object.keys(params).forEach((param) => {
            // @ts-ignore
            updatedRoute = updatedRoute.replace(`:${param}`, params[param])
        })
    }
    return updatedRoute
}

export default getLink