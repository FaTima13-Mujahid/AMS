import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

const Profile = () => {
  const [Checklogin, setChecklogin] = useState("NO");
  const [CurrentUser, setCurrentUser] = useState(null);
//-------STORED USER k ZARIYE FETCHING INFORMATION OF LOGIN USER
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setChecklogin("yes");
      setCurrentUser(storedUser);
    }
  }, []);

  return (
    <>
      <Navbar />

      {Checklogin === "yes" ? (
        <>
          <section style={{ backgroundColor: "#eee",marginTop:"100px" }}>
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card mb-4">
                    <div className="card-body text-center">
                      <img
                        src={
                          CurrentUser?.gender === "male"
                            ? "data:image/png;base64,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" // Male avatar URL
                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8AAAAEBAQXFxf8/Pzr6+ujo6MODg7Y2Nj29vbj4+NmZmYQEBDV1dXHx8f5+fm/v79sbGx2dnaMjIw2NjaCgoJXV1fu7u4yMjJKSkqvr69nZ2dzc3OdnZ0kJCTe3t6UlJRBQUGEhIRSUlInJyfCwsIcHBzMzMy2trZJSUldXV0sLCw8PDyQkJChoaGrq6up1bItAAAJcklEQVR4nNVd2UIiSwylBGQTEZABF5bGBRRH/v/vLj0Od1BS6SSVTlWfZ+2uQ9eSnCxVq5mgMX3Zrx6y3WvL1XfZ++N43+80bF5tgMZyPly4c+yGq3bssWlgM7kF2B1xu+7HHmAYmqtXhN4XWpNm7GGK0X8opPeFYTVna/8XkV+O9+vYw2WjOWTwy/HUjT1kFjpjJr8c40HsYdNxcyEg6Fx9G3vgRAxGIn45epX4jBvodKdiUYFddRXAL8dlbAIFaHC30HMMk7ZXp1kwQefeOrFp+DF9ViDo3Gwam4gPzboKwcOxkail2tT5gjlel7HJQBh8qBF07iJFG06ToHNX6W0376oEnftI7dCQW2o+vMem9B2/1Qk6N4pN6hQvJRBMyoDrlELQuXTOjKeSGM5S2W1C3Qk/ElmKm9IIOpeE198plkQDkIIRPimToHuITa9WW5ZK0LlNbII1ju4rwW1sgjclE4x+7jf0fEIv4m425R2F//AYk+DUgKBzMTUNSXjiO+4mq/nl/RZ1vibxCIZY3PWnz+su8UnxPuJcyO5udPPTbehhf7+Owu6AgWQjvRrdQJ8EP3VifcQtn9+673GIBjvs31aWtE7AVNdaQyyUjc741ziO4jWLX3aP64NN9L/jhPk5+uGw2IBGo1ZRhLcGnd+aYnj10UfEEIip+0xrRRwdljvlPsslA4LmNl3NyYYz+pNFcKLwneGIMWN2DVA5xF5ZvCfw6/FO6kvsWfOSePhRPEnfuGmHqKb1qxQWCIon6T3/oeipb+0IF+2kD5IBDbAn3qhzwLFG+S1eZE/FJANr/Rs9vNbS5C30I6qOP2woARIntp3ahvYRd+49xMDCnCjB1hUAf8w3UN5EjllbT9+3DGfBuYX+BT7TGDgVPuFoGJ4fisx/SzfYEzJUsazuvAwtSzPgH1rnTPYHsyy3Gsi8etay/r3GhOWZDygOT2peeMeX4mhpfJ+vFU0P1XdiZIrvKMBgdvZ21QBRBjNc2Ik1gOs01nx+2/MR7ew2YLv7rfoCz2Zjp2QAaWyq37DWgM1TO10Y2Ap0GXr0dLuQPuDjaJvFYMh0pfwSPwBXXFt2b7QAhsoTBQEQ3FY3/KF5ahfuhhK91F8CRIXtzDZokaifxkDSql3eySPAUF3sA94x1H6HF1CNtrbqDqXq9JTf4QcUG9U2/CEX1C5OCkZ/ld8B7WaRGSprDJCTaMcQTO/RjdJ2oVfYrUOQ4ZPqK/ZxGYL9LlqqiUsZ9Aq7pG84MUSzcgAW3OzOQ5ih5hyCowaxGSpGaT1JC3YMIavtgL3aCzwR5rh2qdNUFM+1vDQYqh36vkqq+Ay19posWYZKubzeAFsCDHWEFN8nNGTorx3QODD8qTpxVYwvKIiKSGFCCgwVVqJ3CSTCMHgQWKqwHUOsbDQwetLwHPZ/YKeXYuVOb2GPRmtu7TRvtEdEkHWKVzjohvAw4PVOASdGQamYXZ4wmq4cohdlOEO76FpBjrd4IEUtYPTcsyIUJQgLfQxQfTqFXYeFomYtsqSJ4hYwdonQhZ0wJBI/ob2GXRwfL1HKwVdUip9pmbrny3c5Adf8aFNanto1xiQwZNoftA4wdgxJ3T44FIm9J+wyhmj9TOiqDbUm3I4hGBg6R0Y8NNBK9VPY5bU1oWQXAFeUyosluSvvhV3Reoc8qEnhZ2T0Dnm1K+5C3dTvWOB2SButLvqBmWGn6Iwxrjv/VO2SV+AfGOYIIxUDEGZwKf4S0ZxA3Bky5LbyfJ1sfpBsXr4xn2GbyS7oaV1/G283zQPPQbe/HXGW3/+w7GxWbo82Hyw78Vi0hzrHypAhpVRdH3YihkWXNgiWtc68xi1aEJZPi0BxyPVhWZ1Ha4qhDdNuUYxxoQ2gHOdgtCRYo3dl7dU2/mufRm1G78y6KUO6YZpPreYeMLEvhve5N0T0pl1wVIsJcgv2Y9bp4Ho+/PfhF4+fm6MrRLYebDtEfhJH9cPhmXb71/3uD0eW6mzaNlKiGjUU7Yh69Nj2VCB2uKYpisQpb9tRmDaoHa1HALFftqVr0SG2maf+6kQzN6inCAtLYs9L+uZH1Gs+jART8lUP9J+c3K3XxDQle06ciC2eGXACg+2G3LSUl7CQJUOR3pWVt2YoATsTinTnnpv7Qm8rXepapHu+H9xHM7q7l7ijMi5W44f66BeBzEo7Fxt0d1Vif1BvD9YuIjsBXctfSFo6MVrYl5RoSj6zpIkvDBW2FGGRvp+L65PoikYp4WCGZiTdCeiKRhlLkRHskyfYMeIhKzVmf8HQgEN+Xnr4XF09ZczRkAOZcTuW8jxl3PMQlqrMiEyqZpsytoDAhlzUVJ0DWprJJ3Rzw7ndXt7BcXDJudRbsa8R4yj8w1Gq++2Zl5brbTa85JIDFpI1smdfmKyWuiCJh+6YdlVjK7l0XivhlJ/5kuODw3ErSj/RyrAR3+CYUQ3wG/FtyTofMeB2vFsKx2s8hopCZSWGxeyfijhes7exb9BQNHj5gwBHTDnahPFTCWYoJCV4OfYVrtkN12zCL4874Be0I7RVrr8Mr9i70hiGc72f37EfOvv/YhFKUC+/q3cqMC6V+LlwDVzzQurecePrciz5IgQ2AGO4TRSMco5dciIHDWH2N0NBpGHUVs++DctgKOvWdE0ETdM4GXpchPj66pO0FIRMU7HNb4qAOoxqTNIQy60akzQkxT2LPXQixNNU+bgvEdJDX3AbbiRIw4mC6qZIEMaEgXs6UsWHTGavzjKUyjVVOStyyM4LTSeubMgyB2KPmgUJwTi1TVJIxG9G2DcBSEoVquD8/oMkRhN7zEzwCdL6l6QDfjJknEJYOfimaZyCdDn4IRpZ4Dce2LV7U3baQGTUuYobM8EkAXDP/MIOf8mBa3wrxxYMwPWCQ6PP9mDKUQWtUpMETzWtkn9/BM/Pj9O8JAy88AXaCzlR8Do1Vst1+gJvq4k9WhE4BBkFOgmBo+2TS32TAqdDT/VsthycLtvViVicgnPNTXUiFqfYMRhWzTn8AqNFT4fSmDk9XNAt0ypapTnolmnVlMQj6IpiFX0nx5qlNUl1R3xwkmmrJiV+gSMoVivudATHpqlKutd3sBTTaqTsfQevVXQVnQtmmwOVWghTcFOFq6fqswOIVVPbBFWr1ZLbRMVB69ijZmAlIVil7EvxNUldbv/8OBiGlCNoVZiViFHo7TOdl/HdrqCVwwWKViGufKijeH7rzfuFmaX/Acqxq55OcUEIAAAAAElFTkSuQmCC" // Female avatar URL
                        }
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: "150px" }}
                      />
                      <h5 className="my-3">
                        {CurrentUser?.fname || "N/A"} {CurrentUser?.lname || ""}
                      </h5>
                     
                     
                    </div>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="card mb-4">
                    <div className="card-body">
                      <form>
                        <div className="row mb-3">
                          <div className="col">
                            <label htmlFor="firstName" className="form-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              value={CurrentUser?.fname || "null"}
                              disabled
                              id="firstName"
                              className="form-control"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor="lastName" className="form-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              value={CurrentUser?.lname || "null"}
                              disabled
                              id="lastName"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <input
                              type="text"
                              value={CurrentUser?.email || "null"}
                              disabled
                              id="email"
                              className="form-control"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor="gender" className="form-label">
                              Gender
                            </label>
                            <input
                              type="text"
                              value={CurrentUser?.gender || "null"}
                              disabled
                              id="gender"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col">
                            <label htmlFor="dob" className="form-label">
                              Date of Birth
                            </label>
                            <input
                              type="text"
                              value={CurrentUser?.dob || "null"}
                              disabled
                              id="dob"
                              className="form-control"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor="nic" className="form-label">
                              NIC
                            </label>
                            <input
                              type="text"
                              value={CurrentUser?.nic || "null"}
                              disabled
                              id="nic"
                              className="form-control"
                            />
                          </div>
                        </div>

                        {/* <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <h2>Please log in to view your profile.</h2>
      )}
    </>
  );
};

export default Profile;
