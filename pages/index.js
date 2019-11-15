import LandingLayout from "../components/Layout/LandingLayout"

const HomePage = () => (
	<LandingLayout
		pageTitle='Beranda'
	>
		<div 
			style={{
				height: "80vh",
				display: "flex",
				alignItems: "center"
			}}
		>
			<h1 style={{fontSize: "64px", fontWeight: "500", margin: "0 9rem"}}>
				Direktoer Kami, 
				<span style={{color: "#FFFFFF", backgroundColor: "#000000"}}>Djoedah Wangsanata</span>, 
				mengoecapkan selamat datang ke <em>website</em> terbaroe kami.
			</h1>
		</div>
	</LandingLayout>
)

export default HomePage