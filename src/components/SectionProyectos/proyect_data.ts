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
            src: "proyecto_1",
            alt: t("proyects.p1"),
            titulo: "Wiki Proyect",
            git: "https://github.com/SK-ClaudioBustos/star-wars-clone-wars-website",
            web: "https://proyect1-beta.vercel.app/"
        },
        {
            src: "proyecto_2",
            alt: "imagen de proyecto 2",
            titulo: "Proyecto 2",
            git: "https://github.com/SK-ClaudioBustos/gun-shop",
            web: "https://proyect-2-gun-shop.netlify.app/"
        },
        {
            src: "proximamente",
            alt: t("proyects.default"),
            titulo: t("proyects.default-title"),
            git: "#",
            web: "#"
        }
    ]

    return data;
}

export default useGetData;