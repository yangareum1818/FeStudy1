import { Route, Routes } from "react-router-dom";
import CouponList from './containers/MyCoupon/CouponList'
import CourseList from './containers/MyContant/CourseList'
import SignUp from "./containers/Account/Signup";
import SignIn from "./containers/Account/Signin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/account/signup" element={<SignUp />} />
        <Route path="/account/signin" element={<SignIn />} />
        <Route path="/coupon-list" element={<CouponList />} />
        <Route path="/" element={<CourseList />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App