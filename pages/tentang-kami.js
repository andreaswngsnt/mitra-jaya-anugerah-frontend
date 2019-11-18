import {Grid} from "@material-ui/core"

import LandingLayout from "../components/Layout/LandingLayout"
import SimpleSection from "../components/Section/SimpleSection"

import {colors} from "../vars/styles"
import {address, contact} from "../vars/information"

const Statement = (props) => {
	const {children} = props

	return (
		<div
			style={{
				borderLeft: "0.5rem solid",
				borderColor: colors.yellow
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
				<Grid container spacing={3}>
					<Grid item xl={6} md={6} xs={12}>
						<h2>Alamat</h2>
						<p>{address}</p>
					</Grid>
					<Grid item xl={6} md={6} xs={12}>
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
					</Grid>
				</Grid>
			</SimpleSection>
		</LandingLayout>
	)
}

export default AboutUsPage