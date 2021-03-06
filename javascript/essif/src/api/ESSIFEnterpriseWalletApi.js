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


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';

/**
* ESSIFEnterpriseWallet service.
* @module api/ESSIFEnterpriseWalletApi
* @version 1.1-SNAPSHOT
*/
export default class ESSIFEnterpriseWalletApi {

    /**
    * Constructs a new ESSIFEnterpriseWalletApi. 
    * @alias module:api/ESSIFEnterpriseWalletApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createEnterpriseDid operation.
     * @callback module:api/ESSIFEnterpriseWalletApi~createEnterpriseDidCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates and registers DID on the EBSI Blockchain
     * @param {Object} opts Optional parameters
     * @param {String} opts.body Verifiable Authorization
     * @param {module:api/ESSIFEnterpriseWalletApi~createEnterpriseDidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createEnterpriseDid(opts, callback) {
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
        '/test/enterprise/wallet/createDid', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateDidAuthRequest operation.
     * @callback module:api/ESSIFEnterpriseWalletApi~generateDidAuthRequestCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generates a DID Auth Request
     * @param {module:api/ESSIFEnterpriseWalletApi~generateDidAuthRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    generateDidAuthRequest(callback) {
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
        '/test/enterprise/wallet/generateDidAuthRequest', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCredential operation.
     * @callback module:api/ESSIFEnterpriseWalletApi~getCredentialCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns DID Auth Request or the requested credential if a VC Token is presented
     * @param {module:api/ESSIFEnterpriseWalletApi~getCredentialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCredential(callback) {
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
        '/test/ti/credentials', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCredential_0 operation.
     * @callback module:api/ESSIFEnterpriseWalletApi~getCredential_0Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns DID Auth Request or the requested credential if a VC Token is presented
     * @param {String} credentialId 
     * @param {module:api/ESSIFEnterpriseWalletApi~getCredential_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCredential_0(credentialId, callback) {
      let postBody = null;
      // verify the required parameter 'credentialId' is set
      if (credentialId === undefined || credentialId === null) {
        throw new Error("Missing the required parameter 'credentialId' when calling getCredential_0");
      }

      let pathParams = {
        'credentialId': credentialId
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
        '/test/ti/credentials/{credentialId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVerifiableCredential operation.
     * @callback module:api/ESSIFEnterpriseWalletApi~getVerifiableCredentialCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generates the DID ownership response and fetches the requested credential.
     * @param {Object} opts Optional parameters
     * @param {String} opts.body DID ownership request
     * @param {module:api/ESSIFEnterpriseWalletApi~getVerifiableCredentialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getVerifiableCredential(opts, callback) {
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
        '/test/enterprise/wallet/getVerifiableCredential', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the onboards operation.
     * @callback module:api/ESSIFEnterpriseWalletApi~onboardsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request Verifiable Authorization. Returns the DID ownership request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.body DID to be registered
     * @param {module:api/ESSIFEnterpriseWalletApi~onboardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    onboards(opts, callback) {
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
        '/test/eos/onboard', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the requestCredentialUri operation.
     * @callback module:api/ESSIFEnterpriseWalletApi~requestCredentialUriCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates an OIDC authentication request URI.
     * @param {module:api/ESSIFEnterpriseWalletApi~requestCredentialUriCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    requestCredentialUri(callback) {
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
        '/test/ti/requestCredentialUri', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the requestEnterpriseVerifiableCredential operation.
     * @callback module:api/ESSIFEnterpriseWalletApi~requestEnterpriseVerifiableCredentialCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request credential
     * @param {Object} opts Optional parameters
     * @param {String} opts.body Credential Request URI
     * @param {module:api/ESSIFEnterpriseWalletApi~requestEnterpriseVerifiableCredentialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    requestEnterpriseVerifiableCredential(opts, callback) {
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
        '/test/enterprise/wallet/requestVerifiableCredential', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the requestVerifiableAuthorization operation.
     * @callback module:api/ESSIFEnterpriseWalletApi~requestVerifiableAuthorizationCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Performs DID Auth in order to obtain a Verifiable Authorization
     * @param {Object} opts Optional parameters
     * @param {String} opts.body Access Token
     * @param {module:api/ESSIFEnterpriseWalletApi~requestVerifiableAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    requestVerifiableAuthorization(opts, callback) {
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
        '/test/enterprise/wallet/requestVerifiableAuthorization', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the requestVerifiableCredential operation.
     * @callback module:api/ESSIFEnterpriseWalletApi~requestVerifiableCredentialCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the DID ownership request
     * @param {Object} opts Optional parameters
     * @param {String} opts.body Credential request URI
     * @param {module:api/ESSIFEnterpriseWalletApi~requestVerifiableCredentialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    requestVerifiableCredential(opts, callback) {
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
        '/test/ti/requestVerifiableCredential', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the signedChallenge operation.
     * @callback module:api/ESSIFEnterpriseWalletApi~signedChallengeCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Processes the signed challenge in the scope of DID Auth and if successful, returns the Verifiable Authorization
     * @param {Object} opts Optional parameters
     * @param {String} opts.body Signed challenge
     * @param {module:api/ESSIFEnterpriseWalletApi~signedChallengeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    signedChallenge(opts, callback) {
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
        '/test/eos/signedChallenge', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the token operation.
     * @callback module:api/ESSIFEnterpriseWalletApi~tokenCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OIDC Token endpoint
     * @param {Object} opts Optional parameters
     * @param {String} opts.body oidcAuthResp
     * @param {module:api/ESSIFEnterpriseWalletApi~tokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    token(opts, callback) {
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
        '/test/enterprise/wallet/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDidAuthResponse operation.
     * @callback module:api/ESSIFEnterpriseWalletApi~validateDidAuthResponseCallback
     * @param {String} error Error message, if any.
     * @param {Boolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validates a DID Auth response
     * @param {Object} opts Optional parameters
     * @param {String} opts.body DID Auth Response
     * @param {module:api/ESSIFEnterpriseWalletApi~validateDidAuthResponseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Boolean}
     */
    validateDidAuthResponse(opts, callback) {
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
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/test/enterprise/wallet/validateDidAuthResponse', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
