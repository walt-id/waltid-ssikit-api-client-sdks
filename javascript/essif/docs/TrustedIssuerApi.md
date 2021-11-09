# WaltIdEssifApi.TrustedIssuerApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateAuthenticationRequest**](TrustedIssuerApi.md#generateAuthenticationRequest) | **POST** /v1/trusted-issuer/generateAuthenticationRequest | Generates a DID-SIOP Auth Request.
[**openSession**](TrustedIssuerApi.md#openSession) | **POST** /v1/trusted-issuer/openSession | Establishes a mutual authenticated DID-SIOP session.



## generateAuthenticationRequest

> String generateAuthenticationRequest()

Generates a DID-SIOP Auth Request.

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.TrustedIssuerApi();
apiInstance.generateAuthenticationRequest((error, data, response) => {
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


## openSession

> String openSession()

Establishes a mutual authenticated DID-SIOP session.

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.TrustedIssuerApi();
apiInstance.openSession((error, data, response) => {
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

