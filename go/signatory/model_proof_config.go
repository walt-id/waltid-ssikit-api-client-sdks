/*
walt.id Signatory API

The walt.id public API documentation

API version: 1.1-SNAPSHOT
Contact: office@walt.id
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"time"
)

// ProofConfig struct for ProofConfig
type ProofConfig struct {
	IssuerDid string `json:"issuerDid"`
	SubjectDid *string `json:"subjectDid,omitempty"`
	VerifierDid *string `json:"verifierDid,omitempty"`
	IssuerVerificationMethod *string `json:"issuerVerificationMethod,omitempty"`
	ProofType string `json:"proofType"`
	Domain *string `json:"domain,omitempty"`
	Nonce *string `json:"nonce,omitempty"`
	ProofPurpose *string `json:"proofPurpose,omitempty"`
	CredentialId *string `json:"credentialId,omitempty"`
	IssueDate *time.Time `json:"issueDate,omitempty"`
	ValidDate *time.Time `json:"validDate,omitempty"`
	ExpirationDate *time.Time `json:"expirationDate,omitempty"`
	DataProviderIdentifier *string `json:"dataProviderIdentifier,omitempty"`
}

// NewProofConfig instantiates a new ProofConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProofConfig(issuerDid string, proofType string) *ProofConfig {
	this := ProofConfig{}
	this.IssuerDid = issuerDid
	this.ProofType = proofType
	return &this
}

// NewProofConfigWithDefaults instantiates a new ProofConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProofConfigWithDefaults() *ProofConfig {
	this := ProofConfig{}
	return &this
}

// GetIssuerDid returns the IssuerDid field value
func (o *ProofConfig) GetIssuerDid() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.IssuerDid
}

// GetIssuerDidOk returns a tuple with the IssuerDid field value
// and a boolean to check if the value has been set.
func (o *ProofConfig) GetIssuerDidOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.IssuerDid, true
}

// SetIssuerDid sets field value
func (o *ProofConfig) SetIssuerDid(v string) {
	o.IssuerDid = v
}

// GetSubjectDid returns the SubjectDid field value if set, zero value otherwise.
func (o *ProofConfig) GetSubjectDid() string {
	if o == nil || o.SubjectDid == nil {
		var ret string
		return ret
	}
	return *o.SubjectDid
}

// GetSubjectDidOk returns a tuple with the SubjectDid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProofConfig) GetSubjectDidOk() (*string, bool) {
	if o == nil || o.SubjectDid == nil {
		return nil, false
	}
	return o.SubjectDid, true
}

// HasSubjectDid returns a boolean if a field has been set.
func (o *ProofConfig) HasSubjectDid() bool {
	if o != nil && o.SubjectDid != nil {
		return true
	}

	return false
}

// SetSubjectDid gets a reference to the given string and assigns it to the SubjectDid field.
func (o *ProofConfig) SetSubjectDid(v string) {
	o.SubjectDid = &v
}

// GetVerifierDid returns the VerifierDid field value if set, zero value otherwise.
func (o *ProofConfig) GetVerifierDid() string {
	if o == nil || o.VerifierDid == nil {
		var ret string
		return ret
	}
	return *o.VerifierDid
}

// GetVerifierDidOk returns a tuple with the VerifierDid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProofConfig) GetVerifierDidOk() (*string, bool) {
	if o == nil || o.VerifierDid == nil {
		return nil, false
	}
	return o.VerifierDid, true
}

// HasVerifierDid returns a boolean if a field has been set.
func (o *ProofConfig) HasVerifierDid() bool {
	if o != nil && o.VerifierDid != nil {
		return true
	}

	return false
}

// SetVerifierDid gets a reference to the given string and assigns it to the VerifierDid field.
func (o *ProofConfig) SetVerifierDid(v string) {
	o.VerifierDid = &v
}

// GetIssuerVerificationMethod returns the IssuerVerificationMethod field value if set, zero value otherwise.
func (o *ProofConfig) GetIssuerVerificationMethod() string {
	if o == nil || o.IssuerVerificationMethod == nil {
		var ret string
		return ret
	}
	return *o.IssuerVerificationMethod
}

// GetIssuerVerificationMethodOk returns a tuple with the IssuerVerificationMethod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProofConfig) GetIssuerVerificationMethodOk() (*string, bool) {
	if o == nil || o.IssuerVerificationMethod == nil {
		return nil, false
	}
	return o.IssuerVerificationMethod, true
}

// HasIssuerVerificationMethod returns a boolean if a field has been set.
func (o *ProofConfig) HasIssuerVerificationMethod() bool {
	if o != nil && o.IssuerVerificationMethod != nil {
		return true
	}

	return false
}

// SetIssuerVerificationMethod gets a reference to the given string and assigns it to the IssuerVerificationMethod field.
func (o *ProofConfig) SetIssuerVerificationMethod(v string) {
	o.IssuerVerificationMethod = &v
}

// GetProofType returns the ProofType field value
func (o *ProofConfig) GetProofType() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ProofType
}

// GetProofTypeOk returns a tuple with the ProofType field value
// and a boolean to check if the value has been set.
func (o *ProofConfig) GetProofTypeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ProofType, true
}

// SetProofType sets field value
func (o *ProofConfig) SetProofType(v string) {
	o.ProofType = v
}

// GetDomain returns the Domain field value if set, zero value otherwise.
func (o *ProofConfig) GetDomain() string {
	if o == nil || o.Domain == nil {
		var ret string
		return ret
	}
	return *o.Domain
}

// GetDomainOk returns a tuple with the Domain field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProofConfig) GetDomainOk() (*string, bool) {
	if o == nil || o.Domain == nil {
		return nil, false
	}
	return o.Domain, true
}

// HasDomain returns a boolean if a field has been set.
func (o *ProofConfig) HasDomain() bool {
	if o != nil && o.Domain != nil {
		return true
	}

	return false
}

// SetDomain gets a reference to the given string and assigns it to the Domain field.
func (o *ProofConfig) SetDomain(v string) {
	o.Domain = &v
}

// GetNonce returns the Nonce field value if set, zero value otherwise.
func (o *ProofConfig) GetNonce() string {
	if o == nil || o.Nonce == nil {
		var ret string
		return ret
	}
	return *o.Nonce
}

// GetNonceOk returns a tuple with the Nonce field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProofConfig) GetNonceOk() (*string, bool) {
	if o == nil || o.Nonce == nil {
		return nil, false
	}
	return o.Nonce, true
}

// HasNonce returns a boolean if a field has been set.
func (o *ProofConfig) HasNonce() bool {
	if o != nil && o.Nonce != nil {
		return true
	}

	return false
}

// SetNonce gets a reference to the given string and assigns it to the Nonce field.
func (o *ProofConfig) SetNonce(v string) {
	o.Nonce = &v
}

// GetProofPurpose returns the ProofPurpose field value if set, zero value otherwise.
func (o *ProofConfig) GetProofPurpose() string {
	if o == nil || o.ProofPurpose == nil {
		var ret string
		return ret
	}
	return *o.ProofPurpose
}

// GetProofPurposeOk returns a tuple with the ProofPurpose field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProofConfig) GetProofPurposeOk() (*string, bool) {
	if o == nil || o.ProofPurpose == nil {
		return nil, false
	}
	return o.ProofPurpose, true
}

// HasProofPurpose returns a boolean if a field has been set.
func (o *ProofConfig) HasProofPurpose() bool {
	if o != nil && o.ProofPurpose != nil {
		return true
	}

	return false
}

// SetProofPurpose gets a reference to the given string and assigns it to the ProofPurpose field.
func (o *ProofConfig) SetProofPurpose(v string) {
	o.ProofPurpose = &v
}

// GetCredentialId returns the CredentialId field value if set, zero value otherwise.
func (o *ProofConfig) GetCredentialId() string {
	if o == nil || o.CredentialId == nil {
		var ret string
		return ret
	}
	return *o.CredentialId
}

// GetCredentialIdOk returns a tuple with the CredentialId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProofConfig) GetCredentialIdOk() (*string, bool) {
	if o == nil || o.CredentialId == nil {
		return nil, false
	}
	return o.CredentialId, true
}

// HasCredentialId returns a boolean if a field has been set.
func (o *ProofConfig) HasCredentialId() bool {
	if o != nil && o.CredentialId != nil {
		return true
	}

	return false
}

// SetCredentialId gets a reference to the given string and assigns it to the CredentialId field.
func (o *ProofConfig) SetCredentialId(v string) {
	o.CredentialId = &v
}

// GetIssueDate returns the IssueDate field value if set, zero value otherwise.
func (o *ProofConfig) GetIssueDate() time.Time {
	if o == nil || o.IssueDate == nil {
		var ret time.Time
		return ret
	}
	return *o.IssueDate
}

// GetIssueDateOk returns a tuple with the IssueDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProofConfig) GetIssueDateOk() (*time.Time, bool) {
	if o == nil || o.IssueDate == nil {
		return nil, false
	}
	return o.IssueDate, true
}

// HasIssueDate returns a boolean if a field has been set.
func (o *ProofConfig) HasIssueDate() bool {
	if o != nil && o.IssueDate != nil {
		return true
	}

	return false
}

// SetIssueDate gets a reference to the given time.Time and assigns it to the IssueDate field.
func (o *ProofConfig) SetIssueDate(v time.Time) {
	o.IssueDate = &v
}

// GetValidDate returns the ValidDate field value if set, zero value otherwise.
func (o *ProofConfig) GetValidDate() time.Time {
	if o == nil || o.ValidDate == nil {
		var ret time.Time
		return ret
	}
	return *o.ValidDate
}

// GetValidDateOk returns a tuple with the ValidDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProofConfig) GetValidDateOk() (*time.Time, bool) {
	if o == nil || o.ValidDate == nil {
		return nil, false
	}
	return o.ValidDate, true
}

// HasValidDate returns a boolean if a field has been set.
func (o *ProofConfig) HasValidDate() bool {
	if o != nil && o.ValidDate != nil {
		return true
	}

	return false
}

// SetValidDate gets a reference to the given time.Time and assigns it to the ValidDate field.
func (o *ProofConfig) SetValidDate(v time.Time) {
	o.ValidDate = &v
}

// GetExpirationDate returns the ExpirationDate field value if set, zero value otherwise.
func (o *ProofConfig) GetExpirationDate() time.Time {
	if o == nil || o.ExpirationDate == nil {
		var ret time.Time
		return ret
	}
	return *o.ExpirationDate
}

// GetExpirationDateOk returns a tuple with the ExpirationDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProofConfig) GetExpirationDateOk() (*time.Time, bool) {
	if o == nil || o.ExpirationDate == nil {
		return nil, false
	}
	return o.ExpirationDate, true
}

// HasExpirationDate returns a boolean if a field has been set.
func (o *ProofConfig) HasExpirationDate() bool {
	if o != nil && o.ExpirationDate != nil {
		return true
	}

	return false
}

// SetExpirationDate gets a reference to the given time.Time and assigns it to the ExpirationDate field.
func (o *ProofConfig) SetExpirationDate(v time.Time) {
	o.ExpirationDate = &v
}

// GetDataProviderIdentifier returns the DataProviderIdentifier field value if set, zero value otherwise.
func (o *ProofConfig) GetDataProviderIdentifier() string {
	if o == nil || o.DataProviderIdentifier == nil {
		var ret string
		return ret
	}
	return *o.DataProviderIdentifier
}

// GetDataProviderIdentifierOk returns a tuple with the DataProviderIdentifier field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProofConfig) GetDataProviderIdentifierOk() (*string, bool) {
	if o == nil || o.DataProviderIdentifier == nil {
		return nil, false
	}
	return o.DataProviderIdentifier, true
}

// HasDataProviderIdentifier returns a boolean if a field has been set.
func (o *ProofConfig) HasDataProviderIdentifier() bool {
	if o != nil && o.DataProviderIdentifier != nil {
		return true
	}

	return false
}

// SetDataProviderIdentifier gets a reference to the given string and assigns it to the DataProviderIdentifier field.
func (o *ProofConfig) SetDataProviderIdentifier(v string) {
	o.DataProviderIdentifier = &v
}

func (o ProofConfig) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["issuerDid"] = o.IssuerDid
	}
	if o.SubjectDid != nil {
		toSerialize["subjectDid"] = o.SubjectDid
	}
	if o.VerifierDid != nil {
		toSerialize["verifierDid"] = o.VerifierDid
	}
	if o.IssuerVerificationMethod != nil {
		toSerialize["issuerVerificationMethod"] = o.IssuerVerificationMethod
	}
	if true {
		toSerialize["proofType"] = o.ProofType
	}
	if o.Domain != nil {
		toSerialize["domain"] = o.Domain
	}
	if o.Nonce != nil {
		toSerialize["nonce"] = o.Nonce
	}
	if o.ProofPurpose != nil {
		toSerialize["proofPurpose"] = o.ProofPurpose
	}
	if o.CredentialId != nil {
		toSerialize["credentialId"] = o.CredentialId
	}
	if o.IssueDate != nil {
		toSerialize["issueDate"] = o.IssueDate
	}
	if o.ValidDate != nil {
		toSerialize["validDate"] = o.ValidDate
	}
	if o.ExpirationDate != nil {
		toSerialize["expirationDate"] = o.ExpirationDate
	}
	if o.DataProviderIdentifier != nil {
		toSerialize["dataProviderIdentifier"] = o.DataProviderIdentifier
	}
	return json.Marshal(toSerialize)
}

type NullableProofConfig struct {
	value *ProofConfig
	isSet bool
}

func (v NullableProofConfig) Get() *ProofConfig {
	return v.value
}

func (v *NullableProofConfig) Set(val *ProofConfig) {
	v.value = val
	v.isSet = true
}

func (v NullableProofConfig) IsSet() bool {
	return v.isSet
}

func (v *NullableProofConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProofConfig(val *ProofConfig) *NullableProofConfig {
	return &NullableProofConfig{value: val, isSet: true}
}

func (v NullableProofConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProofConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


