import { useState } from "react";
import style from "./style.module.css";
import { Nav } from "../../components/pages/nav/nav";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";

export const LawyerRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [stateo, setStateo] = useState("");
  const [years, setYears] = useState("");
  const [password, SetPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const specializationArray = [
    "Accident",
    "Bank",
    "Capital",
    "Employment",
    "Criminal",
    "House",
    "Injury",
    "Family",
  ];

  return (
    <>
      <Nav pageName={"Lawyer Sign Up"} />
      {/* start of login body */}

      <div className={style.loginContainer}>
        <div className={style.form}>
          <div className={style.subForm}>
            <div className="row" style={{ width: "100%" }}>
              <div className="col-md-8">
                <label htmlFor="">Name: </label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="">NIC: </label>
                <input
                  type="text"
                  value={nic}
                  onChange={(e) => {
                    setNic(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row" style={{ width: "100%" }}>
              <div className="col-md-8">
                <label>Email</label>

                <input
                  type="email"
                  name=""
                  id=""
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="">Contact: </label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row" style={{ width: "100%" }}>
              <div className="col-md-8">
                <label>State of Residence</label>

                <input
                  type="text"
                  name=""
                  id=""
                  value={stateo}
                  onChange={(event) => setStateo(event.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="">Adress </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row" style={{ width: "100%" }}>
              <div className="col-md-8">
                <label>Specialization</label>

                <select name="" id="">
                  <option value="none">select specialization</option>
                  {specializationArray.map((specialization) => {
                    return (
                      <option key={specialization} value={specialization}>
                        {specialization}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="">Years : </label>
                <input
                  type="text"
                  placeholder="years Active eg 1,2,3"
                  value={years}
                  onChange={(e) => {
                    setYears(e.target.value);
                  }}
                />
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <h4>Password</h4>
              <input
                type="password"
                name=""
                id="password1"
                value={password}
                onChange={(event) => {
                  SetPassword(event.target.value);
                  document.getElementById("perror").style.display = "initial";
                }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <h4>Confirm password</h4>
              <input
                type="password"
                name=""
                id="password2"
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
                  Password must more than 6 characters
                </p>
              ) : (
                <p id="perror" style={{ color: "red", display: "none" }}>
                  <BiErrorCircle />
                  Password must more than 6 characters
                </p>
              )}{" "}
              <br />
              {password === confirm ? (
                <p id="cerror" style={{ color: "green", display: "none" }}>
                  <BiCheckCircle /> Passwords match
                </p>
              ) : (
                <p id="cerror" style={{ color: "red", display: "none" }}>
                  <BiErrorCircle /> Passwords do not match
                </p>
              )}
              <br />
              {password.includes(" ") ? (
                <p id="" style={{ color: "red" }}>
                  <BiErrorCircle /> Passwords must not include space
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
              <button className="btn btn-primary">Sign up</button>
            ) : (
              <button className="btn btn-primary" disabled="disabled">
                Sign up
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
