# \TrustedIssuerApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GenerateAuthenticationRequest**](TrustedIssuerApi.md#GenerateAuthenticationRequest) | **Post** /v1/trusted-issuer/generateAuthenticationRequest | Generates a DID-SIOP Auth Request.
[**OpenSession**](TrustedIssuerApi.md#OpenSession) | **Post** /v1/trusted-issuer/openSession | Establishes a mutual authenticated DID-SIOP session.



## GenerateAuthenticationRequest

> string GenerateAuthenticationRequest(ctx).Execute()

Generates a DID-SIOP Auth Request.

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
    resp, r, err := api_client.TrustedIssuerApi.GenerateAuthenticationRequest(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TrustedIssuerApi.GenerateAuthenticationRequest``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GenerateAuthenticationRequest`: string
    fmt.Fprintf(os.Stdout, "Response from `TrustedIssuerApi.GenerateAuthenticationRequest`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGenerateAuthenticationRequestRequest struct via the builder pattern


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


## OpenSession

> string OpenSession(ctx).Execute()

Establishes a mutual authenticated DID-SIOP session.

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
    resp, r, err := api_client.TrustedIssuerApi.OpenSession(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TrustedIssuerApi.OpenSession``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `OpenSession`: string
    fmt.Fprintf(os.Stdout, "Response from `TrustedIssuerApi.OpenSession`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiOpenSessionRequest struct via the builder pattern


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

