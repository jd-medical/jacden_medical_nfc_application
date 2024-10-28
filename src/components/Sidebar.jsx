/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { blog, dashboard, doctor, doctorschedule, logout, menuicon04, menuicon06, menuicon08, menuicon09, menuicon10, menuicon11, menuicon12, menuicon14, menuicon15, menuicon16, patients, sidemenu } from './imagepath';
import Scrollbars from "react-custom-scrollbars-2";


const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState("");
  const handleClick = (e, item, item1, item3) => {
    const div = document.querySelector(`#${item}`);
    const ulDiv = document.querySelector(`.${item1}`);
    e?.target?.className ? ulDiv.style.display = 'none' : ulDiv.style.display = 'block'
    e?.target?.className ? div.classList.remove('subdrop') : div.classList.add('subdrop');
  }

  useEffect(() => {
    if (props?.id && props?.id1) {
      const ele = document.getElementById(`${props?.id}`);
      handleClick(ele, props?.id, props?.id1);
    }
  }, [])


  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };
  return (
    <>
      <div className="sidebar" id="sidebar">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu"
              onMouseLeave={expandMenu}
              onMouseOver={expandMenuOpen}
            >
              <ul>
                <li className="menu-title">Main</li>
                <li className="submenu" >
                  <Link to="#" id="menu-item" onClick={(e) => {

                    handleClick(e, "menu-item", "menu-items")
                  }}>
                    <span className="menu-side">
                      <img src={dashboard} alt="" />
                    </span>{" "}
                    <span> Dashboard </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: sidebar === 'Dashboard' ? 'block' : "none" }} className='menu-items'>
                    <li>
                      <Link className={props?.activeClassName === 'admin-dashboard' ? 'active' : ''} to="/admin-dashboard">Admin Dashboard</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item1" onClick={(e) => {
                    // setSidebar('Doctors')
                    handleClick(e, "menu-item1", "menu-items1")
                  }}>
                    <span className="menu-side">
                      <img src={doctor} alt="" />
                    </span>{" "}
                    <span> Doctors </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: sidebar === 'Doctors' ? 'block' : 'none' }} className="menu-items1">
                    <li>
                      <Link className={props?.activeClassName === 'doctor-list' ? 'active' : ''} to="/doctorlist">Doctor List</Link>
                    </li>
                    {/* <li>
                      <Link className={props?.activeClassName === 'doctor-profile' ? 'active' : ''} to="/doctorprofile">Doctor Profile</Link>
                    </li> */}
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item2" onClick={(e) => handleClick(e, "menu-item2", "menu-items2")}>
                    <span className="menu-side">
                      <img src={patients} alt="" />
                    </span>{" "}
                    <span>Patients </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items2">
                    <li>
                      <Link className={props?.activeClassName === 'patient-list' ? 'active' : ''} to="/patientslist">Patients List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-patient' ? 'active' : ''} to="/addpatients">Add Patients</Link>
                    </li>

                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item3" onClick={(e) => handleClick(e, "menu-item3", "menu-items3")}>
                    <span className="menu-side">
                      <img src={menuicon08} alt="" />
                    </span>{" "}
                    <span> Staff </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items3">
                    <li>
                      <Link className={props?.activeClassName === 'staff-list' ? 'active' : ''} to="/stafflist">Staff List</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item4" onClick={(e) => handleClick(e, "menu-item4", "menu-items4")}>
                    <span className="menu-side">
                      <img src={menuicon04} alt="" />
                    </span>{" "}
                    <span> Appointments </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items4">
                    <li>
                      <Link className={props?.activeClassName === 'appoinment-list' ? 'active' : ''} to="/appoinmentlist">Appointment List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-appoinment' ? 'active' : ''} to="/addappoinments">Add Appointment</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item5" onClick={(e) => handleClick(e, "menu-item5", "menu-items5")}>
                    <span className="menu-side">
                      <img src={doctorschedule} alt="" />
                    </span>{" "}
                    <span> Doctor Schedule </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items5">
                    <li>
                      <Link className={props?.activeClassName === 'shedule-list' ? 'active' : ''} to="/schedulelist">Schedule List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-shedule' ? 'active' : ''} to="/addschedule">Add Schedule</Link>
                    </li>
                    {/* <li>
                      <Link className={props?.activeClassName === 'edit-shedule' ? 'active' : ''} to="/editschedule">Edit Schedule</Link>
                    </li> */}
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item6" onClick={(e) => handleClick(e, "menu-item6", "menu-items6")}>
                    <span className="menu-side">
                      <img src={menuicon06} alt="" />
                    </span>{" "}
                    <span> Departments </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items6">
                    <li>
                      <Link className={props?.activeClassName === 'department-list' ? 'active' : ''} to="/departmentlist">Department List</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item7" onClick={(e) => handleClick(e, "menu-item7", "menu-items7")}>
                    <span className="menu-side">
                      <img src={sidemenu} alt="" />
                    </span>{" "}
                    <span> Accounts </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items7">
                    <li>
                      <Link className={props?.activeClassName === 'invoice-list' ? 'active' : ''} to="/invoicelist">Invoices</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'payments' ? 'active' : ''} to="/payments">Payments</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'taxes' ? 'active' : ''} to="/taxes">Taxes</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <ul style={{ display: "none" }} className="menu-items8">
                    <li>
                      <Link className={props?.activeClassName === 'employee-salary' ? 'active' : ''} to="/employeesalary"> Employee Salary </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'employee-payslip' ? 'active' : ''} to="/payslip"> Payslip </Link>
                    </li>
                  </ul>
                </li>
                <li>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item11" onClick={(e) => handleClick(e, "menu-item11", "menu-items11")}>
                    <span className="menu-side">
                      <img src={blog} alt="" />
                    </span>{" "}
                    <span> Knowledge Base</span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items11">
                    <li>
                      <Link className={props?.activeClassName === 'blog-grid' ? 'active' : ''} to="/articles">Articles</Link>
                    </li>

                  </ul>
                </li>
                <li>
                  <Link className={props?.activeClassName === 'assests' ? 'active' : ''} to="/assests">
                    <i className="fa fa-cube" /> <span>Assets</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item12" onClick={(e) => handleClick(e, "menu-item12", "menu-items12")}>
                    <i className="fa fa-flag" /> <span> Reports </span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items12">
                    <li>
                      <Link className={props?.activeClassName === 'expenses-report' ? 'active' : ''} to="/expense-Report"> Expense Report </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'invoice-report' ? 'active' : ''} to="/invoice-report"> Invoice Report </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item13" onClick={(e) => handleClick(e, "menu-item13", "menu-items13")}>
                    <span className="menu-side">
                      <img src={menuicon15} alt="" />
                    </span>{" "}
                    <span> Invoice </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items13">
                    <li>
                      <Link className={props?.activeClassName === 'invoice-list' ? 'active' : ''} to="/invoice-list"> Invoices List </Link>
                    </li>
                    {/* <li>
                      <Link className={props?.activeClassName === 'invoice-grid' ? 'active' : ''} to="/invoice-grid"> Invoices Grid</Link>
                    </li> */}
                    <li>
                      <Link className={props?.activeClassName === 'add-invoice' ? 'active' : ''} to="/add-invoice"> Add Invoices</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-invoice' ? 'active' : ''} to="/edit-invoice"> Edit Invoices</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'invoice-settings' ? 'active' : ''} to="/invoice-settings"> Invoices Settings</Link>
                    </li>
                  </ul>
                </li>
                <li>
                </li>
              </ul>
              <div className="logout-btn">
                <Link to="/login">
                  <span className="menu-side">
                    <img src={logout} alt="" />
                  </span>{" "}
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  )
}
export default Sidebar
