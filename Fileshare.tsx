import Resource from "./Resource";

export default interface Fileshare extends Resource {
    created: string,
}

export interface EkoFile extends Resource {
    size: string,
    location: string,
    format: string,
    created: string,
}
  
const myFiles: File[] = JSON.parse(localStorage.getItem('myFiles')||'[]');
const globalFiles: File[] = JSON.parse(localStorage.getItem('globalFiles')||'[]');  

export const getMyFiles = () => {
    return myFiles;
}

export const getGlobalFiles = () => {
    return globalFiles;
}