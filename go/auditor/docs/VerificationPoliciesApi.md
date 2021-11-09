# \VerificationPoliciesApi

All URIs are relative to *https://auditor.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ListPolicies**](VerificationPoliciesApi.md#ListPolicies) | **Get** /v1/policies | List verification policies
[**VerifyVP**](VerificationPoliciesApi.md#VerifyVP) | **Post** /v1/verify | Verify a W3C VerifiableCredential or VerifiablePresentation



## ListPolicies

> []VerificationPolicy ListPolicies(ctx).Execute()

List verification policies

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
    resp, r, err := api_client.VerificationPoliciesApi.ListPolicies(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VerificationPoliciesApi.ListPolicies``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPolicies`: []VerificationPolicy
    fmt.Fprintf(os.Stdout, "Response from `VerificationPoliciesApi.ListPolicies`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListPoliciesRequest struct via the builder pattern


### Return type

[**[]VerificationPolicy**](VerificationPolicy.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VerifyVP

> VerificationResult VerifyVP(ctx).PolicyList(policyList).Body(body).Execute()

Verify a W3C VerifiableCredential or VerifiablePresentation

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
    policyList := "policyList_example" // string | Optional comma-separated list for setting the policies to be verified. (optional)
    body := "body_example" // string | VC or VP to be verified (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.VerificationPoliciesApi.VerifyVP(context.Background()).PolicyList(policyList).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VerificationPoliciesApi.VerifyVP``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VerifyVP`: VerificationResult
    fmt.Fprintf(os.Stdout, "Response from `VerificationPoliciesApi.VerifyVP`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiVerifyVPRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyList** | **string** | Optional comma-separated list for setting the policies to be verified. | 
 **body** | **string** | VC or VP to be verified | 

### Return type

[**VerificationResult**](VerificationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

