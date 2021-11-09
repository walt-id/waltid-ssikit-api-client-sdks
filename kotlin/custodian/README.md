# org.openapitools.client - Kotlin client library for walt.id Custodian API

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

All URIs are relative to *https://custodian.ssikit.walt.id*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CredentialsApi* | [**deleteCredential**](docs/CredentialsApi.md#deletecredential) | **DELETE** /credentials/{alias} | Deletes a specific credential by alias
*CredentialsApi* | [**getCredential**](docs/CredentialsApi.md#getcredential) | **GET** /credentials/{id} | Gets a specific Credential by id
*CredentialsApi* | [**listCredentialIds**](docs/CredentialsApi.md#listcredentialids) | **GET** /credentials/listCredentialIds | Lists all credential IDs the custodian knows of
*CredentialsApi* | [**listCredentials**](docs/CredentialsApi.md#listcredentials) | **GET** /credentials | Lists all credentials the custodian knows of
*CredentialsApi* | [**storeCredential**](docs/CredentialsApi.md#storecredential) | **PUT** /credentials/{alias} | Stores a credential
*DefaultApi* | [**getApiRoutes**](docs/DefaultApi.md#getapiroutes) | **GET** /api-routes | Get apiRoutes
*DefaultApi* | [**health**](docs/DefaultApi.md#health) | **GET** /health | Returns HTTP 200 in case all services are up and running
*KeysApi* | [**deleteKey**](docs/KeysApi.md#deletekey) | **DELETE** /keys/{id} | Deletes a specific key
*KeysApi* | [**generateKey**](docs/KeysApi.md#generatekey) | **POST** /keys/generate | Generates a key with a specific key algorithm
*KeysApi* | [**getKey**](docs/KeysApi.md#getkey) | **GET** /keys/{alias} | Gets a key specified by its alias
*KeysApi* | [**listKeys**](docs/KeysApi.md#listkeys) | **GET** /keys | Lists all keys the custodian knows of
*KeysApi* | [**storeKey**](docs/KeysApi.md#storekey) | **PUT** /keys/store | Stores a key


<a name="documentation-for-models"></a>
## Documentation for Models

 - [org.openapitools.client.models.GenerateKeyRequest](docs/GenerateKeyRequest.md)
 - [org.openapitools.client.models.StoreCredentialRequest](docs/StoreCredentialRequest.md)
 - [org.openapitools.client.models.VerifiableCredential](docs/VerifiableCredential.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
