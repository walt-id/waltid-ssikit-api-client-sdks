# \ESSIFEnterpriseWalletApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateEnterpriseDid**](ESSIFEnterpriseWalletApi.md#CreateEnterpriseDid) | **Post** /test/enterprise/wallet/createDid | Creates and registers DID on the EBSI Blockchain
[**GenerateDidAuthRequest**](ESSIFEnterpriseWalletApi.md#GenerateDidAuthRequest) | **Post** /test/enterprise/wallet/generateDidAuthRequest | Generates a DID Auth Request
[**GetCredential**](ESSIFEnterpriseWalletApi.md#GetCredential) | **Post** /test/ti/credentials | Returns DID Auth Request or the requested credential if a VC Token is presented
[**GetCredential_0**](ESSIFEnterpriseWalletApi.md#GetCredential_0) | **Get** /test/ti/credentials/{credentialId} | Returns DID Auth Request or the requested credential if a VC Token is presented
[**GetVerifiableCredential**](ESSIFEnterpriseWalletApi.md#GetVerifiableCredential) | **Post** /test/enterprise/wallet/getVerifiableCredential | Generates the DID ownership response and fetches the requested credential.
[**Onboards**](ESSIFEnterpriseWalletApi.md#Onboards) | **Post** /test/eos/onboard | Request Verifiable Authorization. Returns the DID ownership request.
[**RequestCredentialUri**](ESSIFEnterpriseWalletApi.md#RequestCredentialUri) | **Get** /test/ti/requestCredentialUri | Creates an OIDC authentication request URI.
[**RequestEnterpriseVerifiableCredential**](ESSIFEnterpriseWalletApi.md#RequestEnterpriseVerifiableCredential) | **Post** /test/enterprise/wallet/requestVerifiableCredential | Request credential
[**RequestVerifiableAuthorization**](ESSIFEnterpriseWalletApi.md#RequestVerifiableAuthorization) | **Post** /test/enterprise/wallet/requestVerifiableAuthorization | Performs DID Auth in order to obtain a Verifiable Authorization
[**RequestVerifiableCredential**](ESSIFEnterpriseWalletApi.md#RequestVerifiableCredential) | **Post** /test/ti/requestVerifiableCredential | Returns the DID ownership request
[**SignedChallenge**](ESSIFEnterpriseWalletApi.md#SignedChallenge) | **Post** /test/eos/signedChallenge | Processes the signed challenge in the scope of DID Auth and if successful, returns the Verifiable Authorization
[**Token**](ESSIFEnterpriseWalletApi.md#Token) | **Post** /test/enterprise/wallet/token | OIDC Token endpoint
[**ValidateDidAuthResponse**](ESSIFEnterpriseWalletApi.md#ValidateDidAuthResponse) | **Post** /test/enterprise/wallet/validateDidAuthResponse | Validates a DID Auth response



## CreateEnterpriseDid

> string CreateEnterpriseDid(ctx).Body(body).Execute()

Creates and registers DID on the EBSI Blockchain

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    body := "body_example" // string | Verifiable Authorization (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFEnterpriseWalletApi.CreateEnterpriseDid(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFEnterpriseWalletApi.CreateEnterpriseDid``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateEnterpriseDid`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFEnterpriseWalletApi.CreateEnterpriseDid`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateEnterpriseDidRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | Verifiable Authorization | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GenerateDidAuthRequest

> string GenerateDidAuthRequest(ctx).Execute()

Generates a DID Auth Request

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFEnterpriseWalletApi.GenerateDidAuthRequest(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFEnterpriseWalletApi.GenerateDidAuthRequest``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GenerateDidAuthRequest`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFEnterpriseWalletApi.GenerateDidAuthRequest`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGenerateDidAuthRequestRequest struct via the builder pattern


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCredential

> string GetCredential(ctx).Execute()

Returns DID Auth Request or the requested credential if a VC Token is presented

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFEnterpriseWalletApi.GetCredential(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFEnterpriseWalletApi.GetCredential``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCredential`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFEnterpriseWalletApi.GetCredential`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetCredentialRequest struct via the builder pattern


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCredential_0

> string GetCredential_0(ctx, credentialId).Execute()

Returns DID Auth Request or the requested credential if a VC Token is presented

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    credentialId := "credentialId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFEnterpriseWalletApi.GetCredential_0(context.Background(), credentialId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFEnterpriseWalletApi.GetCredential_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCredential_0`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFEnterpriseWalletApi.GetCredential_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**credentialId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCredential_1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetVerifiableCredential

> string GetVerifiableCredential(ctx).Body(body).Execute()

Generates the DID ownership response and fetches the requested credential.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    body := "body_example" // string | DID ownership request (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFEnterpriseWalletApi.GetVerifiableCredential(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFEnterpriseWalletApi.GetVerifiableCredential``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetVerifiableCredential`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFEnterpriseWalletApi.GetVerifiableCredential`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetVerifiableCredentialRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | DID ownership request | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Onboards

> string Onboards(ctx).Body(body).Execute()

Request Verifiable Authorization. Returns the DID ownership request.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    body := "body_example" // string | DID to be registered (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFEnterpriseWalletApi.Onboards(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFEnterpriseWalletApi.Onboards``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Onboards`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFEnterpriseWalletApi.Onboards`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiOnboardsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | DID to be registered | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RequestCredentialUri

> string RequestCredentialUri(ctx).Execute()

Creates an OIDC authentication request URI.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFEnterpriseWalletApi.RequestCredentialUri(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFEnterpriseWalletApi.RequestCredentialUri``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RequestCredentialUri`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFEnterpriseWalletApi.RequestCredentialUri`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiRequestCredentialUriRequest struct via the builder pattern


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RequestEnterpriseVerifiableCredential

> string RequestEnterpriseVerifiableCredential(ctx).Body(body).Execute()

Request credential

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    body := "body_example" // string | Credential Request URI (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFEnterpriseWalletApi.RequestEnterpriseVerifiableCredential(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFEnterpriseWalletApi.RequestEnterpriseVerifiableCredential``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RequestEnterpriseVerifiableCredential`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFEnterpriseWalletApi.RequestEnterpriseVerifiableCredential`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRequestEnterpriseVerifiableCredentialRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | Credential Request URI | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RequestVerifiableAuthorization

> string RequestVerifiableAuthorization(ctx).Body(body).Execute()

Performs DID Auth in order to obtain a Verifiable Authorization

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    body := "body_example" // string | Access Token (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFEnterpriseWalletApi.RequestVerifiableAuthorization(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFEnterpriseWalletApi.RequestVerifiableAuthorization``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RequestVerifiableAuthorization`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFEnterpriseWalletApi.RequestVerifiableAuthorization`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRequestVerifiableAuthorizationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | Access Token | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RequestVerifiableCredential

> string RequestVerifiableCredential(ctx).Body(body).Execute()

Returns the DID ownership request

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    body := "body_example" // string | Credential request URI (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFEnterpriseWalletApi.RequestVerifiableCredential(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFEnterpriseWalletApi.RequestVerifiableCredential``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RequestVerifiableCredential`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFEnterpriseWalletApi.RequestVerifiableCredential`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRequestVerifiableCredentialRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | Credential request URI | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignedChallenge

> string SignedChallenge(ctx).Body(body).Execute()

Processes the signed challenge in the scope of DID Auth and if successful, returns the Verifiable Authorization

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    body := "body_example" // string | Signed challenge (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFEnterpriseWalletApi.SignedChallenge(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFEnterpriseWalletApi.SignedChallenge``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SignedChallenge`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFEnterpriseWalletApi.SignedChallenge`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSignedChallengeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | Signed challenge | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Token

> string Token(ctx).Body(body).Execute()

OIDC Token endpoint

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    body := "body_example" // string | oidcAuthResp (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFEnterpriseWalletApi.Token(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFEnterpriseWalletApi.Token``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Token`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFEnterpriseWalletApi.Token`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | oidcAuthResp | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ValidateDidAuthResponse

> bool ValidateDidAuthResponse(ctx).Body(body).Execute()

Validates a DID Auth response

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    body := "body_example" // string | DID Auth Response (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFEnterpriseWalletApi.ValidateDidAuthResponse(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFEnterpriseWalletApi.ValidateDidAuthResponse``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ValidateDidAuthResponse`: bool
    fmt.Fprintf(os.Stdout, "Response from `ESSIFEnterpriseWalletApi.ValidateDidAuthResponse`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiValidateDidAuthResponseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | DID Auth Response | 

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

