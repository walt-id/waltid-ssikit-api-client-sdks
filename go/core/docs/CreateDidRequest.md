# CreateDidRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | **string** |  | 
**KeyAlias** | Pointer to **string** |  | [optional] 

## Methods

### NewCreateDidRequest

`func NewCreateDidRequest(method string, ) *CreateDidRequest`

NewCreateDidRequest instantiates a new CreateDidRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateDidRequestWithDefaults

`func NewCreateDidRequestWithDefaults() *CreateDidRequest`

NewCreateDidRequestWithDefaults instantiates a new CreateDidRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMethod

`func (o *CreateDidRequest) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *CreateDidRequest) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *CreateDidRequest) SetMethod(v string)`

SetMethod sets Method field to given value.


### GetKeyAlias

`func (o *CreateDidRequest) GetKeyAlias() string`

GetKeyAlias returns the KeyAlias field if non-nil, zero value otherwise.

### GetKeyAliasOk

`func (o *CreateDidRequest) GetKeyAliasOk() (*string, bool)`

GetKeyAliasOk returns a tuple with the KeyAlias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyAlias

`func (o *CreateDidRequest) SetKeyAlias(v string)`

SetKeyAlias sets KeyAlias field to given value.

### HasKeyAlias

`func (o *CreateDidRequest) HasKeyAlias() bool`

HasKeyAlias returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


