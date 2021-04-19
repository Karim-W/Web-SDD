import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import firebase from 'firebase';
// import {Card} from 'react-bootstrap'

class MainGraph extends React.Component{

    constructor(props) {
    
        super(props);
       
        this.state = {data : []}
    }

    componentDidMount()  {
        // for(var k in this.props.locs.violations){
        //     console.log("ello"+k.toString)
        // }

    }
   render(){
    //    const items = []
    //    this.props.locs[0].violations.forEach(element => {
    //    items.push(<li key={element}>{this.props.locs[0].violations[element]}</li>)
    //    });
    const elements = this.props.locs;

    const items = [""]

    for (const [index, value] of elements.entries()) {
        //items.push(<li key={index}>{value.violations}</li>)
        console.log("slice")
        console.log(value.violations)
        var tar=[""]
        var kiwi = [""]
        tar.push(value.violations)
        tar.forEach(element => {
            console.log("date")
            console.log(Object.keys(element))
            kiwi.push(Object.values(element))
            //items.push(<li>{Object.values(element)}</li>)
            console.log("length")
            console.log(Object.keys(element).length)
        });
        kiwi.forEach(k =>{
            console.log("time")
            console.log(k)
            console.log("length"+k.length.toString())
        })
    }
    return (
      <>
      {items}
      {/* hiyo */}
      </>
    );
  }
  
  }
MainGraph.defaultProps = {
    locs:[{violations:{"-1:1":4}},{violations:{"-1:1":4}}]
}
  export default MainGraph;




