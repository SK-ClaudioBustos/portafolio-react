import { useTranslation } from "react-i18next";
interface IUseGetData {
    titulo: string
    cuerpo: string
    icono: string
    items: string[]
}

const useGetData = (): IUseGetData[] => {
    const { t } = useTranslation("global");
    const data = [
        {
            titulo: t("skills.s1.title"),
            cuerpo: t("skills.s1.body"),
            icono: "laptop",
            items: ["CSS", "Javascript", "Typescript", "React", "Next js"]
        },
        {
            titulo: t("skills.s2.title"),
            cuerpo: t("skills.s2.body"),
            icono: "book",
            items: ["Laravel", "Livewire", "Nest js", "MUI Library Component"]
        }
    ];
    return data;
}

export default useGetData;