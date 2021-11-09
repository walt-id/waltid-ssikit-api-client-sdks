# StoreCredentialRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alias** | **string** |  | 
**Vc** | [**VerifiableCredential**](VerifiableCredential.md) |  | 

## Methods

### NewStoreCredentialRequest

`func NewStoreCredentialRequest(alias string, vc VerifiableCredential, ) *StoreCredentialRequest`

NewStoreCredentialRequest instantiates a new StoreCredentialRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStoreCredentialRequestWithDefaults

`func NewStoreCredentialRequestWithDefaults() *StoreCredentialRequest`

NewStoreCredentialRequestWithDefaults instantiates a new StoreCredentialRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlias

`func (o *StoreCredentialRequest) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *StoreCredentialRequest) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *StoreCredentialRequest) SetAlias(v string)`

SetAlias sets Alias field to given value.


### GetVc

`func (o *StoreCredentialRequest) GetVc() VerifiableCredential`

GetVc returns the Vc field if non-nil, zero value otherwise.

### GetVcOk

`func (o *StoreCredentialRequest) GetVcOk() (*VerifiableCredential, bool)`

GetVcOk returns a tuple with the Vc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVc

`func (o *StoreCredentialRequest) SetVc(v VerifiableCredential)`

SetVc sets Vc field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


