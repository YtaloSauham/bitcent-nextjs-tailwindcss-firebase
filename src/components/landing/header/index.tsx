import Logo from "../common/Logo";
import Layout from "../layout";
import Menu from "./Menu";

export default function Header() {
    return (
        <Layout className="bg-black">
            <div className="h-20 flex  items-center justify-between">
                <Logo />
                <Menu />
            </div>
        </Layout>
    )
}