import DATA from '../graphData/data.csv';

console.log(DATA);
const trimmedIncomeData = DATA.map((dataObject) => dataObject.Income);
console.log(trimmedIncomeData);

const graphSetup = {
    "frames": [
        {
            "data": [], 
            "layout": {
                "autosize": false, 
                "title": "Histogram Example", 
                "paper_bgcolor": "rgb(255, 255, 255)", 
                "plot_bgcolor": "rgb(229, 252, 255)", 
                "yaxis": {
                    "title": "No. of people", 
                    "zerolinewidth": 3, 
                    "zerolinecolor": "rgb(172, 172, 222)", 
                    "range": [
                        0, 
                        18.94736842105263
                    ], 
                    "gridcolor": "rgb(196, 144, 209)", 
                    "autorange": false
                }, 
                "showlegend": false, 
                "width": 300, 
                "xaxis": {
                    "title": "Income Bracket", 
                    "zerolinewidth": 3, 
                    "zerolinecolor": "rgb(172, 172, 222)", 
                    "range": [
                        0, 
                        10000
                    ], 
                    "zeroline": true, 
                    "showline": false, 
                    "type": "linear", 
                    "autorange": true
                }, 
                "hovermode": "closest", 
                "bargroupgap": 0, 
                "margin": {
                    "pad": 10
                }
            }, 
            "name": "workspace-breakpoint-0"
        }
    ],
    "layout": {
        "autosize": false, 
        "bargroupgap": 0, 
        "title": "Histogram example", 
        "paper_bgcolor": "rgb(255, 255, 255)", 
        "plot_bgcolor": "rgb(229, 252, 255)", 
        "yaxis": {
            "title": "No. of people", 
            "zerolinewidth": 3, 
            "zerolinecolor": "rgb(172, 172, 222)", 
            "range": [
                0, 
                18.94736842105263
            ], 
            "gridcolor": "rgb(196, 144, 209)", 
            "autorange": false
        }, 
        "showlegend": false, 
        "breakpoints": [
            {
                "frame": "workspace-breakpoint-0", 
                "type": "width", 
                "range": [
                    0, 
                    450
                ]
            }
        ], 
        "width": 450, 
        "xaxis": {
            "title": "Income Bracket", 
            "zerolinewidth": 3, 
            "zerolinecolor": "rgb(172, 172, 222)", 
            "range": [
                0, 
                10000
            ], 
            "zeroline": true, 
            "showline": false, 
            "type": "linear", 
            "autorange": true
        }, 
        "hovermode": "closest", 
        "height": 300, 
        "margin": {
            "pad": 10
        }
    }, 
    "data": [
        {
            "autobinx": false, 
            "name": "Income", 
            "xbins": {
                "start": 0, 
                "end": 10000, 
                "size": 100
            }, 
            "xsrc": "MyKillerGamer:0:973549", 
            "mode": "markers", 
            "hoverinfo": "x+y", 
            "marker": {
                "color": "rgb(184, 51, 106)", 
                "line": {
                    "color": "rgb(204, 68, 153)", 
                    "width": 1
                }
            }, 
            "x": trimmedIncomeData,
            "autobiny": true, 
            "type": "histogram", 
            "uid": "d071a0"
        }
    ],
    "config": {}
}

export default graphSetup;