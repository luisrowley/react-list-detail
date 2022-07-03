export const fetchDataFrom = async (URL: string) => {
    return await fetch(URL).then(response => response.json());
}

export const normalizeJSON = (input: JSON) => {
    return JSON.parse(JSON.stringify(input));
}