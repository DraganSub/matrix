import React, { useEffect, useState } from "react";

export const AppContext = React.createContext("Please use AppProvider");

export const AppConsumer = AppContext.Consumer;

export function AppProvider(props) {
    const [ username, setUsername ] = useState('');
    const [ avatarIndex, setAvatarIndex ] = useState(0);
    const [ config, setConfig ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ activeUser, setActiveUser ] = useState (null);


    useEffect(() => {
        fetch("/assets/config.json")
        .then(response => {
             return response.json();
        })
        .then(json => {
            setConfig(json);
        })
        .catch(error => {
            setError(error);
        });
    }, []);
  

        

    return (
        <AppContext.Provider value={{
            username: username,
            setUsername: setUsername,
            activeUser: activeUser,
            setActiveUser: setActiveUser,
            avatarIndex: avatarIndex,
            setAvatarIndex: setAvatarIndex,
            isSignedIn: username !== '',
            config: config,
            error: error,
        }}>
            {props.children}
        </AppContext.Provider>
    );
}
