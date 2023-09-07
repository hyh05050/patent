import React from 'react'


const FunFact = (props) => {

    const funfact = [
        {
            title: '95%',
            subTitle: 'Cases Won',
        },
        {
            title: '1000+',
            subTitle: 'Trusted Client',
        },
        {
            title: '225+',
            subTitle: 'Dedicated Lawyer',
        },
        {
            title: '25%',
            subTitle: 'Case Dismissed',
        },


    ]

    return (

        <section className="wpo-fun-fact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funfact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3>{funfact.title}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;