# ESSIFUserWalletApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserDid**](ESSIFUserWalletApi.md#createUserDid) | **POST** /test/user/wallet/createDid | Creates and registers DID on the EBSI Blockchain
[**didAuthResponse**](ESSIFUserWalletApi.md#didAuthResponse) | **POST** /test/user/wallet/didAuthResponse | Generates and sends the DID Auth Response message.
[**oidcAuthResponse**](ESSIFUserWalletApi.md#oidcAuthResponse) | **POST** /test/user/wallet/oidcAuthResponse | Generates a OIDC Auth Response message.
[**requestAccessToken**](ESSIFUserWalletApi.md#requestAccessToken) | **POST** /test/user/wallet/requestAccessToken | Runs the authentication-protocol and returns the JWT Access Token for accessing the protected EBSI services.
[**validateDidAuthRequest**](ESSIFUserWalletApi.md#validateDidAuthRequest) | **POST** /test/user/wallet/validateDidAuthRequest | Validates a DID Auth request.
[**vcAuthResponse**](ESSIFUserWalletApi.md#vcAuthResponse) | **POST** /test/user/wallet/vcAuthResponse | Generates a VC Auth Response message.


<a name="createUserDid"></a>
# **createUserDid**
> kotlin.String createUserDid(body)

Creates and registers DID on the EBSI Blockchain

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFUserWalletApi()
val body : kotlin.String = body_example // kotlin.String | Verifiable Authorization
try {
    val result : kotlin.String = apiInstance.createUserDid(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFUserWalletApi#createUserDid")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFUserWalletApi#createUserDid")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| Verifiable Authorization | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="didAuthResponse"></a>
# **didAuthResponse**
> kotlin.String didAuthResponse(body)

Generates and sends the DID Auth Response message.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFUserWalletApi()
val body : kotlin.String = body_example // kotlin.String | DID Auth Request
try {
    val result : kotlin.String = apiInstance.didAuthResponse(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFUserWalletApi#didAuthResponse")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFUserWalletApi#didAuthResponse")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| DID Auth Request | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="oidcAuthResponse"></a>
# **oidcAuthResponse**
> kotlin.String oidcAuthResponse(body)

Generates a OIDC Auth Response message.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFUserWalletApi()
val body : kotlin.String = body_example // kotlin.String | todo
try {
    val result : kotlin.String = apiInstance.oidcAuthResponse(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFUserWalletApi#oidcAuthResponse")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFUserWalletApi#oidcAuthResponse")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| todo | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="requestAccessToken"></a>
# **requestAccessToken**
> kotlin.String requestAccessToken(body)

Runs the authentication-protocol and returns the JWT Access Token for accessing the protected EBSI services.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFUserWalletApi()
val body : kotlin.String = body_example // kotlin.String | The Verifiable Authorization
try {
    val result : kotlin.String = apiInstance.requestAccessToken(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFUserWalletApi#requestAccessToken")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFUserWalletApi#requestAccessToken")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| The Verifiable Authorization | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="validateDidAuthRequest"></a>
# **validateDidAuthRequest**
> kotlin.Boolean validateDidAuthRequest(body)

Validates a DID Auth request.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFUserWalletApi()
val body : kotlin.String = body_example // kotlin.String | DID Auth request
try {
    val result : kotlin.Boolean = apiInstance.validateDidAuthRequest(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFUserWalletApi#validateDidAuthRequest")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFUserWalletApi#validateDidAuthRequest")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| DID Auth request | [optional]

### Return type

**kotlin.Boolean**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="vcAuthResponse"></a>
# **vcAuthResponse**
> kotlin.String vcAuthResponse(body)

Generates a VC Auth Response message.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFUserWalletApi()
val body : kotlin.String = body_example // kotlin.String | VC Exchange Request
try {
    val result : kotlin.String = apiInstance.vcAuthResponse(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFUserWalletApi#vcAuthResponse")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFUserWalletApi#vcAuthResponse")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| VC Exchange Request | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

