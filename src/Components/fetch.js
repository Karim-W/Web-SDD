import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const Fetch = () => {
    const [progress, setProgress] = React.useState(0);
    
    React.useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
    })

    return (
        <div style={{width:"100vw",display:"flex",height:"100vh",justifyContent:"center"}}>
            <CircularProgress variant="determinate" value={progress} style={{color:"#fd8708",width:"20vw",paddingTop:"20opx"}}/>
        </div>
    )
}

export default Fetch

