import {Grid} from "@material-ui/core"
import LandingLayout from "../components/Layout/LandingLayout"

const HomePage = () => (
	<LandingLayout
		pageTitle='Beranda'
	>
		<div 
			style={{
				minHeight: "80vh",
				display: "flex",
				alignItems: "center",
				backgroundImage: "url('/images/background/dusk-construction.jpg')",
				backgroundPosition: "center bottom",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover"
			}}
		>
			<Grid container justify="center">
				<Grid item xl={8} md={9} xs={12} style={{padding: "1rem"}}>
					<h1>
						<span style={{color: "#FFFFFF", backgroundColor: "#FFC000"}}>
							Direktoer Kami, 
							<strong>Djoedah Wangsanata</strong>, 
							mengoecapkan selamat datang ke <em>website</em> terbaroe kami.
						</span>
					</h1>
				</Grid>
			</Grid>
		</div>
	</LandingLayout>
)

export default HomePage