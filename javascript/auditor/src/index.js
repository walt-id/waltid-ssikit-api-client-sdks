/**
 * walt.id Auditor API
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


import ApiClient from './ApiClient';
import VerificationPolicy from './model/VerificationPolicy';
import VerificationResult from './model/VerificationResult';
import DefaultApi from './api/DefaultApi';
import VerificationPoliciesApi from './api/VerificationPoliciesApi';


/**
* The_walt_id_public_API_documentation.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var WaltIdAuditorApi = require('index'); // See note below*.
* var xxxSvc = new WaltIdAuditorApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new WaltIdAuditorApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new WaltIdAuditorApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new WaltIdAuditorApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.1-SNAPSHOT
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The VerificationPolicy model constructor.
     * @property {module:model/VerificationPolicy}
     */
    VerificationPolicy,

    /**
     * The VerificationResult model constructor.
     * @property {module:model/VerificationResult}
     */
    VerificationResult,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi,

    /**
    * The VerificationPoliciesApi service constructor.
    * @property {module:api/VerificationPoliciesApi}
    */
    VerificationPoliciesApi
};
