import React from "react";
import moment from "moment";
import "./style.css";


function Table({ employees, sortHandler }) {

    return (
        <table className="table table-stripped">
            <head>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" classNmae="nameCol"onClick={() => sortHandler()}>Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">DOB</th>
                </tr>
            </head>
            <body>
                {employees.map((employee, i) => 
                <tr key={i}>
                    <td><img alt="Employee" src={employee.picture.thumbnail}
                    className="img-fluid"/></td>
                    <td> {employee.name.first} {employee.name.last}</td>
                    <td> {employee.phone}</td>
                    <td> {employee.email}</td>
                    <td>{moment(employee.dob.date).calendar()}</td>
                </tr>
                )}
            </body>
        </table>
    
    )
}

export default Table;