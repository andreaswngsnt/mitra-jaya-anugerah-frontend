import {Grid} from "@material-ui/core"

import LandingLayout from "../components/Layout/LandingLayout"
import SimpleSection from "../components/Section/SimpleSection"

import {yellow} from "../styles/colors"
import {address, contact} from "../vars/information"

const Statement = (props) => {
	const {children} = props

	return (
		<div
			style={{
				borderLeft: "0.5rem solid",
				borderColor: yellow
			}}
		>
			<blockquote style={{padding: "0.5em, 0.25em"}}>
				<p style={{fontSize: "1.25em"}}>
					<em>"{children}"</em>
				</p>
			</blockquote>
		</div>
	)
}

const AboutUsPage = () => {
	const pageTitle = "Tentang Kami"
	const pageBackgroundImagePath = "/images/backgrounds/construction_1.jpg"

	return (
		<LandingLayout 
			pageTitle={pageTitle}
			pageDescription="Demikian informasi dari perusahaan kami"
			pageKeywords="tentang kami, plywood, jakarta, bahan bangunan, konstruksi"
			pageImageURL={pageBackgroundImagePath}
		>
			<SimpleSection>
				<h1>{pageTitle}</h1>
				<h2>Sekilas</h2>
				<p style={{textAlign: "justify", lineHeight: "1.75em"}}>
					PT Mitra Jaya Anugerah adalah perusahaan yang bergerak di bidang supplier bahan bangunan yang melayani perusahaan kontraktor swasta dan pemerintah. 
					PT Mitra Jaya Anugerah di dirikan dari tahun 2015, sebelumnya kami mengunakan nama CV Mitra Jaya (didirikan dari tahun 1995).
					Kami menyediakan bahan-bahan bangunan yang diperlukan kontraktor bangunan dan interior, sementara ini kami menyuplai produk plywood, fancy plywood, poly film, phenolic film, seng gelombang, paku dll.
				</p>
				<Grid container spacing={3}>
					<Grid item xl={6} md={6} xs={12}>
						<h2>Visi</h2>
						<Statement>
							Menjadi pemasok yang produktif dan terpercaya untuk memenuhi kebutuhan pembangunan Bangsa & Negara.
						</Statement>
					</Grid>
					<Grid item xl={6} md={6} xs={12}>
						<h2>Misi</h2>
						<Statement>
							Membangun bisnis yang bermanfaat bagi pembangunan infrastruktur Bangsa & Negara.
						</Statement>
					</Grid>
					<Grid item xl={6} md={6} xs={12}>
						<h2>Nilai</h2>
						<Statement>
							Cepat, Tanggap dan Penuh Tanggung Jawab.
						</Statement>
					</Grid>
				</Grid>
				<hr style={{margin: "2rem 0"}}/>
				<Grid container spacing={3}>
					<Grid item xl={6} md={6} xs={12}>
						<iframe 
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.271191419461!2d106.715350315147!3d-6.094125995587132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a03295f5c3425%3A0xdcf82654a2825df3!2sPT%20Mitra%20Jaya%20Anugerah!5e0!3m2!1sen!2sid!4v1574082630510!5m2!1sen!2sid"
							frameBorder="0" 
							style={{
								width: "100%",
								height: "35rem",
								border: 0
							}}
						/>
					</Grid>
					<Grid 
						item xl={6} md={6} xs={12} 
						style={{
							display: "flex",
							flexDirection: "column", 
							justifyContent: "center"
						}}
					>
						<h2>Alamat</h2>
						<p>{address}</p>
						<h2>Kontak</h2>
						<ul 
							style={{
								listStyleType: "none",
  								padding: 0
							}}
						>
							{contact.map((contactEntry, index) => {
								const {name, value} = contactEntry
								return <li key={name + index}>{name}: {value}</li>
							})}
						</ul>
						<h2>Jam Kerja</h2>
						<p>
							Senin - Jumat, 8:00 - 17:00<br />
							Sabtu, 8:00 - 12:00
						</p>
					</Grid>
				</Grid>
			</SimpleSection>
		</LandingLayout>
	)
}

export default AboutUsPage