import LandingLayout from "../components/Layout/LandingLayout"

const ProductPage = () => {
	const pageTitle="Produk Kami"

	return (
		<LandingLayout pageTitle={pageTitle}>
			<h1>
				{pageTitle}
			</h1>
		</LandingLayout>
	)
}

export default ProductPage