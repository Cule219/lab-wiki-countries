import React, { Component } from 'react'
import data from '../countries.json';
import {Link} from 'react-router-dom';

export default class CountryDetail extends Component {
    render() {
        let countries = data.map((x,i)=>{
            return <Link key={x.cca3} className="list-group-item list-group-item-action" to={x.cca3}>{x.flag} {x.name.common}</Link>
        });
        return (
                    <div>
                        {countries}
                    </div>
        )
    }
}
