import Resource from "./Resource";

export interface Beacon extends Resource {
    interface: string,
    range: string,
    lat: string,
    lon: string,
    altitude: string,
}
  
const myBeacons: Beacon[] = JSON.parse(localStorage.getItem('myBeacons')||'[]');
const globalBeacons: Beacon[] = JSON.parse(localStorage.getItem('globalBeacons')||'[]');  

export const getMyBeacons = () => {
    return myBeacons;
}

export const getGlobalBeacons = () => {
    return globalBeacons;
}