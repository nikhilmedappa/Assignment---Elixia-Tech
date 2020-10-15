import React from 'react'
import styled from 'styled-components'

import './CountryDetails.css'

const BreadCrumbs = styled.div`
    background-color: lightgrey;
    border-radius: 4px;
    text-align: left;
    color: black;
    display: flex;
    padding: 8px 20px 8px;
    margin-top: 12px;
    width: fit-content;
`;

const DetailWrapper = styled.div`
    padding: 1em;
    border: 1px lightgrey solid;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    margin: 4px;


`;



export default function CountryDetails(props) {
    
    return (
        <div>
            <BreadCrumbs>
                <span>{props.continent}/ </span>
                <span>{props.countrydetails.name}</span>
            </BreadCrumbs>

            <div className="country">
                <img src={props.countrydetails.flag} alt={props.countrydetails.name + "flag"} />
                
                <div className="summary">
                    <div className="summary-title">
                        <span id="country-name">{props.countrydetails.name} </span>
                        <span id="country-cioc">({props.countrydetails.cioc})</span>
                    </div>
                    <span id="country-capital">{props.countrydetails.capital}</span>
                </div>
            </div>

            <div className="details">
                <DetailWrapper>
                    <span className="detail-title">Demonym</span>
                    <span>{props.countrydetails.demonym}</span>
                </DetailWrapper>
                <DetailWrapper className="callingcode">
                    <span className="detail-title">Calling Code</span>
                    <span>+{props.countrydetails.callingCodes}</span>
                </DetailWrapper>
                <DetailWrapper className="currency">
                    <span className="detail-title">Currency</span>
                    <span>{props.countrydetails.currencies[0].symbol} {props.countrydetails.currencies[0].name} </span>
                </DetailWrapper>
                <DetailWrapper className="population">
                    <span className="detail-title">Population</span>
                    <span>{props.countrydetails.population}</span>
                </DetailWrapper>
            </div>

        </div>
    )
}

