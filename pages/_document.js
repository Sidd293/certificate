import Document, { Html, Head, Main, NextScript } from 'next/document'
const APP_NAME = 'Brainlox'

class MyDocument extends Document {
  render () {
    return (
			<Html lang='zxx'>
				<Head>
					<link rel="icon" type="image/png" href="/images/favicon.png"></link>
					<meta name='application-name' content={APP_NAME} />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='default'
					/>
					<meta name='apple-mobile-web-app-title' content={APP_NAME} />
					<meta name='theme-color' content='#FFFFFF' />
					<link
						rel='brainLox_white'
						sizes='180x180'
						href='/images/brainLox_white.jpeg'
					/>
					<link rel='manifest' href='/manifest.json' />
					<link rel='shortcut icon' href='/images/favicon.png' />
				</Head>
				<body>
					<Main />
					<NextScript />
					<script src="https://www.paypal.com/sdk/js?client-id=AWhOaEmK5eU0sSCeSTK17LyuXdyOT1Nw3WVaSpIGv2RMrhZj2pDw0ocpplCxy0fiu-f1S6Q8aoCimmg6" />
				</body>
			</Html>
    )
  }
}

export default MyDocument
