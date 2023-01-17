import { Octokit } from "octokit";
import { createRepoDocument } from "../firebase/firebase.utils";

const octokit = new Octokit({ auth: process.env.GH_TOKEN });

const limits = async() => {
    const {rate} = await octokit.request('GET /rate_limit', {}).then(({data}) => data)
    // console.log(rate)
    const date = new Date(rate.reset * 1000);
    // Hours part from the timestamp
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    const seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    const formattedTime = hours + ':' + minutes.substring(-2) + ':' + seconds.substring(-2);

    // console.log(formattedTime);
}
limits();

async function requestRetry(route, parameters) {
    try {
        const response = await octokit.request(route, parameters);
        return response
    } catch (error) {
        if (error.response && error.status === 403 && error.response.headers['x-ratelimit-remaining'] === '0') {
            const resetTimeEpochSeconds = error.response.headers['x-ratelimit-reset'];
            const currentTimeEpochSeconds = Math.floor(Date.now() / 1000);
            const secondsToWait = resetTimeEpochSeconds - currentTimeEpochSeconds;
            console.log(`You have exceeded your rate limit. Retrying in ${secondsToWait} seconds.`);
            setTimeout(requestRetry, secondsToWait * 1000, route, parameters);
        } else {
            console.error(error);
        }
    }
}

const requestRepos = async () => {
    const repos = await requestRetry('GET /users/{username}/repos{?sort}', {
        username: 'kitkatnik',
        sort: 'created',
    })
    const { data } = repos;
    
    return data
        .filter( repo => /^ks-/.test(repo.name))
        .map( repo => {
            return {
                id: repo.id,
                name: repo.name,
                formattedName: null,
                description: repo.description,
                url: repo.html_url,
                imageUrl: null,
                demoUrl: null,
                contents_raw: null,
                contents_html: null,
                techStackBadges: null,
                createdAt: null,
                updatedAt: null,
            }
        })
}

const requestREADME = async () => {

    const repos = await requestRepos();

    for(let i = 0; i < repos.length; i++){
        const rawContents = await requestRetry('GET /repos/{owner}/{repo}/readme', {
            headers:{
                'accept': 'application/vnd.github.VERSION.raw',
            },
            owner: 'kitkatnik',
            repo: repos[i].name,
        }).then( ({data}) => data)
        repos[i].contents_raw = rawContents;

        const htmlContents = await requestRetry('GET /repos/{owner}/{repo}/readme', {
            headers:{
                'accept': 'application/vnd.github.VERSION.html',
            },
            owner: 'kitkatnik',
            repo: repos[i].name,
        }).then( ({data}) => data)
        repos[i].contents_html = htmlContents;
    }
    return repos;
}

export const storeRepos = async() => {
    const repos = await requestREADME();

    for(let i = 0; i < repos.length; i++){
        const currRepo = repos[i]
        await createRepoDocument(currRepo);
    }
}