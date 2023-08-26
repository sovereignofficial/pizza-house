import { Features } from '../components/landing/Features'
import { TopOrders } from '../components/landing/TopOrders'
import { LandingBox } from '../components/landing/LandingBox'
import { landingSections } from '../utils/pizzaHouse.config'
import { Footer } from '../components/landing/Footer'

export const Home = () => {
    return (
        <>
            <LandingBox {...landingSections.section1} />
            <Features />
            <LandingBox {...landingSections.section2} />
            <TopOrders />
            <Footer />
        </>
    )
}
