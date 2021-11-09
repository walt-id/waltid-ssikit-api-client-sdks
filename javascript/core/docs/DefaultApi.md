# WaltIdCoreApi.DefaultApi

All URIs are relative to *https://core.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiRoutes**](DefaultApi.md#getApiRoutes) | **GET** /api-routes | Get apiRoutes
[**health**](DefaultApi.md#health) | **GET** /health | Returns HTTP 200 in case all services are up and running
[**presentVc**](DefaultApi.md#presentVc) | **POST** /v1/vc/present | Present VC



## getApiRoutes

> getApiRoutes()

Get apiRoutes

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.DefaultApi();
apiInstance.getApiRoutes((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## health

> String health()

Returns HTTP 200 in case all services are up and running

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.DefaultApi();
apiInstance.health((error, data, response) => {
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


## presentVc

> String presentVc(opts)

Present VC

### Example

```javascript
import WaltIdCoreApi from 'walt_id_core_api';

let apiInstance = new WaltIdCoreApi.DefaultApi();
let opts = {
  'presentVcRequest': new WaltIdCoreApi.PresentVcRequest() // PresentVcRequest | Defines the VC to be presented
};
apiInstance.presentVc(opts, (error, data, response) => {
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
 **presentVcRequest** | [**PresentVcRequest**](PresentVcRequest.md)| Defines the VC to be presented | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

