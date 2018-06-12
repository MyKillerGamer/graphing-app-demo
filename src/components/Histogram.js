import React from 'react';
import Plot from 'react-plotly.js';
import graphSetup from '../graphData/graphSetup';

export default class Histogram extends React.Component {
    constructor(props) {
        super(props)
        const data = graphSetup.data;
        const layout = graphSetup.layout;
        const frames = graphSetup.frames;
        const config = graphSetup.config;
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
