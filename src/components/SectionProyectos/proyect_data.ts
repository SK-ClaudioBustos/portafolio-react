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
            src: "mu_play.webp",
            alt: "image project mu play",
            titulo: "Mu Play",
            git: "https://github.com/SK-ClaudioBustos/mu-play",
            web: "https://mu-play.vercel.app"
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