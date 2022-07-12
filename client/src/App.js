import Home from "./components/shared/Home";
import NoMatch from "./components/shared/NoMatch";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UserAccount from "./components/shared/UserAccount";
import FetchUser from "./components/auth/FetchUser";
import Hooks from "./demos/Hooks.js";
import { normalize } from 'styled-normalize'
import ImageUpload from './demos/ImageUpload.js'

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   ${normalize}
   a{
   margin-right:20px
   }
`;




const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <>
      <FetchUser>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<UserAccount />} />
            <Route path="/image_upload" element={<ImageUpload />} />
          </Route>
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </FetchUser>
    </>
  </>
);

export default App;

