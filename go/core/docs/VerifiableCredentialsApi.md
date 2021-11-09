# \VerifiableCredentialsApi

All URIs are relative to *https://core.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateVc**](VerifiableCredentialsApi.md#CreateVc) | **Post** /v1/vc/create | Create VC
[**DeleteVc**](VerifiableCredentialsApi.md#DeleteVc) | **Delete** /v1/vc/{id} | Delete VC
[**ImportVc**](VerifiableCredentialsApi.md#ImportVc) | **Post** /v1/vc/import | Import VC
[**ListVcs**](VerifiableCredentialsApi.md#ListVcs) | **Get** /v1/vc | List VCs
[**LoadVc**](VerifiableCredentialsApi.md#LoadVc) | **Get** /v1/vc/{id} | Load VC
[**VerifyVc**](VerifiableCredentialsApi.md#VerifyVc) | **Post** /v1/vc/verify | Verify VC



## CreateVc

> string CreateVc(ctx).CreateVcRequest(createVcRequest).Execute()

Create VC

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
    createVcRequest := *openapiclient.NewCreateVcRequest("IssuerDid_example") // CreateVcRequest | Defines the credential issuer, holder and optionally a credential template  -  TODO: build credential based on the request e.g. load template, substitute values (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.VerifiableCredentialsApi.CreateVc(context.Background()).CreateVcRequest(createVcRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VerifiableCredentialsApi.CreateVc``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateVc`: string
    fmt.Fprintf(os.Stdout, "Response from `VerifiableCredentialsApi.CreateVc`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateVcRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVcRequest** | [**CreateVcRequest**](CreateVcRequest.md) | Defines the credential issuer, holder and optionally a credential template  -  TODO: build credential based on the request e.g. load template, substitute values | 

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


## DeleteVc

> string DeleteVc(ctx, id).Body(body).Execute()

Delete VC

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
    id := "id_example" // string | 
    body := "body_example" // string | ID of VC to be deleted (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.VerifiableCredentialsApi.DeleteVc(context.Background(), id).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VerifiableCredentialsApi.DeleteVc``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteVc`: string
    fmt.Fprintf(os.Stdout, "Response from `VerifiableCredentialsApi.DeleteVc`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteVcRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **string** | ID of VC to be deleted | 

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


## ImportVc

> string ImportVc(ctx).Body(body).Execute()

Import VC

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
    body := "body_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.VerifiableCredentialsApi.ImportVc(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VerifiableCredentialsApi.ImportVc``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportVc`: string
    fmt.Fprintf(os.Stdout, "Response from `VerifiableCredentialsApi.ImportVc`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiImportVcRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** |  | 

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


## ListVcs

> []string ListVcs(ctx).Execute()

List VCs

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
    resp, r, err := api_client.VerifiableCredentialsApi.ListVcs(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VerifiableCredentialsApi.ListVcs``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListVcs`: []string
    fmt.Fprintf(os.Stdout, "Response from `VerifiableCredentialsApi.ListVcs`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListVcsRequest struct via the builder pattern


### Return type

**[]string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## LoadVc

> string LoadVc(ctx, id).Body(body).Execute()

Load VC

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
    id := "id_example" // string | 
    body := "body_example" // string | ID of the DID to be loaded (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.VerifiableCredentialsApi.LoadVc(context.Background(), id).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VerifiableCredentialsApi.LoadVc``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `LoadVc`: string
    fmt.Fprintf(os.Stdout, "Response from `VerifiableCredentialsApi.LoadVc`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiLoadVcRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **string** | ID of the DID to be loaded | 

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


## VerifyVc

> VerifyVcRequest VerifyVc(ctx).VerifyVcRequest(verifyVcRequest).Execute()

Verify VC

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
    verifyVcRequest := *openapiclient.NewVerifyVcRequest("VcOrVp_example") // VerifyVcRequest | VC to be verified (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.VerifiableCredentialsApi.VerifyVc(context.Background()).VerifyVcRequest(verifyVcRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VerifiableCredentialsApi.VerifyVc``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VerifyVc`: VerifyVcRequest
    fmt.Fprintf(os.Stdout, "Response from `VerifiableCredentialsApi.VerifyVc`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiVerifyVcRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyVcRequest** | [**VerifyVcRequest**](VerifyVcRequest.md) | VC to be verified | 

### Return type

[**VerifyVcRequest**](VerifyVcRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

