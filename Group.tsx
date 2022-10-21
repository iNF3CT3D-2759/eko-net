import Permission from "./Permission";

export interface GroupPermission extends Permission{
    group_alias: string,
    group_id: string,
    fileshare_permission: Permission,
    website_permission: Permission,
    gps_permission: Permission,
}

export default interface Group {
    id: string,
    alias:string,
    permission: GroupPermission,
}