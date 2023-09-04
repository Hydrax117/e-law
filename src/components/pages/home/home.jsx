import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Nav } from "../nav/nav";
import style from "../nav/nav.module.css";
import { GiCheckMark, GiHandcuffs } from "react-icons/gi";
import { BiCheck, BiCheckCircle, BiHome } from "react-icons/bi";
import { FaBroadcastTower } from "react-icons/fa";

const languages = [
  { value: "", text: "Options" },
  { value: "en", text: "English" },
  { value: "ha", text: "Hausa" },
  { value: "ig", text: "Igbo" },
  { value: "yo", text: "Yoruba" },
];
export const Home = () => {
  // It is a hook imported from 'react-i18next'
  const { t } = useTranslation();
  const services = [
    { title: "ser1", text: "ser1text", num: "1" },
    { title: "ser2", text: "ser2text", num: "2" },
    { title: "ser3", text: "ser3tex", num: "3" },
  ];

  const experise = [
    {
      title: "Bank",
      logo: (
        <BiHome
          style={{ fontSize: "40px", marginTop: "10px", overflow: "hidden" }}
        />
      ),
    },
    {
      title: "Accidents",
      logo: (
        <BiHome
          style={{ fontSize: "40px", marginTop: "10px", overflow: "hidden" }}
        />
      ),
    },
    {
      title: "Injury",
      logo: (
        <BiHome
          style={{ fontSize: "40px", marginTop: "10px", overflow: "hidden" }}
        />
      ),
    },
    {
      title: "Family",
      logo: (
        <BiHome
          style={{ fontSize: "40px", marginTop: "10px", overflow: "hidden" }}
        />
      ),
    },
    {
      title: "Capital",
      logo: (
        <BiHome
          style={{ fontSize: "40px", marginTop: "10px", overflow: "hidden" }}
        />
      ),
    },
    {
      title: "Employment",
      logo: (
        <FaBroadcastTower
          style={{ fontSize: "40px", marginTop: "10px", overflow: "hidden" }}
        />
      ),
    },
    {
      title: "House",
      logo: (
        <BiHome
          style={{ fontSize: "40px", marginTop: "10px", overflow: "hidden" }}
        />
      ),
    },
    {
      title: "Criminal",
      logo: (
        <GiHandcuffs
          style={{ fontSize: "40px", marginTop: "10px", overflow: "hidden" }}
        />
      ),
    },
  ];

  const [lang, setLang] = useState(window.localStorage.getItem("i18nextLng"));

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = window.location;
    window.location.replace("/?lng=" + e.target.value);
  };
  return (
    <>
      {/* ///start of nav */}
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
              {t("wel_h")}
            </h1>
            <br />
            <p style={{ fontSize: "20px", wordSpacing: "2px" }}>{t("intro")}</p>

            <button
              style={{
                fontSize: "20px",
                wordSpacing: "2px",
                padding: "20px",
                width: "200px",
              }}
              className={style.mybtn}
            >
              {t("start")}
            </button>
          </center>
        </div>
      </div>
      <div className={style.section}>
        <div className={style.rowc}>
          <div className="row">
            {services.map((service) => (
              <div className="col-md-4">
                <div className={style.card}>
                  <div className={style.card_title}>
                    <div className="">
                      <GiCheckMark
                        style={{ marginRight: "10px", fontSize: "40px" }}
                      />
                    </div>
                    <div className="">
                      <p>{t(service.title)}</p>
                    </div>
                  </div>
                  <div className={style.card_body}>
                    <h1
                      style={{
                        marginRight: "10px",
                        fontSize: "40px",
                        color: "darksalmon",
                      }}
                    >
                      {service.num}
                    </h1>
                    <p style={{ marginRight: "10px" }}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Cupiditate fuga sit quam. Aliquid magnam laborum atque.
                      Ipsa asperiores adipisci, eaque eveniet id, alias
                      voluptatibus exercitationem dolorem ipsum blanditiis,
                      voluptatum suscipit.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* start of about us */}
        <div className="" style={{ marginTop: "3%" }}>
          <center>
            <h2>{t("abt")}</h2>
          </center>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={style.abt_img}></div>
              </div>
              <div className="col-md-6">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                  aspernatur sint obcaecati magni hic. Distinctio tenetur fuga,
                  autem delectus illum cupiditate molestiae inventore, iure
                  mollitia fugit ullam voluptate dicta sequi?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* end of about us */}
      </div>

      {/* start of practice area */}
      <div className={style.practice_section}>
        <div className="row">
          {experise.map((service) => (
            <div className="col-md-3 mt-3">
              <div className={style.card}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className="">{service.logo}</div>
                  <div className="">
                    <p>{t(service.title)}</p>
                  </div>
                </div>
                <div className={style.card_body}>
                  <h1
                    style={{
                      marginRight: "10px",
                      fontSize: "40px",
                      color: "darksalmon",
                    }}
                  ></h1>
                  <p style={{ marginRight: "10px" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cupiditate fuga sit quam. Aliquid magnam laborum atque. Ipsa
                    asperiores adipisci, eaque eveniet id, alias voluptatibus
                    exercitationem dolorem ipsum blanditiis, voluptatum
                    suscipit.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
