import Page from "../template/Page";
import Logo from "./common/Logo";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";

export default function Landing() {
    return (
        <Page externa>
            <Header />
            <Hero />
            <Footer />
        </Page>
    )
}