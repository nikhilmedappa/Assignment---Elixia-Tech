import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import Region from "./components/Region"
import Country from './components/Country';
import CountryDetails from './components/CountryDetails'

class App extends Component {
  constructor(props){
    super(props)
    this.setState = {

    }
  }
  render (){
    const continents = [
      {
        name: "Asia",
        color: "blue"
      },
      {
        name: "Europe",
        color: "purple"
      },
      {
        name: "Americas",
        color: "orange"
      },
      {
        name: "Africa",
        color: "green"
      },
      {
        name: "Oceania",
        color: "darkgrey"
      },
    ]

    const { regiondetails, countrydetails, continent } = this.props

    return (

      <div className="App">
        <div className="select-region"> 
          <h4>Select a region</h4>
          { continents.map((continent) => {
            return <Region continent={continent} key={continent.name} />
          })}
        </div>

        <div className="select-country">
          <h4>Select a country</h4>
          { regiondetails && regiondetails.map((item, index) => {
            return <Country country={item} key={index} />
          })}
        </div>

        <div className="country-details">
          {countrydetails && countrydetails.map((item,index) => { 
          return <CountryDetails countrydetails={item} key={index} continent={continent}/>
        })}

        </div>
        
      </div>
    );
  }
  
}

const mapStatetoprops = (state) => ({
  regiondetails: state.regions.region,
  continent: state.regions.continent,
  countrydetails: state.countries.countrydetails,
  country: state.countries.country
})

export default connect(mapStatetoprops)(App);
