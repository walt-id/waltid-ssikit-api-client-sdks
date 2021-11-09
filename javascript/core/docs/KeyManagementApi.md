# WaltIdCoreApi.KeyManagementApi

All URIs are relative to *https://core.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteKey**](KeyManagementApi.md#deleteKey) | **DELETE** /v1/key/{id} | Delete key
[**exportKey**](KeyManagementApi.md#exportKey) | **POST** /v1/key/export | Exports public and private key part (if supported by underlying keystore)
[**genKey**](KeyManagementApi.md#genKey) | **POST** /v1/key/gen | Generate key
[**getV1KeyWithId**](KeyManagementApi.md#getV1KeyWithId) | **GET** /v1/key/{id} | Load public key
[**importKey**](KeyManagementApi.md#importKey) | **POST** /v1/key/import | Import key
[**listKeys**](KeyManagementApi.md#listKeys) | **GET** /v1/key | List of key IDs



## deleteKey

> String deleteKey(id, opts)

Delete key

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.KeyManagementApi();
let id = "id_example"; // String | 
let opts = {
  'body': "body_example" // String | ID of key to be deleted
};
apiInstance.deleteKey(id, opts, (error, data, response) => {
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
 **body** | **String**| ID of key to be deleted | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## exportKey

> String exportKey(opts)

Exports public and private key part (if supported by underlying keystore)

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.KeyManagementApi();
let opts = {
  'exportKeyRequest': new WaltIdCoreApi.ExportKeyRequest() // ExportKeyRequest | Exports the key in JWK or PEM format
};
apiInstance.exportKey(opts, (error, data, response) => {
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
 **exportKeyRequest** | [**ExportKeyRequest**](ExportKeyRequest.md)| Exports the key in JWK or PEM format | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## genKey

> KeyId genKey(opts)

Generate key

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.KeyManagementApi();
let opts = {
  'genKeyRequest': new WaltIdCoreApi.GenKeyRequest() // GenKeyRequest | The desired key algorithm (ECDSA_Secp256k1 or EdDSA_Ed25519)
};
apiInstance.genKey(opts, (error, data, response) => {
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
 **genKeyRequest** | [**GenKeyRequest**](GenKeyRequest.md)| The desired key algorithm (ECDSA_Secp256k1 or EdDSA_Ed25519) | [optional] 

### Return type

[**KeyId**](KeyId.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getV1KeyWithId

> String getV1KeyWithId(id)

Load public key

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.KeyManagementApi();
let id = "id_example"; // String | 
apiInstance.getV1KeyWithId(id, (error, data, response) => {
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

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importKey

> String importKey(opts)

Import key

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.KeyManagementApi();
let opts = {
  'body': "body_example" // String | Imports the key (JWK format) to the key store
};
apiInstance.importKey(opts, (error, data, response) => {
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
 **body** | **String**| Imports the key (JWK format) to the key store | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## listKeys

> [String] listKeys()

List of key IDs

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.KeyManagementApi();
apiInstance.listKeys((error, data, response) => {
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

