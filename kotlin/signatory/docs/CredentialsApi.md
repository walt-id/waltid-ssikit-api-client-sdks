# CredentialsApi

All URIs are relative to *https://signatory.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issue**](CredentialsApi.md#issue) | **POST** /v1/credentials/issue | Issue a credential


<a name="issue"></a>
# **issue**
> kotlin.String issue(issueCredentialRequest)

Issue a credential

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CredentialsApi()
val issueCredentialRequest : IssueCredentialRequest =  // IssueCredentialRequest | 
try {
    val result : kotlin.String = apiInstance.issue(issueCredentialRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CredentialsApi#issue")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CredentialsApi#issue")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueCredentialRequest** | [**IssueCredentialRequest**](IssueCredentialRequest.md)|  | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

