import React,{useEffect,useState} from 'react'
import {useAuth} from '../contexts/AuthContext'
import firebase from '../firebase'


function App() {
    const [loc,setLoc] = useState()
    const {currentUser} = useAuth()
    
    useEffect(()=>{
        const DBref = firebase.database().ref().child("users").child(currentUser.uid)
        DBref.on('value',(snapshot)=>{
            console.log(snapshot.Val())
            setLoc(snapshot.val())
        })
    },[])
    return (
        <div>
            {{loc}}
        </div>
    )
}

export default App;


