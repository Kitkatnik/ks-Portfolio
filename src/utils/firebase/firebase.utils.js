import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    doc,
    getDocs,
    setDoc,
} from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCT4kjKicVhErcZNb-aTqS09c1RheFD1CI",
    authDomain: "portfolio-db-57fa2.firebaseapp.com",
    projectId: "portfolio-db-57fa2",
    storageBucket: "portfolio-db-57fa2.appspot.com",
    messagingSenderId: "375399552351",
    appId: "1:375399552351:web:37a28fea6f609903c212ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Create docs
export const createRepoDocument = async (repo) => {
    const repoRef = doc(db, 'repos', `${repo.id}`);
    const repoSnapshot = await getDocs(repoRef);

    if (!repoSnapshot.exists()) {
        const { name, url, contents_raw, contents_html } = repo;
        const createdAt = new Date();
        try {
            await setDoc(repoRef, {
                name,
                url,
                contents_raw,
                contents_html,
                createdAt
            })
        } catch(error){
            console.log('error creating the repo doc', error.message)
        }
    } 
    return repoRef;
}

// Read collection
export const getRepos = async() => {
    const reposCol = collection(db, 'repos');
    const reposSnapshot = await getDocs(reposCol);
    const reposList = reposSnapshot.docs.map(doc => doc.data());
    return reposList;
}