import React, { useState } from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import DonutChart from "./DonutChart";
import Sidebar from "../../Sidebar";
import Header from "../../Header";
import PatientChart from "./PaitentChart";
import Select from "react-select";
import {
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  calendar,
  empty_wallet,
  imagesend,
  morning_img_01,
  profile_add,
  scissor,
  user001,
  profileicon,
  timericon,
  trashicon,
   imgicon,
} from "../../imagepath";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
// import ActivityChart from "./ActivityChart";
import RadialBarChart from "../Patient_Dashboard/FullChart";

const Admin_Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [year, setyear] = useState([
    { value: 1, label: "2022" },
    { value: 2, label: "2021" },
    { value: 3, label: "2020" },
    { value: 4, label: "2019" },
  ]);

  return (
    <>
      <Header />
      <Sidebar
        id="menu-item"
        id1="menu-items"
        activeClassName="admin-dashboard"
      />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Dashboard </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Admin Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="good-morning-blk">
              <div className="row">
                <div className="col-md-6">
                  <div className="morning-user">
                    <h2>
                      Good Morning, <span>Amanda Admin</span>
                    </h2>
                    <p>Have a nice day at work</p>
                  </div>
                </div>
                <div className="col-md-6 position-blk">
                  <div className="morning-img">
                    <img src={morning_img_01}
                     alt="#" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <div className="dash-boxs comman-flex-center">
                    <img src={calendar}  alt="#" />
                  </div>
                  <div className="dash-content dash-count flex-grow-1">
                    <h4>Appointments</h4>
                    <h2>
                      {" "}
                      <CountUp delay={0.4} end={32} duration={0.6} />
                    </h2>
                    <p>
                      <span className="passive-view">
                        <i className="feather-arrow-up-right me-1" >
                          <FeatherIcon icon="arrow-up-right"/>
                        </i>
                        12%
                      </span>{" "}
                      vs last month
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <div className="dash-boxs comman-flex-center">
                    <img src={profile_add}  alt="#" />
                  </div>
                  <div className="dash-content dash-count">
                    <h4>New Patients</h4>
                    <h2>
                      <CountUp delay={0.4} end={18} duration={0.6} />
                    </h2>
                    <p>
                      <span className="passive-view">
                        <i className="feather-arrow-up-right me-1">
                          <FeatherIcon icon="arrow-up-right" />
                          </i>
                        20%
                      </span>{" "}
                      vs last month
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <div className="dash-boxs comman-flex-center">
                    <img src={scissor} alt="#" />
                  </div>
                  <div className="dash-content dash-count">
                    <h4>Occupancy %</h4>
                    <h2>
                      <CountUp delay={0.4} end={19} duration={0.6} />
                    </h2>
                    <p>
                      <span className="negative-view">
                        <i className="feather-arrow-down-right me-1">
                          <FeatherIcon icon="arrow-down-right"/>
                          </i>
                        7%
                      </span>{" "}
                      vs last month
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <div className="dash-boxs comman-flex-center">
                    <img src={empty_wallet} alt="#" />
                  </div>
                  <div className="dash-content dash-count">
                    <h4>Billings</h4>
                    <h2>
                      $<CountUp delay={0.4} end={22350} duration={0.6} />
                    </h2>
                    <p>
                      <span className="passive-view">
                        <i className="feather-arrow-up-right me-1">
                          <FeatherIcon icon="arrow-up-right"/>
                          </i>
                        13%
                      </span>{" "}
                      vs last month
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <div className="chart-title patient-visit">
                      <h4>Patient Visit by Gender</h4>
                      <div>
                        <ul className="nav chat-user-total">
                          <li>
                            <i
                              className="fa fa-circle current-users"
                              aria-hidden="true"
                            />
                            Male 75%
                          </li>
                          <li>
                            <i
                              className="fa fa-circle old-users"
                              aria-hidden="true"
                            />{" "}
                            Female 25%
                          </li>
                        </ul>
                      </div>
                      <div className="form-group mb-0">
                        <Select
                          className="custom-react-select"
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={year}
                          id="search-commodity"
                          components={{
                            IndicatorSeparator: () => null
                          }}
                          styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              borderColor: state.isFocused ?'none' : '2px solid rgba(46, 55, 164, 0.1);',
                               boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                              '&:hover': {
                                borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                              },
                              borderRadius: '10px',
                              fontSize: "14px",
                                minHeight: "45px",
                            }),
                            dropdownIndicator: (base, state) => ({
                              ...base,
                              transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                              transition: '250ms',
                              width: '35px',
                              height: '35px',
                            }),
                          }}
                        />
                      </div>
                    </div>
                    <div id="patient-chart" />
                    <PatientChart />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
                <div className="card">
                  <div className="card-body">
                    <div className="chart-title">
                      <h4>Patient by Department</h4>
                    </div>
                    <div id="donut-chart-dash" className="chart-user-icon">
                      <DonutChart />
                      <img src={user001} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
                  <div className="col-12 col-lg-12 col-xl-5 d-flex">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title d-inline-block">
                          Send Notification
                        </h4>{" "}
                        <Link
                          to="/appoinmentlist"
                          className="patient-views float-end"
                        >
                          Show all
                        </Link>
                      </div>
                      <div className="card-body p-0 table-dash">
                        <div className="table-responsive">
                          <table className="table mb-0 border-0 custom-table">
                            <tbody>
                              <tr>
                                <td className="table-image appoint-doctor">
                                  <img
                                    width={28}
                                    height={28}
                                    className="rounded-circle"
                                    src={Avatar4}
                                    alt=""
                                  />
                                  <h2>Dr.Kurdell Espinosa-Campbell</h2>
                                </td>
                                <td className="appoint-time text-center">
                                  <h6>Today 9:00 AM</h6>
                                  <span>Debra Doubtful</span>
                                </td>
                                <td>
                                  <button className="check-point status-green me-1">
                                    <i className="feather-check">
                                      <FeatherIcon icon="check" />
                                    </i>
                                  </button>
                                  <button className="check-point status-pink ">
                                    <i className="feather-x">
                                      <FeatherIcon icon="x" />
                                    </i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td className="table-image appoint-doctor">
                                  <img
                                    width={28}
                                    height={28}
                                    className="rounded-circle"
                                    src={Avatar2}
                                    alt=""
                                  />
                                  <h2>Dr.Indira Garcia Marcayda</h2>
                                </td>
                                <td className="appoint-time text-center">
                                  <h6>Today 9:00 AM</h6>
                                  <span>Marvin Mindful</span>
                                </td>
                                <td>
                                  <button className="check-point status-green me-1">
                                    <i className="feather-check">
                                      <FeatherIcon icon="check" />
                                    </i>
                                  </button>
                                  <button className="check-point status-pink ">
                                    <i className="feather-x">
                                      <FeatherIcon icon="x" />
                                    </i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td className="table-image appoint-doctor">
                                  <img
                                    width={28}
                                    height={28}
                                    className="rounded-circle"
                                    src={Avatar3}
                                    alt=""
                                  />
                                  <h2>Dr.Ledif Sanchez Valdes </h2>
                                </td>
                                <td className="appoint-time text-center">
                                  <h6>Today 9:20 PM</h6>
                                  <span>Delroy Watson</span>
                                </td>
                                <td>
                                  <button className="check-point status-green me-1">
                                    <i className="feather-check">
                                      <FeatherIcon icon="check" />
                                    </i>
                                  </button>
                                  <button className="check-point status-pink ">
                                    <i className="feather-x">
                                      <FeatherIcon icon="x" />
                                    </i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td className="table-image appoint-doctor">
                                  <img
                                    width={28}
                                    height={28}
                                    className="rounded-circle"
                                    src={Avatar4}
                                    alt=""
                                  />
                                  <h2>Dr.Kurdell Espinosa-Campbell</h2>
                                </td>
                                <td className="appoint-time text-center">
                                  <h6>Today 9:40 AM</h6>
                                  <span>Sheldon Smith</span>
                                </td>
                                <td>
                                  <button className="check-point status-green me-1">
                                    <i className="feather-check">
                                      <FeatherIcon icon="check" />
                                    </i>
                                  </button>
                                  <button className="check-point status-pink ">
                                    <i className="feather-x">
                                      <FeatherIcon icon="x" />
                                    </i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td className="table-image appoint-doctor">
                                  <img
                                    width={28}
                                    height={28}
                                    className="rounded-circle"
                                    src={Avatar5}
                                    alt=""
                                  />
                                  <h2>Dr.Yunier Isnaudis Garbey Gonzalez</h2>
                                </td>
                                <td className="appoint-time text-center">
                                  <h6>Today 10:00 AM</h6>
                                  <span>Jacques Rubi</span>
                                </td>
                                <td>
                                  <button className="check-point status-green me-1">
                                    <i className="feather-check">
                                      <FeatherIcon icon="check" />
                                    </i>
                                  </button>
                                  <button className="check-point status-pink ">
                                    <i className="feather-x">
                                      <FeatherIcon icon="x" />
                                    </i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-xl-4 d-flex">
                <div className="card flex-fill comman-shadow">
                  <div className="card-header">
                    <h4 className="card-title d-inline-block">
                      Scheduled Appointments
                    </h4>{" "}
                    <Link
                      to="/appoinmentlist"
                      className="patient-views float-end"
                    >
                      Show all
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="teaching-card">
                      <ul className="steps-history">
                        <li>08:00</li>
                        <li>09:00</li>
                        <li>10:00</li>
                        <li>11:00</li>
                      </ul>
                      <ul className="activity-feed">
                        <li className="feed-item d-flex align-items-center">
                          <div className="dolor-activity hide-activity">
                            <ul className="doctor-date-list mb-2">
                              <li className="stick-line">
                                <i className="fas fa-circle me-2" />
                                08:00 <span>Joyce Deans</span>
                              </li>
                              <li className="stick-line">
                                <i className="fas fa-circle me-2" />
                                08:00 <span>Carolyn Jackson</span>
                              </li>
                              <li className=" dropdown ongoing-blk ">
                                <Link
                                  to="#"
                                  className="dropdown-toggle  active-doctor"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fas fa-circle me-2 active-circles" />
                                  09:00 <span>Debra Doubtful</span>
                                  <span className="ongoing-drapt">
                                    Check-In{" "}
                                    <i className="feather-chevron-down ms-2">
                                      <FeatherIcon icon="chevron-down ms-2" />
                                    </i>
                                  </span>
                                </Link>
                                <ul className="doctor-sub-list dropdown-menu">
                                  <li className="patient-new-list dropdown-item">
                                    Doctor:<span>Dr. Kurdell Espinosa-Campbell</span>
                                    <Link
                                      to="#"
                                      className="new-dot status-green"
                                    >
                                      <i className="fas fa-circle me-1 fa-2xs" />
                                      New
                                    </Link>
                                  </li>
                                  <li className="dropdown-item">
                                    Time:<span>9:00 - 9:30 (30min)</span>
                                  </li>
                                  <li className="schedule-blk mb-0 pt-2 dropdown-item">
                                    <ul className="nav schedule-time">
                                      <li>
                                        <Link to="#">
                                          <img src={trashicon} alt="" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={profileicon} alt="" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={imgicon} alt="" />
                                        </Link>
                                      </li>
                                    </ul>
                                    <Link className="btn btn-primary appoint-start">
                                      Start Appointment
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="feed-item d-flex align-items-center">
                          <div className="dolor-activity">
                            <ul className="doctor-date-list mb-2">
                              <li>
                                <i className="fas fa-circle me-2" />
                                09:00 <span>Marvin Mindful</span>
                              </li>
                              <li>
                                <i className="fas fa-circle me-2" />
                                09:20 <span>Delroy Watson</span>
                              </li>
                              <li>
                                <i className="fas fa-circle me-2" />
                                09:40 <span>Sheldon Smith</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="feed-item d-flex align-items-center">
                          <div className="dolor-activity">
                            <ul className="doctor-date-list mb-2">
                              <li>
                                <i className="fas fa-circle me-2" />
                                10:00 <span>Jacques Rubi</span>
                              </li>
                              <li>
                                <i className="fas fa-circle me-2" />
                                10:30 <span>Peggy Oblenis</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        {/* <li className="feed-item d-flex align-items-center">
                          <div className="dolor-activity">
                            <ul className="doctor-date-list mb-2">
                              <li>
                                <i className="fas fa-circle me-2" />
                                10:00 <span>Cristina Groves</span>
                              </li>
                              <li>
                                <i className="fas fa-circle me-2" />
                                10:30 <span>Benjamin Bruklin</span>
                              </li>
                            </ul>
                          </div>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
                    <div className="card wallet-widget">
                      <div className="circle-bar circle-bar2">
                        <div className="circle-graph2" data-percent={66}>
                          {/* <div style={{ width: 140, height: 150 }}>
                            <CircularProgressbar value={66} />
                          </div> */}
                          <RadialBarChart duration={10}/>
                          <b>
                            <img src={timericon} alt="" />
                          </b>
                        </div>
                      </div>
                      <div className="main-limit">
                        <p>Next Appointment in</p>
                        <h4>00:22m</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            <div className="row">
              <div className="col-12 col-xl-12 d-flex">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title d-inline-block">
                      Upcoming Appointments [Inc. Walk-Ins]
                    </h4>{" "}
                    <Link
                      to="/appoinmentlist"
                      className="patient-views float-end"
                    >
                      Show all
                    </Link>
                  </div>
                  <div className="card-body p-0 table-dash">
                    <div className="table-responsive">
                      <table className="table mb-0 border-0 datatable custom-table">
                        <thead>
                          <tr>
                            <th>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="something"
                                />
                              </div>
                            </th>
                            <th>ID</th>
                            <th>Patient name</th>
                            <th>Doctor</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="something"
                                />
                              </div>
                            </td>
                            <td>08</td>
                            <td>Michael Wilson</td>
                            <td className="table-image appoint-doctor">
                              <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar2}
                                alt="#"
                              />
                              <h2>Dr.Indira Garcia Marcayda</h2>
                            </td>
                            <td className="appoint-time">
                              <span>09.22.24 at </span>12.00 PM
                            </td>
                            <td>
                              <button className="custom-badge status-red ">
                                Walk-in
                              </button>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <Link
                                  to="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link
                                    className="dropdown-item"
                                    to="/appoinmentlist"
                                  >
                                    <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                    Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_patient"
                                  >
                                    <i className="fa fa-trash-alt m-r-5"></i> Delete
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="something"
                                />
                              </div>
                            </td>
                            <td>19</td>
                            <td>Latoya Jackson</td>
                            <td className="table-image appoint-doctor">
                              <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar3}
                                alt="#"
                              />
                              <h2>Dr.Ledif Sanchez Valdes</h2>
                            </td>
                            <td className="appoint-time">
                              <span>09.22.24 at </span>12.30 PM
                            </td>
                            <td>
                              <button className="custom-badge status-red">
                                Walk-in
                              </button>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <Link
                                  to="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link
                                    className="dropdown-item"
                                    to="/appoinmentlist"
                                  >
                                    <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                    Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_patient"
                                  >
                                    <i className="fa fa-trash-alt m-r-5"></i> Delete
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="something"
                                />
                              </div>
                            </td>
                            <td>37</td>
                            <td>Celia Cruz </td>
                            <td className="table-image appoint-doctor">
                              <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar4}
                                alt="#"
                              />
                              <h2>Dr.Kurdell Espinosa-Campbell</h2>
                            </td>
                            <td className="appoint-time">
                              <span>09.22.24 at </span>2.00 PM
                            </td>
                            <td>
                              <button className="custom-badge status-green">
                                Scheduled
                              </button>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <Link
                                  to="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link
                                    className="dropdown-item"
                                    to="/appoinmentlist"
                                  >
                                    <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                    Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_patient"
                                  >
                                    <i className="fa fa-trash-alt m-r-5"></i> Delete
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="something"
                                />
                              </div>
                            </td>
                            <td>49</td>
                            <td>Noah Sampson</td>
                            <td className="table-image appoint-doctor">
                              <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar5}
                                alt="#"
                              />
                              <h2>Dr.Yunier Isnaudis Garbey Gonzalez</h2>
                            </td>
                            <td className="appoint-time">
                              <span>09.22.24 at </span>2.30 PM
                            </td>
                            <td>
                              <button className="custom-badge status-green">
                                Scheduled
                              </button>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <Link
                                  to="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link
                                    className="dropdown-item"
                                    to="/appoinmentlist"
                                  >
                                    <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                    Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_patient"
                                  >
                                    <i className="fa fa-trash-alt m-r-5"></i> Delete
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="something"
                                />
                              </div>
                            </td>
                            <td>54</td>
                            <td>Kalvin Phillips</td>
                            <td className="table-image appoint-doctor">
                              <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar3}
                              />
                              <h2>Dr.Ledif Sanchez Valdes</h2>
                            </td>
                            <td className="appoint-time">
                              <span>09.22.24 at </span>4.00 PM
                            </td>
                            <td>
                              <button className="custom-badge status-green">
                                Scheduled
                              </button>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <Link
                                  to="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link
                                    className="dropdown-item"
                                    to="/editpatients"
                                  >
                                    <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                    Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_patient"
                                  >
                                    <i className="fa fa-trash-alt m-r-5"></i> Delete
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                
                  </div>
                </div>
              </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-12 col-xl-12">
                <div className="card">
                  <div className="card-header pb-0">
                    <h4 className="card-title d-inline-block">
                      Recent Patients{" "}
                    </h4>{" "}
                    <Link
                      to="/editpatients"
                      className="float-end patient-views"
                    >
                      Show all
                    </Link>
                  </div>
                  <div className="card-block table-dash">
                    <div className="table-responsive">
                      <table className="table mb-0 border-0 datatable custom-table">
                        <thead>
                          <tr>
                            <th>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="something"
                                />
                              </div>
                            </th>
                            <th>No</th>
                            <th>Patient name</th>
                            <th>Age</th>
                            <th>Date of Birth</th>
                            <th>Diagnosis</th>
                            <th>Triage</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="something"
                                />
                              </div>
                            </td>
                            <td>R00001</td>
                            <td className="table-image">
                              <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar2}
                                alt="#"
                              />
                              <h2>Andrea Lalema</h2>
                            </td>
                            <td>21</td>
                            <td>07 January 2002</td>
                            <td>Heart attack</td>
                            <td>
                              <button className="custom-badge status-green ">
                                Non Urgent
                              </button>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <Link
                                  to="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link
                                    className="dropdown-item"
                                    to="/editpatients"
                                  >
                                    <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                    Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_patient"
                                  >
                                    <i className="fa fa-trash-alt m-r-5"></i> Delete
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="something"
                                />
                              </div>
                            </td>
                            <td>R00002</td>
                            <td className="table-image">
                              <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar3}
                                alt="#"
                              />
                              <h2>Mark Hay Smith</h2>
                            </td>
                            <td>23</td>
                            <td>06 January 2002</td>
                            <td>Jaundice</td>
                            <td>
                              <button className="custom-badge status-pink">
                                Emergency
                              </button>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <Link
                                  to="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link
                                    className="dropdown-item"
                                    to="/editpatients"
                                  >
                                    <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                    Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_patient"
                                  >
                                    <i className="fa fa-trash-alt m-r-5"></i> Delete
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="something"
                                />
                              </div>
                            </td>
                            <td>R00003</td>
                            <td className="table-image">
                              <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar4}
                                alt="#"
                              />
                              <h2>Cristina Groves</h2>
                            </td>
                            <td>25</td>
                            <td>10 January 2002</td>
                            <td>Malaria</td>
                            <td>
                              <button className="custom-badge status-gray">
                                Out Patient
                              </button>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <Link
                                  to="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link
                                    className="dropdown-item"
                                    to="/editpatients"
                                  >
                                    <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                    Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_patient"
                                  >
                                    <i className="fa fa-trash-alt m-r-5"></i> Delete
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="something"
                                />
                              </div>
                            </td>
                            <td>R00004</td>
                            <td className="table-image">
                              <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar5}
                                alt="#"
                              />
                              <h2>Galaviz Lalema</h2>
                            </td>
                            <td>21</td>
                            <td>09 January 2002</td>
                            <td>Typhoid</td>
                            <td>
                              <button className="custom-badge status-orange">
                                Non Urgent
                              </button>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <Link
                                  to="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link
                                    className="dropdown-item"
                                    to="/editpatients"
                                  >
                                    <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                    Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_patient"
                                  >
                                    <i className="fa fa-trash-alt m-r-5"></i> Delete
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

          <div id="delete_patient" className="modal fade delete-modal" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center">
          <img src={imagesend} alt="#" width={50} height={46} />
          <h3>Are you sure want to delete this ?</h3>
          <div className="m-t-20">
            {" "}
            <Link to="#" className="btn btn-white me-2" data-bs-dismiss="modal">
              Close
            </Link>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="delete_patient" className="modal fade delete-modal" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center">
          <img src={imagesend} alt="#" width={50} height={46} />
          <h3>Are you sure want to delete this ?</h3>
          <div className="m-t-20">
            {" "}
            <Link to="#" className="btn btn-white me-2" data-bs-dismiss="modal">
              Close
            </Link>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
        
      </>
    </>
  );
};

export default Admin_Dashboard;
