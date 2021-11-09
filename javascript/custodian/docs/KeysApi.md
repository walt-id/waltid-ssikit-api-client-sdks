# WaltIdCustodianApi.KeysApi

All URIs are relative to *https://custodian.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteKey**](KeysApi.md#deleteKey) | **DELETE** /keys/{id} | Deletes a specific key
[**generateKey**](KeysApi.md#generateKey) | **POST** /keys/generate | Generates a key with a specific key algorithm
[**getKey**](KeysApi.md#getKey) | **GET** /keys/{alias} | Gets a key specified by its alias
[**listKeys**](KeysApi.md#listKeys) | **GET** /keys | Lists all keys the custodian knows of
[**storeKey**](KeysApi.md#storeKey) | **PUT** /keys/store | Stores a key



## deleteKey

> String deleteKey(id)

Deletes a specific key

### Example

```javascript
import WaltIdCustodianApi from 'walt_id_custodian_api';

let apiInstance = new WaltIdCustodianApi.KeysApi();
let id = "id_example"; // String | 
apiInstance.deleteKey(id, (error, data, response) => {
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


## generateKey

> String generateKey(opts)

Generates a key with a specific key algorithm

### Example

```javascript
import WaltIdCustodianApi from 'walt_id_custodian_api';

let apiInstance = new WaltIdCustodianApi.KeysApi();
let opts = {
  'generateKeyRequest': new WaltIdCustodianApi.GenerateKeyRequest() // GenerateKeyRequest | Generate Key Request
};
apiInstance.generateKey(opts, (error, data, response) => {
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
 **generateKeyRequest** | [**GenerateKeyRequest**](GenerateKeyRequest.md)| Generate Key Request | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getKey

> String getKey(alias)

Gets a key specified by its alias

### Example

```javascript
import WaltIdCustodianApi from 'walt_id_custodian_api';

let apiInstance = new WaltIdCustodianApi.KeysApi();
let alias = "alias_example"; // String | 
apiInstance.getKey(alias, (error, data, response) => {
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
 **alias** | **String**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listKeys

> String listKeys()

Lists all keys the custodian knows of

### Example

```javascript
import WaltIdCustodianApi from 'walt_id_custodian_api';

let apiInstance = new WaltIdCustodianApi.KeysApi();
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

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## storeKey

> String storeKey()

Stores a key

### Example

```javascript
import WaltIdCustodianApi from 'walt_id_custodian_api';

let apiInstance = new WaltIdCustodianApi.KeysApi();
apiInstance.storeKey((error, data, response) => {
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

