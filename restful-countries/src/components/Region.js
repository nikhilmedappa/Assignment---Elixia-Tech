import React from 'react'
import { connect } from 'react-redux';
import { getRegionDetails } from "../actions/actions"

function Region(props) {

    const { name, color } = props.continent

    const styles = {
        button: {
            backgroundColor: color,
            width: "140px",
            padding: "8px",
            border: "none",
            outline: "none",
            borderRadius: "4px",
            margin: "4px",
            textAlign: "left",
            color: "white",
            cursor: "pointer"

        }
    }
    return (
        <button style={styles.button} onClick={(e) => props.getRegionDetails(name, color)} >
            {name}
        </button>
    )
}


export default connect(null, {getRegionDetails})(Region)