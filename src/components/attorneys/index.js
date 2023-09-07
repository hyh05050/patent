import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Attorneys from '../../api/attorneys'


const Attorney = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

     const [isActive, setActive] = useState(false);

    const toggleClass = (Id) => {
        setActive(Id === isActive ? null : Id );
    };

    return(
      <section className="wpo-team-section section-padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="wpo-section-title">
                        <h2>Meet Our Most Talented &
                            Qualified Attorneys</h2>
                    </div>
                </div>
                <div className="col-lg-5 offset-lg-2">
                    <div className="wpo-section-title">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

            <div className="wpo-team-wrap">
                <div className="row">
                   {Attorneys.map((attorney, aitem) => (
                      <div className="col col-lg-3 col-md-6 col-12" key={aitem}>
                          <div className="wpo-team-item">
                              <div className="wpo-team-img">
                                  <img src={attorney.AtImg} alt=""/>
                                  <div className={`social ${isActive === attorney.Id ? "active" : ""}`}>
                                      <ul>
                                          <li className="switch" onClick={() => toggleClass(attorney.Id)}><i className="ti-plus"></i></li>
                                          <li className="on"><Link to="/"><i className="ti-facebook"></i></Link></li>
                                          <li className="on"><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                          <li className="on"><Link to="/"><i className="ti-instagram"></i></Link></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="wpo-team-text">
                                  <h2><Link onClick={ClickHandler} to={`/attorneys-single/${attorney.Id}`}>{attorney.name}</Link></h2>
                                  <span>{attorney.title}</span>
                              </div>
                          </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    )
}

export default Attorney;