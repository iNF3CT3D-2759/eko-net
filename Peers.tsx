import EkoNode from "./Node";
import Zone, { getMyZones } from "./Zones"

export const getZonePeers = (id:Zone["id"]) => {
    const zone = getMyZones().find((zone:Zone) => (zone.id === id));
    const peers = new Array<EkoNode>();
    zone && zone.nodes.map((node:EkoNode) => peers.push(node));
    return peers;
}

export const getAdjacentPeers = () => {
    const zones = getMyZones();
    const peers = new Array<EkoNode>();
    zones.map((zone:Zone) => (
        zone.nodes.map((node:EkoNode) => peers.push(node))
    ));
    return peers;
}