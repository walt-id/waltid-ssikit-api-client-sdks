# WaltIdCoreApi.DecentralizedIdentifiersApi

All URIs are relative to *https://core.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDid**](DecentralizedIdentifiersApi.md#createDid) | **POST** /v1/did/create | Create DID
[**deleteDid**](DecentralizedIdentifiersApi.md#deleteDid) | **DELETE** /v1/did/{id} | Delete DID
[**importDid**](DecentralizedIdentifiersApi.md#importDid) | **POST** /v1/did/import | Import DID
[**listDids**](DecentralizedIdentifiersApi.md#listDids) | **GET** /v1/did | List DIDs
[**loadDid**](DecentralizedIdentifiersApi.md#loadDid) | **GET** /v1/did/{id} | Load DID
[**resolveDid**](DecentralizedIdentifiersApi.md#resolveDid) | **POST** /v1/did/resolve | Resolve DID



## createDid

> String createDid(opts)

Create DID

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.DecentralizedIdentifiersApi();
let opts = {
  'createDidRequest': new WaltIdCoreApi.CreateDidRequest() // CreateDidRequest | Defines the DID method and optionally the key to be used
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
 **createDidRequest** | [**CreateDidRequest**](CreateDidRequest.md)| Defines the DID method and optionally the key to be used | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDid

> String deleteDid(id, opts)

Delete DID

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.DecentralizedIdentifiersApi();
let id = "id_example"; // String | 
let opts = {
  'body': "body_example" // String | ID of the DID to be deleted
};
apiInstance.deleteDid(id, opts, (error, data, response) => {
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
 **body** | **String**| ID of the DID to be deleted | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## importDid

> String importDid(opts)

Import DID

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.DecentralizedIdentifiersApi();
let opts = {
  'body': "body_example" // String | Imports the DID to the underlying data store
};
apiInstance.importDid(opts, (error, data, response) => {
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
 **body** | **String**| Imports the DID to the underlying data store | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## listDids

> [String] listDids()

List DIDs

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.DecentralizedIdentifiersApi();
apiInstance.listDids((error, data, response) => {
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


## loadDid

> String loadDid(id, opts)

Load DID

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.DecentralizedIdentifiersApi();
let id = "id_example"; // String | 
let opts = {
  'body': "body_example" // String | ID of the DID to be loaded
};
apiInstance.loadDid(id, opts, (error, data, response) => {
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


## resolveDid

> String resolveDid(opts)

Resolve DID

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.DecentralizedIdentifiersApi();
let opts = {
  'resolveDidRequest': new WaltIdCoreApi.ResolveDidRequest() // ResolveDidRequest | Identifier to be resolved
};
apiInstance.resolveDid(opts, (error, data, response) => {
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
 **resolveDidRequest** | [**ResolveDidRequest**](ResolveDidRequest.md)| Identifier to be resolved | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

