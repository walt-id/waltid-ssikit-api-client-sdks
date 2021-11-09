# TrustedIssuerApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateAuthenticationRequest**](TrustedIssuerApi.md#generateAuthenticationRequest) | **POST** /v1/trusted-issuer/generateAuthenticationRequest | Generates a DID-SIOP Auth Request.
[**openSession**](TrustedIssuerApi.md#openSession) | **POST** /v1/trusted-issuer/openSession | Establishes a mutual authenticated DID-SIOP session.


<a name="generateAuthenticationRequest"></a>
# **generateAuthenticationRequest**
> kotlin.String generateAuthenticationRequest()

Generates a DID-SIOP Auth Request.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TrustedIssuerApi()
try {
    val result : kotlin.String = apiInstance.generateAuthenticationRequest()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TrustedIssuerApi#generateAuthenticationRequest")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TrustedIssuerApi#generateAuthenticationRequest")
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

<a name="openSession"></a>
# **openSession**
> kotlin.String openSession()

Establishes a mutual authenticated DID-SIOP session.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TrustedIssuerApi()
try {
    val result : kotlin.String = apiInstance.openSession()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TrustedIssuerApi#openSession")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TrustedIssuerApi#openSession")
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

