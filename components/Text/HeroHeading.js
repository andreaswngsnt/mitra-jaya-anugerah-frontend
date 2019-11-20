import {Fragment} from "react"
import {Hidden} from "@material-ui/core"

import {white, yellow} from "../../styles/colors"

const HeroHeading = (props) => {
	const {children} = props

	const styles = {
		text: {
			position: "relative",
			left: "0.25em",
			fontWeight: 400,
			color: white
		},
		highlight: {
			display: "inline",
			backgroundColor: yellow,
			boxShadow: `0.25em 0 0 ${yellow}, -0.25em 0 0 ${yellow}`,
			opacity: 0.95
		}
	}

	return (
		<Fragment>
			<Hidden smDown>
				<h1 style={{...styles.text, fontSize: "48px"}}>
					<span style={styles.highlight}>
						{children}
					</span>
				</h1>
			</Hidden>
			<Hidden mdUp>
				<h1 style={styles.text}>
					<span style={styles.highlight}>
						{children}
					</span>
				</h1>
			</Hidden>
		</Fragment>
	)
}

export default HeroHeading