import {Grid, Hidden} from "@material-ui/core"

const SimpleSection = (props) => {
	const {children} = props

	return (
		<Grid container justify="center">
			<Grid item xl={8} md={9} xs={12}>
				<Hidden smDown>
					<div style={{padding: "2.5rem 5rem"}}>
						{children}
					</div>
				</Hidden>
				<Hidden mdUp>
					<div style={{padding: "2rem"}}>
						{children}
					</div>
				</Hidden>
			</Grid>
		</Grid>
	)
}

export default SimpleSection