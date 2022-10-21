import Group from "./Group";
import HwInterface from "./Interfaces";
import Fileshare from "./Fileshare";
import Website from "./Websites";
import Zone from "./Zones";
import Uplink from "./Uplink";

export default interface EkoNode {
    id: string,
    alias: string,
    public_key:string,
    private_key: string,
    groups: Group[],
    interfaces: HwInterface[],
    zones: Zone[]
    uplinks: Uplink[],
    websites: Website[],
    fileshares: Fileshare[],
}