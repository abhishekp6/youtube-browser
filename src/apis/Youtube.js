import axios from "axios";
import Key from "./api-config";
import urls from "../environments/urls";


export default axios.create({
    baseURL: urls.youtubeApi,
    params: {
        part: 'snippet',
        maxResults: 10,
        key: Key
    }
})