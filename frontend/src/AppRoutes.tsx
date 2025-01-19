import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>Home Page</Layout>} />
      <Route
        path="/user-profile"
        element={<Layout>User Profile Page</Layout>}
      />
      <Route path="*" element={<span>Home Page</span>} />
      <Route path="/" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
