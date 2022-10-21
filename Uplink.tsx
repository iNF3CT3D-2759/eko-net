import Resource from "./Resource";

export default interface Uplink extends Resource {
    speed: number, // kB/s
    tor: boolean,
    provider:string,
    interface: string, // LTE, Cable, Fiber, etc
}