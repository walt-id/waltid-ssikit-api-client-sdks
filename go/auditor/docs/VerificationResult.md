# VerificationResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OverallStatus** | **bool** |  | 
**PolicyResults** | **map[string]bool** |  | 

## Methods

### NewVerificationResult

`func NewVerificationResult(overallStatus bool, policyResults map[string]bool, ) *VerificationResult`

NewVerificationResult instantiates a new VerificationResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerificationResultWithDefaults

`func NewVerificationResultWithDefaults() *VerificationResult`

NewVerificationResultWithDefaults instantiates a new VerificationResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOverallStatus

`func (o *VerificationResult) GetOverallStatus() bool`

GetOverallStatus returns the OverallStatus field if non-nil, zero value otherwise.

### GetOverallStatusOk

`func (o *VerificationResult) GetOverallStatusOk() (*bool, bool)`

GetOverallStatusOk returns a tuple with the OverallStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverallStatus

`func (o *VerificationResult) SetOverallStatus(v bool)`

SetOverallStatus sets OverallStatus field to given value.


### GetPolicyResults

`func (o *VerificationResult) GetPolicyResults() map[string]bool`

GetPolicyResults returns the PolicyResults field if non-nil, zero value otherwise.

### GetPolicyResultsOk

`func (o *VerificationResult) GetPolicyResultsOk() (*map[string]bool, bool)`

GetPolicyResultsOk returns a tuple with the PolicyResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyResults

`func (o *VerificationResult) SetPolicyResults(v map[string]bool)`

SetPolicyResults sets PolicyResults field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


