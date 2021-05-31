import axios from 'axios';
export const fetchData = async () => {
    try {
        const url = 'https://covid19.mathdro.id/api';
        const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(url);
        return { confirmed, deaths, recovered, lastUpdate };

    } catch (error) {
        console.log(error);

    }

}
export const fetchData1 = async () => {
    try {
        const url = 'https://covid19.mathdro.id/api';
        const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(url);
        return { confirmed, deaths, recovered, lastUpdate };

    } catch (error) {
        console.log(error);

    }

}
