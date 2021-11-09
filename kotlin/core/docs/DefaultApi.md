# DefaultApi

All URIs are relative to *https://core.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiRoutes**](DefaultApi.md#getApiRoutes) | **GET** /api-routes | Get apiRoutes
[**health**](DefaultApi.md#health) | **GET** /health | Returns HTTP 200 in case all services are up and running
[**presentVc**](DefaultApi.md#presentVc) | **POST** /v1/vc/present | Present VC


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

<a name="presentVc"></a>
# **presentVc**
> kotlin.String presentVc(presentVcRequest)

Present VC

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val presentVcRequest : PresentVcRequest =  // PresentVcRequest | Defines the VC to be presented
try {
    val result : kotlin.String = apiInstance.presentVc(presentVcRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#presentVc")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#presentVc")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **presentVcRequest** | [**PresentVcRequest**](PresentVcRequest.md)| Defines the VC to be presented | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

