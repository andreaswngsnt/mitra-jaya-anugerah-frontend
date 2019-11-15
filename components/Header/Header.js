import Link from "next/link"
import {AppBar, Hidden, Toolbar} from "@material-ui/core"

const HeaderLink = (props) => {
	const {href, children} = props
	
	return (
		<Link href={href}>
			<a 
				style={{
					margin: "0 1rem",
					textDecoration: "none",
					color: "inherit",
					fontWeight: "700"
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
			<Toolbar 
				style={{
					display: "flex", 
					justifyContent: "space-between",
					padding: "0 9rem"
				}}
			>
				<h2>Mitra Djaja Anoegerah</h2>
				<Hidden smDown>
					<div>
						<HeaderLink href="/produk">
							Prodoek Kami
						</HeaderLink>
						<HeaderLink href="/tentang-kami">
							Tentang Kami
						</HeaderLink>
					</div>
				</Hidden>
			</Toolbar>
		</AppBar>
	)
}

export default Header