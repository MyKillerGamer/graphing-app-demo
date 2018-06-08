import React from 'react';
import LineGraph from './LineGraph';
import Histogram from './Histogram';

const DashboardPage = () => (
    <div className="content-container">
        <p>A scatter plot of random data to be updated upon request.</p>
        <LineGraph />
        <Histogram />
    </div>
);

export default DashboardPage;