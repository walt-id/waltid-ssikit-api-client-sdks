# .VerifiableCredentialsApi

All URIs are relative to *https://core.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVc**](VerifiableCredentialsApi.md#createVc) | **POST** /v1/vc/create | Create VC
[**deleteVc**](VerifiableCredentialsApi.md#deleteVc) | **DELETE** /v1/vc/{id} | Delete VC
[**importVc**](VerifiableCredentialsApi.md#importVc) | **POST** /v1/vc/import | Import VC
[**listVcs**](VerifiableCredentialsApi.md#listVcs) | **GET** /v1/vc | List VCs
[**loadVc**](VerifiableCredentialsApi.md#loadVc) | **GET** /v1/vc/{id} | Load VC
[**verifyVc**](VerifiableCredentialsApi.md#verifyVc) | **POST** /v1/vc/verify | Verify VC


# **createVc**
> string createVc()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiableCredentialsApi(configuration);

let body:.VerifiableCredentialsApiCreateVcRequest = {
  // CreateVcRequest | Defines the credential issuer, holder and optionally a credential template  -  TODO: build credential based on the request e.g. load template, substitute values (optional)
  createVcRequest: {
    issuerDid: "issuerDid_example",
    subjectDid: "subjectDid_example",
    credentialOffer: "credentialOffer_example",
    templateId: "templateId_example",
    domain: "domain_example",
    nonce: "nonce_example",
  },
};

apiInstance.createVc(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVcRequest** | **CreateVcRequest**| Defines the credential issuer, holder and optionally a credential template  -  TODO: build credential based on the request e.g. load template, substitute values |


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The signed credential |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteVc**
> string deleteVc()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiableCredentialsApi(configuration);

let body:.VerifiableCredentialsApiDeleteVcRequest = {
  // string
  id: "id_example",
  // string | ID of VC to be deleted (optional)
  body: "body_example",
};

apiInstance.deleteVc(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| ID of VC to be deleted |
 **id** | [**string**] |  | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importVc**
> string importVc()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiableCredentialsApi(configuration);

let body:.VerifiableCredentialsApiImportVcRequest = {
  // string (optional)
  body: "body_example",
};

apiInstance.importVc(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listVcs**
> Array<string> listVcs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiableCredentialsApi(configuration);

let body:any = {};

apiInstance.listVcs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<string>**

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

# **loadVc**
> string loadVc()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiableCredentialsApi(configuration);

let body:.VerifiableCredentialsApiLoadVcRequest = {
  // string
  id: "id_example",
  // string | ID of the DID to be loaded (optional)
  body: "body_example",
};

apiInstance.loadVc(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| ID of the DID to be loaded |
 **id** | [**string**] |  | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyVc**
> VerifyVcRequest verifyVc()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiableCredentialsApi(configuration);

let body:.VerifiableCredentialsApiVerifyVcRequest = {
  // VerifyVcRequest | VC to be verified (optional)
  verifyVcRequest: {
    vcOrVp: "vcOrVp_example",
  },
};

apiInstance.verifyVc(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyVcRequest** | **VerifyVcRequest**| VC to be verified |


### Return type

**VerifyVcRequest**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Verification result object |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


