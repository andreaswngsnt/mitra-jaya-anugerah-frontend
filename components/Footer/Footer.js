import Link from "next/link"
import {Grid, Paper} from "@material-ui/core"

import {address, contact} from "../../vars/information"
import {colors} from "../../vars/styles"

const styles = {
	header: {
		color: colors.white
	},
	paragraph: {
		color: colors.grey
	},
	linkList: {
		listStyleType: "none",
  		padding: 0,
		color: colors.grey
	},
	link: {
		textDecoration: "none",
		color: "inherit"
	}
}

const Footer = () => {
	return (
		<Paper elevation={6} square style={{backgroundColor: colors.blue}}>
			<Grid container justify="center">
				<Grid item xl={8} md={9} xs={12}>
					<footer style={{padding: "2rem"}}>
						<Grid container spacing={4}>
							<Grid item xl={3} md={3} xs={12}>
								<div style={{display: "flex" , flexDirection: "row", alignItems: "center"}}>
									<img src="/logo_white.png" style={{maxHeight: "3rem"}} />
									<h3 style={{...styles.header, marginLeft: "1rem"}}>Mitra Jaya Anugerah</h3>
								</div>
								<p style={styles.paragraph}>&copy; {new Date().getFullYear()}, PT Mitra Jaya Anugerah.</p>
							</Grid>
							<Grid item xl={3} md={3} xs={12}>
								<h4 style={styles.header}>Tautan Berguna</h4>
								<ul style={styles.linkList}>
									<li>
										<Link href='/produk-layanan'><a style={styles.link}>Produk & Layanan</a></Link>
									</li>
									<li>
										<Link href='/tentang-kami'><a style={styles.link}>Tentang Kami</a></Link>
									</li>
								</ul>
							</Grid>
							<Grid item xl={3} md={3} xs={12}>
								<h4 style={styles.header}>Lokasi</h4>
								<p style={styles.paragraph}>
									{address}
								</p>
							</Grid>
							<Grid item xl={3} md={3} xs={12}>
								<h4 style={styles.header}>Kontak</h4>
								<ul style={styles.linkList}>
									{contact.map((contactEntry, index) => {
										const {name, value} = contactEntry
										return <li key={name + index}>{name}: {value}</li>
									})}
								</ul>
							</Grid>
						</Grid>
					</footer>
				</Grid>
			</Grid>
		</Paper>
	)
}

export default Footer