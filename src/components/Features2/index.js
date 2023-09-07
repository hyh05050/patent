import React from 'react'

const Features2 = (props) => {


     const featres = [
         {
            fIcon:'fi flaticon-badge',
            title:'Winning Guarantee',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis.',      
         },
         {
            fIcon:'fi flaticon-diary',
            title:'Secure Management',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis.',      
         },
         {
            fIcon:'fi flaticon-support',
            title:'Full time support',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis.',      
         },
         
     ]


    return(
        <section className="wpo-features-section-s2 section-padding">
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

export default Features2;