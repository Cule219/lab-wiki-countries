import React, { Component } from 'react'
import data from '../countries.json';
import Borders from './Borders.js';

export default class CountryView extends Component {
    render() {
      let obj = data[data.map((x, i)=> {
        return x.cca3
      }).indexOf(this.props.match.params.id)];
        return (
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{obj.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{obj.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <Borders data={obj.borders}/>
                  </td>
                </tr>
              </tbody>
            </table>
        )
    }
}
