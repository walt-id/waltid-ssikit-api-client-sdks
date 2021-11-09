# WaltIdCustodianApi.CredentialsApi

All URIs are relative to *https://custodian.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCredential**](CredentialsApi.md#deleteCredential) | **DELETE** /credentials/{alias} | Deletes a specific credential by alias
[**getCredential**](CredentialsApi.md#getCredential) | **GET** /credentials/{id} | Gets a specific Credential by id
[**listCredentialIds**](CredentialsApi.md#listCredentialIds) | **GET** /credentials/listCredentialIds | Lists all credential IDs the custodian knows of
[**listCredentials**](CredentialsApi.md#listCredentials) | **GET** /credentials | Lists all credentials the custodian knows of
[**storeCredential**](CredentialsApi.md#storeCredential) | **PUT** /credentials/{alias} | Stores a credential



## deleteCredential

> String deleteCredential(alias)

Deletes a specific credential by alias

### Example

```javascript
import WaltIdCustodianApi from 'walt_id_custodian_api';

let apiInstance = new WaltIdCustodianApi.CredentialsApi();
let alias = "alias_example"; // String | 
apiInstance.deleteCredential(alias, (error, data, response) => {
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


## getCredential

> String getCredential(id)

Gets a specific Credential by id

### Example

```javascript
import WaltIdCustodianApi from 'walt_id_custodian_api';

let apiInstance = new WaltIdCustodianApi.CredentialsApi();
let id = "id_example"; // String | 
apiInstance.getCredential(id, (error, data, response) => {
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
- **Accept**: application/json, text/plain


## listCredentialIds

> String listCredentialIds()

Lists all credential IDs the custodian knows of

### Example

```javascript
import WaltIdCustodianApi from 'walt_id_custodian_api';

let apiInstance = new WaltIdCustodianApi.CredentialsApi();
apiInstance.listCredentialIds((error, data, response) => {
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


## listCredentials

> String listCredentials(opts)

Lists all credentials the custodian knows of

### Example

```javascript
import WaltIdCustodianApi from 'walt_id_custodian_api';

let apiInstance = new WaltIdCustodianApi.CredentialsApi();
let opts = {
  'id': ["null"] // [String] | 
};
apiInstance.listCredentials(opts, (error, data, response) => {
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
 **id** | [**[String]**](String.md)|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## storeCredential

> String storeCredential(alias, opts)

Stores a credential

### Example

```javascript
import WaltIdCustodianApi from 'walt_id_custodian_api';

let apiInstance = new WaltIdCustodianApi.CredentialsApi();
let alias = "alias_example"; // String | 
let opts = {
  'storeCredentialRequest': new WaltIdCustodianApi.StoreCredentialRequest() // StoreCredentialRequest | Store Credential Request
};
apiInstance.storeCredential(alias, opts, (error, data, response) => {
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
 **storeCredentialRequest** | [**StoreCredentialRequest**](StoreCredentialRequest.md)| Store Credential Request | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

