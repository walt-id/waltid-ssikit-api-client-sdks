# WaltIdCustodianApi.DefaultApi

All URIs are relative to *https://custodian.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiRoutes**](DefaultApi.md#getApiRoutes) | **GET** /api-routes | Get apiRoutes
[**health**](DefaultApi.md#health) | **GET** /health | Returns HTTP 200 in case all services are up and running



## getApiRoutes

> getApiRoutes()

Get apiRoutes

### Example

```javascript
import WaltIdCustodianApi from 'walt_id_custodian_api';

let apiInstance = new WaltIdCustodianApi.DefaultApi();
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
import WaltIdCustodianApi from 'walt_id_custodian_api';

let apiInstance = new WaltIdCustodianApi.DefaultApi();
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

