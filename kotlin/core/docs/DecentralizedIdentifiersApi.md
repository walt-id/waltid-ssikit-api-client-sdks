# DecentralizedIdentifiersApi

All URIs are relative to *https://core.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDid**](DecentralizedIdentifiersApi.md#createDid) | **POST** /v1/did/create | Create DID
[**deleteDid**](DecentralizedIdentifiersApi.md#deleteDid) | **DELETE** /v1/did/{id} | Delete DID
[**importDid**](DecentralizedIdentifiersApi.md#importDid) | **POST** /v1/did/import | Import DID
[**listDids**](DecentralizedIdentifiersApi.md#listDids) | **GET** /v1/did | List DIDs
[**loadDid**](DecentralizedIdentifiersApi.md#loadDid) | **GET** /v1/did/{id} | Load DID
[**resolveDid**](DecentralizedIdentifiersApi.md#resolveDid) | **POST** /v1/did/resolve | Resolve DID


<a name="createDid"></a>
# **createDid**
> kotlin.String createDid(createDidRequest)

Create DID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DecentralizedIdentifiersApi()
val createDidRequest : CreateDidRequest =  // CreateDidRequest | Defines the DID method and optionally the key to be used
try {
    val result : kotlin.String = apiInstance.createDid(createDidRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DecentralizedIdentifiersApi#createDid")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DecentralizedIdentifiersApi#createDid")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDidRequest** | [**CreateDidRequest**](CreateDidRequest.md)| Defines the DID method and optionally the key to be used | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDid"></a>
# **deleteDid**
> kotlin.String deleteDid(id, body)

Delete DID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DecentralizedIdentifiersApi()
val id : kotlin.String = id_example // kotlin.String | 
val body : kotlin.String = body_example // kotlin.String | ID of the DID to be deleted
try {
    val result : kotlin.String = apiInstance.deleteDid(id, body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DecentralizedIdentifiersApi#deleteDid")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DecentralizedIdentifiersApi#deleteDid")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**|  |
 **body** | **kotlin.String**| ID of the DID to be deleted | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="importDid"></a>
# **importDid**
> kotlin.String importDid(body)

Import DID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DecentralizedIdentifiersApi()
val body : kotlin.String = body_example // kotlin.String | Imports the DID to the underlying data store
try {
    val result : kotlin.String = apiInstance.importDid(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DecentralizedIdentifiersApi#importDid")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DecentralizedIdentifiersApi#importDid")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| Imports the DID to the underlying data store | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="listDids"></a>
# **listDids**
> kotlin.collections.List&lt;kotlin.String&gt; listDids()

List DIDs

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DecentralizedIdentifiersApi()
try {
    val result : kotlin.collections.List<kotlin.String> = apiInstance.listDids()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DecentralizedIdentifiersApi#listDids")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DecentralizedIdentifiersApi#listDids")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**kotlin.collections.List&lt;kotlin.String&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loadDid"></a>
# **loadDid**
> kotlin.String loadDid(id, body)

Load DID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DecentralizedIdentifiersApi()
val id : kotlin.String = id_example // kotlin.String | 
val body : kotlin.String = body_example // kotlin.String | ID of the DID to be loaded
try {
    val result : kotlin.String = apiInstance.loadDid(id, body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DecentralizedIdentifiersApi#loadDid")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DecentralizedIdentifiersApi#loadDid")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**|  |
 **body** | **kotlin.String**| ID of the DID to be loaded | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="resolveDid"></a>
# **resolveDid**
> kotlin.String resolveDid(resolveDidRequest)

Resolve DID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DecentralizedIdentifiersApi()
val resolveDidRequest : ResolveDidRequest =  // ResolveDidRequest | Identifier to be resolved
try {
    val result : kotlin.String = apiInstance.resolveDid(resolveDidRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DecentralizedIdentifiersApi#resolveDid")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DecentralizedIdentifiersApi#resolveDid")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resolveDidRequest** | [**ResolveDidRequest**](ResolveDidRequest.md)| Identifier to be resolved | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

