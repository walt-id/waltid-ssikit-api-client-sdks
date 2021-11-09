# org.openapitools.client - Kotlin client library for walt.id ESSIF API

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

All URIs are relative to *https://essif.ssikit.walt.id*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**getApiRoutes**](docs/DefaultApi.md#getapiroutes) | **GET** /api-routes | Get apiRoutes
*DefaultApi* | [**health**](docs/DefaultApi.md#health) | **GET** /health | Returns HTTP 200 in case all services are up and running
*DefaultApi* | [**postTestEnterpriseWalletAuthenticationRequests**](docs/DefaultApi.md#posttestenterprisewalletauthenticationrequests) | **POST** /test/enterprise/wallet/authentication-requests | Post test enterprise wallet authenticationRequests
*ESSIFClientApi* | [**createDid**](docs/ESSIFClientApi.md#createdid) | **POST** /v1/client/auth | Runs the ESSIF Authorization API flow
*ESSIFClientApi* | [**onboard**](docs/ESSIFClientApi.md#onboard) | **POST** /v1/client/onboard | EBSI onboarding flow, which requests a Verifiable Authorization from the EOS.
*ESSIFClientApi* | [**registerDid**](docs/ESSIFClientApi.md#registerdid) | **POST** /v1/client/registerDid | Registers DID on the EBSI Blockchain
*ESSIFEnterpriseWalletApi* | [**createEnterpriseDid**](docs/ESSIFEnterpriseWalletApi.md#createenterprisedid) | **POST** /test/enterprise/wallet/createDid | Creates and registers DID on the EBSI Blockchain
*ESSIFEnterpriseWalletApi* | [**generateDidAuthRequest**](docs/ESSIFEnterpriseWalletApi.md#generatedidauthrequest) | **POST** /test/enterprise/wallet/generateDidAuthRequest | Generates a DID Auth Request
*ESSIFEnterpriseWalletApi* | [**getCredential**](docs/ESSIFEnterpriseWalletApi.md#getcredential) | **POST** /test/ti/credentials | Returns DID Auth Request or the requested credential if a VC Token is presented
*ESSIFEnterpriseWalletApi* | [**getCredential_0**](docs/ESSIFEnterpriseWalletApi.md#getcredential_0) | **GET** /test/ti/credentials/{credentialId} | Returns DID Auth Request or the requested credential if a VC Token is presented
*ESSIFEnterpriseWalletApi* | [**getVerifiableCredential**](docs/ESSIFEnterpriseWalletApi.md#getverifiablecredential) | **POST** /test/enterprise/wallet/getVerifiableCredential | Generates the DID ownership response and fetches the requested credential.
*ESSIFEnterpriseWalletApi* | [**onboards**](docs/ESSIFEnterpriseWalletApi.md#onboards) | **POST** /test/eos/onboard | Request Verifiable Authorization. Returns the DID ownership request.
*ESSIFEnterpriseWalletApi* | [**requestCredentialUri**](docs/ESSIFEnterpriseWalletApi.md#requestcredentialuri) | **GET** /test/ti/requestCredentialUri | Creates an OIDC authentication request URI.
*ESSIFEnterpriseWalletApi* | [**requestEnterpriseVerifiableCredential**](docs/ESSIFEnterpriseWalletApi.md#requestenterpriseverifiablecredential) | **POST** /test/enterprise/wallet/requestVerifiableCredential | Request credential
*ESSIFEnterpriseWalletApi* | [**requestVerifiableAuthorization**](docs/ESSIFEnterpriseWalletApi.md#requestverifiableauthorization) | **POST** /test/enterprise/wallet/requestVerifiableAuthorization | Performs DID Auth in order to obtain a Verifiable Authorization
*ESSIFEnterpriseWalletApi* | [**requestVerifiableCredential**](docs/ESSIFEnterpriseWalletApi.md#requestverifiablecredential) | **POST** /test/ti/requestVerifiableCredential | Returns the DID ownership request
*ESSIFEnterpriseWalletApi* | [**signedChallenge**](docs/ESSIFEnterpriseWalletApi.md#signedchallenge) | **POST** /test/eos/signedChallenge | Processes the signed challenge in the scope of DID Auth and if successful, returns the Verifiable Authorization
*ESSIFEnterpriseWalletApi* | [**token**](docs/ESSIFEnterpriseWalletApi.md#token) | **POST** /test/enterprise/wallet/token | OIDC Token endpoint
*ESSIFEnterpriseWalletApi* | [**validateDidAuthResponse**](docs/ESSIFEnterpriseWalletApi.md#validatedidauthresponse) | **POST** /test/enterprise/wallet/validateDidAuthResponse | Validates a DID Auth response
*ESSIFUserWalletApi* | [**createUserDid**](docs/ESSIFUserWalletApi.md#createuserdid) | **POST** /test/user/wallet/createDid | Creates and registers DID on the EBSI Blockchain
*ESSIFUserWalletApi* | [**didAuthResponse**](docs/ESSIFUserWalletApi.md#didauthresponse) | **POST** /test/user/wallet/didAuthResponse | Generates and sends the DID Auth Response message.
*ESSIFUserWalletApi* | [**oidcAuthResponse**](docs/ESSIFUserWalletApi.md#oidcauthresponse) | **POST** /test/user/wallet/oidcAuthResponse | Generates a OIDC Auth Response message.
*ESSIFUserWalletApi* | [**requestAccessToken**](docs/ESSIFUserWalletApi.md#requestaccesstoken) | **POST** /test/user/wallet/requestAccessToken | Runs the authentication-protocol and returns the JWT Access Token for accessing the protected EBSI services.
*ESSIFUserWalletApi* | [**validateDidAuthRequest**](docs/ESSIFUserWalletApi.md#validatedidauthrequest) | **POST** /test/user/wallet/validateDidAuthRequest | Validates a DID Auth request.
*ESSIFUserWalletApi* | [**vcAuthResponse**](docs/ESSIFUserWalletApi.md#vcauthresponse) | **POST** /test/user/wallet/vcAuthResponse | Generates a VC Auth Response message.
*TrustedIssuerApi* | [**generateAuthenticationRequest**](docs/TrustedIssuerApi.md#generateauthenticationrequest) | **POST** /v1/trusted-issuer/generateAuthenticationRequest | Generates a DID-SIOP Auth Request.
*TrustedIssuerApi* | [**openSession**](docs/TrustedIssuerApi.md#opensession) | **POST** /v1/trusted-issuer/openSession | Establishes a mutual authenticated DID-SIOP session.


<a name="documentation-for-models"></a>
## Documentation for Models

 - [org.openapitools.client.models.EbsiOnboardRequest](docs/EbsiOnboardRequest.md)
 - [org.openapitools.client.models.ErrorResponse](docs/ErrorResponse.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="http"></a>
### http

- **Type**: HTTP basic authentication

