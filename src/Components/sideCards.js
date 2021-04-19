import React,{useEffect,useState, Component } from 'react'
import {Card} from 'react-bootstrap'
import firebase from '../firebase'
import {Link,useHistory} from 'react-router-dom'


export default function SideCard(props) {
    const [dalistItems,setListItems]=useState([])
    const [listID,setListID]=useState([])
    const History = useHistory()

    useEffect(()=>{
        for(var i =0;i<props.locs.length;i++){
            setListItems([...dalistItems,props.locs[i]])
        }
            // props.locs.forEach(element => {
            //     setListItems([...dalistItems,element])
            // });
    },[])

    function handleSubmit(e){
        e.preventDefault()
        History.push({pathname: '/loc',
        search: '/preap'})

    }

    console.log(dalistItems)
    return(
    <div>
        {dalistItems.map(function(d, idx){
            return (<Card.Body onClick={handleSubmit} key={d.id} style={{backgroundColor:"#fd8708",borderRadius:"0px",textAlign:"center",color:"white"}}>{d.name}</Card.Body>)})}
    </div>)
}
SideCard.defaultProps = {
        locs: [
            {name: " ", text: "This is one comment"},
            {name: " ", text: "This is *another* comment"}
          ]
        }

// const SideCard = (props) => {
//     // var listItems = props.loc.map((d) => <li key={d.name}>{d.name}</li>);

    // return(<div>
    //           {this.props.locs.map(function(d, idx){
    //      return (<Card.Body style={{backgroundColor:"#fd8708",borderRadius:"0px",textAlign:"center",color:"white"}}>{d}</Card.Body>)})}
    // </div>)

// }

// export default SideCard

// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Card} from 'react-bootstrap'

// class SideCards extends React.Component{

//     constructor(props) {
    
//         super(props);
       
//         this.state = {locsIDlist : []}
//     }
//     locs= [
//         {name: "Pete Hunt", text: "This is one comment"},
//         {name: "Jordan Walke", text: "This is *another* comment"}
//       ]
      

//     componentDidMount()  {
//        // for(var i in this.state.loc){
//         // firebase.database().ref("Locations").on("value", snapshot => {
//         //   let studentlist = [];
//         //     // locsref.on('value',(snap)=>{
//         //         snapshot.forEach(snap => {
//         //       // snap.val() is the dictionary with all your keys/values from the 'students-list' path
//         //       studentlist.push(snap.val());
//         //       console.log(snap.val().name)

//         // //   });
//         //   this.setState({ locsIDlist: studentlist });
        
//         // }
//         // )})
//         // console.log("fuck")
//         // console.log(this.props.locs)
//         // for(var i in this.props.locs){
//         //     this.state.locsIDlist = this.props.locs[i]
//         // }
//         // console.log(this.state.locsIDlist)
//         console.log("fuck")
//     console.log(this.props.locs)
//     for(var i in this.props.locs){
//         this.state.locsIDlist = this.props.locs[i]
//     }
//     console.log(this.state.locsIDlist)
//     }
//    render(){
    
    // return (
    //   <>
    //   {this.props.locs.map(function(d, idx){
    //      return (<Card.Body style={{backgroundColor:"#fd8708",borderRadius:"0px",textAlign:"center",color:"white"}}>{d.name}</Card.Body>)})}
    //      {/* <p>Hello</p> */}
    //   </>
    // );
//   }
  
//   }
//   SideCards.defaultProps = {
//     locs: [
//         {name: " ", text: "This is one comment"},
//         {name: " ", text: "This is *another* comment"}
//       ]
// };

//   export default SideCards;

