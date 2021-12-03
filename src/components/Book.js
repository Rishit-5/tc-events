import React, {Component, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import "./Book.css"



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(0),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        root: {
            flexGrow: 1,
        },
    }),
);

const Book = () => {

    const classes = useStyles();

    // const testArr = [0,1,2,3,4,5]
    const testArr = () => {
        let x = [];
        for (let i = 1; i < 25; i++) {
            let y = [];
            for (let j = 1; j < 25; j++) {
                y.push(j)
            }
            x.push(y)
        }
        return x;
    }

    const lolList = ()=> {
        return testArr().map(co => (<Grid container spacing={0} class = "rf">
            {
                co.map(ro => (<Grid item xs={0} ><Button onClick={test} >3</Button> </Grid>))

            }</Grid>))
    }
    function test(){
        alert("khush is badddd")
    }

    return (
        <div  class = "grid">
            <h2>Home hjkdhjndhjnh,jnd</h2>
            <br></br>
            <Grid container spacing={0}>

                {lolList()}
            </Grid>
        </div>
    )
}
export default Book;
