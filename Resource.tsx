import Group, { GroupPermission } from "./Group";
import Permission from "./Permission";
import { v4 as uuid } from 'uuid';

export default interface Resource {
    id: string,
    node_id: string,
    type: string,
    groups: [ Group ],
    global_privacy_level: Permission,
    hash: string,
}

/*
*
*   Test Stub
*
*/

const defaultPermission: Permission = {
    name: 'default',
    read: true,
    view: true
}

const globalPermission: GroupPermission = {
    name: 'default',
    read: true,
    view: true,
    group_alias: 'global',
    group_id: uuid(),
    fileshare_permission: defaultPermission,
    website_permission: defaultPermission,
    gps_permission: defaultPermission,
}

const zonePermissions: GroupPermission[] = [
    {
        name: 'default',
        read: true,
        view: true,
        group_alias: 'zone-112',
        group_id: uuid(),
        fileshare_permission: defaultPermission,
        website_permission: defaultPermission,
        gps_permission: defaultPermission,
    },
    {
        name: 'default',
        read: true,
        view: true,
        group_alias: 'zone-100',
        group_id: uuid(),
        fileshare_permission: defaultPermission,
        website_permission: defaultPermission,
        gps_permission: defaultPermission,
    }
]

const globalResources = [
    {
        id: uuid(),
        node_id: uuid(),
        type: 'website',
        name: 'Random Website #1',
        location: '/random_sites',
        groups: [ defaultPermission ],
        global_privacy_level: defaultPermission,
        hash: '',
    },
    {
        id: uuid(),
        node_id: uuid(),
        type: 'website',
        name: 'The new Facebook',
        location: '/random_sites/Facebook',
        groups: [ defaultPermission ],
        global_privacy_level: defaultPermission,
        hash: '',
    },
]

export const getGlobalResources = (type:string,groups:GroupPermission[]) => {
    return globalResources;
}

export const getMyResources = (type:string,groups:GroupPermission[]) => {
    return globalResources;
}

export const getGroupResources = (type:string,groups:GroupPermission[]) => {
    return globalResources;
}
