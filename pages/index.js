import {Fragment} from "react"
import Link from "next/link"

import {Grid, Hidden, Paper} from "@material-ui/core"

import LandingLayout from "../components/Layout/LandingLayout"
import DefaultButton from "../components/Button/DefaultButton"

const HeroHeading = (props) => {
	const {children} = props

	const styles = {
		text: {
			position: "relative",
			left: "0.25em",
			fontWeight: 400,
			color: "#FFFFFF"
		},
		highlight: {
			display: "inline",
			backgroundColor: "#FFC000",
			boxShadow: "0.25em 0 0 #FFC000, -0.25em 0 0 #FFC000",
			opacity: 0.95
		}
	}

	return (
		<Fragment>
			<Hidden smDown>
				<h1 style={{...styles.text, fontSize: "48px"}}>
					<span style={styles.highlight}>
						{children}
					</span>
				</h1>
			</Hidden>
			<Hidden mdUp>
				<h1 style={styles.text}>
					<span style={styles.highlight}>
						{children}
					</span>
				</h1>
			</Hidden>
		</Fragment>
	)
}

const SectionHeading = (props) => {
	const {children} = props

	const styles = {
		text: {
			position: "relative",
			left: "0.25em",
			color: "#FFFFFF"
		},
		highlight: {
			display: "inline",
			backgroundColor: "#FFC000",
			boxShadow: "0.25em 0 0 #FFC000, -0.25em 0 0 #FFC000",
			opacity: 0.95
		}
	}

	return (
		<h2 style={styles.text}>
			<span style={styles.highlight}>
				{children}
			</span>
		</h2>
	)
}

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
						borderColor: "#FFC000"
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

const ProductPreview = (props) => {
	const {name, imagePath} = props

	return (
		<Fragment>
			<h3>
				{name}
			</h3>
			{typeof imagePath === "string" 
				? (
				<img 
					src={imagePath}
					alt={name}
					style={{
						width: "100%",
						height: "10rem",
						objectFit: "cover"
					}} 
				/>
				) : null
			}
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
				borderColor: "#FFC000"
			}}
		>
			<div style={{padding: "1rem"}}>
				<h3>
					{name}
				</h3>
				{typeof imagePath === "string" 
					? (
					<img 
						src={imagePath}
						alt={name}
						style={{
							width: "100%",
							height: "10rem",
							objectFit: "cover"
						}} 
					/>
					) : null
				}
			</div>
		</Paper>
	)
}

const HomePage = () => {
	const heroImagePath = '/images/background/construction_3.jpg'
	const products = [
		{name: "Plywood", imagePath: "/images/products/plywood.jpg"},
		{name: "Fancy Plywood", imagePath: "/images/products/fancy_plywood.jpg"},
		{name: "Poly Film", imagePath: "/images/products/poly_plywood.jpg"},
		{name: "Phenolic Film", imagePath: "/images/products/phenolic_board.jpg"},
		{name: "Seng Gelombang", imagePath: "/images/products/corrugated_zinc_sheet.jpg"},
		{name: "Paku", imagePath: "/images/products/nails.jpg"}
	]
	const projectImagePath = '/images/background/construction_2.jpg'
	const projects = [
		{name: "BEC Extension"},
		{name: "West Gallery"},
		{name: "South Quarter"}
	]

	return (
		<LandingLayout
			pageTitle='Beranda'
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
						<Link href="/produk-kami">
							<a style={{textDecoration: "none"}}>
								<DefaultButton>
									Lihat Produk
								</DefaultButton>
							</a>
						</Link>
					</Grid>
				</Grid>
			</div>
			<CardSection>
				<h2>Produk Kami</h2>
				<p>
					Kami menyediakan bahan-bahan bangunan yang diperlukan kontraktor bangunan dan interior.
				</p>
				<Grid container spacing={5} style={{marginBottom: "1rem"}}>
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
				<Link href="/produk-kami">
					<a style={{textDecoration: "none"}}>
						<DefaultButton>
							Lihat Semua
						</DefaultButton>
					</a>
				</Link>
			</CardSection>
			<BackgroundSection backgroundImagePath={projectImagePath}>
				<SectionHeading>Proyek Kami</SectionHeading>
				<Grid container spacing={5} style={{marginBottom: "1rem"}}>
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