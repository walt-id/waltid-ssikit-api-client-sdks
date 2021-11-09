# PresentVcRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Vc** | **string** |  | 
**HolderDid** | **string** |  | 
**Domain** | Pointer to **string** |  | [optional] 
**Challenge** | Pointer to **string** |  | [optional] 

## Methods

### NewPresentVcRequest

`func NewPresentVcRequest(vc string, holderDid string, ) *PresentVcRequest`

NewPresentVcRequest instantiates a new PresentVcRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPresentVcRequestWithDefaults

`func NewPresentVcRequestWithDefaults() *PresentVcRequest`

NewPresentVcRequestWithDefaults instantiates a new PresentVcRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVc

`func (o *PresentVcRequest) GetVc() string`

GetVc returns the Vc field if non-nil, zero value otherwise.

### GetVcOk

`func (o *PresentVcRequest) GetVcOk() (*string, bool)`

GetVcOk returns a tuple with the Vc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVc

`func (o *PresentVcRequest) SetVc(v string)`

SetVc sets Vc field to given value.


### GetHolderDid

`func (o *PresentVcRequest) GetHolderDid() string`

GetHolderDid returns the HolderDid field if non-nil, zero value otherwise.

### GetHolderDidOk

`func (o *PresentVcRequest) GetHolderDidOk() (*string, bool)`

GetHolderDidOk returns a tuple with the HolderDid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHolderDid

`func (o *PresentVcRequest) SetHolderDid(v string)`

SetHolderDid sets HolderDid field to given value.


### GetDomain

`func (o *PresentVcRequest) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *PresentVcRequest) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *PresentVcRequest) SetDomain(v string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *PresentVcRequest) HasDomain() bool`

HasDomain returns a boolean if a field has been set.

### GetChallenge

`func (o *PresentVcRequest) GetChallenge() string`

GetChallenge returns the Challenge field if non-nil, zero value otherwise.

### GetChallengeOk

`func (o *PresentVcRequest) GetChallengeOk() (*string, bool)`

GetChallengeOk returns a tuple with the Challenge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChallenge

`func (o *PresentVcRequest) SetChallenge(v string)`

SetChallenge sets Challenge field to given value.

### HasChallenge

`func (o *PresentVcRequest) HasChallenge() bool`

HasChallenge returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


