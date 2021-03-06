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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WaltIdCustodianApi);
  }
}(this, function(expect, WaltIdCustodianApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WaltIdCustodianApi.VerifiableCredential();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VerifiableCredential', function() {
    it('should create an instance of VerifiableCredential', function() {
      // uncomment below and update the code to test VerifiableCredential
      //var instance = new WaltIdCustodianApi.VerifiableCredential();
      //expect(instance).to.be.a(WaltIdCustodianApi.VerifiableCredential);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new WaltIdCustodianApi.VerifiableCredential();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instance = new WaltIdCustodianApi.VerifiableCredential();
      //expect(instance).to.be();
    });

    it('should have the property jwt (base name: "jwt")', function() {
      // uncomment below and update the code to test the property jwt
      //var instance = new WaltIdCustodianApi.VerifiableCredential();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new WaltIdCustodianApi.VerifiableCredential();
      //expect(instance).to.be();
    });

  });

}));
