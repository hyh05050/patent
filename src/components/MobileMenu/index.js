import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import { getAccount } from "../../common/loginInfo";
import "./style.css";

const menus = [
  {
    id: 1,
    title: "비용안내",
    link: "/pricing",
  },

  {
    id: 2,
    title: "회사소개",
    link: "/about",
  },

  {
    id: 3,
    title: "Q&A",
    link: "/qna",
  },
  {
    id: 4,
    title: "로그인&가입",
    link: "/login",
    loginFlag: undefined,
  },
  {
    id: 5,
    title: "마이페이지",
    link: "/mypage",
    loginFlag: true,
  },
];

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
    isLogin: getAccount()?.isLogin,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
          <div className="menu-close">
            <div className="clox" onClick={this.menuHandler}>
              <i className="ti-close"></i>
            </div>
          </div>

          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id}>
                  {item.submenu ? (
                    <p onClick={this.setIsOpen(item.id)}>
                      {item.title}
                      {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ""}
                    </p>
                  ) : (
                    <>
                      {item.id < 4 || item.loginFlag == this.state.isLogin ? (
                        <Link onClick={ClickHandler} to={item.link}>
                          {item.title}
                        </Link>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                  {item.submenu ? (
                    <Collapse isOpen={item.id === isOpen}>
                      <Card>
                        <CardBody>
                          <ul>
                            {item.submenu.map((submenu) => (
                              <li key={submenu.id}>
                                <Link onClick={ClickHandler} className="active" to={submenu.link}>
                                  {submenu.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </CardBody>
                      </Card>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="showmenu" onClick={this.menuHandler}>
          <button type="button" className="navbar-toggler open-btn">
            <span className="icon-bar first-angle"></span>
            <span className="icon-bar middle-angle"></span>
            <span className="icon-bar last-angle"></span>
          </button>
        </div>
      </div>
    );
  }
}
