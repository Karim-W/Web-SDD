import React,{useEffect,useState, Component } from 'react'
import {Card} from 'react-bootstrap'
import firebase from '../firebase'
import {Link,useHistory} from 'react-router-dom'
import {useParams } from "react-router-dom";


export default function SideCard(props) {
    const [dalistItems,setListItems]=useState([])
    const [listID,setListID]=useState([])
    const History = useHistory()

    useEffect(()=>{
        for(var i =0;i<props.locs.length;i++){
            setListItems([...dalistItems,props.locs[i]])
        }
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

//     return(<div>
//               {this.props.locs.map(function(d, idx){
//          return (<Card.Body style={{backgroundColor:"#fd8708",borderRadius:"0px",textAlign:"center",color:"white"}}>{d}</Card.Body>)})}
//     </div>)

//}

// export default SideCard

// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Card} from 'react-bootstrap'
// import {useParams } from "react-router-dom";

// class SideCard extends React.Component{

//     constructor(props) {
    
//         super(props);
       
//         this.state = {locsIDlist : []}
//     }
      
//       componentDidMount(){
//         var temp =[]
//         for(var i =0;i<this.props.locs.length;i++){
//             this.state.locsIDlist.push(this.props.locs[i])
//             console.log(this.props.locs[i])
//             temp.push(this.props.locs[i])
//         }
//         this.setState({locsIDlist:temp})
//       }
    
//    render(){
//     function handleSubmit(e){
//         e.preventDefault()
//         this.props.History.push({pathname: '/loc',
//         search: '/preap'})

//     }
//     return (
//       <>
//           <div>
//         {this.state.locsIDlist.map(function(d, idx){
//             return (<Card.Body onClick={handleSubmit} key={d.id} style={{backgroundColor:"#fd8708",borderRadius:"0px",textAlign:"center",color:"white"}}>{d.name}</Card.Body>)})}
//     </div>
//     </>
      
//     );
//   }
  
//   }
//   SideCard.defaultProps = {
//     locs: [
//         {name: " ", text: "This is one comment"},
//         {name: " ", text: "This is *another* comment"}
//       ]
// };

//   export default SideCard;

