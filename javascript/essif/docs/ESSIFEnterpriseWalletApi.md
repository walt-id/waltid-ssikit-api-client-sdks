# WaltIdEssifApi.ESSIFEnterpriseWalletApi

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



## createEnterpriseDid

> String createEnterpriseDid(opts)

Creates and registers DID on the EBSI Blockchain

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFEnterpriseWalletApi();
let opts = {
  'body': "body_example" // String | Verifiable Authorization
};
apiInstance.createEnterpriseDid(opts, (error, data, response) => {
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
 **body** | **String**| Verifiable Authorization | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## generateDidAuthRequest

> String generateDidAuthRequest()

Generates a DID Auth Request

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFEnterpriseWalletApi();
apiInstance.generateDidAuthRequest((error, data, response) => {
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

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCredential

> String getCredential()

Returns DID Auth Request or the requested credential if a VC Token is presented

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFEnterpriseWalletApi();
apiInstance.getCredential((error, data, response) => {
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

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCredential_0

> String getCredential_0(credentialId)

Returns DID Auth Request or the requested credential if a VC Token is presented

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFEnterpriseWalletApi();
let credentialId = "credentialId_example"; // String | 
apiInstance.getCredential_0(credentialId, (error, data, response) => {
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
 **credentialId** | **String**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVerifiableCredential

> String getVerifiableCredential(opts)

Generates the DID ownership response and fetches the requested credential.

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFEnterpriseWalletApi();
let opts = {
  'body': "body_example" // String | DID ownership request
};
apiInstance.getVerifiableCredential(opts, (error, data, response) => {
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
 **body** | **String**| DID ownership request | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## onboards

> String onboards(opts)

Request Verifiable Authorization. Returns the DID ownership request.

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFEnterpriseWalletApi();
let opts = {
  'body': "body_example" // String | DID to be registered
};
apiInstance.onboards(opts, (error, data, response) => {
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
 **body** | **String**| DID to be registered | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## requestCredentialUri

> String requestCredentialUri()

Creates an OIDC authentication request URI.

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFEnterpriseWalletApi();
apiInstance.requestCredentialUri((error, data, response) => {
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

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## requestEnterpriseVerifiableCredential

> String requestEnterpriseVerifiableCredential(opts)

Request credential

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFEnterpriseWalletApi();
let opts = {
  'body': "body_example" // String | Credential Request URI
};
apiInstance.requestEnterpriseVerifiableCredential(opts, (error, data, response) => {
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
 **body** | **String**| Credential Request URI | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## requestVerifiableAuthorization

> String requestVerifiableAuthorization(opts)

Performs DID Auth in order to obtain a Verifiable Authorization

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFEnterpriseWalletApi();
let opts = {
  'body': "body_example" // String | Access Token
};
apiInstance.requestVerifiableAuthorization(opts, (error, data, response) => {
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
 **body** | **String**| Access Token | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## requestVerifiableCredential

> String requestVerifiableCredential(opts)

Returns the DID ownership request

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFEnterpriseWalletApi();
let opts = {
  'body': "body_example" // String | Credential request URI
};
apiInstance.requestVerifiableCredential(opts, (error, data, response) => {
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
 **body** | **String**| Credential request URI | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## signedChallenge

> String signedChallenge(opts)

Processes the signed challenge in the scope of DID Auth and if successful, returns the Verifiable Authorization

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFEnterpriseWalletApi();
let opts = {
  'body': "body_example" // String | Signed challenge
};
apiInstance.signedChallenge(opts, (error, data, response) => {
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
 **body** | **String**| Signed challenge | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## token

> String token(opts)

OIDC Token endpoint

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFEnterpriseWalletApi();
let opts = {
  'body': "body_example" // String | oidcAuthResp
};
apiInstance.token(opts, (error, data, response) => {
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
 **body** | **String**| oidcAuthResp | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## validateDidAuthResponse

> Boolean validateDidAuthResponse(opts)

Validates a DID Auth response

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFEnterpriseWalletApi();
let opts = {
  'body': "body_example" // String | DID Auth Response
};
apiInstance.validateDidAuthResponse(opts, (error, data, response) => {
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
 **body** | **String**| DID Auth Response | [optional] 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

