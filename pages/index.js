import {Fragment} from "react"
import Link from "next/link"

import {Grid, Paper} from "@material-ui/core"

import LandingLayout from "../components/Layout/LandingLayout"
import BackgroundSection from "../components/Section/BackgroundSection"
import CardSection from "../components/Section/CardSection"

import HeroHeading from "../components/Text/HeroHeading"
import HighlightedSectionHeading from "../components/Text/HighlightedSectionHeading"
import DefaultButton from "../components/Button/DefaultButton"

import {colors} from "../vars/styles"

const ProductPreview = (props) => {
	const {name, imagePath} = props

	return (
		<Fragment>
			<h4>
				{name}
			</h4>
			<img 
				src={typeof imagePath === "string" ? imagePath : "/logo.png"}
				alt={name}
				style={{
					width: "100%",
					height: "10rem",
					objectFit: "cover"
				}} 
			/>
		</Fragment>
	)
}

const ProjectPreview = (props) => {
	const {name, imagePath} = props

	return (
		<Paper 
			elevation={5} 
			square
			style={{
				borderTop: "0.25rem solid",
				borderColor: colors.yellow
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

const HomePage = () => {
	const heroImagePath = '/images/backgrounds/construction_3.jpg'
	const products = [
		{name: "Plywood", imagePath: "/images/products/plywood.jpg"},
		{name: "Fancy Plywood", imagePath: "/images/products/fancy_plywood.jpg"},
		{name: "Poly Film", imagePath: "/images/products/poly_plywood.jpg"},
		{name: "Phenolic Film", imagePath: "/images/products/phenolic_board.jpg"},
		{name: "Seng Gelombang", imagePath: "/images/products/corrugated_zinc_sheet.jpg"},
		{name: "Paku", imagePath: "/images/products/nails.jpg"}
	]
	const projectImagePath = '/images/backgrounds/construction_2.jpg'
	const projects = [
		{name: "Rumah Sakit Harapan Kita", imagePath: "/images/projects/rs_harapan_kita.jpg"},
		{name: "Ciputra International", imagePath: "/images/projects/ciputra_international.jpg"},
		{name: "Marigold BSD", imagePath: "/images/projects/marigold_bsd.jpg"}
	]

	return (
		<LandingLayout
			pageTitle="Beranda"
			pageDescription="Kami Menyediakan Bahan-Bahan Bangunan untuk Keperluan Konstruksi Anda."
			pageKeywords="plywood, jakarta, bahan bangunan, konstruksi, supplier"
			pageImageURL={heroImagePath}
		>
			<div 
				style={{
					minHeight: "80vh",
					display: "flex",
					alignItems: "center",
					backgroundImage: `url(${heroImagePath})`,
					backgroundPosition: "center center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover"
				}}
			>
				<Grid container justify="center">
					<Grid item xl={6} md={6} xs={12} style={{padding: "1rem"}}>
						<HeroHeading>
							Kami Menyediakan Bahan-Bahan Bangunan untuk Keperluan Konstruksi Anda.
						</HeroHeading>
						<Link href="/produk-layanan">
							<a style={{textDecoration: "none"}}>
								<DefaultButton>
									Baca Lebih
								</DefaultButton>
							</a>
						</Link>
					</Grid>
				</Grid>
			</div>
			<CardSection>
				<div style={{marginBottom: "2rem"}}>
					<h2>Produk & Layanan Kami</h2>
					<p style={{lineHeight: "1.75em"}}>
						Kami menyediakan bahan-bahan bangunan yang diperlukan kontraktor bangunan dan interior.
						Apabila proyek anda terletak di daerah Jabodetabek dengan order yang cukup, kami dapat mengirim pesanan anda dengan gratis.
					</p>
				</div>
				<div style={{marginBottom: "2rem"}}>
					<h3 style={{marginBottom: 0}}>Produk</h3>
					<Grid container spacing={3} style={{marginBottom: "1rem"}}>
						{products.map((productEntry, index) => {
							const {name, imagePath} = productEntry

							return (
								<Grid item xl={4} md={6} xs={12} key={name + index}>
									<ProductPreview 
										name={name}
										imagePath={imagePath} 
									/>
								</Grid>
							)
						})}
					</Grid>
				</div>
				<Link href="/produk-layanan">
					<a style={{textDecoration: "none"}}>
						<DefaultButton>
							Baca Lebih
						</DefaultButton>
					</a>
				</Link>
			</CardSection>
			<BackgroundSection backgroundImagePath={projectImagePath}>
				<HighlightedSectionHeading>Proyek Kami</HighlightedSectionHeading>
				<Grid container spacing={3} style={{marginBottom: "1rem"}}>
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
				<Link href="/proyek">
					<a style={{textDecoration: "none"}}>
						<DefaultButton>
							Lihat Semua
						</DefaultButton>
					</a>
				</Link>
			</BackgroundSection>
		</LandingLayout>
	)
}

export default HomePage