/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source:'/api/mail',
                destination:'https://api.dataelevation.dev/api/mail'
            }
        ]
    }
}

module.exports = nextConfig


