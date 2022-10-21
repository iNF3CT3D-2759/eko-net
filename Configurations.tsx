import EkoIdentity from "./Identity";
import EkoNode from "./Node";

export default interface Configurations {
    key_ring: [ EkoIdentity ],
    beacon_trust: string,       // Public, Private
    fileshare_trust: string,    // Public, Private
    website_trust: string,      // Public, Private
    node_whitelist: [ EkoNode ],
    node_blacklist: [ EkoNode ],

}

const config: Configurations = JSON.parse(localStorage.getItem("confirations")||"{}");

export const getConfigs = () => {
    return config;
    // ALIAS & Keyring
}