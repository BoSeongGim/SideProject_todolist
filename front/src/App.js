import  React, { useState, useEffect } from 'react'
import { MainPage } from './pages';

function App() {
    return<MainPage />;


//----FLASK server test data--------
    /*
    //receive data from
    const [data, setData] = useState([{}])
    useEffect(() =>{
        fetch("/members").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
                // can console check in http://localhost:3000/
                // [notice] not http://localhost:5000/members
            }
        )
    }, [])

    return (
    //rendering datas in HTML page
    <div>
        {(typeof data.members === 'undefined') ? (
            <p>Loading...</p>
        ) : (
            data.members.map((member, i) =>(
                <p key={i}>{member}</p>
            ))
        )}
    </div>
    );
    */
}

export default App