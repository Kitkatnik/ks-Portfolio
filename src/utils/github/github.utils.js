import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const requestRepos = async () => {
    const repos = await octokit.request('GET /users/{username}/repos{?sort}', {
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
                contents: null,
            }
        })
}

const requestREADME = async () => {

    const repos = await requestRepos();

    for(let i = 0; i < repos.length; i++){
        const contents = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}{?ref}', {
            owner: 'kitkatnik',
            repo: repos[i].name,
            path: 'README.md'
        }).then( ({data}) => data)
        repos[i].contents = contents.content;
    }
    return repos;
}

const listOfRepos = async () => {
    return await requestREADME();
}

export {
    listOfRepos,
}