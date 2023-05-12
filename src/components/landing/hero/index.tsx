import ResponsiveImage from "../common/ResponsiveImage";
import Layout from "../layout";
import Slogan from "./Slogan";
import principal from "../../../../public/principal.jpg"

export default function Hero() {
    return (
        <Layout className="flex-1">
            <div className={`
            flex items-center justify-around
            h-[500px]
            `}>
                <Slogan />
                <ResponsiveImage image={principal} className="
                rotate-3  
                mix-blend-plus-lighter hidden md:inline" />
            </div>

        </Layout>
    )
}