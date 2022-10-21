import { GroupPermission } from "./Group";
import EkoNode from "./Node";
import Resource from "./Resource";
import EkoRequest from "./Request";
import { v4 as uuid } from 'uuid';
import HwInterface from "./Interfaces";
import Permission from './Permission';

export default interface Zone {
    id: string,
    type: string, // static | dynamic
    max_participants: number,
    participants: number,
    mode: HwInterface,
    nodes: EkoNode[],
    groups: GroupPermission[],
    global_privacy_level: Permission,
    resources: Resource[],
    request: EkoRequest[]
}

//const myZones: Zone[] = JSON.parse(localStorage.getItem('myZones')||'[]')

const defaultInterface: HwInterface = {
    type: "UHF",
    frequency: 462500000,       // Hz
    tx_delay: 3000,             // millis
    rx_delay: 3000,           // millis
    noise_threshold: 70 , // dB
}

const nodeOne: EkoNode = {
    id: uuid(),
    alias: "node #112",
    public_key: '---Not yet implemented---',
    private_key: '---Not yet implemented---',
    groups: [],
    interfaces: [],
    zones: [],
    uplinks: [],
    websites: [],
    fileshares: []
}
const nodeTwo: EkoNode = {
    id: uuid(),
    alias: "node #100",
    public_key: '---Not yet implemented---',
    private_key: '---Not yet implemented---',
    groups: [],
    interfaces: [],
    zones: [],
    uplinks: [],
    websites: [],
    fileshares: []
}
const nodeThree: EkoNode = {
    id: uuid(),
    alias: "node #002",
    public_key: '---Not yet implemented---',
    private_key: '---Not yet implemented---',
    groups: [],
    interfaces: [],
    zones: [],
    uplinks: [],
    websites: [],
    fileshares: []
}

const defaultPermission: Permission = {
    name: 'public',
    read: true,
    view: true,
}

const myZones: Zone[] = [
    {
        id: uuid(),
        type: 'static',
        max_participants: 20,
        participants: 4,
        mode: defaultInterface,
        nodes: [ nodeOne, nodeTwo ],
        groups: [],
        global_privacy_level: defaultPermission,
        resources: [],
        request: []
    },{
        id: uuid(),
        type: 'static',
        max_participants: 20,
        participants: 5,
        mode: defaultInterface,
        nodes: [ nodeOne, nodeTwo, nodeThree],
        groups: [],
        global_privacy_level: defaultPermission,
        resources: [],
        request: []
    },{
        id: uuid(),
        type: 'dynamic',
        max_participants: 10,
        participants: 3,
        mode: defaultInterface,
        nodes: [ nodeOne, nodeThree],
        groups: [],
        global_privacy_level: defaultPermission,
        resources: [],
        request: []
    }
]

export const getMyZones = () => {
    return myZones;
}

export const getZone = (id:string) => {
  const zone = myZones.find((z:any)=>z.id === id);
  return zone;
}