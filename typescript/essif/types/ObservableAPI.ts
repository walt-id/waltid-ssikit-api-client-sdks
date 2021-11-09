import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { EbsiOnboardRequest } from '../models/EbsiOnboardRequest';
import { ErrorResponse } from '../models/ErrorResponse';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Get apiRoutes
     */
    public getApiRoutes(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getApiRoutes(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiRoutes(rsp)));
            }));
    }

    /**
     * Returns HTTP 200 in case all services are up and running
     */
    public health(_options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.health(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.health(rsp)));
            }));
    }

    /**
     * Post test enterprise wallet authenticationRequests
     */
    public postTestEnterpriseWalletAuthenticationRequests(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.postTestEnterpriseWalletAuthenticationRequests(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postTestEnterpriseWalletAuthenticationRequests(rsp)));
            }));
    }

}

import { ESSIFClientApiRequestFactory, ESSIFClientApiResponseProcessor} from "../apis/ESSIFClientApi";
export class ObservableESSIFClientApi {
    private requestFactory: ESSIFClientApiRequestFactory;
    private responseProcessor: ESSIFClientApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ESSIFClientApiRequestFactory,
        responseProcessor?: ESSIFClientApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ESSIFClientApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ESSIFClientApiResponseProcessor();
    }

    /**
     * Runs the ESSIF Authorization API flow
     * @param body DID
     */
    public createDid(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.createDid(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDid(rsp)));
            }));
    }

    /**
     * EBSI onboarding flow, which requests a Verifiable Authorization from the EOS.
     * @param ebsiOnboardRequest DID to be registered on the EBSI Blockchain; Bearer token to be used to authenticate the user. Get it from here https://app.preprod.ebsi.eu/users-onboarding
     */
    public onboard(ebsiOnboardRequest?: EbsiOnboardRequest, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.onboard(ebsiOnboardRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.onboard(rsp)));
            }));
    }

    /**
     * Registers DID on the EBSI Blockchain
     * @param body DID
     */
    public registerDid(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.registerDid(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.registerDid(rsp)));
            }));
    }

}

import { ESSIFEnterpriseWalletApiRequestFactory, ESSIFEnterpriseWalletApiResponseProcessor} from "../apis/ESSIFEnterpriseWalletApi";
export class ObservableESSIFEnterpriseWalletApi {
    private requestFactory: ESSIFEnterpriseWalletApiRequestFactory;
    private responseProcessor: ESSIFEnterpriseWalletApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ESSIFEnterpriseWalletApiRequestFactory,
        responseProcessor?: ESSIFEnterpriseWalletApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ESSIFEnterpriseWalletApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ESSIFEnterpriseWalletApiResponseProcessor();
    }

    /**
     * Creates and registers DID on the EBSI Blockchain
     * @param body Verifiable Authorization
     */
    public createEnterpriseDid(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.createEnterpriseDid(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEnterpriseDid(rsp)));
            }));
    }

    /**
     * Generates a DID Auth Request
     */
    public generateDidAuthRequest(_options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.generateDidAuthRequest(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateDidAuthRequest(rsp)));
            }));
    }

    /**
     * Returns DID Auth Request or the requested credential if a VC Token is presented
     */
    public getCredential(_options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getCredential(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCredential(rsp)));
            }));
    }

    /**
     * Returns DID Auth Request or the requested credential if a VC Token is presented
     * @param credentialId 
     */
    public getCredential_1(credentialId: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getCredential_1(credentialId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCredential_1(rsp)));
            }));
    }

    /**
     * Generates the DID ownership response and fetches the requested credential.
     * @param body DID ownership request
     */
    public getVerifiableCredential(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getVerifiableCredential(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVerifiableCredential(rsp)));
            }));
    }

    /**
     * Request Verifiable Authorization. Returns the DID ownership request.
     * @param body DID to be registered
     */
    public onboards(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.onboards(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.onboards(rsp)));
            }));
    }

    /**
     * Creates an OIDC authentication request URI.
     */
    public requestCredentialUri(_options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.requestCredentialUri(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.requestCredentialUri(rsp)));
            }));
    }

    /**
     * Request credential
     * @param body Credential Request URI
     */
    public requestEnterpriseVerifiableCredential(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.requestEnterpriseVerifiableCredential(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.requestEnterpriseVerifiableCredential(rsp)));
            }));
    }

    /**
     * Performs DID Auth in order to obtain a Verifiable Authorization
     * @param body Access Token
     */
    public requestVerifiableAuthorization(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.requestVerifiableAuthorization(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.requestVerifiableAuthorization(rsp)));
            }));
    }

    /**
     * Returns the DID ownership request
     * @param body Credential request URI
     */
    public requestVerifiableCredential(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.requestVerifiableCredential(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.requestVerifiableCredential(rsp)));
            }));
    }

    /**
     * Processes the signed challenge in the scope of DID Auth and if successful, returns the Verifiable Authorization
     * @param body Signed challenge
     */
    public signedChallenge(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.signedChallenge(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.signedChallenge(rsp)));
            }));
    }

    /**
     * OIDC Token endpoint
     * @param body oidcAuthResp
     */
    public token(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.token(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.token(rsp)));
            }));
    }

    /**
     * Validates a DID Auth response
     * @param body DID Auth Response
     */
    public validateDidAuthResponse(body?: string, _options?: Configuration): Observable<boolean> {
        const requestContextPromise = this.requestFactory.validateDidAuthResponse(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateDidAuthResponse(rsp)));
            }));
    }

}

