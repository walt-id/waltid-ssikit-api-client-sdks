# .TrustedIssuerApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateAuthenticationRequest**](TrustedIssuerApi.md#generateAuthenticationRequest) | **POST** /v1/trusted-issuer/generateAuthenticationRequest | Generates a DID-SIOP Auth Request.
[**openSession**](TrustedIssuerApi.md#openSession) | **POST** /v1/trusted-issuer/openSession | Establishes a mutual authenticated DID-SIOP session.


# **generateAuthenticationRequest**
> string generateAuthenticationRequest()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TrustedIssuerApi(configuration);

let body:any = {};

apiInstance.generateAuthenticationRequest(body).then((data:any) => {
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
**200** | DID Auth Request |  -  |
**400** | Bad request |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **openSession**
> string openSession()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TrustedIssuerApi(configuration);

let body:any = {};

apiInstance.openSession(body).then((data:any) => {
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
**200** | Encrypted access token |  -  |
**400** | Bad request |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


