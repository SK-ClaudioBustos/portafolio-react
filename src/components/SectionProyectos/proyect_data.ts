import { useTranslation } from "react-i18next";

interface IDataRecover {
    src: string
    alt: string
    titulo: string
    git: string
    web: string
}

const useGetData = (): IDataRecover[] => {
    const { t } = useTranslation("global");
    const data: IDataRecover[] = [
        {
            src: "proyecto_1.svg",
            alt: t("proyects.p1"),
            titulo: "Wiki",
            git: "https://github.com/SK-ClaudioBustos/star-wars-clone-wars-website",
            web: "https://proyect1-beta.vercel.app/"
        },
        // {
        //     src: "proyecto_2.svg",
        //     alt: t("proyects.p2"),
        //     titulo: "Gun Shop",
        //     git: "https://github.com/SK-ClaudioBustos/gun-shop",
        //     web: "https://proyect-2-gun-shop.netlify.app/"
        // },
        {
            src: "proyecto_3.jpg",
            alt: t("proyects.p3"),
            titulo: "Mu Play",
            git: "https://github.com/SK-ClaudioBustos/mu-play",
            web: "https://proyect3-lyart.vercel.app"
        },
        {
            src: "proximamente.svg",
            alt: t("proyects.default"),
            titulo: t("proyects.default-title"),
            git: "#",
            web: "#"
        }
    ]

    return data;
}

export default useGetData;