# .VerificationPoliciesApi

All URIs are relative to *https://auditor.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPolicies**](VerificationPoliciesApi.md#listPolicies) | **GET** /v1/policies | List verification policies
[**verifyVP**](VerificationPoliciesApi.md#verifyVP) | **POST** /v1/verify | Verify a W3C VerifiableCredential or VerifiablePresentation


# **listPolicies**
> Array<VerificationPolicy> listPolicies()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerificationPoliciesApi(configuration);

let body:any = {};

apiInstance.listPolicies(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<VerificationPolicy>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyVP**
> VerificationResult verifyVP()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerificationPoliciesApi(configuration);

let body:.VerificationPoliciesApiVerifyVPRequest = {
  // string | Optional comma-separated list for setting the policies to be verified. (optional)
  policyList: "policyList_example",
  // string | VC or VP to be verified (optional)
  body: "body_example",
};

apiInstance.verifyVP(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| VC or VP to be verified |
 **policyList** | [**string**] | Optional comma-separated list for setting the policies to be verified. | (optional) defaults to undefined


### Return type

**VerificationResult**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request processed successfully (VP might not be valid) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


