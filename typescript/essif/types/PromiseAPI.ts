import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { EbsiOnboardRequest } from '../models/EbsiOnboardRequest';
import { ErrorResponse } from '../models/ErrorResponse';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get apiRoutes
     */
    public getApiRoutes(_options?: Configuration): Promise<void> {
        const result = this.api.getApiRoutes(_options);
        return result.toPromise();
    }

    /**
     * Returns HTTP 200 in case all services are up and running
     */
    public health(_options?: Configuration): Promise<string> {
        const result = this.api.health(_options);
        return result.toPromise();
    }

    /**
     * Post test enterprise wallet authenticationRequests
     */
    public postTestEnterpriseWalletAuthenticationRequests(_options?: Configuration): Promise<void> {
        const result = this.api.postTestEnterpriseWalletAuthenticationRequests(_options);
        return result.toPromise();
    }


}



import { ObservableESSIFClientApi } from './ObservableAPI';

import { ESSIFClientApiRequestFactory, ESSIFClientApiResponseProcessor} from "../apis/ESSIFClientApi";
export class PromiseESSIFClientApi {
    private api: ObservableESSIFClientApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ESSIFClientApiRequestFactory,
        responseProcessor?: ESSIFClientApiResponseProcessor
    ) {
        this.api = new ObservableESSIFClientApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Runs the ESSIF Authorization API flow
     * @param body DID
     */
    public createDid(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.createDid(body, _options);
        return result.toPromise();
    }

    /**
     * EBSI onboarding flow, which requests a Verifiable Authorization from the EOS.
     * @param ebsiOnboardRequest DID to be registered on the EBSI Blockchain; Bearer token to be used to authenticate the user. Get it from here https://app.preprod.ebsi.eu/users-onboarding
     */
    public onboard(ebsiOnboardRequest?: EbsiOnboardRequest, _options?: Configuration): Promise<string> {
        const result = this.api.onboard(ebsiOnboardRequest, _options);
        return result.toPromise();
    }

    /**
     * Registers DID on the EBSI Blockchain
     * @param body DID
     */
    public registerDid(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.registerDid(body, _options);
        return result.toPromise();
    }


}



import { ObservableESSIFEnterpriseWalletApi } from './ObservableAPI';

import { ESSIFEnterpriseWalletApiRequestFactory, ESSIFEnterpriseWalletApiResponseProcessor} from "../apis/ESSIFEnterpriseWalletApi";
export class PromiseESSIFEnterpriseWalletApi {
    private api: ObservableESSIFEnterpriseWalletApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ESSIFEnterpriseWalletApiRequestFactory,
        responseProcessor?: ESSIFEnterpriseWalletApiResponseProcessor
    ) {
        this.api = new ObservableESSIFEnterpriseWalletApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and registers DID on the EBSI Blockchain
     * @param body Verifiable Authorization
     */
    public createEnterpriseDid(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.createEnterpriseDid(body, _options);
        return result.toPromise();
    }

    /**
     * Generates a DID Auth Request
     */
    public generateDidAuthRequest(_options?: Configuration): Promise<string> {
        const result = this.api.generateDidAuthRequest(_options);
        return result.toPromise();
    }

    /**
     * Returns DID Auth Request or the requested credential if a VC Token is presented
     */
    public getCredential(_options?: Configuration): Promise<string> {
        const result = this.api.getCredential(_options);
        return result.toPromise();
    }

    /**
     * Returns DID Auth Request or the requested credential if a VC Token is presented
     * @param credentialId 
     */
    public getCredential_1(credentialId: string, _options?: Configuration): Promise<string> {
        const result = this.api.getCredential_1(credentialId, _options);
        return result.toPromise();
    }

    /**
     * Generates the DID ownership response and fetches the requested credential.
     * @param body DID ownership request
     */
    public getVerifiableCredential(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.getVerifiableCredential(body, _options);
        return result.toPromise();
    }

    /**
     * Request Verifiable Authorization. Returns the DID ownership request.
     * @param body DID to be registered
     */
    public onboards(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.onboards(body, _options);
        return result.toPromise();
    }

    /**
     * Creates an OIDC authentication request URI.
     */
    public requestCredentialUri(_options?: Configuration): Promise<string> {
        const result = this.api.requestCredentialUri(_options);
        return result.toPromise();
    }

    /**
     * Request credential
     * @param body Credential Request URI
     */
    public requestEnterpriseVerifiableCredential(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.requestEnterpriseVerifiableCredential(body, _options);
        return result.toPromise();
    }

    /**
     * Performs DID Auth in order to obtain a Verifiable Authorization
     * @param body Access Token
     */
    public requestVerifiableAuthorization(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.requestVerifiableAuthorization(body, _options);
        return result.toPromise();
    }

    /**
     * Returns the DID ownership request
     * @param body Credential request URI
     */
    public requestVerifiableCredential(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.requestVerifiableCredential(body, _options);
        return result.toPromise();
    }

    /**
     * Processes the signed challenge in the scope of DID Auth and if successful, returns the Verifiable Authorization
     * @param body Signed challenge
     */
    public signedChallenge(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.signedChallenge(body, _options);
        return result.toPromise();
    }

    /**
     * OIDC Token endpoint
     * @param body oidcAuthResp
     */
    public token(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.token(body, _options);
        return result.toPromise();
    }

    /**
     * Validates a DID Auth response
     * @param body DID Auth Response
     */
    public validateDidAuthResponse(body?: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.validateDidAuthResponse(body, _options);
        return result.toPromise();
    }


}



