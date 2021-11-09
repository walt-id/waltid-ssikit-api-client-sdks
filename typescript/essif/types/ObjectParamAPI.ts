import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { EbsiOnboardRequest } from '../models/EbsiOnboardRequest';
import { ErrorResponse } from '../models/ErrorResponse';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetApiRoutesRequest {
}

export interface DefaultApiHealthRequest {
}

export interface DefaultApiPostTestEnterpriseWalletAuthenticationRequestsRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get apiRoutes
     * @param param the request object
     */
    public getApiRoutes(param: DefaultApiGetApiRoutesRequest, options?: Configuration): Promise<void> {
        return this.api.getApiRoutes( options).toPromise();
    }

    /**
     * Returns HTTP 200 in case all services are up and running
     * @param param the request object
     */
    public health(param: DefaultApiHealthRequest, options?: Configuration): Promise<string> {
        return this.api.health( options).toPromise();
    }

    /**
     * Post test enterprise wallet authenticationRequests
     * @param param the request object
     */
    public postTestEnterpriseWalletAuthenticationRequests(param: DefaultApiPostTestEnterpriseWalletAuthenticationRequestsRequest, options?: Configuration): Promise<void> {
        return this.api.postTestEnterpriseWalletAuthenticationRequests( options).toPromise();
    }

}

import { ObservableESSIFClientApi } from "./ObservableAPI";
import { ESSIFClientApiRequestFactory, ESSIFClientApiResponseProcessor} from "../apis/ESSIFClientApi";

export interface ESSIFClientApiCreateDidRequest {
    /**
     * DID
     * @type string
     * @memberof ESSIFClientApicreateDid
     */
    body?: string
}

export interface ESSIFClientApiOnboardRequest {
    /**
     * DID to be registered on the EBSI Blockchain; Bearer token to be used to authenticate the user. Get it from here https://app.preprod.ebsi.eu/users-onboarding
     * @type EbsiOnboardRequest
     * @memberof ESSIFClientApionboard
     */
    ebsiOnboardRequest?: EbsiOnboardRequest
}

export interface ESSIFClientApiRegisterDidRequest {
    /**
     * DID
     * @type string
     * @memberof ESSIFClientApiregisterDid
     */
    body?: string
}

export class ObjectESSIFClientApi {
    private api: ObservableESSIFClientApi

