import Layout from "../layout";
import Slogan from "./Slogan";

export default function Hero() {
    return (
        <Layout>
            <div className={`
            flex items-center
            h-[500px]
            `}>
                <Slogan />
            </div>

        </Layout>
    )
}