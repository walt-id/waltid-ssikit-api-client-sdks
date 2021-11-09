/**
 * walt.id Custodian API
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
import GenerateKeyRequest from '../model/GenerateKeyRequest';

/**
* Keys service.
* @module api/KeysApi
* @version 1.1-SNAPSHOT
*/
export default class KeysApi {

    /**
    * Constructs a new KeysApi. 
    * @alias module:api/KeysApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteKey operation.
     * @callback module:api/KeysApi~deleteKeyCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a specific key
     * @param {String} id 
     * @param {module:api/KeysApi~deleteKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteKey(id, callback) {
      let postBody = null;
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/keys/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateKey operation.
     * @callback module:api/KeysApi~generateKeyCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generates a key with a specific key algorithm
     * @param {Object} opts Optional parameters
     * @param {module:model/GenerateKeyRequest} opts.generateKeyRequest Generate Key Request
     * @param {module:api/KeysApi~generateKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    generateKey(opts, callback) {
      opts = opts || {};
      let postBody = opts['generateKeyRequest'];

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
        '/keys/generate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getKey operation.
     * @callback module:api/KeysApi~getKeyCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a key specified by its alias
     * @param {String} alias 
     * @param {module:api/KeysApi~getKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getKey(alias, callback) {
      let postBody = null;
      // verify the required parameter 'alias' is set
      if (alias === undefined || alias === null) {
        throw new Error("Missing the required parameter 'alias' when calling getKey");
      }

      let pathParams = {
        'alias': alias
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
        '/keys/{alias}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listKeys operation.
     * @callback module:api/KeysApi~listKeysCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all keys the custodian knows of
     * @param {module:api/KeysApi~listKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the storeKey operation.
     * @callback module:api/KeysApi~storeKeyCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stores a key
     * @param {module:api/KeysApi~storeKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    storeKey(callback) {
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/keys/store', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
