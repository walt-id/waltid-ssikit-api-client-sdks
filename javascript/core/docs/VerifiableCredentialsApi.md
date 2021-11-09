# WaltIdCoreApi.VerifiableCredentialsApi

All URIs are relative to *https://core.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVc**](VerifiableCredentialsApi.md#createVc) | **POST** /v1/vc/create | Create VC
[**deleteVc**](VerifiableCredentialsApi.md#deleteVc) | **DELETE** /v1/vc/{id} | Delete VC
[**importVc**](VerifiableCredentialsApi.md#importVc) | **POST** /v1/vc/import | Import VC
[**listVcs**](VerifiableCredentialsApi.md#listVcs) | **GET** /v1/vc | List VCs
[**loadVc**](VerifiableCredentialsApi.md#loadVc) | **GET** /v1/vc/{id} | Load VC
[**verifyVc**](VerifiableCredentialsApi.md#verifyVc) | **POST** /v1/vc/verify | Verify VC



## createVc

> String createVc(opts)

Create VC

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.VerifiableCredentialsApi();
let opts = {
  'createVcRequest': new WaltIdCoreApi.CreateVcRequest() // CreateVcRequest | Defines the credential issuer, holder and optionally a credential template  -  TODO: build credential based on the request e.g. load template, substitute values
};
apiInstance.createVc(opts, (error, data, response) => {
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
 **createVcRequest** | [**CreateVcRequest**](CreateVcRequest.md)| Defines the credential issuer, holder and optionally a credential template  -  TODO: build credential based on the request e.g. load template, substitute values | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteVc

> String deleteVc(id, opts)

Delete VC

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.VerifiableCredentialsApi();
let id = "id_example"; // String | 
let opts = {
  'body': "body_example" // String | ID of VC to be deleted
};
apiInstance.deleteVc(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **body** | **String**| ID of VC to be deleted | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## importVc

> String importVc(opts)

Import VC

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.VerifiableCredentialsApi();
let opts = {
  'body': "body_example" // String | 
};
apiInstance.importVc(opts, (error, data, response) => {
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
 **body** | **String**|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## listVcs

> [String] listVcs()

List VCs

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.VerifiableCredentialsApi();
apiInstance.listVcs((error, data, response) => {
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

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loadVc

> String loadVc(id, opts)

Load VC

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.VerifiableCredentialsApi();
let id = "id_example"; // String | 
let opts = {
  'body': "body_example" // String | ID of the DID to be loaded
};
apiInstance.loadVc(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **body** | **String**| ID of the DID to be loaded | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## verifyVc

> VerifyVcRequest verifyVc(opts)

Verify VC

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.VerifiableCredentialsApi();
let opts = {
  'verifyVcRequest': new WaltIdCoreApi.VerifyVcRequest() // VerifyVcRequest | VC to be verified
};
apiInstance.verifyVc(opts, (error, data, response) => {
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
 **verifyVcRequest** | [**VerifyVcRequest**](VerifyVcRequest.md)| VC to be verified | [optional] 

### Return type

[**VerifyVcRequest**](VerifyVcRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

