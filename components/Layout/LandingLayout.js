import {Fragment} from "react"
import Head from "next/head"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const LandingLayout = (props) => {
	const { pageTitle, pageDescription, pageKeywords, pageImageURL, children } = props

	return (
		<Fragment>
			<Head>
				<title>
					{typeof pageTitle === "string"
						? `${pageTitle} - Mitra Jaya Anugerah` 
						: "Mitra Jaya Anugerah"
					}
				</title>
				{typeof pageDescription === "string"
					? <meta name="description" content={pageDescription} /> 
					: null
				}
				{typeof pageKeywords === "string"
					? <meta name="keywords" content={pageKeywords} /> 
					: null
				}
				{typeof pageTitle === "string"
					? <meta property='og:title' content={pageTitle} />
					: null
				}
				{typeof pageDescription === "string"
					? <meta property='og:description' content={pageDescription} />
					: null
				}
				{typeof pageImageURL === "string"
					? <meta property='og:image' content={pageImageURL} />
					: null
				}
			</Head>
			<Header />
			<div style={{padding: "2rem"}}>
				{children}
			</div>
			<Footer />
		</Fragment>
	)
}

export default LandingLayout