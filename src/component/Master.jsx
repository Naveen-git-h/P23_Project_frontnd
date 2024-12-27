import {BrowserRouter,Route,Routes} from "react-router-dom"
import React from 'react'
import UserDashboard from "./user/UserDashboard"
import AdminDashboard from "./admin/AdminDashboard"
import Error from "./global/Error"
import Login from "./global/Login"
import AdminLaptops from "./admin/AdminLaptops"
import AdminMobiles from "./admin/AdminMobiles"
import AdminWatches from "./admin/AdminWatches"
import AdminIpads from "./admin/AdminIpads"
import AdminAirpods from "./admin/AdminAirpods"
import AdminHomeapp from "./admin/AdminHomeapp"
const Master = () => {
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/userdashboard" element={<UserDashboard></UserDashboard>}></Route>
            <Route path="/admindashboard" element={<AdminDashboard></AdminDashboard>}>
            
                   <Route path="admindashboard/adminlaptops" element={<AdminLaptops></AdminLaptops>}></Route>
                   <Route path="admindashboard/adminmobiles" element={<AdminMobiles></AdminMobiles>}></Route>
                   <Route path="admindashboard/adminwatches" element={<AdminWatches></AdminWatches>}></Route>
                   <Route path="admindashboard/adminipads" element={<AdminIpads></AdminIpads>}></Route>
                   <Route path="admindashboard/adminairpods" element={<AdminAirpods></AdminAirpods>}></Route>
                   <Route path="admindashboard/adminhomeapp" element={<AdminHomeapp></AdminHomeapp>}></Route>
            
            </Route>
            <Route path="/error" element={<Error></Error>}></Route>
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default Master