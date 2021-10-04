import axios from 'axios'

export async function getGraphicData(request_data) {
    const URL = `https://spaceappssunshineback.azurewebsites.net/api/nasa/?start=${request_data.start.replaceAll(
    '-',
    ''
    )}&end=${request_data.end.replaceAll('-', '')}&latitude=${request_data.latitude}&longitude=${
    request_data.longitude
    }&resolution=${request_data.resolution}&comunity=SB`;
    
    const { data } = await axios.get(URL);

    return data
}