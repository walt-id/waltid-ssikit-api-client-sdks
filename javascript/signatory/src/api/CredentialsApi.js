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


import ApiClient from "../ApiClient";
import IssueCredentialRequest from '../model/IssueCredentialRequest';

/**
* Credentials service.
* @module api/CredentialsApi
* @version 1.1-SNAPSHOT
*/
export default class CredentialsApi {

    /**
    * Constructs a new CredentialsApi. 
    * @alias module:api/CredentialsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the issue operation.
     * @callback module:api/CredentialsApi~issueCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Issue a credential
     * @param {Object} opts Optional parameters
     * @param {module:model/IssueCredentialRequest} opts.issueCredentialRequest 
     * @param {module:api/CredentialsApi~issueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    issue(opts, callback) {
      opts = opts || {};
      let postBody = opts['issueCredentialRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/v1/credentials/issue', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
