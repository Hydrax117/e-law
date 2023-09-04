import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../nav/nav.module.css";
// Contains the value and text for the options
const languages = [
  { value: "", text: "Options" },
  { value: "en", text: "English" },
  { value: "ha", text: "Hausa" },
  { value: "ig", text: "Igbo" },
  { value: "yo", text: "Yoruba" },
];

export const Nav = ({ pageName }) => {
  const { t } = useTranslation();

  const [lang, setLang] = useState(window.localStorage.getItem("i18nextLng"));

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = window.location;
    window.location.replace("/?lng=" + e.target.value);
  };
  return (
    <div className={style.nav_bg}>
      <div className={style.nc}>
        <div className="logo">Logo goes here</div>
        <div className={style.nav_container}>
          <ul className={style.nav}>
            <li>{t("h")}</li>
            <li>{t("serv")}</li>
            <li>{t("abt")}</li>
          </ul>
        </div>
        <div className="">
          <label>{t("choose")}</label>
          <select value={lang} onChange={handleChange}>
            {languages.map((item) => {
              return (
                <option id="language" key={item.value} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className={style.subWelcome}>
        <center>
          <h1 style={{ fontSize: "50px", wordSpacing: "3px" }}>
            {t(pageName)}
          </h1>
          <br />
          {/* <p style={{ fontSize: "20px", wordSpacing: "2px" }}>{t("intro")}</p> */}
        </center>
      </div>
    </div>
  );
};
