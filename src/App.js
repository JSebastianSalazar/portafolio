import React, {useEffect, useState} from 'react';
import Page from "./pages";


const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://gitconnected.com/v1/portfolio/jsebastiansalazar')
            .then(res => res.json())
            .then(user => {
                setUser(user);
            });
    }, []);

    return (
        <div>
            {user && <Page user={user}/>
            }
        </div>
    );
}

export default App;
