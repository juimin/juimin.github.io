import React from "react";
import { Typography } from "@mui/material";

import { DiPython, DiReact, DiGo, DiDjango, DiRust } from "react-icons/di";


const Portfolio = () => {
    return <div>
        <Typography variant="h5" gutterBottom>
            The usual tools
        </Typography>
        <div>
            <DiPython size="50" color="black" />
            <DiDjango size="50" color="black" />
            <DiGo size="50" color="black" />
            <DiRust size="50" color="black" />
            <DiReact size="50" color="black" />
        </div>
    </div>
    return <h1>Projects</h1>;
}

export default Portfolio;
