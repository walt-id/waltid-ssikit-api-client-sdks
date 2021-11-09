# VerificationPoliciesApi

All URIs are relative to *https://auditor.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPolicies**](VerificationPoliciesApi.md#listPolicies) | **GET** /v1/policies | List verification policies
[**verifyVP**](VerificationPoliciesApi.md#verifyVP) | **POST** /v1/verify | Verify a W3C VerifiableCredential or VerifiablePresentation


<a name="listPolicies"></a>
# **listPolicies**
> kotlin.collections.List&lt;VerificationPolicy&gt; listPolicies()

List verification policies

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = VerificationPoliciesApi()
try {
    val result : kotlin.collections.List<VerificationPolicy> = apiInstance.listPolicies()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling VerificationPoliciesApi#listPolicies")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling VerificationPoliciesApi#listPolicies")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;VerificationPolicy&gt;**](VerificationPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="verifyVP"></a>
# **verifyVP**
> VerificationResult verifyVP(policyList, body)

Verify a W3C VerifiableCredential or VerifiablePresentation

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = VerificationPoliciesApi()
val policyList : kotlin.String = policyList_example // kotlin.String | Optional comma-separated list for setting the policies to be verified.
val body : kotlin.String = body_example // kotlin.String | VC or VP to be verified
try {
    val result : VerificationResult = apiInstance.verifyVP(policyList, body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling VerificationPoliciesApi#verifyVP")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling VerificationPoliciesApi#verifyVP")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyList** | **kotlin.String**| Optional comma-separated list for setting the policies to be verified. | [optional]
 **body** | **kotlin.String**| VC or VP to be verified | [optional]

### Return type

[**VerificationResult**](VerificationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

