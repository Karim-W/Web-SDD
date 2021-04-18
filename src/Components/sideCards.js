// import React,{useEffect,useState, Component } from 'react'
// import {Card} from 'react-bootstrap'
// import firebase from '../firebase'




// const SideCards = (props) => {
//     // var listItems = props.loc.map((d) => <li key={d.name}>{d.name}</li>);
//     const [sideL,setSideL] = useState()
//     var LL = useState()
//     useEffect(async () => {
        
//         for(var l in props.loc){
//         const locsref = await firebase.database().ref().child("Locations").child(props.loc[l])
//                 locsref.on('value',(snapshot)=>{
                    
//                     const myL = snapshot.val()
//                     console.log(snapshot.val())
//                     console.log("my loc is")

//                     LL.push(myL.name)
//                 })
//             }
//             setSideL(LL)
//             console.log(LL+"jello")
//             getScores();
//     }, [])

//     const getScores = () => async dispatch => {
//         try {
//             var LL = []
//         for(var l in props.loc){
//           const score = await firebase.database().child("Locations").child(props.loc[l])
//           return score.once("value", snapshot => {
//             const res = snapshot.map(childSnapshot => childSnapshot.toJSON())
//             console.log(res+"hawk")
//             return dispatch({ payload: res });
//           })
//         }}catch(err){
//           dispatch({ payload: err });
//         }
//       }

//     return(<div>
//         <Card.Body style={{color:"red"}}>{LL.toString}</Card.Body>
//     </div>)
//     // return sideL.map((d) => <Card.body>{d.name}</Card.body>);
// }

// SideCards.defaultProps ={
//     loc:
//         {name:" "},
//     }


// export default SideCards

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
import {Card} from 'react-bootstrap'

class SideCards extends React.Component{

    constructor(props) {
    
        super(props);
       
        this.state = {locsIDlist : []}
    }
    locs= [
        {name: "Pete Hunt", text: "This is one comment"},
        {name: "Jordan Walke", text: "This is *another* comment"}
      ]

    componentDidMount()  {
       // for(var i in this.state.loc){
        // firebase.database().ref("Locations").on("value", snapshot => {
        //   let studentlist = [];
        //     // locsref.on('value',(snap)=>{
        //         snapshot.forEach(snap => {
        //       // snap.val() is the dictionary with all your keys/values from the 'students-list' path
        //       studentlist.push(snap.val());
        //       console.log(snap.val().name)

        // //   });
        //   this.setState({ locsIDlist: studentlist });
        
        // }
        // )})
        console.log("fuck")
        console.log(this.props.locs)
        for(var i in this.props.locs){
            this.state.locsIDlist = this.props.locs[i]
        }
        console.log(this.state.locsIDlist)
    }
   render(){
    return (
      <>
      {this.props.locs.map(function(d, idx){
         return (<Card.Body style={{backgroundColor:"#fd8708",borderRadius:"0px",textAlign:"center",color:"white"}}>{d.name}</Card.Body>)})}
      </>
    );
  }
  
  }

  export default SideCards;

