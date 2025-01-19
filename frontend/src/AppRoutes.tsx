import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
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
