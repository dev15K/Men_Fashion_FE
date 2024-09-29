import { message } from 'antd';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import accountService from "../../Service/AccountService";
import notificationService from "../../Service/NotificationService";
import * as moment from "@mui/material";
import Css from "../../Shared/Admin/Lib/StyleSheet";
import Script from "../../Shared/Admin/Lib/Script";
import $ from "jquery";
//import { format } from 'date-fns';

function IsAdmin(){
    return (
        <>
            <li>
                <Link className="dropdown-item d-flex align-items-center" to="/admin/dashboard">
                    <i className="bi bi-0-circle"/>
                    <span>Trang quản trị</span>
                </Link>
            </li>
            <li>
                <hr className="dropdown-divider"/>
            </li>
        </>
    )
}

function Notification() {
    const id = sessionStorage.getItem("id");
    const [data, setData] = useState([]);
    const list = [];

    const getNotificationById = async () => {
        await notificationService.listNotificationById(id)
            .then((res) => {
                if (res.status === 200){
                    console.log("data" , res.data)
                    setData(res.data);
                }
            })
    };

    useEffect(() => {
        getNotificationById();
    }, []);

    let count = data.length;

   if (data.length > 1){
       data.forEach((notifi, index) => {
           var link = null;
           link = "/notification/detail/" + notifi.id;
           list.push(
               <div key={index}>
                   <li>
                       <hr className="dropdown-divider" />
                   </li>
                   <li className="notification-item">
                       <i className="bi bi-exclamation-circle text-warning" />
                       <div>
                           <h4>
                               <Link to={link}>{notifi.content}</Link>
                           </h4>
                           <p>{notifi.description}</p>
                           {/*<p>{moment.duration(moment(new Date().toLocaleTimeString()).diff(moment(notifi.createdAt)))} ago</p>*/}
                       </div>
                   </li>
               </div>
           );
       });

       return (
           <li className="nav-item dropdown">
               <Link className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
                   <i className="bi bi-bell" />
                   <span className="badge bg-primary badge-number">{count}</span>
               </Link>
               <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                   <li className="dropdown-header">
                       Bạn có {count} thông báo mới
                       <Link to="#"><span className="badge rounded-pill bg-primary p-2 ms-2">Xem tất cả</span></Link>
                   </li>

                   {list}

                   <li>
                       <hr className="dropdown-divider" />
                   </li>
                   <li className="dropdown-footer">
                       <Link to="#">Xem toàn bộ thông báo</Link>
                   </li>
               </ul>
           </li>
       )
   } else if (count === 1){
       return (
           <li className="nav-item dropdown">
               <Link className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
                   <i className="bi bi-bell" />
                   <span className="badge bg-primary badge-number">{count}</span>
               </Link>
               <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                   <li className="dropdown-header">
                       Bạn có {count} thông báo mới
                   </li>

                   <li>
                       <hr className="dropdown-divider" />
                   </li>
                   <li className="notification-item">
                       <i className="bi bi-exclamation-circle text-success" />
                       <div>
                           <h4 >
                               <Link className="text-success"  to="">{data[0].content}</Link>
                           </h4>
                           <p>{data[0].description}</p>
                       </div>
                   </li>
               </ul>
           </li>
       )
   } else {
       return (
           <li className="nav-item dropdown">
               <Link className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
                   <i className="bi bi-bell" />
               </Link>
               <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                   <li className="dropdown-header">
                       Bạn có {count} thông báo mới
                   </li>
               </ul>
           </li>
       )
   }
}

function Header() {
    const AuthName = sessionStorage.getItem("username");
    const Token = sessionStorage.getItem("accessToken")
    const navigate = useNavigate();

    let isAdmin = true;

    const checkLogin = async () => {
        if (AuthName == null || Token == null){
            navigate('/not-found')
        }
    };

    function hiddenOrShow() {
        $('body').toggleClass('toggle-sidebar');
    }

    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();
        message.success("Logout")
        navigate("/login")
    }

    const [data, setData] = useState([]);

    const isUser = async () => {
        await accountService.findUserByUsername(AuthName)
            .then((res) => {
                setData(res.data);
                console.log("data:", JSON.parse(JSON.stringify(res.data)));
                let user = JSON.parse(JSON.stringify(res.data));
                if (user.userRole === "ADMIN") {
                    localStorage.setItem('isAdmin', 1);
                } else {
                    // navigate('/not-found')
                }
            })
            .catch((err) => {
                console.log(err);
                navigate('/not-found');
            });
    };

    let admin = localStorage.getItem('isAdmin')

    if (admin == null){
        isAdmin = false;
    }

    useEffect(() => {
        isUser();
        checkLogin();
    }, []);

    return (
        <div>
            <Css/>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center">
                        <img src="/assets/admin/img/logo.png" alt=""/>
                        <span className="d-none d-lg-block">Men's Fashion</span>
                    </Link>
                    <i className="bi bi-list toggle-sidebar-btn" onClick={hiddenOrShow}></i>
                </div>
                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search" /></button>
                    </form>
                </div>
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item d-block d-lg-none">
                            <Link className="nav-link nav-icon search-bar-toggle " to="#">
                                <i className="bi bi-search" />
                            </Link>
                        </li>

                        {/*<Notification />*/}

                        <li className="nav-item dropdown pe-3">
                            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="#" data-bs-toggle="dropdown">
                                <img src={data.avatar} alt="Profile" className="rounded-circle" width="50px"/>
                                <span className="d-none d-md-block dropdown-toggle ps-2">{AuthName}</span>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>{AuthName}</h6>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="/profile">
                                        <i className="bi bi-person" />
                                        <span>Trang cá nhân</span>
                                    </Link>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                {isAdmin ? <IsAdmin /> : ""}
                                <li>
                                    <div className="dropdown-item d-flex align-items-center" style={{ cursor: "pointer" }} onClick={handleLogout}>
                                        <i className="bi bi-box-arrow-right" />
                                        <span>Đăng xuất</span>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <Script/>
        </div>
    )
}

export default Header
