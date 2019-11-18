import {Button} from "@material-ui/core"
import {fontFamily} from "../../vars/styles"

const DefaultButton = (props) => {
	const {children} = props

	return (
		<Button 
			variant="contained"
			style={{
				padding: "1rem",
				borderRadius: 0,
				textTransform: "none",
				fontFamily: fontFamily
			}}
		>
			{children}
		</Button>
	)
}

export default DefaultButton