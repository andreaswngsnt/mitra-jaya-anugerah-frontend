import {Grid, Paper} from "@material-ui/core"

import LandingLayout from "../components/Layout/LandingLayout"
import BackgroundSection from "../components/Section/BackgroundSection"
import SimpleSection from "../components/Section/SimpleSection"

import HeroHeading from "../components/Text/HeroHeading"
import HighlightedSectionHeading from "../components/Text/HighlightedSectionHeading"

import {yellow} from "../styles/colors"

const projects = [
	{name: "Rumah Sakit Harapan Kita", imagePath: "/images/projects/rs_harapan_kita.jpg"},
	{name: "Ciputra International", imagePath: "/images/projects/ciputra_international.jpg"},
	{name: "Marigold BSD", imagePath: "/images/projects/marigold_bsd.jpg"},
	{name: "Newton Ciputra", imagePath: "/images/projects/newton_ciputra.jpeg"},
	{name: "Universitas Jember", imagePath: "/images/projects/universitas_jember.jpg"},
	{name: "Hotel Grand Classic Cikarang", imagePath: "/images/projects/hotel_grand_classic_cikarang.jpg"},
	{name: "Jakarta International School", imagePath: "/images/projects/jakarta_international_school.jpg"},
	{name: "Ciputra World 2", imagePath: "/images/projects/ciputra_world_2.jpg"},
	{name: "Rumah Sakit Lira Medika", imagePath: "/images/projects/rs_lira_medika.jpg"},
	{name: "Vivo Sentul", imagePath: "/images/projects/vivo_sentul.jpg"},
	{name: "Bio Farma Bandung", imagePath: "/images/projects/bio_farma_bandung.jpg"}
]

const ProjectPreview = (props) => {
	const {name, imagePath} = props

	return (
		<Paper 
			elevation={5} 
			square
			style={{
				borderTop: "0.25rem solid",
				borderColor: yellow
			}}
		>
			<img 
				src={typeof imagePath === "string" ? imagePath : "/logo.png"}
				alt={name}
				style={{
					width: "100%",
					height: "15rem",
					objectFit: "cover"
				}} 
			/>
			<div style={{padding: "1rem"}}>
				<h3>
					{name}
				</h3>
			</div>
		</Paper>
	)
}

const ProjectPage = () => {
	const pageTitle = "Proyek"
	const pageBackgroundImagePath = "/images/backgrounds/construction_1.jpg"

	return (
		<LandingLayout 
			pageTitle={pageTitle}
			pageDescription="Berikut proyek-proyek yang telah kami bantu penyediaan bahan bangunannya."
			pageKeywords="proyek, plywood, jakarta, bahan bangunan, konstruksi"
			pageImageURL={pageBackgroundImagePath}
		>
			<BackgroundSection backgroundImagePath={pageBackgroundImagePath}>
				<HeroHeading>
					{pageTitle}
				</HeroHeading>
				<HighlightedSectionHeading>
					Berikut proyek-proyek yang telah kami bantu penyediaan bahan bangunannya.
				</HighlightedSectionHeading>
			</BackgroundSection>
			<SimpleSection>
				<Grid container spacing={3}>
					{projects.map((projectEntry, index) => {
						const {name, imagePath} = projectEntry
						
						return (
							<Grid item xl={4} md={6} xs={12} key={name + index}>
								<ProjectPreview 
									name={name}
									imagePath={imagePath}
								/>
							</Grid>
						)
					})}
				</Grid>
			</SimpleSection>
		</LandingLayout>
	)
}

export default ProjectPage