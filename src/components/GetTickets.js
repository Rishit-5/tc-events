import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import {Button, Paper} from "@material-ui/core";


const GetTickets = () => {
    const users = [
        {name: "wjejked"},
        {name: "wjejked"},
        {name: "wjejked"},
        {name: "wjejked"},
        {name: "wjejked"},
        {name: "wjejked"},
    ]
    return (
        <div>
            {users.map(ro => (<div className = "bg-black m-40 text-white">{ro.name}</div>))}
        </div>
    )
}
export default GetTickets;