import Link from "next/link"
import {AppBar, Grid, Hidden, IconButton, Toolbar} from "@material-ui/core"
import {Menu as MenuIcon} from "@material-ui/icons"

const HeaderLink = (props) => {
	const {href, children} = props
	
	return (
		<Link href={href}>
			<a 
				style={{
					margin: "0 1rem",
					textDecoration: "none",
					color: "inherit"
				}}
			>
				{children}
			</a>
		</Link>
	)
}

const Header = () => {
	return (
		<AppBar 
			position="static"
			color="inherit"
		>
			<Grid container justify="center">
				<Grid item xl={8} md={9} xs={12}>
					<Toolbar 
						style={{
							display: "flex", 
							justifyContent: "space-between",
							padding: "1rem"
						}}
					>
						<div style={{display: "flex" , flexDirection: "row", alignItems: "center"}}>
							<img src="/logo.png" style={{maxHeight: "3rem", marginLeft: "1rem"}} />
							<Hidden smDown>
								<h3 style={{marginLeft: "1rem"}}>Mitra Jaya Anugerah</h3>
							</Hidden>
						</div>
						<Hidden mdUp>
							<IconButton edge="end" style={{marginRight: "1rem"}}>
								<MenuIcon />
							</IconButton>
						</Hidden>
						<Hidden smDown>
							<div>
								<HeaderLink href="/produk">
									Produk Kami
								</HeaderLink>
								<HeaderLink href="/tentang-kami">
									Tentang Kami
								</HeaderLink>
							</div>
						</Hidden>
					</Toolbar>
				</Grid>
			</Grid>
		</AppBar>
	)
}

export default Header