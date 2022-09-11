import React from "react";
import info from "./data.json";
export default function Card() {
    return (
        <div className="container  mt-3">
            <h2>A simple web app</h2>
            <table className="table table-hover">
                <thead>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Salary</th>
                </thead>
                <tbody>
                    {info.map(({ id, first_name, last_name, email, gender, age, salary }, index) => (
                        <tr key={index}>
                            <td>{id}</td>
                            <td>{first_name}</td>
                            <td>{last_name}</td>
                            <td>{email}</td>
                            <td>{gender}</td>
                            <td>{age}</td>
                            <td>{salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}