import {Grid, Paper} from "@material-ui/core"

import LandingLayout from "../components/Layout/LandingLayout"
import BackgroundSection from "../components/Section/BackgroundSection"
import SimpleSection from "../components/Section/SimpleSection"

import HeroHeading from "../components/Text/HeroHeading"

import {yellow} from "../styles/colors"

const ProductPreview = (props) => {
	const {name, description, imagePath} = props

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
				{typeof description === "string" 
					? <p>{description}</p> 
					: <p><em>Kontak kami untuk informasi lebih lanjut tentang produk ini.</em></p>
				}
			</div>
		</Paper>
	)
}

const ProductServicesPage = () => {
	const pageTitle = "Produk & Layanan Kami"
	const pageBackgroundImagePath = "/images/backgrounds/construction_2.jpg"

	const products = [
		{name: "Plywood", imagePath: "/images/products/plywood.jpg"},
		{name: "Fancy Plywood", imagePath: "/images/products/fancy_plywood.jpg"},
		{name: "Poly Film", imagePath: "/images/products/poly_plywood.jpg"},
		{name: "Phenolic Film", imagePath: "/images/products/phenolic_board.jpg"},
		{name: "Seng Gelombang", imagePath: "/images/products/corrugated_zinc_sheet.jpg"},
		{name: "Paku", imagePath: "/images/products/nails.jpg"},
		{name: "Bahan Bangunan Lainnya", imagePath: "/images/products/others.jpg"}
	]

	return (
		<LandingLayout 
			pageTitle={pageTitle}
			pageDescription="Kami menyediakan bahan-bahan bangunan yang diperlukan kontraktor bangunan dan interior."
			pageKeywords="produk, plywood, poly film, bahan bangunan, fancy plywood, paku, seng"
			pageImageURL={pageBackgroundImagePath}
		>
			<BackgroundSection
				backgroundImagePath={pageBackgroundImagePath}
			>
				<HeroHeading>
					{pageTitle}
				</HeroHeading>
			</BackgroundSection>
			<SimpleSection>
				<h2>Layanan</h2>
				<Grid container spacing={3} style={{marginBottom: "2rem"}}>
					<Grid item xl={4} md={4} xs={12}>
						<img 
							src="/images/services/truck.jpg" 
							alt="Truk" 
							style={{
								width: "100%"
							}}
						/>
					</Grid>
					<Grid 
						item xl={8} md={8} xs={12} 
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center"
						}}
					>
						<h3>Penjualan & Pengiriman Bahan Bangunan</h3>
						<p style={{lineHeight: "1.75em"}}>
							Kami menyediakan bahan-bahan bangunan yang diperlukan kontraktor bangunan dan interior.
							Apabila proyek anda terletak di daerah Jabodetabek dengan order yang cukup, kami dapat mengirim pesanan anda dengan gratis.
						</p>
					</Grid>
				</Grid>
				<h2>Produk</h2>
				<Grid container spacing={3}>
					{products.map((productEntry, index) => {
						const {name, description, imagePath} = productEntry
						return (
							<Grid item xl={4} md={6} xs={12} key={name + index}>
								<ProductPreview 
									name={name}
									description={description}
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

export default ProductServicesPage