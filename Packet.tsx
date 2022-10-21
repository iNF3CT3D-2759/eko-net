export default interface EkoPacket {
    id: string,
    zone_id: string, // Zone Rebalance mid-transfer ??!!
    request_id: string,
    resource_hash: string,
    sequence_number: number,
    creation_timestamp: Date,
    type: string, // request, ack, reponse, heartbeat ?
    payload: {
        type: string,
        name: string,
        data: Blob,
    }
}