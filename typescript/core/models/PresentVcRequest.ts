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

export class PresentVcRequest {
    'vc': string;
    'holderDid': string;
    'domain'?: string;
    'challenge'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "vc",
            "baseName": "vc",
            "type": "string",
            "format": ""
        },
        {
            "name": "holderDid",
            "baseName": "holderDid",
            "type": "string",
            "format": ""
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "challenge",
            "baseName": "challenge",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PresentVcRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

