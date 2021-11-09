# ProofConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IssuerDid** | **string** |  | 
**SubjectDid** | Pointer to **string** |  | [optional] 
**VerifierDid** | Pointer to **string** |  | [optional] 
**IssuerVerificationMethod** | Pointer to **string** |  | [optional] 
**ProofType** | **string** |  | 
**Domain** | Pointer to **string** |  | [optional] 
**Nonce** | Pointer to **string** |  | [optional] 
**ProofPurpose** | Pointer to **string** |  | [optional] 
**CredentialId** | Pointer to **string** |  | [optional] 
**IssueDate** | Pointer to **time.Time** |  | [optional] 
**ValidDate** | Pointer to **time.Time** |  | [optional] 
**ExpirationDate** | Pointer to **time.Time** |  | [optional] 
**DataProviderIdentifier** | Pointer to **string** |  | [optional] 

## Methods

### NewProofConfig

`func NewProofConfig(issuerDid string, proofType string, ) *ProofConfig`

NewProofConfig instantiates a new ProofConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProofConfigWithDefaults

`func NewProofConfigWithDefaults() *ProofConfig`

NewProofConfigWithDefaults instantiates a new ProofConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIssuerDid

`func (o *ProofConfig) GetIssuerDid() string`

GetIssuerDid returns the IssuerDid field if non-nil, zero value otherwise.

### GetIssuerDidOk

`func (o *ProofConfig) GetIssuerDidOk() (*string, bool)`

GetIssuerDidOk returns a tuple with the IssuerDid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuerDid

`func (o *ProofConfig) SetIssuerDid(v string)`

SetIssuerDid sets IssuerDid field to given value.


### GetSubjectDid

`func (o *ProofConfig) GetSubjectDid() string`

GetSubjectDid returns the SubjectDid field if non-nil, zero value otherwise.

### GetSubjectDidOk

`func (o *ProofConfig) GetSubjectDidOk() (*string, bool)`

GetSubjectDidOk returns a tuple with the SubjectDid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubjectDid

`func (o *ProofConfig) SetSubjectDid(v string)`

SetSubjectDid sets SubjectDid field to given value.

### HasSubjectDid

`func (o *ProofConfig) HasSubjectDid() bool`

HasSubjectDid returns a boolean if a field has been set.

### GetVerifierDid

`func (o *ProofConfig) GetVerifierDid() string`

GetVerifierDid returns the VerifierDid field if non-nil, zero value otherwise.

### GetVerifierDidOk

`func (o *ProofConfig) GetVerifierDidOk() (*string, bool)`

GetVerifierDidOk returns a tuple with the VerifierDid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerifierDid

`func (o *ProofConfig) SetVerifierDid(v string)`

SetVerifierDid sets VerifierDid field to given value.

### HasVerifierDid

`func (o *ProofConfig) HasVerifierDid() bool`

HasVerifierDid returns a boolean if a field has been set.

### GetIssuerVerificationMethod

`func (o *ProofConfig) GetIssuerVerificationMethod() string`

GetIssuerVerificationMethod returns the IssuerVerificationMethod field if non-nil, zero value otherwise.

### GetIssuerVerificationMethodOk

`func (o *ProofConfig) GetIssuerVerificationMethodOk() (*string, bool)`

GetIssuerVerificationMethodOk returns a tuple with the IssuerVerificationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuerVerificationMethod

`func (o *ProofConfig) SetIssuerVerificationMethod(v string)`

SetIssuerVerificationMethod sets IssuerVerificationMethod field to given value.

### HasIssuerVerificationMethod

`func (o *ProofConfig) HasIssuerVerificationMethod() bool`

HasIssuerVerificationMethod returns a boolean if a field has been set.

### GetProofType

`func (o *ProofConfig) GetProofType() string`

GetProofType returns the ProofType field if non-nil, zero value otherwise.

### GetProofTypeOk

`func (o *ProofConfig) GetProofTypeOk() (*string, bool)`

GetProofTypeOk returns a tuple with the ProofType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProofType

`func (o *ProofConfig) SetProofType(v string)`

SetProofType sets ProofType field to given value.


### GetDomain

