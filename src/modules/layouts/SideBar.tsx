/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-mixed-operators */
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import "./styles/sidebar.scss";
import {profileStore} from '../profile/ProfileStore';
import {data} from './sidebarRole';

@observer
class SideBar extends Component {
    state = {
        link: ""
    };

    getRootPath() {
        const names = window.location.pathname.split("/");
        this.setState({link: "/" + names[1]});
        return "/" + names[1];
    }

    componentDidMount() {
        setTimeout(() => {
            this.getRootPath()
        })
    }

    render() {
        if (profileStore.getProfile) {
            const role = profileStore.getProfile.role;
            const itemByRoles = data.filter((index: any) => {
                return (index.role === role)
            });
            return (
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="/" className="brand-link">
                        <span className="brand-text font-weight-light ml-3">KVA</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar p-0">
                        {/* Sidebar user panel (optional) */}
                        <Link to={`/profile`} className="w-100 d-flex justify-content-center">
                            <div className="user-panel mt-3 pb-3 d-flex align-items-center">
                                {profileStore.getProfile?.avatarUrl ?
                                    <div className="image">
                                        <img src={profileStore.getProfile?.avatarUrl} className="img-circle elevation-2"
                                             alt="User Image"/>
                                    </div> :
                                    <button type="button" className="btn btn-primary avatar btn-social-icon btn-rounded">
                                        {profileStore.getProfile?.displayName.slice(0, 1).toUpperCase()}
                                    </button>
                                }
                                <div className="info">
                                    <a href="#" className="d-block">{profileStore.getProfile?.displayName}</a>
                                </div>
                            </div>

                        </Link>

                        {/* Sidebar Menu */}
                        <nav className="mt-2 -border-none">
                            <ul className="nav nav-sidebar flex-column m-0" data-widget="treeview" role="menu"
                                data-accordion="false">
                                {itemByRoles[0].menu.map((item: any, i: any) => {
                                    return (
                                        <li className="nav-item m-0" key={i}>
                                            <a href="" className="nav-link">
                                                <i className="nav-icon fas fa-chart-pie"/>
                                                <p>
                                                    {item.name}
                                                    <i className="right fas fa-angle-left"/>
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview m-0">
                                                {item.subMenu && item.subMenu.map((item: any, i: any) => {
                                                    if (item.link.indexOf("http") !== -1) {
                                                        return (
                                                            <li className="nav-item " key={i} onClick={(e) => {
                                                                this.getRootPath()
                                                            }}>
                                                                <a href={item.link} target="_blank"
                                                                   className="nav-link">- {item.name}</a>
                                                            </li>
                                                        );
                                                    } else {
                                                        return (
                                                            <li className="nav-item " key={i} onClick={(e) => {
                                                                this.getRootPath()
                                                            }}>
                                                                <Link to={item.link} className="nav-link" href="#">
                                                                    <i className="far fa-circle nav-icon"></i>
                                                                    <p>{item.name}</p>
                                                                </Link>
                                                            </li>
                                                        )
                                                    }
                                                })}
                                            </ul>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>


                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>

            );
        } else return true
    }
}

export default SideBar;

