# WaltIdAuditorApi.VerificationPoliciesApi

All URIs are relative to *https://auditor.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPolicies**](VerificationPoliciesApi.md#listPolicies) | **GET** /v1/policies | List verification policies
[**verifyVP**](VerificationPoliciesApi.md#verifyVP) | **POST** /v1/verify | Verify a W3C VerifiableCredential or VerifiablePresentation



## listPolicies

> [VerificationPolicy] listPolicies()

List verification policies

### Example

```javascript
import WaltIdAuditorApi from 'walt_id_auditor_api';

let apiInstance = new WaltIdAuditorApi.VerificationPoliciesApi();
apiInstance.listPolicies((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[VerificationPolicy]**](VerificationPolicy.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verifyVP

> VerificationResult verifyVP(opts)

Verify a W3C VerifiableCredential or VerifiablePresentation

### Example

```javascript
import WaltIdAuditorApi from 'walt_id_auditor_api';

let apiInstance = new WaltIdAuditorApi.VerificationPoliciesApi();
let opts = {
  'policyList': "policyList_example", // String | Optional comma-separated list for setting the policies to be verified.
  'body': "body_example" // String | VC or VP to be verified
};
apiInstance.verifyVP(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyList** | **String**| Optional comma-separated list for setting the policies to be verified. | [optional] 
 **body** | **String**| VC or VP to be verified | [optional] 

### Return type

[**VerificationResult**](VerificationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

