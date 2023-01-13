import axios from 'axios';

axios.defaults.baseURL = `https://${process.env.REACT_APP_RAPID_API_HOST}`
axios.defaults.headers.common['X-RapidAPI-Key'] = process.env.REACT_APP_RAPID_API_KEY
axios.defaults.headers.common['X-RapidAPI-Host'] = process.env.REACT_APP_RAPID_API_HOST


export async function search(query: string) {
    return await axios.get(`/search?q=${query}&maxResults=50&part=snippet,id`)
}

export async function getVideo(id: string) {
    return await axios.get(`/videos?id=${id}&part=contentDetails,snippet,statistics`)
}

export async function getSuggestedVideos(id: string) {
    return await axios.get(`/search?relatedToVideoId=${id}&part=id,snippet&maxResults=10`)
}

export async function getVideoComments(id: string) {
    return await axios.get(`/commentThreads?videoId=${id}&part=snippet&maxResults=100`)
}

export async function getChannelDetails(id: string) {
    return await axios.get(`/channels?id=${id}&part=id,snippet`)
}

export async function getChannelVideos(id: string) {
    return await axios.get(`/search?channelId=${id}&part=id,snippet&order=date&maxResults=50`)
}