import React from "react";
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';


const Homepage = () => {
    return <div>
        <Typography variant="h2" gutterBottom>
            Derek Wang
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            <i>Personal website of one software writing human</i>
        </Typography>
        <Divider variant="li" />
        <Typography variant="body1" gutterBottom>
            Currently a software engineer on the planet earth. I like puzzles, a collection of sports involving balls,
            and occasionally typing out a bug or two.
        </Typography>

    </div>;
}

export default Homepage;
