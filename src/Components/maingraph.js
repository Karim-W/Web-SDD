// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import firebase from 'firebase';
// // import {Card} from 'react-bootstrap'

// class MainGraph extends React.Component{

//     constructor(props) {
    
//         super(props);
       
//         this.state = {data : []}
//     }

//     componentDidMount()  {
//         // for(var k in this.props.locs.violations){
//         //     console.log("ello"+k.toString)
//         // }

//     }
//    render(){
//     //    const items = []
//     //    this.props.locs[0].violations.forEach(element => {
//     //    items.push(<li key={element}>{this.props.locs[0].violations[element]}</li>)
//     //    });
//     const elements = this.props.locs;

//     const items = [""]

//     for (const [index, value] of elements.entries()) {
//         //items.push(<li key={index}>{value.violations}</li>)
//         console.log("slice")
//         console.log(value.violations)
//         var tar=[""]
//         var kiwi = [""]
//         tar.push(value.violations)
//         tar.forEach(element => {
//             console.log("date")
//             console.log(Object.keys(element))
//             kiwi.push(Object.values(element))
//             //items.push(<li>{Object.values(element)}</li>)
//             console.log("length")
//             console.log(Object.keys(element).length)
//         });
//         kiwi.forEach(k =>{
//             console.log("time")
//             console.log(k)
//             console.log("length"+k.length.toString())
//         })
//     }
//     return (
//       <>
//       {items}
//       {/* hiyo */}
//       </>
//     );
//   }
  
//   }
// MainGraph.defaultProps = {
//     locs:[{violations:{"-1:1":4}},{violations:{"-1:1":4}}]
// }
//   export default MainGraph;




// import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
// import {
//   ArgumentAxis,
//   ValueAxis,
//   Chart,
//   LineSeries,
// } from '@devexpress/dx-react-chart-material-ui';


// const data = [
//   { argument: 1, value: 10 },
//   { argument: 2, value: 2 },
//   { argument: 3, value: 30 },
// ];

// export default () => (
//   <Paper style={{minWidth:"80vw"}}>
//     <Chart
//       data={data}
//     >
//       <ArgumentAxis />
//       <ValueAxis />

//       <LineSeries valueField="value" argumentField="argument" />
//     </Chart>
//   </Paper>
// );

import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';


import { EventTracker, SelectionState } from '@devexpress/dx-react-chart';

var data = [
//   { year: '1950', population: 2.525 },
//   { year: '1960', population: 2.018 },
//   { year: '1970', population: 1.682 },
//   { year: '1980', population: 4.440 },
//   { year: '1990', population: 5.310 },
//   { year: '2000', population: 6.127 },
//   { year: '2010', population: 6.930 },
];

const compare = (
  { series, point }, { series: targetSeries, point: targetPoint },
) => series === targetSeries && point === targetPoint;

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
      selection: [],
    };

    this.click = ({ targets, event }) => {
      const target = targets[0];
      if (target) {
        this.setState(({ selection }) => {
          if (event.ctrlKey || event.metaKey) {
            const filtered = selection.filter(el => !compare(el, target));
            return {
              selection: filtered.length < selection.length ? filtered : [...filtered, target],
            };
          }
          return {
            selection: selection.length === 1 && compare(selection[0], target) ? [] : [target],
          };
        });
      }
    };
  }

  render() {
    
    var violations = []
    var rx = []
    // this.props.locs.forEach(element => {
    //     console.log(element.violations)
    //     data.push({day:"23",violations:9})
    //     console.log(data)
    // });
    rx = this.props.data
    const { rx: chartData, selection } = this.state;


    return (
      <div>
        <Paper style={{minWidth:"80vw"}}>
          <Chart style={{color:"white"}}
            data={chartData}
          >
            <ArgumentAxis />
            <ValueAxis />

            <BarSeries
              valueField="violations"
              argumentField="day"
            />
            <EventTracker onClick={this.click} />
            <SelectionState selection={selection} />
          </Chart>
        </Paper>
      </div>
    );
  }
}
