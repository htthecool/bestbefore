import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleactive: false,
      defaultValue: 1,
      signedIn: true
    };
    this.togglebutton = this.togglebutton.bind(this);
    console.log(process.env.PUBLIC_URL);
    console.log(process.env.NODE_ENV);
  }
  togglebutton(toggleactive) {
    this.props.updateParent();
  }

  render() {
    return (
      <nav
        style={{
          background: this.props.path == "/home" ? "transparent" : "#37A289"
        }}
        className="admin-header navbar navbar-default col-lg-12 col-12 p-0 fixed-top d-flex flex-row bbHeader"
      >
        <div className="text-left navbar-brand-wrapper brandLogo">
          <Link className="brand-logo" to="/">
            {this.props.path == "/home" ? (
              <img src="assets/images/logo.png" alt="" />
            ) : (
              <img src="assets/images/logo-white.png" alt="" />
            )}
          </Link>
        </div>
        {/* <!-- Top bar left --> */}

        {/* <!-- top bar right --> */}
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item dropdown ">
            <a
              className="nav-link top-nav"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i
                style={{
                  color: this.props.path == "/home" ? "#37A289" : "#FFFFFF"
                }}
                className="ti-bell"
              ></i>
              <span className="badge badge-danger notification-status"> </span>
            </a>

            <div className="dropdown-menu dropdown-menu-right dropdown-big dropdown-notifications">
              <div className="dropdown-header notifications">
                <strong>Notifications</strong>
                <span className="badge badge-pill badge-warning">05</span>
              </div>

              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                New items for sale in REWE{" "}
                <small className="float-right text-muted time">Just now</small>{" "}
              </a>
              <a href="#" className="dropdown-item">
                Grapes at 90% discount at EDEKA{" "}
                <small className="float-right text-muted time">22 mins</small>{" "}
              </a>
              <a href="#" className="dropdown-item">
                Free takeaway from Rewe Haputbahnof
                <small className="float-right text-muted time">
                  7 hrs
                </small>{" "}
              </a>
              <a href="#" className="dropdown-item">
                Order confirmation
                <small className="float-right text-muted time">
                  2 days
                </small>{" "}
              </a>
            </div>
          </li>
          <li className="nav-item dropdown ">
            <a
              className="nav-link top-nav"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i
                style={{
                  color: this.props.path == "/home" ? "#37A289" : "#FFFFFF"
                }}
                className="ti-shopping-cart"
              ></i>
              <span className="badge badge-danger notification-status"> </span>
            </a>

            <div className="dropdown-menu dropdown-menu-right dropdown-big dropdown-notifications">
              <div className="dropdown-header notifications">
                <strong>Cart</strong>
                <span className="badge badge-pill badge-warning">03</span>
              </div>

              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                Allos Frucht Pur 75% Mango{" "}
                <small className="float-right text-muted time">Just now</small>{" "}
              </a>
              <a href="#" className="dropdown-item">
                Berioo Porridge Chia{" "}
                <small className="float-right text-muted time">Just now</small>{" "}
              </a>
              <a href="#" className="dropdown-item">
                Edamama Black Bean Spaghetti
                <small className="float-right text-muted time">
                  Just now
                </small>{" "}
              </a>
              <a href="#" className="dropdown-item">
                Simply V Haferdrink
                <small className="float-right text-muted time">
                  1 hr ago
                </small>{" "}
              </a>
            </div>
          </li>
          <li className="nav-item dropdown mr-30">
            <a
              className="nav-link nav-pill user-avatar"
              data-toggle="dropdown"
              href="/"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="assets/images/shrek.png" alt="avatar" />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-header">
                <div className="media">
                  <div className="media-body">
                    <h5 className="mt-0 mb-0">Michael Bean</h5>
                    <span>michael-bean@mail.com</span>
                  </div>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                <i className="text-secondary ti-reload"></i>Activity
              </a>
              <a className="dropdown-item" href="#">
                <i className="text-success ti-email"></i>Messages
              </a>
              <a className="dropdown-item" href="#">
                <i className="text-warning ti-user"></i>Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="text-dark ti-layers-alt"></i>Projects{" "}
                <span className="badge badge-info">6</span>{" "}
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                <i className="text-info ti-settings"></i>Settings
              </a>
              <Link className="dropdown-item" to="/login">
                <i className="text-danger ti-unlock"></i>Logout
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      //   End Header
    );
  }
}
export default Header;
