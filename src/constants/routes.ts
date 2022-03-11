export const routes = {
    home: '/home',
    shop: '/shop',
    shopItem: '/shop/:itemId',
    blog: '/blog',
    about: '/about',
    contact: '/contact',
}

export type Route = keyof typeof routes
