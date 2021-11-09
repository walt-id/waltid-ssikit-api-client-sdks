# \ESSIFClientApi

All URIs are relative to *https://essif.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateDid**](ESSIFClientApi.md#CreateDid) | **Post** /v1/client/auth | Runs the ESSIF Authorization API flow
[**Onboard**](ESSIFClientApi.md#Onboard) | **Post** /v1/client/onboard | EBSI onboarding flow, which requests a Verifiable Authorization from the EOS.
[**RegisterDid**](ESSIFClientApi.md#RegisterDid) | **Post** /v1/client/registerDid | Registers DID on the EBSI Blockchain



## CreateDid

> string CreateDid(ctx).Body(body).Execute()

Runs the ESSIF Authorization API flow

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
    body := "body_example" // string | DID (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFClientApi.CreateDid(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFClientApi.CreateDid``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateDid`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFClientApi.CreateDid`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDidRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | DID | 

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


## Onboard

> string Onboard(ctx).EbsiOnboardRequest(ebsiOnboardRequest).Execute()

EBSI onboarding flow, which requests a Verifiable Authorization from the EOS.

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
    ebsiOnboardRequest := *openapiclient.NewEbsiOnboardRequest("BearerToken_example", "Did_example") // EbsiOnboardRequest | DID to be registered on the EBSI Blockchain; Bearer token to be used to authenticate the user. Get it from here https://app.preprod.ebsi.eu/users-onboarding (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFClientApi.Onboard(context.Background()).EbsiOnboardRequest(ebsiOnboardRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFClientApi.Onboard``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Onboard`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFClientApi.Onboard`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiOnboardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ebsiOnboardRequest** | [**EbsiOnboardRequest**](EbsiOnboardRequest.md) | DID to be registered on the EBSI Blockchain; Bearer token to be used to authenticate the user. Get it from here https://app.preprod.ebsi.eu/users-onboarding | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RegisterDid

> string RegisterDid(ctx).Body(body).Execute()

Registers DID on the EBSI Blockchain

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
    body := "body_example" // string | DID (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ESSIFClientApi.RegisterDid(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ESSIFClientApi.RegisterDid``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RegisterDid`: string
    fmt.Fprintf(os.Stdout, "Response from `ESSIFClientApi.RegisterDid`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRegisterDidRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | DID | 

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

