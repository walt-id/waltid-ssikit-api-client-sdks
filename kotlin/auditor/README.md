# org.openapitools.client - Kotlin client library for walt.id Auditor API

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

All URIs are relative to *https://auditor.ssikit.walt.id*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**getApiRoutes**](docs/DefaultApi.md#getapiroutes) | **GET** /api-routes | Get apiRoutes
*DefaultApi* | [**health**](docs/DefaultApi.md#health) | **GET** /health | Returns HTTP 200 in case all services are up and running
*VerificationPoliciesApi* | [**listPolicies**](docs/VerificationPoliciesApi.md#listpolicies) | **GET** /v1/policies | List verification policies
*VerificationPoliciesApi* | [**verifyVP**](docs/VerificationPoliciesApi.md#verifyvp) | **POST** /v1/verify | Verify a W3C VerifiableCredential or VerifiablePresentation


<a name="documentation-for-models"></a>
## Documentation for Models

 - [org.openapitools.client.models.VerificationPolicy](docs/VerificationPolicy.md)
 - [org.openapitools.client.models.VerificationResult](docs/VerificationResult.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="http"></a>
### http

- **Type**: HTTP basic authentication