import { ObservableESSIFUserWalletApi } from './ObservableAPI';

import { ESSIFUserWalletApiRequestFactory, ESSIFUserWalletApiResponseProcessor} from "../apis/ESSIFUserWalletApi";
export class PromiseESSIFUserWalletApi {
    private api: ObservableESSIFUserWalletApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ESSIFUserWalletApiRequestFactory,
        responseProcessor?: ESSIFUserWalletApiResponseProcessor
    ) {
        this.api = new ObservableESSIFUserWalletApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and registers DID on the EBSI Blockchain
     * @param body Verifiable Authorization
     */
    public createUserDid(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.createUserDid(body, _options);
        return result.toPromise();
    }

    /**
     * Generates and sends the DID Auth Response message.
     * @param body DID Auth Request
     */
    public didAuthResponse(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.didAuthResponse(body, _options);
        return result.toPromise();
    }

    /**
     * Generates a OIDC Auth Response message.
     * @param body todo
     */
    public oidcAuthResponse(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.oidcAuthResponse(body, _options);
        return result.toPromise();
    }

    /**
     * Runs the authentication-protocol and returns the JWT Access Token for accessing the protected EBSI services.
     * @param body The Verifiable Authorization
     */
    public requestAccessToken(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.requestAccessToken(body, _options);
        return result.toPromise();
    }

    /**
     * Validates a DID Auth request.
     * @param body DID Auth request
     */
    public validateDidAuthRequest(body?: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.validateDidAuthRequest(body, _options);
        return result.toPromise();
    }

    /**
     * Generates a VC Auth Response message.
     * @param body VC Exchange Request
     */
    public vcAuthResponse(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.vcAuthResponse(body, _options);
        return result.toPromise();
    }


}



import { ObservableTrustedIssuerApi } from './ObservableAPI';

import { TrustedIssuerApiRequestFactory, TrustedIssuerApiResponseProcessor} from "../apis/TrustedIssuerApi";
export class PromiseTrustedIssuerApi {
    private api: ObservableTrustedIssuerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TrustedIssuerApiRequestFactory,
        responseProcessor?: TrustedIssuerApiResponseProcessor
    ) {
        this.api = new ObservableTrustedIssuerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generates a DID-SIOP Auth Request.
     */
    public generateAuthenticationRequest(_options?: Configuration): Promise<string> {
        const result = this.api.generateAuthenticationRequest(_options);
        return result.toPromise();
    }

    /**
     * Establishes a mutual authenticated DID-SIOP session.
     */
    public openSession(_options?: Configuration): Promise<string> {
        const result = this.api.openSession(_options);
        return result.toPromise();
    }


}



