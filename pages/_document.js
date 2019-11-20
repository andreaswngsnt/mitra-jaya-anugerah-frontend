import Document, {Html, Head, Main, NextScript} from "next/document"
import {fontFamily} from "../styles/fonts"

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return {...initialProps}
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
					<link rel="icon" href="/favicon.ico" />
					<link 
						href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap" 
						rel="stylesheet" 
					/>
				</Head>
				<body 
					style={{
						fontFamily: fontFamily,
						margin: 0
					}}
				>
					<Main />
					<NextScript />
					<noscript>Enable JavaScript in order to experience the website optimally.</noscript>
				</body>
			</Html>
		)
	}
}

export default MyDocument