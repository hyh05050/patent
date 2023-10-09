import React, { Component } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu";
import { getAccount } from "../../common/loginInfo";

export default class Header extends Component {
    state = {
        isSearchShow: false,
        isCartShow: false,
        isLogin: getAccount()?.isLogin,
    };

    searchHandler = () => {
        this.setState({
            isSearchShow: !this.state.isSearchShow,
        });
    };
    cartHandler = () => {
        this.setState({
            isCartShow: !this.state.isCartShow,
        });
    };

    render() {
        const ClickHandler = () => {
            window.scrollTo(10, 0);
        };

        return (
            <header id="header" className={this.props.topbarNone}>
                <div className={`wpo-site-header ${this.props?.hclass}`}>
                    <nav className="navigation navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                    <div className="mobail-menu">
                                        <MobileMenu />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="navbar-header">
                                        <Link onClick={ClickHandler} className="navbar-brand" to="/home">
                                            <img src={this.props.Logo} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-1 col-1">
                                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                        <button className="menu-close">
                                            <i className="ti-close"></i>
                                        </button>
                                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                                            <li>
                                                <Link onClick={ClickHandler} to="/pricing">
                                                    비용안내
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/about">
                                                    회사소개
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/qna">
                                                    Q&A
                                                </Link>
                                            </li>

                                            {this.state.isLogin ? (
                                                <>
                                                    <li>
                                                        <Link onClick={ClickHandler} to="/mypage">
                                                            마이페이지
                                                        </Link>
                                                    </li>
                                                </>
                                            ) : (
                                                <li>
                                                    <Link onClick={ClickHandler} to="/login">
                                                        로그인&가입
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-2 col-2 header-right-btn">
                                    <div className="header-right">
                                        <div className="close-form">
                                            <Link onClick={ClickHandler} className="theme-btn" to="/apply">
                                                특허 신청
                                            </Link>
                                            <Link onClick={ClickHandler} className="theme-btn mobile" to="/apply">
                                                신청
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}
