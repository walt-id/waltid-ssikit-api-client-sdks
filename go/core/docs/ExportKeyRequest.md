# ExportKeyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KeyAlias** | **string** |  | 
**Format** | **string** |  | 
**ExportPrivate** | **bool** |  | 

## Methods

### NewExportKeyRequest

`func NewExportKeyRequest(keyAlias string, format string, exportPrivate bool, ) *ExportKeyRequest`

NewExportKeyRequest instantiates a new ExportKeyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportKeyRequestWithDefaults

`func NewExportKeyRequestWithDefaults() *ExportKeyRequest`

NewExportKeyRequestWithDefaults instantiates a new ExportKeyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKeyAlias

`func (o *ExportKeyRequest) GetKeyAlias() string`

GetKeyAlias returns the KeyAlias field if non-nil, zero value otherwise.

### GetKeyAliasOk

`func (o *ExportKeyRequest) GetKeyAliasOk() (*string, bool)`

GetKeyAliasOk returns a tuple with the KeyAlias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyAlias

`func (o *ExportKeyRequest) SetKeyAlias(v string)`

SetKeyAlias sets KeyAlias field to given value.


### GetFormat

`func (o *ExportKeyRequest) GetFormat() string`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *ExportKeyRequest) GetFormatOk() (*string, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *ExportKeyRequest) SetFormat(v string)`

SetFormat sets Format field to given value.


### GetExportPrivate

`func (o *ExportKeyRequest) GetExportPrivate() bool`

GetExportPrivate returns the ExportPrivate field if non-nil, zero value otherwise.

### GetExportPrivateOk

`func (o *ExportKeyRequest) GetExportPrivateOk() (*bool, bool)`

GetExportPrivateOk returns a tuple with the ExportPrivate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportPrivate

`func (o *ExportKeyRequest) SetExportPrivate(v bool)`

SetExportPrivate sets ExportPrivate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


