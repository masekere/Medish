import OurProductsHero from "components/Hero/OurProductsHero"
import OurProducts from "components/OurProducts"

export function Component() {
    return (
        <>
            <OurProductsHero />
            <OurProducts />
        </>
    )
}

Component.displayName = 'OurProductsPage'