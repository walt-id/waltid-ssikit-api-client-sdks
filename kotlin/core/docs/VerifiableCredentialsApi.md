# VerifiableCredentialsApi

All URIs are relative to *https://core.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVc**](VerifiableCredentialsApi.md#createVc) | **POST** /v1/vc/create | Create VC
[**deleteVc**](VerifiableCredentialsApi.md#deleteVc) | **DELETE** /v1/vc/{id} | Delete VC
[**importVc**](VerifiableCredentialsApi.md#importVc) | **POST** /v1/vc/import | Import VC
[**listVcs**](VerifiableCredentialsApi.md#listVcs) | **GET** /v1/vc | List VCs
[**loadVc**](VerifiableCredentialsApi.md#loadVc) | **GET** /v1/vc/{id} | Load VC
[**verifyVc**](VerifiableCredentialsApi.md#verifyVc) | **POST** /v1/vc/verify | Verify VC


<a name="createVc"></a>
# **createVc**
> kotlin.String createVc(createVcRequest)

Create VC

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = VerifiableCredentialsApi()
val createVcRequest : CreateVcRequest =  // CreateVcRequest | Defines the credential issuer, holder and optionally a credential template  -  TODO: build credential based on the request e.g. load template, substitute values
try {
    val result : kotlin.String = apiInstance.createVc(createVcRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling VerifiableCredentialsApi#createVc")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling VerifiableCredentialsApi#createVc")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVcRequest** | [**CreateVcRequest**](CreateVcRequest.md)| Defines the credential issuer, holder and optionally a credential template  -  TODO: build credential based on the request e.g. load template, substitute values | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteVc"></a>
# **deleteVc**
> kotlin.String deleteVc(id, body)

Delete VC

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = VerifiableCredentialsApi()
val id : kotlin.String = id_example // kotlin.String | 
val body : kotlin.String = body_example // kotlin.String | ID of VC to be deleted
try {
    val result : kotlin.String = apiInstance.deleteVc(id, body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling VerifiableCredentialsApi#deleteVc")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling VerifiableCredentialsApi#deleteVc")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**|  |
 **body** | **kotlin.String**| ID of VC to be deleted | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="importVc"></a>
# **importVc**
> kotlin.String importVc(body)

Import VC

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = VerifiableCredentialsApi()
val body : kotlin.String = body_example // kotlin.String | 
try {
    val result : kotlin.String = apiInstance.importVc(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling VerifiableCredentialsApi#importVc")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling VerifiableCredentialsApi#importVc")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**|  | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="listVcs"></a>
# **listVcs**
> kotlin.collections.List&lt;kotlin.String&gt; listVcs()

List VCs

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = VerifiableCredentialsApi()
try {
    val result : kotlin.collections.List<kotlin.String> = apiInstance.listVcs()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling VerifiableCredentialsApi#listVcs")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling VerifiableCredentialsApi#listVcs")
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

<a name="loadVc"></a>
# **loadVc**
> kotlin.String loadVc(id, body)

Load VC

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = VerifiableCredentialsApi()
val id : kotlin.String = id_example // kotlin.String | 
val body : kotlin.String = body_example // kotlin.String | ID of the DID to be loaded
try {
    val result : kotlin.String = apiInstance.loadVc(id, body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling VerifiableCredentialsApi#loadVc")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling VerifiableCredentialsApi#loadVc")
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

<a name="verifyVc"></a>
# **verifyVc**
> VerifyVcRequest verifyVc(verifyVcRequest)

Verify VC

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = VerifiableCredentialsApi()
val verifyVcRequest : VerifyVcRequest =  // VerifyVcRequest | VC to be verified
try {
    val result : VerifyVcRequest = apiInstance.verifyVc(verifyVcRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling VerifiableCredentialsApi#verifyVc")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling VerifiableCredentialsApi#verifyVc")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyVcRequest** | [**VerifyVcRequest**](VerifyVcRequest.md)| VC to be verified | [optional]

### Return type

[**VerifyVcRequest**](VerifyVcRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

