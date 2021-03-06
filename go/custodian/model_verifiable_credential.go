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

// VerifiableCredential struct for VerifiableCredential
type VerifiableCredential struct {
	Type []string `json:"type"`
	Json *string `json:"json,omitempty"`
	Jwt *string `json:"jwt,omitempty"`
	Id *string `json:"id,omitempty"`
}

// NewVerifiableCredential instantiates a new VerifiableCredential object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewVerifiableCredential(type_ []string) *VerifiableCredential {
	this := VerifiableCredential{}
	this.Type = type_
	return &this
}

// NewVerifiableCredentialWithDefaults instantiates a new VerifiableCredential object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewVerifiableCredentialWithDefaults() *VerifiableCredential {
	this := VerifiableCredential{}
	return &this
}

// GetType returns the Type field value
func (o *VerifiableCredential) GetType() []string {
	if o == nil {
		var ret []string
		return ret
	}

	return o.Type
}

// GetTypeOk returns a tuple with the Type field value
// and a boolean to check if the value has been set.
func (o *VerifiableCredential) GetTypeOk() (*[]string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Type, true
}

// SetType sets field value
func (o *VerifiableCredential) SetType(v []string) {
	o.Type = v
}

// GetJson returns the Json field value if set, zero value otherwise.
func (o *VerifiableCredential) GetJson() string {
	if o == nil || o.Json == nil {
		var ret string
		return ret
	}
	return *o.Json
}

// GetJsonOk returns a tuple with the Json field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VerifiableCredential) GetJsonOk() (*string, bool) {
	if o == nil || o.Json == nil {
		return nil, false
	}
	return o.Json, true
}

// HasJson returns a boolean if a field has been set.
func (o *VerifiableCredential) HasJson() bool {
	if o != nil && o.Json != nil {
		return true
	}

	return false
}

// SetJson gets a reference to the given string and assigns it to the Json field.
func (o *VerifiableCredential) SetJson(v string) {
	o.Json = &v
}

// GetJwt returns the Jwt field value if set, zero value otherwise.
func (o *VerifiableCredential) GetJwt() string {
	if o == nil || o.Jwt == nil {
		var ret string
		return ret
	}
	return *o.Jwt
}

// GetJwtOk returns a tuple with the Jwt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VerifiableCredential) GetJwtOk() (*string, bool) {
	if o == nil || o.Jwt == nil {
		return nil, false
	}
	return o.Jwt, true
}

// HasJwt returns a boolean if a field has been set.
func (o *VerifiableCredential) HasJwt() bool {
	if o != nil && o.Jwt != nil {
		return true
	}

	return false
}

// SetJwt gets a reference to the given string and assigns it to the Jwt field.
func (o *VerifiableCredential) SetJwt(v string) {
	o.Jwt = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *VerifiableCredential) GetId() string {
	if o == nil || o.Id == nil {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VerifiableCredential) GetIdOk() (*string, bool) {
	if o == nil || o.Id == nil {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *VerifiableCredential) HasId() bool {
	if o != nil && o.Id != nil {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *VerifiableCredential) SetId(v string) {
	o.Id = &v
}

func (o VerifiableCredential) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["type"] = o.Type
	}
	if o.Json != nil {
		toSerialize["json"] = o.Json
	}
	if o.Jwt != nil {
		toSerialize["jwt"] = o.Jwt
	}
	if o.Id != nil {
		toSerialize["id"] = o.Id
	}
	return json.Marshal(toSerialize)
}

type NullableVerifiableCredential struct {
	value *VerifiableCredential
	isSet bool
}

func (v NullableVerifiableCredential) Get() *VerifiableCredential {
	return v.value
}

func (v *NullableVerifiableCredential) Set(val *VerifiableCredential) {
	v.value = val
	v.isSet = true
}

func (v NullableVerifiableCredential) IsSet() bool {
	return v.isSet
}

func (v *NullableVerifiableCredential) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableVerifiableCredential(val *VerifiableCredential) *NullableVerifiableCredential {
	return &NullableVerifiableCredential{value: val, isSet: true}
}

func (v NullableVerifiableCredential) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableVerifiableCredential) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


