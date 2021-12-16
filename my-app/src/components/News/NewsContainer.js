import React from "react";
import { connect } from "react-redux";
import News from "./News";

const NewsContainer = (props) => {
        return <News news={props.news} />
}

let mapStateToProps = (state) => {
    return {
        news: state.news.news
    }
}

export default connect (mapStateToProps, null)(NewsContainer)