import { Route, Routes } from "react-router-dom";
import CouponList from './containers/MyCoupon/CouponList';
import CourseList from './containers/MyContant/CourseList';
import Shortbook from "./containers/Myshortbook/Shortbook";
import Information from "./containers/MyInformation/Information";
import SignUp from "./containers/Account/Signup";
import SignIn from "./containers/Account/Signin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/:category" element={<CourseList />} />
        <Route path="/shortbook" element={<Shortbook />} />
        <Route path="/coupon" element={<CouponList />} />
        <Route path="/information" element={<Information />} />
        <Route path="/account/signup" element={<SignUp />} />
        <Route path="/account/signin" element={<SignIn />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App