    public constructor(configuration: Configuration, requestFactory?: ESSIFClientApiRequestFactory, responseProcessor?: ESSIFClientApiResponseProcessor) {
        this.api = new ObservableESSIFClientApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Runs the ESSIF Authorization API flow
     * @param param the request object
     */
    public createDid(param: ESSIFClientApiCreateDidRequest, options?: Configuration): Promise<string> {
        return this.api.createDid(param.body,  options).toPromise();
    }

    /**
     * EBSI onboarding flow, which requests a Verifiable Authorization from the EOS.
     * @param param the request object
     */
    public onboard(param: ESSIFClientApiOnboardRequest, options?: Configuration): Promise<string> {
        return this.api.onboard(param.ebsiOnboardRequest,  options).toPromise();
    }

    /**
     * Registers DID on the EBSI Blockchain
     * @param param the request object
     */
    public registerDid(param: ESSIFClientApiRegisterDidRequest, options?: Configuration): Promise<string> {
        return this.api.registerDid(param.body,  options).toPromise();
    }

}

import { ObservableESSIFEnterpriseWalletApi } from "./ObservableAPI";
import { ESSIFEnterpriseWalletApiRequestFactory, ESSIFEnterpriseWalletApiResponseProcessor} from "../apis/ESSIFEnterpriseWalletApi";

export interface ESSIFEnterpriseWalletApiCreateEnterpriseDidRequest {
    /**
     * Verifiable Authorization
     * @type string
     * @memberof ESSIFEnterpriseWalletApicreateEnterpriseDid
     */
    body?: string
}

export interface ESSIFEnterpriseWalletApiGenerateDidAuthRequestRequest {
}

export interface ESSIFEnterpriseWalletApiGetCredentialRequest {
}

export interface ESSIFEnterpriseWalletApiGetCredential0Request {
    /**
     * 
     * @type string
     * @memberof ESSIFEnterpriseWalletApigetCredential_1
     */
    credentialId: string
}

export interface ESSIFEnterpriseWalletApiGetVerifiableCredentialRequest {
    /**
     * DID ownership request
     * @type string
     * @memberof ESSIFEnterpriseWalletApigetVerifiableCredential
     */
    body?: string
}

export interface ESSIFEnterpriseWalletApiOnboardsRequest {
    /**
     * DID to be registered
     * @type string
     * @memberof ESSIFEnterpriseWalletApionboards
     */
    body?: string
}

export interface ESSIFEnterpriseWalletApiRequestCredentialUriRequest {
}

export interface ESSIFEnterpriseWalletApiRequestEnterpriseVerifiableCredentialRequest {
    /**
     * Credential Request URI
     * @type string
     * @memberof ESSIFEnterpriseWalletApirequestEnterpriseVerifiableCredential
     */
    body?: string
}

export interface ESSIFEnterpriseWalletApiRequestVerifiableAuthorizationRequest {
    /**
     * Access Token
     * @type string
     * @memberof ESSIFEnterpriseWalletApirequestVerifiableAuthorization
     */
    body?: string
}

export interface ESSIFEnterpriseWalletApiRequestVerifiableCredentialRequest {
    /**
     * Credential request URI
     * @type string
     * @memberof ESSIFEnterpriseWalletApirequestVerifiableCredential
     */
    body?: string
}

export interface ESSIFEnterpriseWalletApiSignedChallengeRequest {
    /**
     * Signed challenge
     * @type string
     * @memberof ESSIFEnterpriseWalletApisignedChallenge
     */
    body?: string
}

export interface ESSIFEnterpriseWalletApiTokenRequest {
    /**
     * oidcAuthResp
     * @type string
     * @memberof ESSIFEnterpriseWalletApitoken
     */
    body?: string
}

export interface ESSIFEnterpriseWalletApiValidateDidAuthResponseRequest {
    /**
     * DID Auth Response
     * @type string
     * @memberof ESSIFEnterpriseWalletApivalidateDidAuthResponse
     */
    body?: string
}

export class ObjectESSIFEnterpriseWalletApi {
    private api: ObservableESSIFEnterpriseWalletApi

