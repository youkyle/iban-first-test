import Axios from "axios"
import config from '../config'

export const getAcounts = () => {
    return Axios.get('https://' + config.cors_api_host + config.accounts_url);
}