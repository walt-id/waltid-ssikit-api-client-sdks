# CredentialsApi

All URIs are relative to *https://custodian.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCredential**](CredentialsApi.md#deleteCredential) | **DELETE** /credentials/{alias} | Deletes a specific credential by alias
[**getCredential**](CredentialsApi.md#getCredential) | **GET** /credentials/{id} | Gets a specific Credential by id
[**listCredentialIds**](CredentialsApi.md#listCredentialIds) | **GET** /credentials/listCredentialIds | Lists all credential IDs the custodian knows of
[**listCredentials**](CredentialsApi.md#listCredentials) | **GET** /credentials | Lists all credentials the custodian knows of
[**storeCredential**](CredentialsApi.md#storeCredential) | **PUT** /credentials/{alias} | Stores a credential


<a name="deleteCredential"></a>
# **deleteCredential**
> kotlin.String deleteCredential(alias)

Deletes a specific credential by alias

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CredentialsApi()
val alias : kotlin.String = alias_example // kotlin.String | 
try {
    val result : kotlin.String = apiInstance.deleteCredential(alias)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CredentialsApi#deleteCredential")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CredentialsApi#deleteCredential")
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

<a name="getCredential"></a>
# **getCredential**
> kotlin.String getCredential(id)

Gets a specific Credential by id

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CredentialsApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : kotlin.String = apiInstance.getCredential(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CredentialsApi#getCredential")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CredentialsApi#getCredential")
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
 - **Accept**: application/json, text/plain

<a name="listCredentialIds"></a>
# **listCredentialIds**
> kotlin.String listCredentialIds()

Lists all credential IDs the custodian knows of

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CredentialsApi()
try {
    val result : kotlin.String = apiInstance.listCredentialIds()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CredentialsApi#listCredentialIds")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CredentialsApi#listCredentialIds")
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

<a name="listCredentials"></a>
# **listCredentials**
> kotlin.String listCredentials(id)

Lists all credentials the custodian knows of

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CredentialsApi()
val id : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
try {
    val result : kotlin.String = apiInstance.listCredentials(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CredentialsApi#listCredentials")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CredentialsApi#listCredentials")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="storeCredential"></a>
# **storeCredential**
> kotlin.String storeCredential(alias, storeCredentialRequest)

Stores a credential

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CredentialsApi()
val alias : kotlin.String = alias_example // kotlin.String | 
val storeCredentialRequest : StoreCredentialRequest =  // StoreCredentialRequest | Store Credential Request
try {
    val result : kotlin.String = apiInstance.storeCredential(alias, storeCredentialRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CredentialsApi#storeCredential")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CredentialsApi#storeCredential")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | **kotlin.String**|  |
 **storeCredentialRequest** | [**StoreCredentialRequest**](StoreCredentialRequest.md)| Store Credential Request | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

