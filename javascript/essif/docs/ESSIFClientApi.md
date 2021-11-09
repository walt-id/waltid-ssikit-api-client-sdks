# WaltIdEssifApi.ESSIFClientApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDid**](ESSIFClientApi.md#createDid) | **POST** /v1/client/auth | Runs the ESSIF Authorization API flow
[**onboard**](ESSIFClientApi.md#onboard) | **POST** /v1/client/onboard | EBSI onboarding flow, which requests a Verifiable Authorization from the EOS.
[**registerDid**](ESSIFClientApi.md#registerDid) | **POST** /v1/client/registerDid | Registers DID on the EBSI Blockchain



## createDid

> String createDid(opts)

Runs the ESSIF Authorization API flow

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFClientApi();
let opts = {
  'body': "body_example" // String | DID
};
apiInstance.createDid(opts, (error, data, response) => {
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
 **body** | **String**| DID | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## onboard

> String onboard(opts)

EBSI onboarding flow, which requests a Verifiable Authorization from the EOS.

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFClientApi();
let opts = {
  'ebsiOnboardRequest': new WaltIdEssifApi.EbsiOnboardRequest() // EbsiOnboardRequest | DID to be registered on the EBSI Blockchain; Bearer token to be used to authenticate the user. Get it from here https://app.preprod.ebsi.eu/users-onboarding
};
apiInstance.onboard(opts, (error, data, response) => {
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
 **ebsiOnboardRequest** | [**EbsiOnboardRequest**](EbsiOnboardRequest.md)| DID to be registered on the EBSI Blockchain; Bearer token to be used to authenticate the user. Get it from here https://app.preprod.ebsi.eu/users-onboarding | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registerDid

> String registerDid(opts)

Registers DID on the EBSI Blockchain

### Example

```javascript
import WaltIdEssifApi from 'walt_id_essif_api';

let apiInstance = new WaltIdEssifApi.ESSIFClientApi();
let opts = {
  'body': "body_example" // String | DID
};
apiInstance.registerDid(opts, (error, data, response) => {
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
 **body** | **String**| DID | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

