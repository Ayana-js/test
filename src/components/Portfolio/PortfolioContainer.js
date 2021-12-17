import React from "react";
import { connect } from "react-redux";
import Portfolio from "./Portfolio";

const PortfolioContainer = (props) => {
        return <Portfolio houses={props.houses} />
}

let mapStateToProps = (state) => {
    return {
        houses: state.portfolio.houses
    }
}

export default connect (mapStateToProps, null)(PortfolioContainer)