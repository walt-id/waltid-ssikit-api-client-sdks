# ESSIFEnterpriseWalletApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEnterpriseDid**](ESSIFEnterpriseWalletApi.md#createEnterpriseDid) | **POST** /test/enterprise/wallet/createDid | Creates and registers DID on the EBSI Blockchain
[**generateDidAuthRequest**](ESSIFEnterpriseWalletApi.md#generateDidAuthRequest) | **POST** /test/enterprise/wallet/generateDidAuthRequest | Generates a DID Auth Request
[**getCredential**](ESSIFEnterpriseWalletApi.md#getCredential) | **POST** /test/ti/credentials | Returns DID Auth Request or the requested credential if a VC Token is presented
[**getCredential_0**](ESSIFEnterpriseWalletApi.md#getCredential_0) | **GET** /test/ti/credentials/{credentialId} | Returns DID Auth Request or the requested credential if a VC Token is presented
[**getVerifiableCredential**](ESSIFEnterpriseWalletApi.md#getVerifiableCredential) | **POST** /test/enterprise/wallet/getVerifiableCredential | Generates the DID ownership response and fetches the requested credential.
[**onboards**](ESSIFEnterpriseWalletApi.md#onboards) | **POST** /test/eos/onboard | Request Verifiable Authorization. Returns the DID ownership request.
[**requestCredentialUri**](ESSIFEnterpriseWalletApi.md#requestCredentialUri) | **GET** /test/ti/requestCredentialUri | Creates an OIDC authentication request URI.
[**requestEnterpriseVerifiableCredential**](ESSIFEnterpriseWalletApi.md#requestEnterpriseVerifiableCredential) | **POST** /test/enterprise/wallet/requestVerifiableCredential | Request credential
[**requestVerifiableAuthorization**](ESSIFEnterpriseWalletApi.md#requestVerifiableAuthorization) | **POST** /test/enterprise/wallet/requestVerifiableAuthorization | Performs DID Auth in order to obtain a Verifiable Authorization
[**requestVerifiableCredential**](ESSIFEnterpriseWalletApi.md#requestVerifiableCredential) | **POST** /test/ti/requestVerifiableCredential | Returns the DID ownership request
[**signedChallenge**](ESSIFEnterpriseWalletApi.md#signedChallenge) | **POST** /test/eos/signedChallenge | Processes the signed challenge in the scope of DID Auth and if successful, returns the Verifiable Authorization
[**token**](ESSIFEnterpriseWalletApi.md#token) | **POST** /test/enterprise/wallet/token | OIDC Token endpoint
[**validateDidAuthResponse**](ESSIFEnterpriseWalletApi.md#validateDidAuthResponse) | **POST** /test/enterprise/wallet/validateDidAuthResponse | Validates a DID Auth response


<a name="createEnterpriseDid"></a>
# **createEnterpriseDid**
> kotlin.String createEnterpriseDid(body)

Creates and registers DID on the EBSI Blockchain

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFEnterpriseWalletApi()
val body : kotlin.String = body_example // kotlin.String | Verifiable Authorization
try {
    val result : kotlin.String = apiInstance.createEnterpriseDid(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFEnterpriseWalletApi#createEnterpriseDid")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFEnterpriseWalletApi#createEnterpriseDid")
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

<a name="generateDidAuthRequest"></a>
# **generateDidAuthRequest**
> kotlin.String generateDidAuthRequest()

Generates a DID Auth Request

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFEnterpriseWalletApi()
try {
    val result : kotlin.String = apiInstance.generateDidAuthRequest()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFEnterpriseWalletApi#generateDidAuthRequest")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFEnterpriseWalletApi#generateDidAuthRequest")
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

<a name="getCredential"></a>
# **getCredential**
> kotlin.String getCredential()

Returns DID Auth Request or the requested credential if a VC Token is presented

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFEnterpriseWalletApi()
try {
    val result : kotlin.String = apiInstance.getCredential()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFEnterpriseWalletApi#getCredential")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFEnterpriseWalletApi#getCredential")
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

<a name="getCredential_0"></a>
# **getCredential_0**
> kotlin.String getCredential_0(credentialId)

Returns DID Auth Request or the requested credential if a VC Token is presented

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFEnterpriseWalletApi()
val credentialId : kotlin.String = credentialId_example // kotlin.String | 
try {
    val result : kotlin.String = apiInstance.getCredential_0(credentialId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFEnterpriseWalletApi#getCredential_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFEnterpriseWalletApi#getCredential_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialId** | **kotlin.String**|  |

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVerifiableCredential"></a>
# **getVerifiableCredential**
> kotlin.String getVerifiableCredential(body)

Generates the DID ownership response and fetches the requested credential.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFEnterpriseWalletApi()
val body : kotlin.String = body_example // kotlin.String | DID ownership request
try {
    val result : kotlin.String = apiInstance.getVerifiableCredential(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFEnterpriseWalletApi#getVerifiableCredential")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFEnterpriseWalletApi#getVerifiableCredential")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| DID ownership request | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="onboards"></a>
# **onboards**
> kotlin.String onboards(body)

Request Verifiable Authorization. Returns the DID ownership request.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFEnterpriseWalletApi()
val body : kotlin.String = body_example // kotlin.String | DID to be registered
try {
    val result : kotlin.String = apiInstance.onboards(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFEnterpriseWalletApi#onboards")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFEnterpriseWalletApi#onboards")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| DID to be registered | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="requestCredentialUri"></a>
# **requestCredentialUri**
> kotlin.String requestCredentialUri()

Creates an OIDC authentication request URI.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFEnterpriseWalletApi()
try {
    val result : kotlin.String = apiInstance.requestCredentialUri()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFEnterpriseWalletApi#requestCredentialUri")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFEnterpriseWalletApi#requestCredentialUri")
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

<a name="requestEnterpriseVerifiableCredential"></a>
# **requestEnterpriseVerifiableCredential**
> kotlin.String requestEnterpriseVerifiableCredential(body)

Request credential

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFEnterpriseWalletApi()
val body : kotlin.String = body_example // kotlin.String | Credential Request URI
try {
    val result : kotlin.String = apiInstance.requestEnterpriseVerifiableCredential(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFEnterpriseWalletApi#requestEnterpriseVerifiableCredential")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFEnterpriseWalletApi#requestEnterpriseVerifiableCredential")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| Credential Request URI | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="requestVerifiableAuthorization"></a>
# **requestVerifiableAuthorization**
> kotlin.String requestVerifiableAuthorization(body)

Performs DID Auth in order to obtain a Verifiable Authorization

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFEnterpriseWalletApi()
val body : kotlin.String = body_example // kotlin.String | Access Token
try {
    val result : kotlin.String = apiInstance.requestVerifiableAuthorization(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFEnterpriseWalletApi#requestVerifiableAuthorization")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFEnterpriseWalletApi#requestVerifiableAuthorization")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| Access Token | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="requestVerifiableCredential"></a>
# **requestVerifiableCredential**
> kotlin.String requestVerifiableCredential(body)

Returns the DID ownership request

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFEnterpriseWalletApi()
val body : kotlin.String = body_example // kotlin.String | Credential request URI
try {
    val result : kotlin.String = apiInstance.requestVerifiableCredential(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFEnterpriseWalletApi#requestVerifiableCredential")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFEnterpriseWalletApi#requestVerifiableCredential")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| Credential request URI | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="signedChallenge"></a>
# **signedChallenge**
> kotlin.String signedChallenge(body)

Processes the signed challenge in the scope of DID Auth and if successful, returns the Verifiable Authorization

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFEnterpriseWalletApi()
val body : kotlin.String = body_example // kotlin.String | Signed challenge
try {
    val result : kotlin.String = apiInstance.signedChallenge(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFEnterpriseWalletApi#signedChallenge")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFEnterpriseWalletApi#signedChallenge")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| Signed challenge | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="token"></a>
# **token**
> kotlin.String token(body)

OIDC Token endpoint

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFEnterpriseWalletApi()
val body : kotlin.String = body_example // kotlin.String | oidcAuthResp
try {
    val result : kotlin.String = apiInstance.token(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFEnterpriseWalletApi#token")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFEnterpriseWalletApi#token")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| oidcAuthResp | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="validateDidAuthResponse"></a>
# **validateDidAuthResponse**
> kotlin.Boolean validateDidAuthResponse(body)

Validates a DID Auth response

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ESSIFEnterpriseWalletApi()
val body : kotlin.String = body_example // kotlin.String | DID Auth Response
try {
    val result : kotlin.Boolean = apiInstance.validateDidAuthResponse(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ESSIFEnterpriseWalletApi#validateDidAuthResponse")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ESSIFEnterpriseWalletApi#validateDidAuthResponse")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **kotlin.String**| DID Auth Response | [optional]

### Return type

**kotlin.Boolean**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

