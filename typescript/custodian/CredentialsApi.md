# .CredentialsApi

All URIs are relative to *https://custodian.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCredential**](CredentialsApi.md#deleteCredential) | **DELETE** /credentials/{alias} | Deletes a specific credential by alias
[**getCredential**](CredentialsApi.md#getCredential) | **GET** /credentials/{id} | Gets a specific Credential by id
[**listCredentialIds**](CredentialsApi.md#listCredentialIds) | **GET** /credentials/listCredentialIds | Lists all credential IDs the custodian knows of
[**listCredentials**](CredentialsApi.md#listCredentials) | **GET** /credentials | Lists all credentials the custodian knows of
[**storeCredential**](CredentialsApi.md#storeCredential) | **PUT** /credentials/{alias} | Stores a credential


# **deleteCredential**
> string deleteCredential()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialsApi(configuration);

let body:.CredentialsApiDeleteCredentialRequest = {
  // string
  alias: "alias_example",
};

apiInstance.deleteCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | [**string**] |  | defaults to undefined


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
**200** | Http OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCredential**
> string getCredential()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialsApi(configuration);

let body:.CredentialsApiGetCredentialRequest = {
  // string
  id: "id_example",
};

apiInstance.getCredential(body).then((data:any) => {
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
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created Credential |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCredentialIds**
> string listCredentialIds()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialsApi(configuration);

let body:any = {};

apiInstance.listCredentialIds(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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
**200** | Credentials ID list |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCredentials**
> string listCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialsApi(configuration);

let body:.CredentialsApiListCredentialsRequest = {
  // Array<string> (optional)
  id: [
    "id_example",
  ],
};

apiInstance.listCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


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
**200** | Credentials list |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **storeCredential**
> string storeCredential()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialsApi(configuration);

let body:.CredentialsApiStoreCredentialRequest = {
  // string
  alias: "alias_example",
  // StoreCredentialRequest | Store Credential Request (optional)
  storeCredentialRequest: {
    alias: "alias_example",
    vc: {
      type: [
        "type_example",
      ],
      json: "json_example",
      jwt: "jwt_example",
      id: "id_example",
    },
  },
};

apiInstance.storeCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeCredentialRequest** | **StoreCredentialRequest**| Store Credential Request |
 **alias** | [**string**] |  | defaults to undefined


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
**200** | Http OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


