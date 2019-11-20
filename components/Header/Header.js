import {Component} from "react"
import Link from "next/link"

import {AppBar, Drawer, Grid, Hidden, IconButton, List, ListItem, ListItemText, Toolbar} from "@material-ui/core"
import {Close as CloseIcon, Menu as MenuIcon} from "@material-ui/icons"

import {fontFamily} from "../../styles/fonts"
import {yellow} from "../../styles/colors"

class HeaderLink extends Component {
	constructor(props) {
		super(props)
		this.styles = {
			link: {
				margin: "0 1rem",
				textDecoration: "none",
				fontWeight: "700",
				color: "inherit"
			},
			linkHover: {
				borderBottom: "0.25rem solid",
				borderColor: yellow,
				transition: "border-width 0.25s linear",
				margin: "0 1rem",
				textDecoration: "none",
				fontWeight: "700",
				color: "inherit"
			}
		}
		this.state = {
			isHover: false
		}
	}

	handleAddHover = () => {
		const {isHover} = this.state
		return this.setState({isHover: !isHover})
	}

	handleRemoveHover = () => {
		const {isHover} = this.state
		return this.setState({isHover: !isHover})
	}

	render() {
		const {href, children} = this.props
		const {isHover} = this.state
		const {link, linkHover} = this.styles
	
		return (
			<Link href={href}>
				<a 
					onMouseEnter={this.handleAddHover}
					onMouseLeave={this.handleRemoveHover}
					style={isHover ? linkHover : link}
				>
					{children}
				</a>
			</Link>
		)
	}
}

class Header extends Component {
	constructor(props) {
		super(props)
		this.headerLinks = [
			{display: "Produk & Layanan", href: "/produk-layanan"},
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
				<IconButton 
					onClick={this.handleToggleDrawer}
					style={{marginBottom: "1rem"}}
				>
					<CloseIcon />
				</IconButton>
				<List>
					{this.headerLinks.map((headerEntry, headerEntryIndex) => {
						const {display, href} = headerEntry

						return (
							<Link href={href} key={display + headerEntryIndex}>
								<a style={{textDecoration: "none", color: "inherit"}}>
									<ListItem button>
										<ListItemText>
											<span style={{fontFamily: fontFamily, fontWeight: 700}}>
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
							<Link href="/">
								<a style={{textDecoration: "none", color: "inherit"}}>
									<div style={{display: "flex" , flexDirection: "row", alignItems: "center"}}>
										<img src="/logo.png" style={{maxHeight: "3rem", marginLeft: "1rem"}} />
										<Hidden smDown>
											<h3 style={{marginLeft: "1rem"}}>Mitra Jaya Anugerah</h3>
										</Hidden>
									</div>
								</a>
							</Link>
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