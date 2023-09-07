import React from 'react'

const Features = (props) => {


     const featres = [
         {
            fIcon:'fi flaticon-badge',
            title:'Winning Guarantee',
            des:'Our history of case are 99% winning success.',      
         },
         {
            fIcon:'fi flaticon-diary',
            title:'Secure Management',
            des:'Security system of our team is so great & wonderful.',      
         },
         {
            fIcon:'fi flaticon-support',
            title:'Full time support',
            des:'We are here for your help from 24/7',      
         },
         
     ]


    return(
        <section className={`wpo-features-section section-padding  ${props.featuresClass}`}>
            <div className="container">
                <div className="wpo-features-wrapper">
                    <div className="row">
                        {featres.map((featres, fitem) => (
                            <div className="col-lg-4 col-md-6 col-12" key={fitem}>
                                <div className="wpo-features-item">
                                    <div className="wpo-features-icon">
                                        <div className="icon">
                                            <i className={featres.fIcon}></i>
                                        </div>
                                    </div>
                                    <div className="wpo-features-text">
                                        <h2>{featres.title}</h2>
                                        <p>{featres.des}</p>
                                    </div>
                                    <div className="visible-icon">
                                        <i className={featres.fIcon}></i>
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

export default Features;