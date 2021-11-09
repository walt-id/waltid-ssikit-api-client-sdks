# \DecentralizedIdentifiersApi

All URIs are relative to *https://core.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateDid**](DecentralizedIdentifiersApi.md#CreateDid) | **Post** /v1/did/create | Create DID
[**DeleteDid**](DecentralizedIdentifiersApi.md#DeleteDid) | **Delete** /v1/did/{id} | Delete DID
[**ImportDid**](DecentralizedIdentifiersApi.md#ImportDid) | **Post** /v1/did/import | Import DID
[**ListDids**](DecentralizedIdentifiersApi.md#ListDids) | **Get** /v1/did | List DIDs
[**LoadDid**](DecentralizedIdentifiersApi.md#LoadDid) | **Get** /v1/did/{id} | Load DID
[**ResolveDid**](DecentralizedIdentifiersApi.md#ResolveDid) | **Post** /v1/did/resolve | Resolve DID



## CreateDid

> string CreateDid(ctx).CreateDidRequest(createDidRequest).Execute()

Create DID

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
    createDidRequest := *openapiclient.NewCreateDidRequest("Method_example") // CreateDidRequest | Defines the DID method and optionally the key to be used (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DecentralizedIdentifiersApi.CreateDid(context.Background()).CreateDidRequest(createDidRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DecentralizedIdentifiersApi.CreateDid``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateDid`: string
    fmt.Fprintf(os.Stdout, "Response from `DecentralizedIdentifiersApi.CreateDid`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDidRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDidRequest** | [**CreateDidRequest**](CreateDidRequest.md) | Defines the DID method and optionally the key to be used | 

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


## DeleteDid

> string DeleteDid(ctx, id).Body(body).Execute()

Delete DID

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
    body := "body_example" // string | ID of the DID to be deleted (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DecentralizedIdentifiersApi.DeleteDid(context.Background(), id).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DecentralizedIdentifiersApi.DeleteDid``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteDid`: string
    fmt.Fprintf(os.Stdout, "Response from `DecentralizedIdentifiersApi.DeleteDid`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDidRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **string** | ID of the DID to be deleted | 

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


## ImportDid

> string ImportDid(ctx).Body(body).Execute()

Import DID

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
    body := "body_example" // string | Imports the DID to the underlying data store (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DecentralizedIdentifiersApi.ImportDid(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DecentralizedIdentifiersApi.ImportDid``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportDid`: string
    fmt.Fprintf(os.Stdout, "Response from `DecentralizedIdentifiersApi.ImportDid`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiImportDidRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | Imports the DID to the underlying data store | 

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


## ListDids

> []string ListDids(ctx).Execute()

List DIDs

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
    resp, r, err := api_client.DecentralizedIdentifiersApi.ListDids(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DecentralizedIdentifiersApi.ListDids``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListDids`: []string
    fmt.Fprintf(os.Stdout, "Response from `DecentralizedIdentifiersApi.ListDids`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListDidsRequest struct via the builder pattern


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


## LoadDid

> string LoadDid(ctx, id).Body(body).Execute()

Load DID

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
    resp, r, err := api_client.DecentralizedIdentifiersApi.LoadDid(context.Background(), id).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DecentralizedIdentifiersApi.LoadDid``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `LoadDid`: string
    fmt.Fprintf(os.Stdout, "Response from `DecentralizedIdentifiersApi.LoadDid`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiLoadDidRequest struct via the builder pattern


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


## ResolveDid

> string ResolveDid(ctx).ResolveDidRequest(resolveDidRequest).Execute()

Resolve DID

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
    resolveDidRequest := *openapiclient.NewResolveDidRequest("Did_example") // ResolveDidRequest | Identifier to be resolved (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DecentralizedIdentifiersApi.ResolveDid(context.Background()).ResolveDidRequest(resolveDidRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DecentralizedIdentifiersApi.ResolveDid``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ResolveDid`: string
    fmt.Fprintf(os.Stdout, "Response from `DecentralizedIdentifiersApi.ResolveDid`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiResolveDidRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resolveDidRequest** | [**ResolveDidRequest**](ResolveDidRequest.md) | Identifier to be resolved | 

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

