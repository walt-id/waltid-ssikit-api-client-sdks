# CreateVcRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IssuerDid** | **string** |  | 
**SubjectDid** | Pointer to **string** |  | [optional] 
**CredentialOffer** | Pointer to **string** |  | [optional] 
**TemplateId** | Pointer to **string** |  | [optional] 
**Domain** | Pointer to **string** |  | [optional] 
**Nonce** | Pointer to **string** |  | [optional] 

## Methods

### NewCreateVcRequest

`func NewCreateVcRequest(issuerDid string, ) *CreateVcRequest`

NewCreateVcRequest instantiates a new CreateVcRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateVcRequestWithDefaults

`func NewCreateVcRequestWithDefaults() *CreateVcRequest`

NewCreateVcRequestWithDefaults instantiates a new CreateVcRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIssuerDid

`func (o *CreateVcRequest) GetIssuerDid() string`

GetIssuerDid returns the IssuerDid field if non-nil, zero value otherwise.

### GetIssuerDidOk

`func (o *CreateVcRequest) GetIssuerDidOk() (*string, bool)`

GetIssuerDidOk returns a tuple with the IssuerDid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuerDid

`func (o *CreateVcRequest) SetIssuerDid(v string)`

SetIssuerDid sets IssuerDid field to given value.


### GetSubjectDid

`func (o *CreateVcRequest) GetSubjectDid() string`

GetSubjectDid returns the SubjectDid field if non-nil, zero value otherwise.

### GetSubjectDidOk

`func (o *CreateVcRequest) GetSubjectDidOk() (*string, bool)`

GetSubjectDidOk returns a tuple with the SubjectDid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubjectDid

`func (o *CreateVcRequest) SetSubjectDid(v string)`

SetSubjectDid sets SubjectDid field to given value.

### HasSubjectDid

`func (o *CreateVcRequest) HasSubjectDid() bool`

HasSubjectDid returns a boolean if a field has been set.

### GetCredentialOffer

`func (o *CreateVcRequest) GetCredentialOffer() string`

GetCredentialOffer returns the CredentialOffer field if non-nil, zero value otherwise.

### GetCredentialOfferOk

`func (o *CreateVcRequest) GetCredentialOfferOk() (*string, bool)`

GetCredentialOfferOk returns a tuple with the CredentialOffer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialOffer

`func (o *CreateVcRequest) SetCredentialOffer(v string)`

SetCredentialOffer sets CredentialOffer field to given value.

### HasCredentialOffer

`func (o *CreateVcRequest) HasCredentialOffer() bool`

HasCredentialOffer returns a boolean if a field has been set.

### GetTemplateId

`func (o *CreateVcRequest) GetTemplateId() string`

GetTemplateId returns the TemplateId field if non-nil, zero value otherwise.

### GetTemplateIdOk

`func (o *CreateVcRequest) GetTemplateIdOk() (*string, bool)`

GetTemplateIdOk returns a tuple with the TemplateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateId

`func (o *CreateVcRequest) SetTemplateId(v string)`

SetTemplateId sets TemplateId field to given value.

### HasTemplateId

`func (o *CreateVcRequest) HasTemplateId() bool`

HasTemplateId returns a boolean if a field has been set.

### GetDomain

`func (o *CreateVcRequest) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *CreateVcRequest) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *CreateVcRequest) SetDomain(v string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *CreateVcRequest) HasDomain() bool`

HasDomain returns a boolean if a field has been set.

### GetNonce

`func (o *CreateVcRequest) GetNonce() string`

GetNonce returns the Nonce field if non-nil, zero value otherwise.

### GetNonceOk

`func (o *CreateVcRequest) GetNonceOk() (*string, bool)`

GetNonceOk returns a tuple with the Nonce field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonce

`func (o *CreateVcRequest) SetNonce(v string)`

SetNonce sets Nonce field to given value.

### HasNonce

`func (o *CreateVcRequest) HasNonce() bool`

HasNonce returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


