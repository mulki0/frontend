import React from 'react';



function EmployeeList(props) {
    return(
        <div className="card mb-4" style={{"width": "20em"}}>
            <img src={props.avatar} className="rounded-circle" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.email}</p>
                <p className="card-text">{props.position}</p>
            </div>
        </div>
    )
};


export default EmployeeList;