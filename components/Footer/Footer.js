import Link from "next/link"
import {Grid, Paper} from "@material-ui/core"

const Footer = () => {
	return (
		<Paper elevation={6} square>
			<footer style={{padding: "3rem 9rem"}}>
				<Grid container spacing={3}>
					<Grid item xl={3} md={3} xs={12}>
						<h2>Mitra Djaja Anoegrah</h2>
						<p>
							<small>
								Lorem ipsum dolor sit amet, consec-tetur adipiscing elit. 
								Quisque orci purus, sodales in est quis, blandit sollicitudin est. 
								Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum.
							</small>
						</p>
					</Grid>
					<Grid item xl={3} md={3} xs={12}>
						<h2>Mitra Djaja Anoegrah</h2>
						<p>
							<small>
								Lorem ipsum dolor sit amet, consec-tetur adipiscing elit. 
								Quisque orci purus, sodales in est quis, blandit sollicitudin est. 
								Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum.
							</small>
						</p>
					</Grid>
					<Grid item xl={3} md={3} xs={12}>
						<h2>Mitra Djaja Anoegrah</h2>
						<p>
							<small>
								Lorem ipsum dolor sit amet, consec-tetur adipiscing elit. 
								Quisque orci purus, sodales in est quis, blandit sollicitudin est. 
								Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum.
							</small>
						</p>
					</Grid>
					<Grid item xl={3} md={3} xs={12}>
						<h2>Mitra Djaja Anoegrah</h2>
						<p>
							<small>
								Lorem ipsum dolor sit amet, consec-tetur adipiscing elit. 
								Quisque orci purus, sodales in est quis, blandit sollicitudin est. 
								Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum.
							</small>
						</p>
					</Grid>
				</Grid>
			</footer>
		</Paper>
	)
}

export default Footer