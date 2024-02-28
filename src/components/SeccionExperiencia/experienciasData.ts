import { useTranslation } from "react-i18next";

interface IUseGetData {
    lugar: string
    duracion: string
    puesto: string
    descripcion: string
}

const useGetData = (): IUseGetData[] => {
    const { t } = useTranslation("global");

    const data = [
        {
            lugar: t("exp.e1.place"),
            duracion: t("exp.e1.duration"),
            puesto: t("exp.e1.job"),
            descripcion: t("exp.e1.description")
        },
        {
            lugar: t("exp.e2.place"),
            duracion: t("exp.e2.duration"),
            puesto: t("exp.e2.job"),
            descripcion: t("exp.e2.description")
        },
        {
            lugar: t("exp.e3.place"),
            duracion: t("exp.e3.duration"),
            puesto: t("exp.e3.job"),
            descripcion: t("exp.e3.description")
        }
    ];

    return data;
}

export default useGetData;