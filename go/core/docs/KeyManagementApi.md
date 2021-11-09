# \KeyManagementApi

All URIs are relative to *https://core.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteKey**](KeyManagementApi.md#DeleteKey) | **Delete** /v1/key/{id} | Delete key
[**ExportKey**](KeyManagementApi.md#ExportKey) | **Post** /v1/key/export | Exports public and private key part (if supported by underlying keystore)
[**GenKey**](KeyManagementApi.md#GenKey) | **Post** /v1/key/gen | Generate key
[**GetV1KeyWithId**](KeyManagementApi.md#GetV1KeyWithId) | **Get** /v1/key/{id} | Load public key
[**ImportKey**](KeyManagementApi.md#ImportKey) | **Post** /v1/key/import | Import key
[**ListKeys**](KeyManagementApi.md#ListKeys) | **Get** /v1/key | List of key IDs



## DeleteKey

> string DeleteKey(ctx, id).Body(body).Execute()

Delete key

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
    body := "body_example" // string | ID of key to be deleted (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.KeyManagementApi.DeleteKey(context.Background(), id).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KeyManagementApi.DeleteKey``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteKey`: string
    fmt.Fprintf(os.Stdout, "Response from `KeyManagementApi.DeleteKey`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **string** | ID of key to be deleted | 

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


## ExportKey

> string ExportKey(ctx).ExportKeyRequest(exportKeyRequest).Execute()

Exports public and private key part (if supported by underlying keystore)

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
    exportKeyRequest := *openapiclient.NewExportKeyRequest("KeyAlias_example", "Format_example", false) // ExportKeyRequest | Exports the key in JWK or PEM format (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.KeyManagementApi.ExportKey(context.Background()).ExportKeyRequest(exportKeyRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KeyManagementApi.ExportKey``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ExportKey`: string
    fmt.Fprintf(os.Stdout, "Response from `KeyManagementApi.ExportKey`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiExportKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportKeyRequest** | [**ExportKeyRequest**](ExportKeyRequest.md) | Exports the key in JWK or PEM format | 

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


## GenKey

> KeyId GenKey(ctx).GenKeyRequest(genKeyRequest).Execute()

Generate key

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
    genKeyRequest := *openapiclient.NewGenKeyRequest("KeyAlgorithm_example") // GenKeyRequest | The desired key algorithm (ECDSA_Secp256k1 or EdDSA_Ed25519) (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.KeyManagementApi.GenKey(context.Background()).GenKeyRequest(genKeyRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KeyManagementApi.GenKey``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GenKey`: KeyId
    fmt.Fprintf(os.Stdout, "Response from `KeyManagementApi.GenKey`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGenKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **genKeyRequest** | [**GenKeyRequest**](GenKeyRequest.md) | The desired key algorithm (ECDSA_Secp256k1 or EdDSA_Ed25519) | 

### Return type

[**KeyId**](KeyId.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetV1KeyWithId

> string GetV1KeyWithId(ctx, id).Execute()

Load public key

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

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.KeyManagementApi.GetV1KeyWithId(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KeyManagementApi.GetV1KeyWithId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetV1KeyWithId`: string
    fmt.Fprintf(os.Stdout, "Response from `KeyManagementApi.GetV1KeyWithId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetV1KeyWithIdRequest struct via the builder pattern


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


## ImportKey

> string ImportKey(ctx).Body(body).Execute()

Import key

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
    body := "body_example" // string | Imports the key (JWK format) to the key store (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.KeyManagementApi.ImportKey(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KeyManagementApi.ImportKey``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportKey`: string
    fmt.Fprintf(os.Stdout, "Response from `KeyManagementApi.ImportKey`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiImportKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | Imports the key (JWK format) to the key store | 

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


## ListKeys

> []string ListKeys(ctx).Execute()

List of key IDs

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
    resp, r, err := api_client.KeyManagementApi.ListKeys(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KeyManagementApi.ListKeys``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListKeys`: []string
    fmt.Fprintf(os.Stdout, "Response from `KeyManagementApi.ListKeys`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListKeysRequest struct via the builder pattern


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

