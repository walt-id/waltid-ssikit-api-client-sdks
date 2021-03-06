/**
 * walt.id Signatory API
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
import ProofConfig from './ProofConfig';

/**
 * The IssueCredentialRequest model module.
 * @module model/IssueCredentialRequest
 * @version 1.1-SNAPSHOT
 */
class IssueCredentialRequest {
    /**
     * Constructs a new <code>IssueCredentialRequest</code>.
     * @alias module:model/IssueCredentialRequest
     * @param templateId {String} 
     * @param config {module:model/ProofConfig} 
     */
    constructor(templateId, config) { 
        
        IssueCredentialRequest.initialize(this, templateId, config);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, templateId, config) { 
        obj['templateId'] = templateId;
        obj['config'] = config;
    }

    /**
     * Constructs a <code>IssueCredentialRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueCredentialRequest} obj Optional instance to populate.
     * @return {module:model/IssueCredentialRequest} The populated <code>IssueCredentialRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueCredentialRequest();

            if (data.hasOwnProperty('templateId')) {
                obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = ProofConfig.constructFromObject(data['config']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} templateId
 */
IssueCredentialRequest.prototype['templateId'] = undefined;

/**
 * @member {module:model/ProofConfig} config
 */
IssueCredentialRequest.prototype['config'] = undefined;






export default IssueCredentialRequest;

