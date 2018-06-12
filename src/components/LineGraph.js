import React from 'react';
import Plot from 'react-plotly.js';

let N = 100;

const getRandomData = () => {
    return({
        x: Array.from(new Array(N),(val,index)=>index),
        y: Array.from(new Array(N),(val)=>(Math.floor(Math.random() * 100)))
    });
};

export default class LineGraph extends React.Component {
    constructor(props) {
        super(props);
        const figure = {
            "frames": [], 
            "layout": {
                "autosize": true, 
                "title": "Plotly Test", 
                "paper_bgcolor": "rgb(255, 255, 255)", 
                "plot_bgcolor": "rgb(229, 252, 255)", 
                "yaxis": {
                    "title": "Y data", 
                    "range": [
                        -6.812395309882747, 
                        104.81239530988275
                    ], 
                    "gridcolor": "rgb(196, 144, 209)", 
                    "showline": false, 
                    "type": "linear", 
                    "autorange": true
                }, 
                "showlegend": false, 
                "breakpoints": [], 
                "xaxis": {
                    "title": "X data", 
                    "range": [
                        -6.104927408710953, 
                        105.10492740871095
                    ], 
                    "zeroline": true, 
                    "showline": false, 
                    "type": "linear", 
                    "autorange": true
                }, 
                "hovermode": "closest", 
                "margin": {
                    "pad": 10
                }
            }, 
            "data": [
                {   
                    "x": getRandomData(),
                    "y": getRandomData(),
                    "type": "scatter",
                    "mode": "markers"
                }
            ]
        }
        this.state = { data: figure.data, layout: figure.layout, frames:figure.frames, config:config };
    }
    render() {
    return (
      <div className="content-container">
        <div>
          <div> Dynamic scatter test </div>
          <button className="button"
            onClick={() => this.setState({data: [{ x: getRandomData(), y: getRandomData().y, mode: 'markers'}]})}>{'UPDATE DATA'}</button>
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

// import {
//     XYPlot,
//     XAxis,
//     YAxis,
//     VerticalGridLines,
//     HorizontalGridLines,
//     LineMarkSeriesCanvas,
//     LineMarkSeries,
//     LineSeriesCanvas,
//     LineSeries,
//     Crosshair, 
//     VerticalBarSeries
// } from 'react-vis'

// const getRandomData = () => {
//     return (new Array(100)).fill(0).map((row, i) => ({
//       x: i,
//       y: Math.floor(Math.random() * 20),
//       color: Math.random() * 10
//     }));
// };


// const randomData = getRandomData();

// const colorRanges = {
//   typeA: ['#59E4EC', '#0D676C'],
//   typeB: ['#EFC1E3', '#B52F93']
// };

// const nextType = {
//   typeA: 'typeB',
//   typeB: 'typeA'
// };

// export default class Graph extends React.Component {
//   state = {
//     data: randomData,
//     colorType: 'typeA',
//     strokeWidth: 1,
//     showMarks: true,
//     value: false,
//     hideComponent: false
//   }
//     render() {
//         const {
//       colorType,
//       curve,
//       data,
//       strokeWidth,
//       showMarks,
//       value
//     } = this.state;
//     const lineSeriesProps = {
//       animation: true,
//       sizeRange: [5, 15],
//       color: colorType === 'typeA' ? '#0D676C' : '#B52F93',
//       colorRange: colorRanges[colorType],
//       opacityType: 'literal',
//       strokeWidth: 0.8,
//       curve: 'curveNatural',
//       data,
//       onNearestX: d => this.setState({value: d})
//     };

//     return (
//       <div className="content-container">
//         <div className="box-layout__title">
//           <div> Dynamic data test </div>
//           <button className="button"
//             onClick={() => this.setState({data: getRandomData()})}>{'UPDATE DATA'}</button>
//           <button className="button"
//             onClick={() => this.setState({colorType: nextType[colorType]})}>{`TOGGLE COLOR to ${nextType[colorType]}`}</button>
//         </div>
//         <XYPlot
//           onMouseLeave={() => this.setState({value: false})}
//           width={700}
//           height={400}>
//           <VerticalGridLines />
//           <HorizontalGridLines />
//           <XAxis />
//           <YAxis />
//             <LineSeries {...lineSeriesProps}/>
//           {value && <Crosshair values={[value]} />}
//         </XYPlot>
//       </div>
//     );
//     }
// }
// class Graph extends React.Component {
//     render() {
//         let data = [
//             {x: 0, y:0}
//         ];
//         const lineData = [
//             {x: 1, y: 10},
//             {x: 2, y: 20},
//             {x: 3, y: 0},
//             {x: 4, y: 60}
//         ];
//         const lineData2 = [
//             {x: 2, y: 17},
//             {x: 3, y: 20},
//             {x: 4, y: 30}
//         ];
//         const barData = [
//             {x: 'A', y: 12},
//             {x: 'B', y: 2},
//             {x: 'C', y: 11}
//         ];

//         const dataSwitch = (data) => {
//             if(data !== lineData2) {
//                 data = lineData2;
//             } else {
//                 data = lineData;
//             };
//         };

//         return (
//             <div className="content-container">
//             <button onClick={dataSwitch}>Change</button>    
//             <XYPlot
//                     width={300}
//                     height={300}
//                 >
//                     <LineSeries
//                         color="#f70"
//                         curve="curveNatural"
//                         data={data}
//                         strokeWidth={3}
//                     />
//                     <XAxis
//                         title="X-Axis"
//                         position="start"
//                     />
//                     <YAxis
//                         title="Y-Axis"
//                     />
//                     <VerticalGridLines
//                     />
//                     <HorizontalGridLines
//                     />
//                 </XYPlot>
//                 <XYPlot
//                     xType={'ordinal'}
//                     width={300}
//                     height={300}
//                 >
//                     <VerticalBarSeries 
//                         color="#1084c7"
//                         data={barData}
//                     />
//                     <XAxis 
//                         title="Music Type"
//                         position="end"
//                     />
//                     <YAxis
//                         title="Queued"
//                     />
//                     <VerticalGridLines
//                     />
//                     <HorizontalGridLines
//                     />
//                 </XYPlot>
//             </div>
//       );
//     }
// }

// export default Graph