`func (o *ProofConfig) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *ProofConfig) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *ProofConfig) SetDomain(v string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *ProofConfig) HasDomain() bool`

HasDomain returns a boolean if a field has been set.

### GetNonce

`func (o *ProofConfig) GetNonce() string`

GetNonce returns the Nonce field if non-nil, zero value otherwise.

### GetNonceOk

`func (o *ProofConfig) GetNonceOk() (*string, bool)`

GetNonceOk returns a tuple with the Nonce field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonce

`func (o *ProofConfig) SetNonce(v string)`

SetNonce sets Nonce field to given value.

### HasNonce

`func (o *ProofConfig) HasNonce() bool`

HasNonce returns a boolean if a field has been set.

### GetProofPurpose

`func (o *ProofConfig) GetProofPurpose() string`

GetProofPurpose returns the ProofPurpose field if non-nil, zero value otherwise.

### GetProofPurposeOk

`func (o *ProofConfig) GetProofPurposeOk() (*string, bool)`

GetProofPurposeOk returns a tuple with the ProofPurpose field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProofPurpose

`func (o *ProofConfig) SetProofPurpose(v string)`

SetProofPurpose sets ProofPurpose field to given value.

### HasProofPurpose

`func (o *ProofConfig) HasProofPurpose() bool`

HasProofPurpose returns a boolean if a field has been set.

### GetCredentialId

`func (o *ProofConfig) GetCredentialId() string`

GetCredentialId returns the CredentialId field if non-nil, zero value otherwise.

### GetCredentialIdOk

`func (o *ProofConfig) GetCredentialIdOk() (*string, bool)`

GetCredentialIdOk returns a tuple with the CredentialId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialId

`func (o *ProofConfig) SetCredentialId(v string)`

SetCredentialId sets CredentialId field to given value.

### HasCredentialId

`func (o *ProofConfig) HasCredentialId() bool`

HasCredentialId returns a boolean if a field has been set.

### GetIssueDate

`func (o *ProofConfig) GetIssueDate() time.Time`

GetIssueDate returns the IssueDate field if non-nil, zero value otherwise.

### GetIssueDateOk

`func (o *ProofConfig) GetIssueDateOk() (*time.Time, bool)`

GetIssueDateOk returns a tuple with the IssueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueDate

`func (o *ProofConfig) SetIssueDate(v time.Time)`

SetIssueDate sets IssueDate field to given value.

### HasIssueDate

`func (o *ProofConfig) HasIssueDate() bool`

HasIssueDate returns a boolean if a field has been set.

### GetValidDate

`func (o *ProofConfig) GetValidDate() time.Time`

GetValidDate returns the ValidDate field if non-nil, zero value otherwise.

### GetValidDateOk

`func (o *ProofConfig) GetValidDateOk() (*time.Time, bool)`

GetValidDateOk returns a tuple with the ValidDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidDate

`func (o *ProofConfig) SetValidDate(v time.Time)`

SetValidDate sets ValidDate field to given value.

### HasValidDate

`func (o *ProofConfig) HasValidDate() bool`

HasValidDate returns a boolean if a field has been set.

### GetExpirationDate

`func (o *ProofConfig) GetExpirationDate() time.Time`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *ProofConfig) GetExpirationDateOk() (*time.Time, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *ProofConfig) SetExpirationDate(v time.Time)`

SetExpirationDate sets ExpirationDate field to given value.

### HasExpirationDate

`func (o *ProofConfig) HasExpirationDate() bool`

HasExpirationDate returns a boolean if a field has been set.

### GetDataProviderIdentifier

`func (o *ProofConfig) GetDataProviderIdentifier() string`

GetDataProviderIdentifier returns the DataProviderIdentifier field if non-nil, zero value otherwise.

### GetDataProviderIdentifierOk

`func (o *ProofConfig) GetDataProviderIdentifierOk() (*string, bool)`

GetDataProviderIdentifierOk returns a tuple with the DataProviderIdentifier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataProviderIdentifier

`func (o *ProofConfig) SetDataProviderIdentifier(v string)`

SetDataProviderIdentifier sets DataProviderIdentifier field to given value.

### HasDataProviderIdentifier

`func (o *ProofConfig) HasDataProviderIdentifier() bool`

HasDataProviderIdentifier returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


