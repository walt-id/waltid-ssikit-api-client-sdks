# VerifiableCredentialsApi

All URIs are relative to *https://signatory.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTemplates**](VerifiableCredentialsApi.md#listTemplates) | **GET** /v1/templates | List VC templates
[**loadTemplate**](VerifiableCredentialsApi.md#loadTemplate) | **GET** /v1/templates/{id} | Load a VC template


<a name="listTemplates"></a>
# **listTemplates**
> kotlin.collections.List&lt;kotlin.String&gt; listTemplates()

List VC templates

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = VerifiableCredentialsApi()
try {
    val result : kotlin.collections.List<kotlin.String> = apiInstance.listTemplates()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling VerifiableCredentialsApi#listTemplates")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling VerifiableCredentialsApi#listTemplates")
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

<a name="loadTemplate"></a>
# **loadTemplate**
> kotlin.String loadTemplate(id)

Load a VC template

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = VerifiableCredentialsApi()
val id : kotlin.String = id_example // kotlin.String | Retrieves a single VC template form the data store
try {
    val result : kotlin.String = apiInstance.loadTemplate(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling VerifiableCredentialsApi#loadTemplate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling VerifiableCredentialsApi#loadTemplate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**| Retrieves a single VC template form the data store |

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

