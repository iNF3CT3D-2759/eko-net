import { pki } from 'node-forge';

export default interface EkoIdentity {
    id: string,
    alias: string,
    public_key: pki.KeyPair["publicKey"],
    private_key: pki.KeyPair["privateKey"],
    created_timestamp: Date,
    last_updated_timestamp: Date,
}