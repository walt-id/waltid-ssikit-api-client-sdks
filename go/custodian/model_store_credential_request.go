/*
walt.id Custodian API

The walt.id public API documentation

API version: 1.1-SNAPSHOT
Contact: office@walt.id
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// StoreCredentialRequest struct for StoreCredentialRequest
type StoreCredentialRequest struct {
	Alias string `json:"alias"`
	Vc VerifiableCredential `json:"vc"`
}

// NewStoreCredentialRequest instantiates a new StoreCredentialRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStoreCredentialRequest(alias string, vc VerifiableCredential) *StoreCredentialRequest {
	this := StoreCredentialRequest{}
	this.Alias = alias
	this.Vc = vc
	return &this
}

// NewStoreCredentialRequestWithDefaults instantiates a new StoreCredentialRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStoreCredentialRequestWithDefaults() *StoreCredentialRequest {
	this := StoreCredentialRequest{}
	return &this
}

// GetAlias returns the Alias field value
func (o *StoreCredentialRequest) GetAlias() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Alias
}

// GetAliasOk returns a tuple with the Alias field value
// and a boolean to check if the value has been set.
func (o *StoreCredentialRequest) GetAliasOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Alias, true
}

// SetAlias sets field value
func (o *StoreCredentialRequest) SetAlias(v string) {
	o.Alias = v
}

// GetVc returns the Vc field value
func (o *StoreCredentialRequest) GetVc() VerifiableCredential {
	if o == nil {
		var ret VerifiableCredential
		return ret
	}

	return o.Vc
}

// GetVcOk returns a tuple with the Vc field value
// and a boolean to check if the value has been set.
func (o *StoreCredentialRequest) GetVcOk() (*VerifiableCredential, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Vc, true
}

// SetVc sets field value
func (o *StoreCredentialRequest) SetVc(v VerifiableCredential) {
	o.Vc = v
}

func (o StoreCredentialRequest) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["alias"] = o.Alias
	}
	if true {
		toSerialize["vc"] = o.Vc
	}
	return json.Marshal(toSerialize)
}

type NullableStoreCredentialRequest struct {
	value *StoreCredentialRequest
	isSet bool
}

func (v NullableStoreCredentialRequest) Get() *StoreCredentialRequest {
	return v.value
}

func (v *NullableStoreCredentialRequest) Set(val *StoreCredentialRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableStoreCredentialRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableStoreCredentialRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStoreCredentialRequest(val *StoreCredentialRequest) *NullableStoreCredentialRequest {
	return &NullableStoreCredentialRequest{value: val, isSet: true}
}

func (v NullableStoreCredentialRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStoreCredentialRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

