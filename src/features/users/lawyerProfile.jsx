import { Nav } from "../../components/pages/nav/nav";
import style from "./style.module.css";

export const LawyerProfile = () => {
  const img = require("../../images/1.jpg");

  return (
    <>
      <Nav />
      <section
        style={{
          width: "100%",
          height: "120vh",
          backgroundColor: "bisque",
          overflow: "hidden",
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: "white",
            marginTop: "3%",
          }}
        >
          <br />
          <div className="row">
            {/* layer profile */}
            <div className="col-md-6">
              <center>
                <h3>Lawyer profile</h3>
              </center>
              <div className="">
                <div className="" style={{ height: "500px" }}>
                  <img
                    src={img}
                    alt="no img"
                    srcset=""
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="">
                  <center>
                    <h3>John Doe</h3>
                  </center>
                  <strong>Location:Kaduna</strong> <br />
                  <strong>Specialization:Criminal Law</strong>
                  <br />
                  <strong>Contact:09043949</strong>
                  <br />
                  <strong>Services:weowoe,kfffsf,sdkfsfsk</strong>
                  <br />
                  <center>
                    <p>Bio</p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sit, corporis aliquam inventore aliquid eveniet
                      reiciendis, ipsum itaque sint dolor sed dolores doloremque
                      dolore vero asperiores sunt, dolorem nostrum quibusdam.
                      Neque?
                    </p>
                  </center>
                </div>
              </div>
            </div>
            {/* send message */}
            <div
              className="col-md-6"
              style={{
                backgroundColor: "",
                borderLeft: "1px solid black",
              }}
            >
              <center>
                <h3>Send message</h3>
              </center>
              <div className={style.messageForm}>
                <div
                  className=""
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <input
                    type="text"
                    placeholder="name"
                    style={{
                      height: "50px",
                      marginBottom: "10px",
                      width: "45%",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="phone number"
                    style={{
                      marginLeft: "10px",
                      height: "50px",
                      marginBottom: "10px",
                      width: "45%",
                    }}
                  />
                </div>
                <div className="">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Enter your complain"
                    style={{ width: "92%" }}
                  ></textarea>
                  <p>Provide image if available</p>
                  <input type="file" name="" id="" />
                  <center>
                    <button className="btn btn-primary">Send</button>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
