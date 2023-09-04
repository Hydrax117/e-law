import { useState } from "react";
import style from "./form.module.css";
import { Nav } from "../nav/nav";
import { Link } from "react-router-dom";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export const UserLogin = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  return (
    <>
      <Nav pageName={t("login")} />
      {/* start of login body */}

      <div className={style.loginContainer}>
        <div className={style.form}>
          <div className={style.subForm}>
            <h4>{t("email")}</h4>
            <input
              type="email"
              name=""
              id=""
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <h4>{t("password")}</h4>
            <input
              type="password"
              name=""
              id=""
              value={password}
              onChange={(event) => SetPassword(event.target.value)}
            />
            <button>{t("login")}</button>
            <p>{t("dont")}</p>
            <Link to="/register">{t("creg")}</Link>
          </div>
        </div>
      </div>
    </>
  );
};
