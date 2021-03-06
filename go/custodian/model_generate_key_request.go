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

// GenerateKeyRequest struct for GenerateKeyRequest
type GenerateKeyRequest struct {
	KeyAlgorithm string `json:"keyAlgorithm"`
}

// NewGenerateKeyRequest instantiates a new GenerateKeyRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGenerateKeyRequest(keyAlgorithm string) *GenerateKeyRequest {
	this := GenerateKeyRequest{}
	this.KeyAlgorithm = keyAlgorithm
	return &this
}

// NewGenerateKeyRequestWithDefaults instantiates a new GenerateKeyRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGenerateKeyRequestWithDefaults() *GenerateKeyRequest {
	this := GenerateKeyRequest{}
	return &this
}

// GetKeyAlgorithm returns the KeyAlgorithm field value
func (o *GenerateKeyRequest) GetKeyAlgorithm() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.KeyAlgorithm
}

// GetKeyAlgorithmOk returns a tuple with the KeyAlgorithm field value
// and a boolean to check if the value has been set.
func (o *GenerateKeyRequest) GetKeyAlgorithmOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.KeyAlgorithm, true
}

// SetKeyAlgorithm sets field value
func (o *GenerateKeyRequest) SetKeyAlgorithm(v string) {
	o.KeyAlgorithm = v
}

func (o GenerateKeyRequest) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["keyAlgorithm"] = o.KeyAlgorithm
	}
	return json.Marshal(toSerialize)
}

type NullableGenerateKeyRequest struct {
	value *GenerateKeyRequest
	isSet bool
}

func (v NullableGenerateKeyRequest) Get() *GenerateKeyRequest {
	return v.value
}

func (v *NullableGenerateKeyRequest) Set(val *GenerateKeyRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableGenerateKeyRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableGenerateKeyRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGenerateKeyRequest(val *GenerateKeyRequest) *NullableGenerateKeyRequest {
	return &NullableGenerateKeyRequest{value: val, isSet: true}
}

func (v NullableGenerateKeyRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGenerateKeyRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


