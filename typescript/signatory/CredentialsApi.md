# .CredentialsApi

All URIs are relative to *https://signatory.ssikit.walt.id*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issue**](CredentialsApi.md#issue) | **POST** /v1/credentials/issue | Issue a credential


# **issue**
> string issue()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialsApi(configuration);

let body:.CredentialsApiIssueRequest = {
  // IssueCredentialRequest (optional)
  issueCredentialRequest: {
    templateId: "templateId_example",
    config: {
      issuerDid: "issuerDid_example",
      subjectDid: "subjectDid_example",
      verifierDid: "verifierDid_example",
      issuerVerificationMethod: "issuerVerificationMethod_example",
      proofType: "JWT",
      domain: "domain_example",
      nonce: "nonce_example",
      proofPurpose: "proofPurpose_example",
      credentialId: "credentialId_example",
      issueDate: new Date('1970-01-01T00:00:00.00Z'),
      validDate: new Date('1970-01-01T00:00:00.00Z'),
      expirationDate: new Date('1970-01-01T00:00:00.00Z'),
      dataProviderIdentifier: "dataProviderIdentifier_example",
    },
  },
};

apiInstance.issue(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueCredentialRequest** | **IssueCredentialRequest**|  |


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


