# org.openapitools.client - Kotlin client library for walt.id Signatory API

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

All URIs are relative to *https://signatory.ssikit.walt.id*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CredentialsApi* | [**issue**](docs/CredentialsApi.md#issue) | **POST** /v1/credentials/issue | Issue a credential
*DefaultApi* | [**getApiRoutes**](docs/DefaultApi.md#getapiroutes) | **GET** /api-routes | Get apiRoutes
*DefaultApi* | [**health**](docs/DefaultApi.md#health) | **GET** /health | Returns HTTP 200 in case all services are up and running
*VerifiableCredentialsApi* | [**listTemplates**](docs/VerifiableCredentialsApi.md#listtemplates) | **GET** /v1/templates | List VC templates
*VerifiableCredentialsApi* | [**loadTemplate**](docs/VerifiableCredentialsApi.md#loadtemplate) | **GET** /v1/templates/{id} | Load a VC template


<a name="documentation-for-models"></a>
## Documentation for Models

 - [org.openapitools.client.models.IssueCredentialRequest](docs/IssueCredentialRequest.md)
 - [org.openapitools.client.models.ProofConfig](docs/ProofConfig.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="http"></a>
### http

- **Type**: HTTP basic authentication

