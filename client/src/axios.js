import axios from "axios";
import Config from 'react-native-config';

const instance = axios.create({
    baseURL : Config.SERVER_API_URL
});
instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;