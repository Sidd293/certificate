const path = require('path');
const withPWA = require('next-pwa');
const config = require('./config/config.json');

module.exports = withPWA({
	webpack: (config, { isServer }) => {
        if (!isServer) {
            // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.resolve.fallback = {
                fs: false,
				crypto: false
            }
        }

        return config;
    },
	pwa: {
		disable: process.env.NODE_ENV === 'development',
		// dest: 'public',
		register: true,
		sw: '/sw.js',
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	env: {
		POSTGRES_USER: config.username,
		POSTGRES_PASSWORD: config.password,
		POSTGRES_DATABASE: config.database,
		POSTGRES_HOST: config.host,
		POSTGRES_PORT: 5432,
		POSTGRES_DIALECT: 'postgres',
		BASE_URL: 'http://brainlox.com',
		JWT_SECRET: 'djhfghbdsgrasklkajsdgf',
		SENDGRID_KEY:'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',
		CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/dev-empty/image/upload',
		CLOUDINARY_VIDEO_URL:'https://api.cloudinary.com/v1_1/dev-empty/video/upload',
		STRIPE_SECRET_KEY: 'sk_test_51JtwnvSDUNQUeGjijWdYoknBg0zwjkchR1LyrOLKGQ36jH2nJX4TFeZ0LRY4ud3kHtKXpgxHn1rXsFHPW91m0LYJ00sfRWUrlJ',
		STRIPE_PUBLISHABLE_KEY: 'pk_test_51JtwnvSDUNQUeGjiFxNq6lhchY0Rp208UnLxxdXMRL8Ob2EFOoUUfEak8dFfibSC2E9oAxqqVgChoFnDgAcSnlP300zopGA9D4',
		GOOGLE_ANALYTICS_KEY:'G-HYV7ZZF0SV'
	},
});
