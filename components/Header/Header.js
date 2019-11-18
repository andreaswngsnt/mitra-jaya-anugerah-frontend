import {Component} from "react"
import Link from "next/link"

import {AppBar, Drawer, Grid, Hidden, IconButton, List, ListItem, ListItemText, Toolbar} from "@material-ui/core"
import {Menu as MenuIcon} from "@material-ui/icons"

const HeaderLink = (props) => {
	const {href, children} = props
	
	return (
		<Link href={href}>
			<a 
				style={{
					margin: "0 1rem",
					textDecoration: "none",
					fontWeight: "700",
					color: "inherit"
				}}
			>
				{children}
			</a>
		</Link>
	)
}

class Header extends Component {
	constructor(props) {
		super(props)
		this.headerLinks = [
			{display: "Produk Kami", href: "/produk-kami"},
			{display: "Proyek", href: "/proyek"},
			{display: "Tentang Kami", href: "/tentang-kami"}
		]
		this.state = {
			isDrawerOpen: false
		}
	}

	handleToggleDrawer = () => {
		const {isDrawerOpen} = this.state

		return this.setState({isDrawerOpen: !isDrawerOpen})
	}

	renderDrawerContent = () => {
		return (
			<div style={{width: "15rem", padding: "1rem"}}>
				<List>
					{this.headerLinks.map((headerEntry, headerEntryIndex) => {
						const {display, href} = headerEntry

						return (
							<Link href={href} key={display + headerEntryIndex}>
								<a style={{textDecoration: "none", color: "inherit"}}>
									<ListItem button>
										<ListItemText>
											<span style={{fontFamily: "'Open Sans', sans-serif", fontWeight: 700}}>
												{display}
											</span>
										</ListItemText>
									</ListItem>
								</a>
							</Link>
						)
					})}
				</List>
			</div>
		)
	}

	render() {
		const {isDrawerOpen} = this.state

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
								<IconButton
									onClick={this.handleToggleDrawer} 
									edge="end" 
									style={{marginRight: "1rem"}}
								>
									<MenuIcon />
								</IconButton>
							</Hidden>
							<Hidden smDown>
								<div>
									{this.headerLinks.map((headerEntry, headerEntryIndex) => {
										const {display, href} = headerEntry
										return (
											<HeaderLink href={href} key={display + headerEntryIndex}>
												{display}
											</HeaderLink>
										)
									})}
								</div>
							</Hidden>
							<Drawer
								open={isDrawerOpen}
								onClose={this.handleToggleDrawer}
								anchor="right"
							>
								{this.renderDrawerContent()}
							</Drawer>
						</Toolbar>
					</Grid>
				</Grid>
			</AppBar>
		)
	}
}

export default Header