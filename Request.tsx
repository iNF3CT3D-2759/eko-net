import Resource from "./Resource";

export default interface EkoRequest {
    source_id:string,
    source_alias:string,
    destination_id:string,
    destination_alias:string,
    resource_type: Resource["type"],
}