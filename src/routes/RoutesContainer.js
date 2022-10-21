import { Route, Routes } from "react-router-dom";
// import Categories from "../screens/Categories/Categories";
import Certificates from "../screens/Certificates/Certificates";
import EditCertificate from "../screens/Certificates/EditCertificate";
import Employee from "../screens/Employee/Employee";
import Notifications from "../screens/Notifications/Notifications";
import Projects from "../screens/Projects/Projects";
import Role from "../screens/RoleManagement/Role";
import Skills from "../screens/Skills/Skills";
import CountryStateCity from '../screens/Employee/CountryStateCity'

const RoutesContainer = () => {
  return (
    <Routes  >
      <Route path="/" element={<Employee />} />
      <Route path="/skills" element={<Skills />} />
      {/* <Route path="/categories" element={<Categories />} /> */}
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/certificates/edit/:id" element={<EditCertificate />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/role" element={<Role />} />
      <Route path="/country" element={<CountryStateCity />} />



    </Routes>
  );
};

export default RoutesContainer;
