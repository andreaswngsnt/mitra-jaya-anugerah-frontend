import {Button} from "@material-ui/core"

const DefaultButton = (props) => {
	const {children} = props

	return (
		<Button 
			variant="contained"
			style={{
				padding: "1rem",
				borderRadius: 0,
				textTransform: "none",
				fontFamily: "'Open Sans', Arial, sans-serif"
			}}
		>
			{children}
		</Button>
	)
}

export default DefaultButton