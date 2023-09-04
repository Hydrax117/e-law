import { useTranslation } from "react-i18next";
import { Nav } from "./nav/nav";
export const Example = () => {
  const { t } = useTranslation();
  return (
    <>
      <Nav />
      <div className="v">
        <h1>{t("Wel")}</h1>
        <h4>{t("intro")}</h4>
      </div>
    </>
  );
};
