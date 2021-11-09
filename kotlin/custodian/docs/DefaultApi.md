# DefaultApi

All URIs are relative to *https://custodian.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiRoutes**](DefaultApi.md#getApiRoutes) | **GET** /api-routes | Get apiRoutes
[**health**](DefaultApi.md#health) | **GET** /health | Returns HTTP 200 in case all services are up and running


<a name="getApiRoutes"></a>
# **getApiRoutes**
> getApiRoutes()

Get apiRoutes

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
try {
    apiInstance.getApiRoutes()
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#getApiRoutes")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#getApiRoutes")
    e.printStackTrace()
}
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

<a name="health"></a>
# **health**
> kotlin.String health()

Returns HTTP 200 in case all services are up and running

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
try {
    val result : kotlin.String = apiInstance.health()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#health")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#health")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

