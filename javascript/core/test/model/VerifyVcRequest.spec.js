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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WaltIdCoreApi);
  }
}(this, function(expect, WaltIdCoreApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WaltIdCoreApi.VerifyVcRequest();
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

  describe('VerifyVcRequest', function() {
    it('should create an instance of VerifyVcRequest', function() {
      // uncomment below and update the code to test VerifyVcRequest
      //var instance = new WaltIdCoreApi.VerifyVcRequest();
      //expect(instance).to.be.a(WaltIdCoreApi.VerifyVcRequest);
    });

    it('should have the property vcOrVp (base name: "vcOrVp")', function() {
      // uncomment below and update the code to test the property vcOrVp
      //var instance = new WaltIdCoreApi.VerifyVcRequest();
      //expect(instance).to.be();
    });

  });

}));
