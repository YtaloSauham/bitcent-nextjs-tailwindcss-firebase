import Logo from "../common/Logo";
import Layout from "../layout";
import SocialMedia from "./SocialMedia";
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandYoutube } from "@tabler/icons-react";

export default function Footer() {
    return (
        <Layout className="bg-zinc-600 py-20">
            <div className="flex flex-col items-center md:items-start ">
                <Logo />
                <div className="mt-3 text-zinc-400 text-center md:text-left">
                    <div>Plataforma financeira</div>
                    <div className="flex gap-1.5">que <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">simplifica</span> sua vida</div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between items-center mt-14">
                <div className="flex">
                    <SocialMedia icon={<IconBrandYoutube />} url="https://www.youtube.com/@cod3r" />
                    <SocialMedia icon={<IconBrandInstagram />} url="https://www.instagram.com/cod3rcursos" />
                    <SocialMedia icon={<IconBrandFacebook />} url="https://www.facebook.com/cod3rcursos/" />
                    <SocialMedia icon={<IconBrandGithub />} url="https://github.com/cod3rcursos" />
                </div>
                <p className="text-zinc-100 mt-7 md:mt-0 text-center">
                    <span className="font-bold">COD<span className="text-red-500">3</span>R</span> ® {new Date().getFullYear()} - Todos os direitos reservados
                </p>
            </div>

        </Layout>
    )
}