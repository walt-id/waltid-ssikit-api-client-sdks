
# ProofConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuerDid** | **kotlin.String** |  | 
**proofType** | [**inline**](#ProofType) |  | 
**subjectDid** | **kotlin.String** |  |  [optional]
**verifierDid** | **kotlin.String** |  |  [optional]
**issuerVerificationMethod** | **kotlin.String** |  |  [optional]
**domain** | **kotlin.String** |  |  [optional]
**nonce** | **kotlin.String** |  |  [optional]
**proofPurpose** | **kotlin.String** |  |  [optional]
**credentialId** | **kotlin.String** |  |  [optional]
**issueDate** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [optional]
**validDate** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [optional]
**expirationDate** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [optional]
**dataProviderIdentifier** | **kotlin.String** |  |  [optional]


<a name="ProofType"></a>
## Enum: proofType
Name | Value
---- | -----
proofType | JWT, LD_PROOF