    public constructor(configuration: Configuration, requestFactory?: ESSIFEnterpriseWalletApiRequestFactory, responseProcessor?: ESSIFEnterpriseWalletApiResponseProcessor) {
        this.api = new ObservableESSIFEnterpriseWalletApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and registers DID on the EBSI Blockchain
     * @param param the request object
     */
    public createEnterpriseDid(param: ESSIFEnterpriseWalletApiCreateEnterpriseDidRequest, options?: Configuration): Promise<string> {
        return this.api.createEnterpriseDid(param.body,  options).toPromise();
    }

    /**
     * Generates a DID Auth Request
     * @param param the request object
     */
    public generateDidAuthRequest(param: ESSIFEnterpriseWalletApiGenerateDidAuthRequestRequest, options?: Configuration): Promise<string> {
        return this.api.generateDidAuthRequest( options).toPromise();
    }

    /**
     * Returns DID Auth Request or the requested credential if a VC Token is presented
     * @param param the request object
     */
    public getCredential(param: ESSIFEnterpriseWalletApiGetCredentialRequest, options?: Configuration): Promise<string> {
        return this.api.getCredential( options).toPromise();
    }

    /**
     * Returns DID Auth Request or the requested credential if a VC Token is presented
     * @param param the request object
     */
    public getCredential_1(param: ESSIFEnterpriseWalletApiGetCredential0Request, options?: Configuration): Promise<string> {
        return this.api.getCredential_1(param.credentialId,  options).toPromise();
    }

    /**
     * Generates the DID ownership response and fetches the requested credential.
     * @param param the request object
     */
    public getVerifiableCredential(param: ESSIFEnterpriseWalletApiGetVerifiableCredentialRequest, options?: Configuration): Promise<string> {
        return this.api.getVerifiableCredential(param.body,  options).toPromise();
    }

    /**
     * Request Verifiable Authorization. Returns the DID ownership request.
     * @param param the request object
     */
    public onboards(param: ESSIFEnterpriseWalletApiOnboardsRequest, options?: Configuration): Promise<string> {
        return this.api.onboards(param.body,  options).toPromise();
    }

    /**
     * Creates an OIDC authentication request URI.
     * @param param the request object
     */
    public requestCredentialUri(param: ESSIFEnterpriseWalletApiRequestCredentialUriRequest, options?: Configuration): Promise<string> {
        return this.api.requestCredentialUri( options).toPromise();
    }

    /**
     * Request credential
     * @param param the request object
     */
    public requestEnterpriseVerifiableCredential(param: ESSIFEnterpriseWalletApiRequestEnterpriseVerifiableCredentialRequest, options?: Configuration): Promise<string> {
        return this.api.requestEnterpriseVerifiableCredential(param.body,  options).toPromise();
    }

    /**
     * Performs DID Auth in order to obtain a Verifiable Authorization
     * @param param the request object
     */
    public requestVerifiableAuthorization(param: ESSIFEnterpriseWalletApiRequestVerifiableAuthorizationRequest, options?: Configuration): Promise<string> {
        return this.api.requestVerifiableAuthorization(param.body,  options).toPromise();
    }

    /**
     * Returns the DID ownership request
     * @param param the request object
     */
    public requestVerifiableCredential(param: ESSIFEnterpriseWalletApiRequestVerifiableCredentialRequest, options?: Configuration): Promise<string> {
        return this.api.requestVerifiableCredential(param.body,  options).toPromise();
    }

    /**
     * Processes the signed challenge in the scope of DID Auth and if successful, returns the Verifiable Authorization
     * @param param the request object
     */
    public signedChallenge(param: ESSIFEnterpriseWalletApiSignedChallengeRequest, options?: Configuration): Promise<string> {
        return this.api.signedChallenge(param.body,  options).toPromise();
    }

    /**
     * OIDC Token endpoint
     * @param param the request object
     */
    public token(param: ESSIFEnterpriseWalletApiTokenRequest, options?: Configuration): Promise<string> {
        return this.api.token(param.body,  options).toPromise();
    }

    /**
     * Validates a DID Auth response
     * @param param the request object
     */
    public validateDidAuthResponse(param: ESSIFEnterpriseWalletApiValidateDidAuthResponseRequest, options?: Configuration): Promise<boolean> {
        return this.api.validateDidAuthResponse(param.body,  options).toPromise();
    }

}

import { ObservableESSIFUserWalletApi } from "./ObservableAPI";
import { ESSIFUserWalletApiRequestFactory, ESSIFUserWalletApiResponseProcessor} from "../apis/ESSIFUserWalletApi";

export interface ESSIFUserWalletApiCreateUserDidRequest {
    /**
     * Verifiable Authorization
     * @type string
     * @memberof ESSIFUserWalletApicreateUserDid
     */
    body?: string
}

export interface ESSIFUserWalletApiDidAuthResponseRequest {
    /**
     * DID Auth Request
     * @type string
     * @memberof ESSIFUserWalletApididAuthResponse
     */
    body?: string
}

export interface ESSIFUserWalletApiOidcAuthResponseRequest {
    /**
     * todo
     * @type string
     * @memberof ESSIFUserWalletApioidcAuthResponse
     */
    body?: string
}

export interface ESSIFUserWalletApiRequestAccessTokenRequest {
    /**
     * The Verifiable Authorization
     * @type string
     * @memberof ESSIFUserWalletApirequestAccessToken
     */
    body?: string
}

export interface ESSIFUserWalletApiValidateDidAuthRequestRequest {
    /**
     * DID Auth request
     * @type string
     * @memberof ESSIFUserWalletApivalidateDidAuthRequest
     */
    body?: string
}

export interface ESSIFUserWalletApiVcAuthResponseRequest {
    /**
     * VC Exchange Request
     * @type string
     * @memberof ESSIFUserWalletApivcAuthResponse
     */
    body?: string
}

export class ObjectESSIFUserWalletApi {
    private api: ObservableESSIFUserWalletApi

