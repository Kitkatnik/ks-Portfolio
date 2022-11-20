export const requestRepos = () => {
    return Promise.resolve(fetch('https://api.github.com/users/kitkatnik/repos'));
}