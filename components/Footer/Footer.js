import Link from "next/link"
import {Grid, Paper} from "@material-ui/core"

const styles = {
	header: {
		color: "#FFFFFF"
	},
	paragraph: {
		color: "#999999"
	},
	linkList: {
		listStyleType: "none",
  		padding: 0,
		color: "#999999"
	},
	link: {
		textDecoration: "none",
		color: "inherit"
	}
}

const Footer = () => {
	return (
		<Paper elevation={6} square style={{backgroundColor: "#011627"}}>
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
										<Link href='/produk-kami'><a style={styles.link}>Produk Kami</a></Link>
									</li>
									<li>
										<Link href='/tentang-kami'><a style={styles.link}>Tentang Kami</a></Link>
									</li>
								</ul>
							</Grid>
							<Grid item xl={3} md={3} xs={12}>
								<h4 style={styles.header}>Lokasi</h4>
								<p style={styles.paragraph}>
									Jl. Raya Dadap Pergudangan Kamal Business Center Blok C No. 1, RT.7/RW.1, 
									Kamal Muara, Kec. Penjaringan, Jakarta, Daerah Khusus Ibukota Jakarta 14470
								</p>
							</Grid>
							<Grid item xl={3} md={3} xs={12}>
								<h4 style={styles.header}>Kontak</h4>
								<ul style={styles.linkList}>
									<li>Telepon: 081-716-1667</li>
									<li>E-Mail: mitrajkaliber@yahoo.com</li>
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