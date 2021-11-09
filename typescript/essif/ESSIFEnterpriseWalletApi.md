# .ESSIFEnterpriseWalletApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEnterpriseDid**](ESSIFEnterpriseWalletApi.md#createEnterpriseDid) | **POST** /test/enterprise/wallet/createDid | Creates and registers DID on the EBSI Blockchain
[**generateDidAuthRequest**](ESSIFEnterpriseWalletApi.md#generateDidAuthRequest) | **POST** /test/enterprise/wallet/generateDidAuthRequest | Generates a DID Auth Request
[**getCredential**](ESSIFEnterpriseWalletApi.md#getCredential) | **POST** /test/ti/credentials | Returns DID Auth Request or the requested credential if a VC Token is presented
[**getCredential_0**](ESSIFEnterpriseWalletApi.md#getCredential_0) | **GET** /test/ti/credentials/{credentialId} | Returns DID Auth Request or the requested credential if a VC Token is presented
[**getVerifiableCredential**](ESSIFEnterpriseWalletApi.md#getVerifiableCredential) | **POST** /test/enterprise/wallet/getVerifiableCredential | Generates the DID ownership response and fetches the requested credential.
[**onboards**](ESSIFEnterpriseWalletApi.md#onboards) | **POST** /test/eos/onboard | Request Verifiable Authorization. Returns the DID ownership request.
[**requestCredentialUri**](ESSIFEnterpriseWalletApi.md#requestCredentialUri) | **GET** /test/ti/requestCredentialUri | Creates an OIDC authentication request URI.
[**requestEnterpriseVerifiableCredential**](ESSIFEnterpriseWalletApi.md#requestEnterpriseVerifiableCredential) | **POST** /test/enterprise/wallet/requestVerifiableCredential | Request credential
[**requestVerifiableAuthorization**](ESSIFEnterpriseWalletApi.md#requestVerifiableAuthorization) | **POST** /test/enterprise/wallet/requestVerifiableAuthorization | Performs DID Auth in order to obtain a Verifiable Authorization
[**requestVerifiableCredential**](ESSIFEnterpriseWalletApi.md#requestVerifiableCredential) | **POST** /test/ti/requestVerifiableCredential | Returns the DID ownership request
[**signedChallenge**](ESSIFEnterpriseWalletApi.md#signedChallenge) | **POST** /test/eos/signedChallenge | Processes the signed challenge in the scope of DID Auth and if successful, returns the Verifiable Authorization
[**token**](ESSIFEnterpriseWalletApi.md#token) | **POST** /test/enterprise/wallet/token | OIDC Token endpoint
[**validateDidAuthResponse**](ESSIFEnterpriseWalletApi.md#validateDidAuthResponse) | **POST** /test/enterprise/wallet/validateDidAuthResponse | Validates a DID Auth response


# **createEnterpriseDid**
> string createEnterpriseDid()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFEnterpriseWalletApi(configuration);

let body:.ESSIFEnterpriseWalletApiCreateEnterpriseDidRequest = {
  // string | Verifiable Authorization (optional)
  body: "body_example",
};

apiInstance.createEnterpriseDid(body).then((data:any) => {
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

# **generateDidAuthRequest**
> string generateDidAuthRequest()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFEnterpriseWalletApi(configuration);

let body:any = {};

apiInstance.generateDidAuthRequest(body).then((data:any) => {
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
**200** | DID Auth Reqeust |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCredential**
> string getCredential()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFEnterpriseWalletApi(configuration);

let body:any = {};

apiInstance.getCredential(body).then((data:any) => {
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

# **getCredential_0**
> string getCredential_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFEnterpriseWalletApi(configuration);

let body:.ESSIFEnterpriseWalletApiGetCredential0Request = {
  // string
  credentialId: "credentialId_example",
};

apiInstance.getCredential_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialId** | [**string**] |  | defaults to undefined


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

# **getVerifiableCredential**
> string getVerifiableCredential()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFEnterpriseWalletApi(configuration);

let body:.ESSIFEnterpriseWalletApiGetVerifiableCredentialRequest = {
  // string | DID ownership request (optional)
  body: "body_example",
};

apiInstance.getVerifiableCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| DID ownership request |


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
**200** | Verifiable Credential |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **onboards**
> string onboards()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFEnterpriseWalletApi(configuration);

let body:.ESSIFEnterpriseWalletApiOnboardsRequest = {
  // string | DID to be registered (optional)
  body: "body_example",
};

apiInstance.onboards(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| DID to be registered |


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
**200** | Request DID ownership |  -  |
**400** | Bad request |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **requestCredentialUri**
> string requestCredentialUri()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFEnterpriseWalletApi(configuration);

let body:any = {};

apiInstance.requestCredentialUri(body).then((data:any) => {
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
**200** | OIDC Authentication Request URI |  -  |
**400** | Bad request |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **requestEnterpriseVerifiableCredential**
> string requestEnterpriseVerifiableCredential()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFEnterpriseWalletApi(configuration);

let body:.ESSIFEnterpriseWalletApiRequestEnterpriseVerifiableCredentialRequest = {
  // string | Credential Request URI (optional)
  body: "body_example",
};

apiInstance.requestEnterpriseVerifiableCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| Credential Request URI |


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
**200** | DID ownership response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **requestVerifiableAuthorization**
> string requestVerifiableAuthorization()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFEnterpriseWalletApi(configuration);

let body:.ESSIFEnterpriseWalletApiRequestVerifiableAuthorizationRequest = {
  // string | Access Token (optional)
  body: "body_example",
};

apiInstance.requestVerifiableAuthorization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| Access Token |


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
**200** | Verifiable Authorization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **requestVerifiableCredential**
> string requestVerifiableCredential()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFEnterpriseWalletApi(configuration);

let body:.ESSIFEnterpriseWalletApiRequestVerifiableCredentialRequest = {
  // string | Credential request URI (optional)
  body: "body_example",
};

apiInstance.requestVerifiableCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| Credential request URI |


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
**200** | DID ownership request |  -  |
**400** | Bad request |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **signedChallenge**
> string signedChallenge()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFEnterpriseWalletApi(configuration);

let body:.ESSIFEnterpriseWalletApiSignedChallengeRequest = {
  // string | Signed challenge (optional)
  body: "body_example",
};

apiInstance.signedChallenge(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| Signed challenge |


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
**200** | Verifiable Authorization |  -  |
**400** | Bad request |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **token**
> string token()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFEnterpriseWalletApi(configuration);

let body:.ESSIFEnterpriseWalletApiTokenRequest = {
  // string | oidcAuthResp (optional)
  body: "body_example",
};

apiInstance.token(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| oidcAuthResp |


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

# **validateDidAuthResponse**
> boolean validateDidAuthResponse()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ESSIFEnterpriseWalletApi(configuration);

let body:.ESSIFEnterpriseWalletApiValidateDidAuthResponseRequest = {
  // string | DID Auth Response (optional)
  body: "body_example",
};

apiInstance.validateDidAuthResponse(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| DID Auth Response |


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
**200** | True, if response could be validated |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


