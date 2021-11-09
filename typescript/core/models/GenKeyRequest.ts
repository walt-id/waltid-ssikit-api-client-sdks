/**
 * walt.id Core API
 * The walt.id public API documentation
 *
 * OpenAPI spec version: 1.1-SNAPSHOT
 * Contact: office@walt.id
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class GenKeyRequest {
    'keyAlgorithm': GenKeyRequestKeyAlgorithmEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "keyAlgorithm",
            "baseName": "keyAlgorithm",
            "type": "GenKeyRequestKeyAlgorithmEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GenKeyRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type GenKeyRequestKeyAlgorithmEnum = "EdDSA_Ed25519" | "ECDSA_Secp256k1" ;
