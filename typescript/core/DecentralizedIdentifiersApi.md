# .DecentralizedIdentifiersApi

All URIs are relative to *https://core.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDid**](DecentralizedIdentifiersApi.md#createDid) | **POST** /v1/did/create | Create DID
[**deleteDid**](DecentralizedIdentifiersApi.md#deleteDid) | **DELETE** /v1/did/{id} | Delete DID
[**importDid**](DecentralizedIdentifiersApi.md#importDid) | **POST** /v1/did/import | Import DID
[**listDids**](DecentralizedIdentifiersApi.md#listDids) | **GET** /v1/did | List DIDs
[**loadDid**](DecentralizedIdentifiersApi.md#loadDid) | **GET** /v1/did/{id} | Load DID
[**resolveDid**](DecentralizedIdentifiersApi.md#resolveDid) | **POST** /v1/did/resolve | Resolve DID


# **createDid**
> string createDid()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DecentralizedIdentifiersApi(configuration);

let body:.DecentralizedIdentifiersApiCreateDidRequest = {
  // CreateDidRequest | Defines the DID method and optionally the key to be used (optional)
  createDidRequest: {
    method: "key",
    keyAlias: "keyAlias_example",
  },
};

apiInstance.createDid(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDidRequest** | **CreateDidRequest**| Defines the DID method and optionally the key to be used |


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
**200** | DID document of the resolved DID |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDid**
> string deleteDid()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DecentralizedIdentifiersApi(configuration);

let body:.DecentralizedIdentifiersApiDeleteDidRequest = {
  // string
  id: "id_example",
  // string | ID of the DID to be deleted (optional)
  body: "body_example",
};

apiInstance.deleteDid(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| ID of the DID to be deleted |
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

# **importDid**
> string importDid()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DecentralizedIdentifiersApi(configuration);

let body:.DecentralizedIdentifiersApiImportDidRequest = {
  // string | Imports the DID to the underlying data store (optional)
  body: "body_example",
};

apiInstance.importDid(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| Imports the DID to the underlying data store |


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

# **listDids**
> Array<string> listDids()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DecentralizedIdentifiersApi(configuration);

let body:any = {};

apiInstance.listDids(body).then((data:any) => {
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

# **loadDid**
> string loadDid()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DecentralizedIdentifiersApi(configuration);

let body:.DecentralizedIdentifiersApiLoadDidRequest = {
  // string
  id: "id_example",
  // string | ID of the DID to be loaded (optional)
  body: "body_example",
};

apiInstance.loadDid(body).then((data:any) => {
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

# **resolveDid**
> string resolveDid()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DecentralizedIdentifiersApi(configuration);

let body:.DecentralizedIdentifiersApiResolveDidRequest = {
  // ResolveDidRequest | Identifier to be resolved (optional)
  resolveDidRequest: {
    did: "did_example",
  },
};

apiInstance.resolveDid(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resolveDidRequest** | **ResolveDidRequest**| Identifier to be resolved |


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
**200** | DID document of the resolved DID |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


