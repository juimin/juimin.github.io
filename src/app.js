import Box from '@mui/material/Box';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import Brush from '@mui/icons-material/Brush';
import Code from '@mui/icons-material/Code';
import ContactPage from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import MusicNote from '@mui/icons-material/MusicNote';
import Photo from '@mui/icons-material/Photo';
import Restaurant from '@mui/icons-material/Restaurant';
import SportsEsports from '@mui/icons-material/SportsEsports';

import Artwork from "./art";
import Contact from "./contact";
import Food from "./food";
import Games from "./games";
import Homepage from "./homepage";
import Music from './music';
import Photography from './photography';
import Portfolio from "./portfolio";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function App() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%" }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab icon={<HomeIcon />} {...a11yProps(0)} />
                <Tab icon={<Code />} {...a11yProps(1)} />
                <Tab icon={<Photo />} {...a11yProps(2)} />
                <Tab icon={<MusicNote />} {...a11yProps(3)} />
                <Tab icon={<SportsEsports />} {...a11yProps(4)} />
                <Tab icon={<Brush />} {...a11yProps(5)} />
                <Tab icon={<Restaurant />} {...a11yProps(6)} />
                <Tab icon={<ContactPage />} {...a11yProps(7)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Homepage />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Portfolio />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Photography />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Music />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Games />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Artwork />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Food />
            </TabPanel>
            <TabPanel value={value} index={7}>
                <Contact />
            </TabPanel>
        </Box>
    );
}