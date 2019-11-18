import {Grid, Hidden} from "@material-ui/core"

const BackgroundSection = (props) => {
	const {backgroundImagePath, children} = props

	return (
		<Grid 
			container
			justify="center"
			style={{
				backgroundImage: `url(${backgroundImagePath})`,
				backgroundPosition: "center bottom",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover"
			}}
		>
			<Grid item xl={8} md={9} xs={12}>
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
			</Grid>
		</Grid>
	)
}

export default BackgroundSection