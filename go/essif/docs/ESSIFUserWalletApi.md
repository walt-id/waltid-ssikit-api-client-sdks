# \ESSIFUserWalletApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateUserDid**](ESSIFUserWalletApi.md#CreateUserDid) | **Post** /test/user/wallet/createDid | Creates and registers DID on the EBSI Blockchain
[**DidAuthResponse**](ESSIFUserWalletApi.md#DidAuthResponse) | **Post** /test/user/wallet/didAuthResponse | Generates and sends the DID Auth Response message.
[**OidcAuthResponse**](ESSIFUserWalletApi.md#OidcAuthResponse) | **Post** /test/user/wallet/oidcAuthResponse | Generates a OIDC Auth Response message.
[**RequestAccessToken**](ESSIFUserWalletApi.md#RequestAccessToken) | **Post** /test/user/wallet/requestAccessToken | Runs the authentication-protocol and returns the JWT Access Token for accessing the protected EBSI services.
[**ValidateDidAuthRequest**](ESSIFUserWalletApi.md#ValidateDidAuthRequest) | **Post** /test/user/wallet/validateDidAuthRequest | Validates a DID Auth request.
[**VcAuthResponse**](ESSIFUserWalletApi.md#VcAuthResponse) | **Post** /test/user/wallet/vcAuthResponse | Generates a VC Auth Response message.



## CreateUserDid

> string CreateUserDid(ctx).Body(body).Execute()

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
    resp, r, err := api_client.ESSIFUserWalletApi.CreateUserDid(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFUserWalletApi.CreateUserDid``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateUserDid`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFUserWalletApi.CreateUserDid`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateUserDidRequest struct via the builder pattern


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


## DidAuthResponse

> string DidAuthResponse(ctx).Body(body).Execute()

Generates and sends the DID Auth Response message.

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
    body := "body_example" // string | DID Auth Request (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFUserWalletApi.DidAuthResponse(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFUserWalletApi.DidAuthResponse``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DidAuthResponse`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFUserWalletApi.DidAuthResponse`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDidAuthResponseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | DID Auth Request | 

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


## OidcAuthResponse

> string OidcAuthResponse(ctx).Body(body).Execute()

Generates a OIDC Auth Response message.

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
    body := "body_example" // string | todo (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFUserWalletApi.OidcAuthResponse(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFUserWalletApi.OidcAuthResponse``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `OidcAuthResponse`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFUserWalletApi.OidcAuthResponse`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiOidcAuthResponseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | todo | 

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


## RequestAccessToken

> string RequestAccessToken(ctx).Body(body).Execute()

Runs the authentication-protocol and returns the JWT Access Token for accessing the protected EBSI services.

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
    body := "body_example" // string | The Verifiable Authorization (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFUserWalletApi.RequestAccessToken(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFUserWalletApi.RequestAccessToken``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RequestAccessToken`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFUserWalletApi.RequestAccessToken`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRequestAccessTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | The Verifiable Authorization | 

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


## ValidateDidAuthRequest

> bool ValidateDidAuthRequest(ctx).Body(body).Execute()

Validates a DID Auth request.

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
    body := "body_example" // string | DID Auth request (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFUserWalletApi.ValidateDidAuthRequest(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFUserWalletApi.ValidateDidAuthRequest``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ValidateDidAuthRequest`: bool
    fmt.Fprintf(os.Stdout, "Response from `ESSIFUserWalletApi.ValidateDidAuthRequest`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiValidateDidAuthRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | DID Auth request | 

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


## VcAuthResponse

> string VcAuthResponse(ctx).Body(body).Execute()

Generates a VC Auth Response message.

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
    body := "body_example" // string | VC Exchange Request (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFUserWalletApi.VcAuthResponse(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFUserWalletApi.VcAuthResponse``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VcAuthResponse`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFUserWalletApi.VcAuthResponse`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiVcAuthResponseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | VC Exchange Request | 

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

