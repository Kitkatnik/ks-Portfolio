import { createTokenAuth } from "@octokit/auth-token";
import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

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
            const { data } = await octokit.request('GET /rate_limit', {})
            console.log(data);
        }
    }
}

const requestRepos = async () => {
    const repos = await requestRetry('GET /users/{username}/repos{?sort}', {
        headers: {
            "User Agent": "kitkatnik",
            "X-GitHub-Api-Version": "2022-11-28",
            "Accept": "application/json",
            "If-Modified-Since": "Sat, 14 Jan 2023 12:00:00 GMT",
            "Authorization": `token ${process.env.GITHUB_TOKEN}`,
        },
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
                url: repo.html_url,
                contents_url: repo.contents_url,
                contents_base64: null,
                contents_raw: null,
                contents_html: null
            }
        })
}

const requestREADME = async () => {

    const repos = await requestRepos();

    for(let i = 0; i < repos.length; i++){
        const contents = await requestRetry('GET /repos/{owner}/{repo}/contents/readme', {
            owner: 'kitkatnik',
            repo: repos[i].name,
            path: 'README.md'
        }).then( ({data}) => data)
        repos[i].contents_base64 = contents.content;

        const rawContents = await requestRetry('GET GET /repos/{owner}/{repo}/readme', {
            headers: {
                "content-type": "application/vnd.github.raw",
                "X-GitHub-Api-Version": "2022-11-28",
            },
            owner: 'kitkatnik',
            repo: repos[i].name,
        })
    }
    return repos;
}

const listOfRepos = async () => {
    return await requestREADME();
}

listOfRepos();

export {
    listOfRepos,
}