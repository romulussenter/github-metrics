import axios from 'axios';

const githubUrl = 'https://api.github.com';

export const getUserInformation = (username) => {
    const url = `${githubUrl}/users/${username}`;
    return axios.get(url);
}