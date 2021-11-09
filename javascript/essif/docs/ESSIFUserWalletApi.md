# WaltIdEssifApi.ESSIFUserWalletApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserDid**](ESSIFUserWalletApi.md#createUserDid) | **POST** /test/user/wallet/createDid | Creates and registers DID on the EBSI Blockchain
[**didAuthResponse**](ESSIFUserWalletApi.md#didAuthResponse) | **POST** /test/user/wallet/didAuthResponse | Generates and sends the DID Auth Response message.
[**oidcAuthResponse**](ESSIFUserWalletApi.md#oidcAuthResponse) | **POST** /test/user/wallet/oidcAuthResponse | Generates a OIDC Auth Response message.
[**requestAccessToken**](ESSIFUserWalletApi.md#requestAccessToken) | **POST** /test/user/wallet/requestAccessToken | Runs the authentication-protocol and returns the JWT Access Token for accessing the protected EBSI services.
[**validateDidAuthRequest**](ESSIFUserWalletApi.md#validateDidAuthRequest) | **POST** /test/user/wallet/validateDidAuthRequest | Validates a DID Auth request.
[**vcAuthResponse**](ESSIFUserWalletApi.md#vcAuthResponse) | **POST** /test/user/wallet/vcAuthResponse | Generates a VC Auth Response message.



## createUserDid

> String createUserDid(opts)

Creates and registers DID on the EBSI Blockchain

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFUserWalletApi();
let opts = {
  'body': "body_example" // String | Verifiable Authorization
};
apiInstance.createUserDid(opts, (error, data, response) => {
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


## didAuthResponse

> String didAuthResponse(opts)

Generates and sends the DID Auth Response message.

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFUserWalletApi();
let opts = {
  'body': "body_example" // String | DID Auth Request
};
apiInstance.didAuthResponse(opts, (error, data, response) => {
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
 **body** | **String**| DID Auth Request | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## oidcAuthResponse

> String oidcAuthResponse(opts)

Generates a OIDC Auth Response message.

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFUserWalletApi();
let opts = {
  'body': "body_example" // String | todo
};
apiInstance.oidcAuthResponse(opts, (error, data, response) => {
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
 **body** | **String**| todo | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## requestAccessToken

> String requestAccessToken(opts)

Runs the authentication-protocol and returns the JWT Access Token for accessing the protected EBSI services.

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFUserWalletApi();
let opts = {
  'body': "body_example" // String | The Verifiable Authorization
};
apiInstance.requestAccessToken(opts, (error, data, response) => {
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
 **body** | **String**| The Verifiable Authorization | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## validateDidAuthRequest

> Boolean validateDidAuthRequest(opts)

Validates a DID Auth request.

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFUserWalletApi();
let opts = {
  'body': "body_example" // String | DID Auth request
};
apiInstance.validateDidAuthRequest(opts, (error, data, response) => {
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
 **body** | **String**| DID Auth request | [optional] 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## vcAuthResponse

> String vcAuthResponse(opts)

Generates a VC Auth Response message.

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFUserWalletApi();
let opts = {
  'body': "body_example" // String | VC Exchange Request
};
apiInstance.vcAuthResponse(opts, (error, data, response) => {
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
 **body** | **String**| VC Exchange Request | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

