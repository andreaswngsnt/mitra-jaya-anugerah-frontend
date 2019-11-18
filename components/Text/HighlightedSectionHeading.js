import {colors} from "../../vars/styles"

const HighlightedSectionHeading = (props) => {
	const {children} = props

	const styles = {
		text: {
			position: "relative",
			left: "0.25em",
			color: colors.white
		},
		highlight: {
			display: "inline",
			backgroundColor: colors.yellow,
			boxShadow: `0.25em 0 0 ${colors.yellow}, -0.25em 0 0 ${colors.yellow}`,
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