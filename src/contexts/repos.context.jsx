import { createContext, useEffect, useState } from 'react';

import { storeRepos } from '../utils/github/github.utils'
import { getRepos } from '../utils/firebase/firebase.utils'; 

export const ReposContext = createContext([])

export const ReposProvider = ({ children }) => {
    // GITHUB REPOS
    const [repos, setRepos] = useState([]);
    const value = { repos };

    useEffect( () => {
        const readRepos = () => getRepos().then(setRepos);
        readRepos();
    }, [])

    useEffect( () => {
        storeRepos();
    }, [])
    
    return <ReposContext.Provider value={value}>{children}</ReposContext.Provider>
}