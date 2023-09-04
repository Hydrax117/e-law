import { useState } from "react";
import style from "./form.module.css";
import { Nav } from "../nav/nav";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const UserRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { t } = useTranslation();

  return (
    <>
      <Nav pageName={t("signup")} />
      {/* start of login body */}

      <div className={style.loginContainer}>
        <div className={style.form}>
          <div className={style.subForm}>
            <div style={{ width: "100%" }}>
              <center>
                <h2>{t("reg")}</h2>
              </center>
              <h4>{t("name")}</h4>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div style={{ width: "100%" }}>
              <h4>{t("email")}</h4>
              <input
                type="email"
                name=""
                id=""
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="eg example@gmail.com"
              />
            </div>
            <div style={{ width: "100%" }}>
              <h4>{t("password")}</h4>
              <input
                type="password"
                name=""
                id=""
                value={password}
                onChange={(event) => {
                  SetPassword(event.target.value);
                  document.getElementById("perror").style.display = "initial";
                }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <h4>{t("cpassword")}</h4>
              <input
                type="password"
                name=""
                id=""
                value={confirm}
                onChange={(event) => {
                  setConfirm(event.target.value);
                  document.getElementById("cerror").style.display = "initial";
                }}
              />{" "}
              <br />
              {password.length > 6 ? (
                <p id="perror" style={{ color: "green", display: "none" }}>
                  <BiCheckCircle />
                  {t("passcheck")}
                </p>
              ) : (
                <p id="perror" style={{ color: "red", display: "none" }}>
                  <BiErrorCircle />
                  {t("passcheck")}
                </p>
              )}
              <br />
              {password === confirm ? (
                <p id="cerror" style={{ color: "green", display: "none" }}>
                  <BiCheckCircle /> {t("passmatch")}
                </p>
              ) : (
                <p id="cerror" style={{ color: "red", display: "none" }}>
                  <BiErrorCircle /> {t("notmatch")}
                </p>
              )}
              <br />
              {password.includes(" ") ? (
                <p id="" style={{ color: "red" }}>
                  <BiErrorCircle /> {t("scheck")}
                </p>
              ) : (
                <p id="" style={{ color: "red", display: "none" }}>
                  <BiErrorCircle /> Passwords do not match
                </p>
              )}
            </div>
            {password === confirm &&
            password.length > 6 &&
            !password.includes(" ") ? (
              <button className="btn btn-primary">{t("signup")}</button>
            ) : (
              <button className="btn btn-primary" disabled="disabled">
                {t("signup")}
              </button>
            )}
            <p>{t("already")}</p>
            <Link to="/login">{t("clog")}</Link>
          </div>
        </div>
      </div>
    </>
  );
};
