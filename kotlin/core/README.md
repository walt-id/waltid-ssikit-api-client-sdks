# org.openapitools.client - Kotlin client library for walt.id Core API

## Requires

* Kotlin 1.4.30
* Gradle 6.8.3

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in OpenAPI definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://core.ssikit.walt.id*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DecentralizedIdentifiersApi* | [**createDid**](docs/DecentralizedIdentifiersApi.md#createdid) | **POST** /v1/did/create | Create DID
*DecentralizedIdentifiersApi* | [**deleteDid**](docs/DecentralizedIdentifiersApi.md#deletedid) | **DELETE** /v1/did/{id} | Delete DID
*DecentralizedIdentifiersApi* | [**importDid**](docs/DecentralizedIdentifiersApi.md#importdid) | **POST** /v1/did/import | Import DID
*DecentralizedIdentifiersApi* | [**listDids**](docs/DecentralizedIdentifiersApi.md#listdids) | **GET** /v1/did | List DIDs
*DecentralizedIdentifiersApi* | [**loadDid**](docs/DecentralizedIdentifiersApi.md#loaddid) | **GET** /v1/did/{id} | Load DID
*DecentralizedIdentifiersApi* | [**resolveDid**](docs/DecentralizedIdentifiersApi.md#resolvedid) | **POST** /v1/did/resolve | Resolve DID
*DefaultApi* | [**getApiRoutes**](docs/DefaultApi.md#getapiroutes) | **GET** /api-routes | Get apiRoutes
*DefaultApi* | [**health**](docs/DefaultApi.md#health) | **GET** /health | Returns HTTP 200 in case all services are up and running
*DefaultApi* | [**presentVc**](docs/DefaultApi.md#presentvc) | **POST** /v1/vc/present | Present VC
*KeyManagementApi* | [**deleteKey**](docs/KeyManagementApi.md#deletekey) | **DELETE** /v1/key/{id} | Delete key
*KeyManagementApi* | [**exportKey**](docs/KeyManagementApi.md#exportkey) | **POST** /v1/key/export | Exports public and private key part (if supported by underlying keystore)
*KeyManagementApi* | [**genKey**](docs/KeyManagementApi.md#genkey) | **POST** /v1/key/gen | Generate key
*KeyManagementApi* | [**getV1KeyWithId**](docs/KeyManagementApi.md#getv1keywithid) | **GET** /v1/key/{id} | Load public key
*KeyManagementApi* | [**importKey**](docs/KeyManagementApi.md#importkey) | **POST** /v1/key/import | Import key
*KeyManagementApi* | [**listKeys**](docs/KeyManagementApi.md#listkeys) | **GET** /v1/key | List of key IDs
*VerifiableCredentialsApi* | [**createVc**](docs/VerifiableCredentialsApi.md#createvc) | **POST** /v1/vc/create | Create VC
*VerifiableCredentialsApi* | [**deleteVc**](docs/VerifiableCredentialsApi.md#deletevc) | **DELETE** /v1/vc/{id} | Delete VC
*VerifiableCredentialsApi* | [**importVc**](docs/VerifiableCredentialsApi.md#importvc) | **POST** /v1/vc/import | Import VC
*VerifiableCredentialsApi* | [**listVcs**](docs/VerifiableCredentialsApi.md#listvcs) | **GET** /v1/vc | List VCs
*VerifiableCredentialsApi* | [**loadVc**](docs/VerifiableCredentialsApi.md#loadvc) | **GET** /v1/vc/{id} | Load VC
*VerifiableCredentialsApi* | [**verifyVc**](docs/VerifiableCredentialsApi.md#verifyvc) | **POST** /v1/vc/verify | Verify VC


<a name="documentation-for-models"></a>
## Documentation for Models

 - [org.openapitools.client.models.CreateDidRequest](docs/CreateDidRequest.md)
 - [org.openapitools.client.models.CreateVcRequest](docs/CreateVcRequest.md)
 - [org.openapitools.client.models.ExportKeyRequest](docs/ExportKeyRequest.md)
 - [org.openapitools.client.models.GenKeyRequest](docs/GenKeyRequest.md)
 - [org.openapitools.client.models.KeyId](docs/KeyId.md)
 - [org.openapitools.client.models.PresentVcRequest](docs/PresentVcRequest.md)
 - [org.openapitools.client.models.ResolveDidRequest](docs/ResolveDidRequest.md)
 - [org.openapitools.client.models.VerifyVcRequest](docs/VerifyVcRequest.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="http"></a>
### http

- **Type**: HTTP basic authentication

