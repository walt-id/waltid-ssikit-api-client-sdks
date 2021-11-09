# WaltIdSignatoryApi.VerifiableCredentialsApi

All URIs are relative to *https://signatory.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTemplates**](VerifiableCredentialsApi.md#listTemplates) | **GET** /v1/templates | List VC templates
[**loadTemplate**](VerifiableCredentialsApi.md#loadTemplate) | **GET** /v1/templates/{id} | Load a VC template



## listTemplates

> [String] listTemplates()

List VC templates

### Example

```javascript
import WaltIdSignatoryApi from 'walt_id_signatory_api';

let apiInstance = new WaltIdSignatoryApi.VerifiableCredentialsApi();
apiInstance.listTemplates((error, data, response) => {
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


## loadTemplate

> String loadTemplate(id)

Load a VC template

### Example

```javascript
import WaltIdSignatoryApi from 'walt_id_signatory_api';

let apiInstance = new WaltIdSignatoryApi.VerifiableCredentialsApi();
let id = "id_example"; // String | Retrieves a single VC template form the data store
apiInstance.loadTemplate(id, (error, data, response) => {
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
 **id** | **String**| Retrieves a single VC template form the data store | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

