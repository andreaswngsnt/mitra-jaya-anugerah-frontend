import {white, yellow} from "../../styles/colors"

const HighlightedSectionHeading = (props) => {
	const {children} = props

	const styles = {
		text: {
			position: "relative",
			left: "0.25em",
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
		<h2 style={styles.text}>
			<span style={styles.highlight}>
				{children}
			</span>
		</h2>
	)
}

export default HighlightedSectionHeading