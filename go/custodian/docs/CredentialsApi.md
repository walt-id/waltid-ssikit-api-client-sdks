# \CredentialsApi

All URIs are relative to *https://custodian.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteCredential**](CredentialsApi.md#DeleteCredential) | **Delete** /credentials/{alias} | Deletes a specific credential by alias
[**GetCredential**](CredentialsApi.md#GetCredential) | **Get** /credentials/{id} | Gets a specific Credential by id
[**ListCredentialIds**](CredentialsApi.md#ListCredentialIds) | **Get** /credentials/listCredentialIds | Lists all credential IDs the custodian knows of
[**ListCredentials**](CredentialsApi.md#ListCredentials) | **Get** /credentials | Lists all credentials the custodian knows of
[**StoreCredential**](CredentialsApi.md#StoreCredential) | **Put** /credentials/{alias} | Stores a credential



## DeleteCredential

> string DeleteCredential(ctx, alias).Execute()

Deletes a specific credential by alias

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
    alias := "alias_example" // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CredentialsApi.DeleteCredential(context.Background(), alias).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CredentialsApi.DeleteCredential``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCredential`: string
    fmt.Fprintf(os.Stdout, "Response from `CredentialsApi.DeleteCredential`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**alias** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCredentialRequest struct via the builder pattern


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


## GetCredential

> string GetCredential(ctx, id).Execute()

Gets a specific Credential by id

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
    resp, r, err := api_client.CredentialsApi.GetCredential(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CredentialsApi.GetCredential``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCredential`: string
    fmt.Fprintf(os.Stdout, "Response from `CredentialsApi.GetCredential`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCredentialRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListCredentialIds

> string ListCredentialIds(ctx).Execute()

Lists all credential IDs the custodian knows of

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
    resp, r, err := api_client.CredentialsApi.ListCredentialIds(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CredentialsApi.ListCredentialIds``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListCredentialIds`: string
    fmt.Fprintf(os.Stdout, "Response from `CredentialsApi.ListCredentialIds`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListCredentialIdsRequest struct via the builder pattern


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


## ListCredentials

> string ListCredentials(ctx).Id(id).Execute()

Lists all credentials the custodian knows of

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
    id := []string{"Inner_example"} // []string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CredentialsApi.ListCredentials(context.Background()).Id(id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CredentialsApi.ListCredentials``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListCredentials`: string
    fmt.Fprintf(os.Stdout, "Response from `CredentialsApi.ListCredentials`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCredentialsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **[]string** |  | 

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


## StoreCredential

> string StoreCredential(ctx, alias).StoreCredentialRequest(storeCredentialRequest).Execute()

Stores a credential

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
    alias := "alias_example" // string | 
    storeCredentialRequest := *openapiclient.NewStoreCredentialRequest("Alias_example", *openapiclient.NewVerifiableCredential([]string{"Type_example"})) // StoreCredentialRequest | Store Credential Request (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CredentialsApi.StoreCredential(context.Background(), alias).StoreCredentialRequest(storeCredentialRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CredentialsApi.StoreCredential``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StoreCredential`: string
    fmt.Fprintf(os.Stdout, "Response from `CredentialsApi.StoreCredential`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**alias** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiStoreCredentialRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **storeCredentialRequest** | [**StoreCredentialRequest**](StoreCredentialRequest.md) | Store Credential Request | 

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

