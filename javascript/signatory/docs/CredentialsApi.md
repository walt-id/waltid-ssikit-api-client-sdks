# WaltIdSignatoryApi.CredentialsApi

All URIs are relative to *https://signatory.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issue**](CredentialsApi.md#issue) | **POST** /v1/credentials/issue | Issue a credential



## issue

> String issue(opts)

Issue a credential

### Example

```javascript
import WaltIdSignatoryApi from 'walt_id_signatory_api';

let apiInstance = new WaltIdSignatoryApi.CredentialsApi();
let opts = {
  'issueCredentialRequest': new WaltIdSignatoryApi.IssueCredentialRequest() // IssueCredentialRequest | 
};
apiInstance.issue(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueCredentialRequest** | [**IssueCredentialRequest**](IssueCredentialRequest.md)|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

