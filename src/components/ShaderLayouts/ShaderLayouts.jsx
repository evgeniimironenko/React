import { Suspense } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import css from "./style.module.css";

const ShaderLayouts = () => {
  const location = useLocation();
  const isGalleryPage = location.pathname === "/gallery";

  return (
    <>
      <main>
        <header>
          <div className={css.container}>
            <nav>
              <NavLink
                className={({ isActive }) => (isActive ? css.active : "")}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? css.active : "")}
                to="/feedback"
              >
                Feedback
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? css.active : "")}
                to="/contacts"
              >
                Contacts
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? css.active : "")}
                to="/gallery"
              >
                Gallery
              </NavLink>
            </nav>
          </div>
        </header>
        <div className={!isGalleryPage ? css.container : ""}>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default ShaderLayouts;
