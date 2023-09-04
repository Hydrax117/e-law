import { Nav } from "../../components/pages/nav/nav";
import style from "./style.module.css";

export const ViewLaywers = () => {
  const img = require("../../images/1.jpg");
  return (
    <>
      <Nav pageName={"All lawyers"} />
      <div className={style.section}>
        <div className={style.search}>
          <div
            className="mt-3 "
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <input
              type="search"
              name=""
              id=""
              placeholder="Search for Lawyers"
              style={{ width: "60%", height: "50px", borderRadius: "1rem" }}
            />
            <p> OR Filter base on Specialization </p>
            <select name="" id="">
              <option value="">-----</option>
              <option value="">Familiy</option>
            </select>
          </div>
        </div>
        <div className={style.cardContainer}>
          <div className="row">
            <div className="col-md-4 mt-3">
              <div className={style.caard}>
                <div className={style.cardImg}>
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
                <div className={style.cardBody}>
                  <center>
                    <h3>John Doe</h3>
                  </center>
                  <p>Location:Kaduna</p>
                  <p>Specialization:Criminal Law</p>
                  <center>
                    <button className="btn btn-primary">View Profile</button>
                  </center>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-3">
              <div className={style.caard}>
                <div className={style.cardImg}>
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
                <div className={style.cardBody}>
                  <center>
                    <h3>John Doe</h3>
                  </center>
                  <p>Location:Kaduna</p>
                  <p>Specialization:Criminal Law</p>
                  <center>
                    <button className="btn btn-primary">View Profile</button>
                  </center>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-3">
              <div className={style.caard}>
                <div className={style.cardImg}>
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
                <div className={style.cardBody}>
                  <center>
                    <h3>John Doe</h3>
                  </center>
                  <p>Location:Kaduna</p>
                  <p>Specialization:Criminal Law</p>
                  <center>
                    <button className="btn btn-primary">View Profile</button>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
