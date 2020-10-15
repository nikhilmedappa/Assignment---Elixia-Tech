import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'

import { getCountryDetails } from '../actions/actions'

const Button = styled.button`
background-color: ${props => props.color};
width: 200px;
padding: 8px;
border: none;
outline: none;
border-radius: 4px;
margin: 4px;
text-align: left;
color: white;
cursor: pointer;
display: flex;
justify-content: space-between;
`;



function Country(props) {

    const styles = {
        flag: {
            width: "24px"
        }
    }

    const handleCountry = (name) => {
        if(props.selectedCountry !== name){props.getCountryDetails(name);}
    }
   
    
    const { name, flag } = props.country

    return (
        <Button color={props.color} onClick={(e) => handleCountry(name)}>
            <span id="countries-name">{name}</span>
            <img src={flag} alt={flag + "flag"} style={styles.flag} />
        </Button>
    )
}

const mapStatetoprops = (state) => ({
    color: state.regions.color,
    selectedCountry: state.countries.country
         
})

export default connect(mapStatetoprops, {getCountryDetails})(Country)