import React, { Fragment } from 'react';

const Information = () => {
    const style ={
        border:0,
        marginwidth:"10px"
    };

    return (
        <Fragment>
            <h1 className="large text-primary">Information</h1>
            <p className="lead">
                <i className="fas fa-info-circle" />{' '} Helpful info about the event and wedding registry
            </p>
            <h2 className="headerTest">Locations</h2>
            <div className="bg-light">
                <div className="p-2 location">
                    <h2>Ceremony and Reception</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46178.73793045959!2d-79.39896679763146!3d43.6654108203537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ccbd049a18f1%3A0x53160479e6f6dfd1!2sFantasy%20Farms!5e0!3m2!1sen!2sca!4v1577650185377!5m2!1sen!2sca" 
                        width="450" 
                        height="300" 
                        frameborder="0"
                        style={style}
                        allowfullscreen=""
                    />
                </div>
                <div className="p-2 location">
                    <h2>Hotel</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46178.73793045959!2d-79.39896679763146!3d43.6654108203537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ccbd049a18f1%3A0x53160479e6f6dfd1!2sFantasy%20Farms!5e0!3m2!1sen!2sca!4v1577650185377!5m2!1sen!2sca"
                        width="450"
                        height="300"
                        frameborder="0"
                        style={style}
                        allowfullscreen=""
                    />
                </div>
            </div>
        </Fragment>
    )
};

export default Information;