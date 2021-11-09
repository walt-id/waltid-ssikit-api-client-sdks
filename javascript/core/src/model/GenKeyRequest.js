/**
 * walt.id Core API
 * The walt.id public API documentation
 *
 * The version of the OpenAPI document: 1.1-SNAPSHOT
 * Contact: office@walt.id
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GenKeyRequest model module.
 * @module model/GenKeyRequest
 * @version 1.1-SNAPSHOT
 */
class GenKeyRequest {
    /**
     * Constructs a new <code>GenKeyRequest</code>.
     * @alias module:model/GenKeyRequest
     * @param keyAlgorithm {module:model/GenKeyRequest.KeyAlgorithmEnum} 
     */
    constructor(keyAlgorithm) { 
        
        GenKeyRequest.initialize(this, keyAlgorithm);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, keyAlgorithm) { 
        obj['keyAlgorithm'] = keyAlgorithm;
    }

    /**
     * Constructs a <code>GenKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenKeyRequest} obj Optional instance to populate.
     * @return {module:model/GenKeyRequest} The populated <code>GenKeyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenKeyRequest();

            if (data.hasOwnProperty('keyAlgorithm')) {
                obj['keyAlgorithm'] = ApiClient.convertToType(data['keyAlgorithm'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GenKeyRequest.KeyAlgorithmEnum} keyAlgorithm
 */
GenKeyRequest.prototype['keyAlgorithm'] = undefined;





/**
 * Allowed values for the <code>keyAlgorithm</code> property.
 * @enum {String}
 * @readonly
 */
GenKeyRequest['KeyAlgorithmEnum'] = {

    /**
     * value: "EdDSA_Ed25519"
     * @const
     */
    "EdDSA_Ed25519": "EdDSA_Ed25519",

    /**
     * value: "ECDSA_Secp256k1"
     * @const
     */
    "ECDSA_Secp256k1": "ECDSA_Secp256k1"
};



export default GenKeyRequest;

