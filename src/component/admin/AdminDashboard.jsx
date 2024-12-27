import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./AdminDashboard.css"
const AdminDashboard = () => {

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
        window.localStorage.removeItem("token");
        navigate("/");
    }
};
  return (
    <>
    <div className="main">
    <div className="dashboard">
    <Link to="admindashboard/adminlaptops" style={{marginRight:100}} className="link">Laptops</Link>
<Link to="admindashboard/adminipads" style={{marginRight:100}} className="link">Ipads</Link>
<Link to="admindashboard/adminmobiles" style={{marginRight:100}} className="link">Mobiles</Link>
<Link to="admindashboard/adminwatches" style={{marginRight:100}} className="link">Watches</Link>
<Link to="admindashboard/adminairpods" style={{marginRight:100}} className="link">Airpods</Link>
<Link to="admindashboard/adminhomeapp" style={{marginRight:100}} className="link">Home App</Link>
<a onClick={logout} style={{ cursor: "pointer" }} className="ancer">LOGOUT</a>
     </div>
    <div className="child">
    <Outlet />
    </div>
    </div>
 </>
  )
}

export default AdminDashboard