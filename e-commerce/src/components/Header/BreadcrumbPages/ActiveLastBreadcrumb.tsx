import React from "react";
import { useLocation, Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const DynamicBreadcrumbs: React.FC = () => {
  const location = useLocation(); // Obtém a URL atual
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link style={{fontSize: '0.8rem'}} underline="hover" color="inherit" to="/">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={to} style={{ color: "gray" }}>
            {value}
          </span>
        ) : (
          <Link  underline="hover" color="inherit" to={to} key={to}>
            {value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default DynamicBreadcrumbs;
