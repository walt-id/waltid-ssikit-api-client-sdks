# KeyManagementApi

All URIs are relative to *https://core.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteKey**](KeyManagementApi.md#deleteKey) | **DELETE** /v1/key/{id} | Delete key
[**exportKey**](KeyManagementApi.md#exportKey) | **POST** /v1/key/export | Exports public and private key part (if supported by underlying keystore)
[**genKey**](KeyManagementApi.md#genKey) | **POST** /v1/key/gen | Generate key
[**getV1KeyWithId**](KeyManagementApi.md#getV1KeyWithId) | **GET** /v1/key/{id} | Load public key
[**importKey**](KeyManagementApi.md#importKey) | **POST** /v1/key/import | Import key
[**listKeys**](KeyManagementApi.md#listKeys) | **GET** /v1/key | List of key IDs


<a name="deleteKey"></a>
# **deleteKey**
> kotlin.String deleteKey(id, body)

Delete key

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KeyManagementApi()
val id : kotlin.String = id_example // kotlin.String | 
val body : kotlin.String = body_example // kotlin.String | ID of key to be deleted
try {
    val result : kotlin.String = apiInstance.deleteKey(id, body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KeyManagementApi#deleteKey")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KeyManagementApi#deleteKey")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**|  |
 **body** | **kotlin.String**| ID of key to be deleted | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="exportKey"></a>
# **exportKey**
> kotlin.String exportKey(exportKeyRequest)

Exports public and private key part (if supported by underlying keystore)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KeyManagementApi()
val exportKeyRequest : ExportKeyRequest =  // ExportKeyRequest | Exports the key in JWK or PEM format
try {
    val result : kotlin.String = apiInstance.exportKey(exportKeyRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KeyManagementApi#exportKey")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KeyManagementApi#exportKey")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportKeyRequest** | [**ExportKeyRequest**](ExportKeyRequest.md)| Exports the key in JWK or PEM format | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="genKey"></a>
# **genKey**
> KeyId genKey(genKeyRequest)

Generate key

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KeyManagementApi()
val genKeyRequest : GenKeyRequest =  // GenKeyRequest | The desired key algorithm (ECDSA_Secp256k1 or EdDSA_Ed25519)
try {
    val result : KeyId = apiInstance.genKey(genKeyRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KeyManagementApi#genKey")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KeyManagementApi#genKey")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **genKeyRequest** | [**GenKeyRequest**](GenKeyRequest.md)| The desired key algorithm (ECDSA_Secp256k1 or EdDSA_Ed25519) | [optional]

### Return type

[**KeyId**](KeyId.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getV1KeyWithId"></a>
# **getV1KeyWithId**
> kotlin.String getV1KeyWithId(id)

Load public key

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KeyManagementApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : kotlin.String = apiInstance.getV1KeyWithId(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KeyManagementApi#getV1KeyWithId")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KeyManagementApi#getV1KeyWithId")
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

<a name="importKey"></a>
# **importKey**
> kotlin.String importKey(body)

Import key

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KeyManagementApi()
val body : kotlin.String = body_example // kotlin.String | Imports the key (JWK format) to the key store
try {
    val result : kotlin.String = apiInstance.importKey(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KeyManagementApi#importKey")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KeyManagementApi#importKey")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| Imports the key (JWK format) to the key store | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="listKeys"></a>
# **listKeys**
> kotlin.collections.List&lt;kotlin.String&gt; listKeys()

List of key IDs

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KeyManagementApi()
try {
    val result : kotlin.collections.List<kotlin.String> = apiInstance.listKeys()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KeyManagementApi#listKeys")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KeyManagementApi#listKeys")
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

