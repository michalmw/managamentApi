/**
 * Api by SurpriseDesign
 * Api by SurpriseDesign 
 *
 * OpenAPI spec version: 0.9
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiBySurpriseDesign);
  }
}(this, function(expect, ApiBySurpriseDesign) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiBySurpriseDesign.TeamApi();
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

  describe('TeamApi', function() {
    describe('appTeamsDeleteUserIdPut', function() {
      it('should call appTeamsDeleteUserIdPut successfully', function(done) {
        //uncomment below and update the code to test appTeamsDeleteUserIdPut
        //instance.appTeamsDeleteUserIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appTeamsGet', function() {
      it('should call appTeamsGet successfully', function(done) {
        //uncomment below and update the code to test appTeamsGet
        //instance.appTeamsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appTeamsIdDelete', function() {
      it('should call appTeamsIdDelete successfully', function(done) {
        //uncomment below and update the code to test appTeamsIdDelete
        //instance.appTeamsIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appTeamsIdPut', function() {
      it('should call appTeamsIdPut successfully', function(done) {
        //uncomment below and update the code to test appTeamsIdPut
        //instance.appTeamsIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appTeamsPost', function() {
      it('should call appTeamsPost successfully', function(done) {
        //uncomment below and update the code to test appTeamsPost
        //instance.appTeamsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appTeamsUpdateIdPut', function() {
      it('should call appTeamsUpdateIdPut successfully', function(done) {
        //uncomment below and update the code to test appTeamsUpdateIdPut
        //instance.appTeamsUpdateIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