    public constructor(configuration: Configuration, requestFactory?: ESSIFUserWalletApiRequestFactory, responseProcessor?: ESSIFUserWalletApiResponseProcessor) {
        this.api = new ObservableESSIFUserWalletApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and registers DID on the EBSI Blockchain
     * @param param the request object
     */
    public createUserDid(param: ESSIFUserWalletApiCreateUserDidRequest, options?: Configuration): Promise<string> {
        return this.api.createUserDid(param.body,  options).toPromise();
    }

    /**
     * Generates and sends the DID Auth Response message.
     * @param param the request object
     */
    public didAuthResponse(param: ESSIFUserWalletApiDidAuthResponseRequest, options?: Configuration): Promise<string> {
        return this.api.didAuthResponse(param.body,  options).toPromise();
    }

    /**
     * Generates a OIDC Auth Response message.
     * @param param the request object
     */
    public oidcAuthResponse(param: ESSIFUserWalletApiOidcAuthResponseRequest, options?: Configuration): Promise<string> {
        return this.api.oidcAuthResponse(param.body,  options).toPromise();
    }

    /**
     * Runs the authentication-protocol and returns the JWT Access Token for accessing the protected EBSI services.
     * @param param the request object
     */
    public requestAccessToken(param: ESSIFUserWalletApiRequestAccessTokenRequest, options?: Configuration): Promise<string> {
        return this.api.requestAccessToken(param.body,  options).toPromise();
    }

    /**
     * Validates a DID Auth request.
     * @param param the request object
     */
    public validateDidAuthRequest(param: ESSIFUserWalletApiValidateDidAuthRequestRequest, options?: Configuration): Promise<boolean> {
        return this.api.validateDidAuthRequest(param.body,  options).toPromise();
    }

    /**
     * Generates a VC Auth Response message.
     * @param param the request object
     */
    public vcAuthResponse(param: ESSIFUserWalletApiVcAuthResponseRequest, options?: Configuration): Promise<string> {
        return this.api.vcAuthResponse(param.body,  options).toPromise();
    }

}

import { ObservableTrustedIssuerApi } from "./ObservableAPI";
import { TrustedIssuerApiRequestFactory, TrustedIssuerApiResponseProcessor} from "../apis/TrustedIssuerApi";

export interface TrustedIssuerApiGenerateAuthenticationRequestRequest {
}

export interface TrustedIssuerApiOpenSessionRequest {
}

export class ObjectTrustedIssuerApi {
    private api: ObservableTrustedIssuerApi

    public constructor(configuration: Configuration, requestFactory?: TrustedIssuerApiRequestFactory, responseProcessor?: TrustedIssuerApiResponseProcessor) {
        this.api = new ObservableTrustedIssuerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generates a DID-SIOP Auth Request.
     * @param param the request object
     */
    public generateAuthenticationRequest(param: TrustedIssuerApiGenerateAuthenticationRequestRequest, options?: Configuration): Promise<string> {
        return this.api.generateAuthenticationRequest( options).toPromise();
    }

    /**
     * Establishes a mutual authenticated DID-SIOP session.
     * @param param the request object
     */
    public openSession(param: TrustedIssuerApiOpenSessionRequest, options?: Configuration): Promise<string> {
        return this.api.openSession( options).toPromise();
    }

}
