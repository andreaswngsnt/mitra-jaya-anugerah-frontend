import {Grid, Hidden, Paper} from "@material-ui/core"
import {yellow} from "../../styles/colors"

const CardSection = (props) => {
	const {children} = props

	return (
		<Grid container justify="center">
			<Grid item xl={8} md={9} xs={12} style={{padding: "1rem"}}>
				<Paper 
					elevation={5} 
					square 
					style={{
						position: "relative", 
						top: "-5rem", 
						borderTop: "0.25rem solid",
						borderColor: yellow
					}}
				>
					<Hidden smDown>
						<div style={{padding: "2.5rem 5rem"}}>
							{children}
						</div>
					</Hidden>
					<Hidden mdUp>
						<div style={{padding: "1rem"}}>
							{children}
						</div>
					</Hidden>
				</Paper>
			</Grid>
		</Grid>
	)
}

export default CardSection