# .ESSIFUserWalletApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserDid**](ESSIFUserWalletApi.md#createUserDid) | **POST** /test/user/wallet/createDid | Creates and registers DID on the EBSI Blockchain
[**didAuthResponse**](ESSIFUserWalletApi.md#didAuthResponse) | **POST** /test/user/wallet/didAuthResponse | Generates and sends the DID Auth Response message.
[**oidcAuthResponse**](ESSIFUserWalletApi.md#oidcAuthResponse) | **POST** /test/user/wallet/oidcAuthResponse | Generates a OIDC Auth Response message.
[**requestAccessToken**](ESSIFUserWalletApi.md#requestAccessToken) | **POST** /test/user/wallet/requestAccessToken | Runs the authentication-protocol and returns the JWT Access Token for accessing the protected EBSI services.
[**validateDidAuthRequest**](ESSIFUserWalletApi.md#validateDidAuthRequest) | **POST** /test/user/wallet/validateDidAuthRequest | Validates a DID Auth request.
[**vcAuthResponse**](ESSIFUserWalletApi.md#vcAuthResponse) | **POST** /test/user/wallet/vcAuthResponse | Generates a VC Auth Response message.


# **createUserDid**
> string createUserDid()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFUserWalletApi(configuration);

let body:.ESSIFUserWalletApiCreateUserDidRequest = {
  // string | Verifiable Authorization (optional)
  body: "body_example",
};

apiInstance.createUserDid(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| Verifiable Authorization |


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
**200** | Created DID |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **didAuthResponse**
> string didAuthResponse()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFUserWalletApi(configuration);

let body:.ESSIFUserWalletApiDidAuthResponseRequest = {
  // string | DID Auth Request (optional)
  body: "body_example",
};

apiInstance.didAuthResponse(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| DID Auth Request |


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
**200** | VC Token |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **oidcAuthResponse**
> string oidcAuthResponse()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFUserWalletApi(configuration);

let body:.ESSIFUserWalletApiOidcAuthResponseRequest = {
  // string | todo (optional)
  body: "body_example",
};

apiInstance.oidcAuthResponse(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| todo |


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
**200** | OIDC Auth response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **requestAccessToken**
> string requestAccessToken()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFUserWalletApi(configuration);

let body:.ESSIFUserWalletApiRequestAccessTokenRequest = {
  // string | The Verifiable Authorization (optional)
  body: "body_example",
};

apiInstance.requestAccessToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| The Verifiable Authorization |


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
**200** | JWT Access Token |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **validateDidAuthRequest**
> boolean validateDidAuthRequest()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFUserWalletApi(configuration);

let body:.ESSIFUserWalletApiValidateDidAuthRequestRequest = {
  // string | DID Auth request (optional)
  body: "body_example",
};

apiInstance.validateDidAuthRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| DID Auth request |


### Return type

**boolean**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | True, in case the request could be validated. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **vcAuthResponse**
> string vcAuthResponse()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFUserWalletApi(configuration);

let body:.ESSIFUserWalletApiVcAuthResponseRequest = {
  // string | VC Exchange Request (optional)
  body: "body_example",
};

apiInstance.vcAuthResponse(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| VC Exchange Request |


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
**200** | VC token |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


