/**
 * walt.id ESSIF API
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
 * The EbsiOnboardRequest model module.
 * @module model/EbsiOnboardRequest
 * @version 1.1-SNAPSHOT
 */
class EbsiOnboardRequest {
    /**
     * Constructs a new <code>EbsiOnboardRequest</code>.
     * @alias module:model/EbsiOnboardRequest
     * @param bearerToken {String} 
     * @param did {String} 
     */
    constructor(bearerToken, did) { 
        
        EbsiOnboardRequest.initialize(this, bearerToken, did);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bearerToken, did) { 
        obj['bearerToken'] = bearerToken;
        obj['did'] = did;
    }

    /**
     * Constructs a <code>EbsiOnboardRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EbsiOnboardRequest} obj Optional instance to populate.
     * @return {module:model/EbsiOnboardRequest} The populated <code>EbsiOnboardRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EbsiOnboardRequest();

            if (data.hasOwnProperty('bearerToken')) {
                obj['bearerToken'] = ApiClient.convertToType(data['bearerToken'], 'String');
            }
            if (data.hasOwnProperty('did')) {
                obj['did'] = ApiClient.convertToType(data['did'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} bearerToken
 */
EbsiOnboardRequest.prototype['bearerToken'] = undefined;

/**
 * @member {String} did
 */
EbsiOnboardRequest.prototype['did'] = undefined;






export default EbsiOnboardRequest;

