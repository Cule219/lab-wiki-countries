import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import data from '../countries.json';


export default class Borders extends Component {
    render() {
        

        let borders = this.props.data.map((x,i)=>{
            
            return <Link to={x} key={i}><li key={i}>{
                data[data.map((x)=> {
                    return x.cca3}).indexOf(x)].name.common
                }</li></Link>
        });
        return (
            <ul >
                {borders}
            </ul>
        )
    }
}
