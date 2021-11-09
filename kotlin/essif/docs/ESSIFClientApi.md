# ESSIFClientApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDid**](ESSIFClientApi.md#createDid) | **POST** /v1/client/auth | Runs the ESSIF Authorization API flow
[**onboard**](ESSIFClientApi.md#onboard) | **POST** /v1/client/onboard | EBSI onboarding flow, which requests a Verifiable Authorization from the EOS.
[**registerDid**](ESSIFClientApi.md#registerDid) | **POST** /v1/client/registerDid | Registers DID on the EBSI Blockchain


<a name="createDid"></a>
# **createDid**
> kotlin.String createDid(body)

Runs the ESSIF Authorization API flow

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFClientApi()
val body : kotlin.String = body_example // kotlin.String | DID
try {
    val result : kotlin.String = apiInstance.createDid(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFClientApi#createDid")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFClientApi#createDid")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| DID | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="onboard"></a>
# **onboard**
> kotlin.String onboard(ebsiOnboardRequest)

EBSI onboarding flow, which requests a Verifiable Authorization from the EOS.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFClientApi()
val ebsiOnboardRequest : EbsiOnboardRequest =  // EbsiOnboardRequest | DID to be registered on the EBSI Blockchain; Bearer token to be used to authenticate the user. Get it from here https://app.preprod.ebsi.eu/users-onboarding
try {
    val result : kotlin.String = apiInstance.onboard(ebsiOnboardRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFClientApi#onboard")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFClientApi#onboard")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ebsiOnboardRequest** | [**EbsiOnboardRequest**](EbsiOnboardRequest.md)| DID to be registered on the EBSI Blockchain; Bearer token to be used to authenticate the user. Get it from here https://app.preprod.ebsi.eu/users-onboarding | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerDid"></a>
# **registerDid**
> kotlin.String registerDid(body)

Registers DID on the EBSI Blockchain

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFClientApi()
val body : kotlin.String = body_example // kotlin.String | DID
try {
    val result : kotlin.String = apiInstance.registerDid(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFClientApi#registerDid")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFClientApi#registerDid")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| DID | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

