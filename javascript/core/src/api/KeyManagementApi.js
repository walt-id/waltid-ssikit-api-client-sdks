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


import ApiClient from "../ApiClient";
import ExportKeyRequest from '../model/ExportKeyRequest';
import GenKeyRequest from '../model/GenKeyRequest';
import KeyId from '../model/KeyId';

/**
* KeyManagement service.
* @module api/KeyManagementApi
* @version 1.1-SNAPSHOT
*/
export default class KeyManagementApi {

    /**
    * Constructs a new KeyManagementApi. 
    * @alias module:api/KeyManagementApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteKey operation.
     * @callback module:api/KeyManagementApi~deleteKeyCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete key
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body ID of key to be deleted
     * @param {module:api/KeyManagementApi~deleteKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteKey(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteKey");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['text/plain'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/v1/key/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the exportKey operation.
     * @callback module:api/KeyManagementApi~exportKeyCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Exports public and private key part (if supported by underlying keystore)
     * @param {Object} opts Optional parameters
     * @param {module:model/ExportKeyRequest} opts.exportKeyRequest Exports the key in JWK or PEM format
     * @param {module:api/KeyManagementApi~exportKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    exportKey(opts, callback) {
      opts = opts || {};
      let postBody = opts['exportKeyRequest'];

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
        '/v1/key/export', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the genKey operation.
     * @callback module:api/KeyManagementApi~genKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KeyId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate key
     * @param {Object} opts Optional parameters
     * @param {module:model/GenKeyRequest} opts.genKeyRequest The desired key algorithm (ECDSA_Secp256k1 or EdDSA_Ed25519)
     * @param {module:api/KeyManagementApi~genKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/KeyId}
     */
    genKey(opts, callback) {
      opts = opts || {};
      let postBody = opts['genKeyRequest'];

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
      let returnType = KeyId;
      return this.apiClient.callApi(
        '/v1/key/gen', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getV1KeyWithId operation.
     * @callback module:api/KeyManagementApi~getV1KeyWithIdCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load public key
     * @param {String} id 
     * @param {module:api/KeyManagementApi~getV1KeyWithIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getV1KeyWithId(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV1KeyWithId");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/v1/key/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the importKey operation.
     * @callback module:api/KeyManagementApi~importKeyCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import key
     * @param {Object} opts Optional parameters
     * @param {String} opts.body Imports the key (JWK format) to the key store
     * @param {module:api/KeyManagementApi~importKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    importKey(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['text/plain'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/v1/key/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listKeys operation.
     * @callback module:api/KeyManagementApi~listKeysCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of key IDs
     * @param {module:api/KeyManagementApi~listKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    listKeys(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/v1/key', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