import { ESSIFUserWalletApiRequestFactory, ESSIFUserWalletApiResponseProcessor} from "../apis/ESSIFUserWalletApi";
export class ObservableESSIFUserWalletApi {
    private requestFactory: ESSIFUserWalletApiRequestFactory;
    private responseProcessor: ESSIFUserWalletApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ESSIFUserWalletApiRequestFactory,
        responseProcessor?: ESSIFUserWalletApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ESSIFUserWalletApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ESSIFUserWalletApiResponseProcessor();
    }

    /**
     * Creates and registers DID on the EBSI Blockchain
     * @param body Verifiable Authorization
     */
    public createUserDid(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.createUserDid(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createUserDid(rsp)));
            }));
    }

    /**
     * Generates and sends the DID Auth Response message.
     * @param body DID Auth Request
     */
    public didAuthResponse(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.didAuthResponse(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.didAuthResponse(rsp)));
            }));
    }

    /**
     * Generates a OIDC Auth Response message.
     * @param body todo
     */
    public oidcAuthResponse(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.oidcAuthResponse(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.oidcAuthResponse(rsp)));
            }));
    }

    /**
     * Runs the authentication-protocol and returns the JWT Access Token for accessing the protected EBSI services.
     * @param body The Verifiable Authorization
     */
    public requestAccessToken(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.requestAccessToken(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.requestAccessToken(rsp)));
            }));
    }

    /**
     * Validates a DID Auth request.
     * @param body DID Auth request
     */
    public validateDidAuthRequest(body?: string, _options?: Configuration): Observable<boolean> {
        const requestContextPromise = this.requestFactory.validateDidAuthRequest(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateDidAuthRequest(rsp)));
            }));
    }

    /**
     * Generates a VC Auth Response message.
     * @param body VC Exchange Request
     */
    public vcAuthResponse(body?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.vcAuthResponse(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.vcAuthResponse(rsp)));
            }));
    }

}

import { TrustedIssuerApiRequestFactory, TrustedIssuerApiResponseProcessor} from "../apis/TrustedIssuerApi";
export class ObservableTrustedIssuerApi {
    private requestFactory: TrustedIssuerApiRequestFactory;
    private responseProcessor: TrustedIssuerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TrustedIssuerApiRequestFactory,
        responseProcessor?: TrustedIssuerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TrustedIssuerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TrustedIssuerApiResponseProcessor();
    }

    /**
     * Generates a DID-SIOP Auth Request.
     */
    public generateAuthenticationRequest(_options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.generateAuthenticationRequest(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateAuthenticationRequest(rsp)));
            }));
    }

    /**
     * Establishes a mutual authenticated DID-SIOP session.
     */
    public openSession(_options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.openSession(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.openSession(rsp)));
            }));
    }

}
