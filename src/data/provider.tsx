export const fetchDataFrom = async (URL: string) => {
    return await fetch(URL).then(response => response.json());
}