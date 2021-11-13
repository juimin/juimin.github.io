import React from "react";
import { Typography } from "@mui/material";

import { FaMailBulk } from "react-icons/fa";



var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

const Footer = () => {
    return <div>
        <div style={phantom} />
        <div style={style}>
            <Typography variant="body1" gutterBottom>
                /in/d95wang/ • github.com/juimin
            </Typography>
        </div>
    </div>

}

export default Footer;
