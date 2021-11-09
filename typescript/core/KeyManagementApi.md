# .KeyManagementApi

All URIs are relative to *https://core.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteKey**](KeyManagementApi.md#deleteKey) | **DELETE** /v1/key/{id} | Delete key
[**exportKey**](KeyManagementApi.md#exportKey) | **POST** /v1/key/export | Exports public and private key part (if supported by underlying keystore)
[**genKey**](KeyManagementApi.md#genKey) | **POST** /v1/key/gen | Generate key
[**getV1KeyWithId**](KeyManagementApi.md#getV1KeyWithId) | **GET** /v1/key/{id} | Load public key
[**importKey**](KeyManagementApi.md#importKey) | **POST** /v1/key/import | Import key
[**listKeys**](KeyManagementApi.md#listKeys) | **GET** /v1/key | List of key IDs


# **deleteKey**
> string deleteKey()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KeyManagementApi(configuration);

let body:.KeyManagementApiDeleteKeyRequest = {
  // string
  id: "id_example",
  // string | ID of key to be deleted (optional)
  body: "body_example",
};

apiInstance.deleteKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| ID of key to be deleted |
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

# **exportKey**
> string exportKey()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KeyManagementApi(configuration);

let body:.KeyManagementApiExportKeyRequest = {
  // ExportKeyRequest | Exports the key in JWK or PEM format (optional)
  exportKeyRequest: {
    keyAlias: "keyAlias_example",
    format: "JWK",
    exportPrivate: true,
  },
};

apiInstance.exportKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportKeyRequest** | **ExportKeyRequest**| Exports the key in JWK or PEM format |


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
**200** | The key in the desired formant |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **genKey**
> KeyId genKey()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KeyManagementApi(configuration);

let body:.KeyManagementApiGenKeyRequest = {
  // GenKeyRequest | The desired key algorithm (ECDSA_Secp256k1 or EdDSA_Ed25519) (optional)
  genKeyRequest: {
    keyAlgorithm: "EdDSA_Ed25519",
  },
};

apiInstance.genKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **genKeyRequest** | **GenKeyRequest**| The desired key algorithm (ECDSA_Secp256k1 or EdDSA_Ed25519) |


### Return type

**KeyId**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Key ID |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getV1KeyWithId**
> string getV1KeyWithId()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KeyManagementApi(configuration);

let body:.KeyManagementApiGetV1KeyWithIdRequest = {
  // string
  id: "id_example",
};

apiInstance.getV1KeyWithId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**string**

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

# **importKey**
> string importKey()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KeyManagementApi(configuration);

let body:.KeyManagementApiImportKeyRequest = {
  // string | Imports the key (JWK format) to the key store (optional)
  body: "body_example",
};

apiInstance.importKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| Imports the key (JWK format) to the key store |


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

# **listKeys**
> Array<string> listKeys()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KeyManagementApi(configuration);

let body:any = {};

apiInstance.listKeys(body).then((data:any) => {
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
**200** | The desired key IDs |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


