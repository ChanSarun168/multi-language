import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locals that are supported
    locales: ['en' , 'kh'],

    // used when no locale matches
    defaultLocale: 'en'
})

export const config = {
    // match only internationalized pathname
    matcher: ['/','/(kh|en)/:path*']
}