# \CredentialsApi

All URIs are relative to *https://signatory.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Issue**](CredentialsApi.md#Issue) | **Post** /v1/credentials/issue | Issue a credential



## Issue

> string Issue(ctx).IssueCredentialRequest(issueCredentialRequest).Execute()

Issue a credential

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
    issueCredentialRequest := *openapiclient.NewIssueCredentialRequest("TemplateId_example", *openapiclient.NewProofConfig("IssuerDid_example", "ProofType_example")) // IssueCredentialRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CredentialsApi.Issue(context.Background()).IssueCredentialRequest(issueCredentialRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CredentialsApi.Issue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Issue`: string
    fmt.Fprintf(os.Stdout, "Response from `CredentialsApi.Issue`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiIssueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueCredentialRequest** | [**IssueCredentialRequest**](IssueCredentialRequest.md) |  | 

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

