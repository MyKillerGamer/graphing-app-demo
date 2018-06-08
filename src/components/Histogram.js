import React from 'react';
import Plot from 'react-plotly.js';
import DATA from '../data/data.csv';

console.log(DATA);
const trimmedIncomeData = DATA.map((dataObject) => dataObject.Income);
console.log(trimmedIncomeData);

export default class LineGraph extends React.Component {
    constructor(props) {
        super(props)
        const data = [{ x: trimmedIncomeData, type: 'histogram', mode: 'markers'}];
        const layout = {width: 600, height: 300, title: 'Plotly Histogram'};
        const frames = [];
        const config = {};
        this.state = { data:data, layout:layout, frames:frames, config:config };
    }
    render() {
    return (
        <div className="content-container">
        <div>
            Histogram reading from csv
        </div>
        <Plot
            data={this.state.data}
            layout={this.state.layout}
            frames={this.state.frames}
            config={this.state.config}
            onInitialized={(data) => this.setState(data)}
            onUpdate={(data) => this.setState(data)}
        />
      </div>
    );
    }
}
