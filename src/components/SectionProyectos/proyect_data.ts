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
            src: "proyecto_3.webp",
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