import React from "react";
import style from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import NavRoutes from "../NavRoutes";
import SideRoute from "../SideRoute";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import CardProfile from "../../pages/Edit/Edit";
import Post from "../../pages/Post/Post";
const Layout = () => {
  // console.log(window.location.pathname)
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <div>
              <Sidebar {...props} />
              <div className={style.layoutContentMain}>
                <div className={style.centeralcontainer}>
                  <NavRoutes />
                </div>
              </div>
              <div className={style.layoutContentSide}>
              <div className={style.sidecontainer}>
              {/* <Profile />{" "} */}
              <SideRoute/>
                </div>
                {/* <Post/> */}
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
