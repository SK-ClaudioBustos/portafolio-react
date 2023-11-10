import { useTranslation } from "react-i18next";

const useGetData = () => {
    const {t} = useTranslation("global");

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
    ];

    return data;
}

export default useGetData;