# IssueCredentialRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateId** | **string** |  | 
**Config** | [**ProofConfig**](ProofConfig.md) |  | 

## Methods

### NewIssueCredentialRequest

`func NewIssueCredentialRequest(templateId string, config ProofConfig, ) *IssueCredentialRequest`

NewIssueCredentialRequest instantiates a new IssueCredentialRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIssueCredentialRequestWithDefaults

`func NewIssueCredentialRequestWithDefaults() *IssueCredentialRequest`

NewIssueCredentialRequestWithDefaults instantiates a new IssueCredentialRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateId

`func (o *IssueCredentialRequest) GetTemplateId() string`

GetTemplateId returns the TemplateId field if non-nil, zero value otherwise.

### GetTemplateIdOk

`func (o *IssueCredentialRequest) GetTemplateIdOk() (*string, bool)`

GetTemplateIdOk returns a tuple with the TemplateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateId

`func (o *IssueCredentialRequest) SetTemplateId(v string)`

SetTemplateId sets TemplateId field to given value.


### GetConfig

`func (o *IssueCredentialRequest) GetConfig() ProofConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *IssueCredentialRequest) GetConfigOk() (*ProofConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *IssueCredentialRequest) SetConfig(v ProofConfig)`

SetConfig sets Config field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


