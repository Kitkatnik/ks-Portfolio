import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
    serverTimestamp
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
    const { id, name, description, url, contents_raw, contents_html } = repo;

    const formattedName = name.replace('ks-','').replace('wip','').replaceAll('-',' ')
    let imageUrl = null;
    let techStackBadges = null;
    let demoUrl = null;

    if(/(https:\/\/user-images.githubusercontent.com\/)(.*)(.png)/.test(contents_raw)){
        const currImage = contents_raw.match(/(https:\/\/user-images.githubusercontent.com\/)(.*)(.png)/);
        imageUrl = currImage[0];
    }

    if(/(<p dir="auto"><a target="_blank" rel="noopener noreferrer nofollow" href="https:\/\/camo.githubusercontent.com\/)(.*)(<\/a><\/p>)/s.test(contents_html)){
        const currTechStack = contents_html.match(/(<p dir="auto"><a target="_blank" rel="noopener noreferrer nofollow" href="https:\/\/camo.githubusercontent.com\/)(.*)(<\/a><\/p>)/s);
        techStackBadges = currTechStack[0];
    }

    if(/(\[Click Here to Demo)(.*)(.com\)|.app\/\))/s.test(contents_raw)){
        const currDemoUrl = contents_raw.match(/(\[Click Here to Demo)(.*)(.com\)|.app\/\))/s);
        demoUrl = currDemoUrl[0].replace('[Click Here to Demo](','').replace(')','');
    }

    const repoRef = doc(db, 'repos', `${repo.id}`);
    const repoSnapshot = await getDoc(repoRef);

    if (repoSnapshot.exists()) {
        try {
            const updatedAt = serverTimestamp();
            await updateDoc(repoRef, {
                id,
                name,
                formattedName,
                description,
                imageUrl,
                techStackBadges,
                url,
                demoUrl,
                contents_raw,
                contents_html,
                updatedAt,
            }).then(function(){
                console.log('repo doc updated');
            })
        } catch(error){
            console.log('error updating the repo doc', error.message)
        }
    } else {
        const createdAt = new Date();
        try {
            await setDoc(repoRef, {
                id,
                name,
                formattedName,
                description,
                imageUrl,
                techStackBadges,
                url,
                demoUrl,
                contents_raw,
                contents_html,
                createdAt,
                updatedAt: null,
            }).then(function(){
                console.log('repo doc created');
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