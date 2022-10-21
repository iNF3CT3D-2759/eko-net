import EkoNode from "./Node";
import Resource from "./Resource";

export default interface Website extends Resource{
    name: string,
    location: string, // Directory on local device
}
  
const node: EkoNode = JSON.parse(localStorage.getItem('node')||'');
const globalWebsites: Website[] = JSON.parse(localStorage.getItem('globalWebsites')||'[]');  

export const getMyWebsites = () => {
    return node && node.websites;
}

export const getGlobalWebsites = () => {
    return globalWebsites;
}