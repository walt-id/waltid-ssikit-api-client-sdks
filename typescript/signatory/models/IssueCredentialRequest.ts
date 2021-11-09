/**
 * walt.id Signatory API
 * The walt.id public API documentation
 *
 * OpenAPI spec version: 1.1-SNAPSHOT
 * Contact: office@walt.id
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ProofConfig } from './ProofConfig';
import { HttpFile } from '../http/http';

export class IssueCredentialRequest {
    'templateId': string;
    'config': ProofConfig;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "templateId",
            "baseName": "templateId",
            "type": "string",
            "format": ""
        },
        {
            "name": "config",
            "baseName": "config",
            "type": "ProofConfig",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IssueCredentialRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

