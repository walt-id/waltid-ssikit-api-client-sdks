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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WaltIdEssifApi);
  }
}(this, function(expect, WaltIdEssifApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WaltIdEssifApi.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('getApiRoutes', function() {
      it('should call getApiRoutes successfully', function(done) {
        //uncomment below and update the code to test getApiRoutes
        //instance.getApiRoutes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('health', function() {
      it('should call health successfully', function(done) {
        //uncomment below and update the code to test health
        //instance.health(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postTestEnterpriseWalletAuthenticationRequests', function() {
      it('should call postTestEnterpriseWalletAuthenticationRequests successfully', function(done) {
        //uncomment below and update the code to test postTestEnterpriseWalletAuthenticationRequests
        //instance.postTestEnterpriseWalletAuthenticationRequests(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
