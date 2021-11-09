# .ESSIFClientApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDid**](ESSIFClientApi.md#createDid) | **POST** /v1/client/auth | Runs the ESSIF Authorization API flow
[**onboard**](ESSIFClientApi.md#onboard) | **POST** /v1/client/onboard | EBSI onboarding flow, which requests a Verifiable Authorization from the EOS.
[**registerDid**](ESSIFClientApi.md#registerDid) | **POST** /v1/client/registerDid | Registers DID on the EBSI Blockchain


# **createDid**
> string createDid()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFClientApi(configuration);

let body:.ESSIFClientApiCreateDidRequest = {
  // string | DID (optional)
  body: "body_example",
};

apiInstance.createDid(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| DID |


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
**200** | Auth flow executed successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **onboard**
> string onboard()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFClientApi(configuration);

let body:.ESSIFClientApiOnboardRequest = {
  // EbsiOnboardRequest | DID to be registered on the EBSI Blockchain; Bearer token to be used to authenticate the user. Get it from here https://app.preprod.ebsi.eu/users-onboarding (optional)
  ebsiOnboardRequest: {
    bearerToken: "bearerToken_example",
    did: "did_example",
  },
};

apiInstance.onboard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ebsiOnboardRequest** | **EbsiOnboardRequest**| DID to be registered on the EBSI Blockchain; Bearer token to be used to authenticate the user. Get it from here https://app.preprod.ebsi.eu/users-onboarding |


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
**200** | Onboarding flow completed successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **registerDid**
> string registerDid()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFClientApi(configuration);

let body:.ESSIFClientApiRegisterDidRequest = {
  // string | DID (optional)
  body: "body_example",
};

apiInstance.registerDid(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| DID |


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
**200** | DID registered successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


