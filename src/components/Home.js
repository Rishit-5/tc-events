import React, {Component, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import "./Home.css"



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        root: {
            flexGrow: 1,
        },
    }),
);

const Home = () => {

    const classes = useStyles();

    // const testArr = [0,1,2,3,4,5]
    const testArr = () => {
        let x = [];
        for (let i = 0; i < 10; i++) {
            let y = [];
            for (let j = 0; j < 10; j++) {
                y.push(i + "," + j)
            }
            x.push(y)
        }
        return x;
    }

    const lolList = ()=> {
        console.log("size: " + testArr().length)
        return testArr().map(co => (<Grid >
            {
                co.map(ro => (<Grid item xs = {0} ><Button id = {ro} class="notclicked" onClick={function (){
                    if (document.getElementById(ro).className == "notclicked") {
                        document.getElementById(ro).className = "clicked"
                    }
                    else{
                        document.getElementById(ro).className = "notclicked"
                    }
                }}>{ro}</Button> </Grid>))

            }</Grid>))
    }
    function test(ro){
        alert("khush is badddd")
        document.getElementById(ro).className = "clicked"
    }

    return (
        <div >
            <h2>Home hjkdhjndhjnh,jnd</h2>
            <br/>
            <Grid container spacing={0} class = "flex">

                {lolList()}
            </Grid>
        </div>
    )
}
export default Home;
