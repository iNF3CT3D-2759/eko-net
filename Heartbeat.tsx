import Website from "./Websites";

export default interface Heartbeat {
    timestamp: Date,
    node_id: string,
    airtime_allocation_start: Date,
    airtime_allocation_end: Date,
    global_websites_hash: string,
    global_websites_new: [
        {
            id:string,
            node_id:string,
            name:string,
        }
    ],
    global_websites_expire: Website["id"][],
}