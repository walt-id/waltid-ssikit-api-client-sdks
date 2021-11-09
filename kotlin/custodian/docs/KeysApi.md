# KeysApi

All URIs are relative to *https://custodian.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteKey**](KeysApi.md#deleteKey) | **DELETE** /keys/{id} | Deletes a specific key
[**generateKey**](KeysApi.md#generateKey) | **POST** /keys/generate | Generates a key with a specific key algorithm
[**getKey**](KeysApi.md#getKey) | **GET** /keys/{alias} | Gets a key specified by its alias
[**listKeys**](KeysApi.md#listKeys) | **GET** /keys | Lists all keys the custodian knows of
[**storeKey**](KeysApi.md#storeKey) | **PUT** /keys/store | Stores a key


<a name="deleteKey"></a>
# **deleteKey**
> kotlin.String deleteKey(id)

Deletes a specific key

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KeysApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : kotlin.String = apiInstance.deleteKey(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KeysApi#deleteKey")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KeysApi#deleteKey")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**|  |

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="generateKey"></a>
# **generateKey**
> kotlin.String generateKey(generateKeyRequest)

Generates a key with a specific key algorithm

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KeysApi()
val generateKeyRequest : GenerateKeyRequest =  // GenerateKeyRequest | Generate Key Request
try {
    val result : kotlin.String = apiInstance.generateKey(generateKeyRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KeysApi#generateKey")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KeysApi#generateKey")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateKeyRequest** | [**GenerateKeyRequest**](GenerateKeyRequest.md)| Generate Key Request | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKey"></a>
# **getKey**
> kotlin.String getKey(alias)

Gets a key specified by its alias

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KeysApi()
val alias : kotlin.String = alias_example // kotlin.String | 
try {
    val result : kotlin.String = apiInstance.getKey(alias)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KeysApi#getKey")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KeysApi#getKey")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | **kotlin.String**|  |

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listKeys"></a>
# **listKeys**
> kotlin.String listKeys()

Lists all keys the custodian knows of

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KeysApi()
try {
    val result : kotlin.String = apiInstance.listKeys()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KeysApi#listKeys")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KeysApi#listKeys")
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

<a name="storeKey"></a>
# **storeKey**
> kotlin.String storeKey()

Stores a key

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KeysApi()
try {
    val result : kotlin.String = apiInstance.storeKey()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KeysApi#storeKey")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KeysApi#storeKey")
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

