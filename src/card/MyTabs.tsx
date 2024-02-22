import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Cards from './Card';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
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

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const CustomTabs = styled('div')({
  borderBottom: '1px solid',
  borderColor: 'divider',
  position: 'relative', // Set the position of the parent container
});

const CustomIndicator = styled('div')({
  position: 'absolute', // Position the indicator absolutely
  bottom: 0, // Align it to the bottom of the parent container
  height: 20, // Set the height of the indicator
  backgroundColor: '#3f51b5', // Set the color of the indicator
  zIndex: -1, // Push the indicator behind the tabs
});

export default function TabsComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CustomTabs>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        sx={{ position: 'relative' }} // Set the position of the Tabs component
      >
        <Tab label="Practice" {...a11yProps(0)} />
        <Tab label="Review" {...a11yProps(1)} />
      </Tabs>
      <CustomIndicator style={{ width: `calc(100% / 2)`, left: `${value * 50}%` , height: 30}} />
      {/* Set the width of the indicator dynamically based on the number of tabs and the active tab */}
      <TabPanel value={value} index={0}>
      <Cards title="Khadijah" description="This is a sample card description." />
      <Cards title="Lila" description="This is a sample card description." />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Cards title="Hamza" description="This is a sample card description." />
      <Cards title="Rami" description="This is a sample card description." />
      </TabPanel>
    </CustomTabs>
  );
}
