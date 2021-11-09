import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { IssueCredentialRequest } from '../models/IssueCredentialRequest';
import { ProofConfig } from '../models/ProofConfig';

import { CredentialsApiRequestFactory, CredentialsApiResponseProcessor} from "../apis/CredentialsApi";
export class ObservableCredentialsApi {
    private requestFactory: CredentialsApiRequestFactory;
    private responseProcessor: CredentialsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CredentialsApiRequestFactory,
        responseProcessor?: CredentialsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CredentialsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CredentialsApiResponseProcessor();
    }

    /**
     * Issue a credential
     * @param issueCredentialRequest 
     */
    public issue(issueCredentialRequest?: IssueCredentialRequest, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.issue(issueCredentialRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.issue(rsp)));
            }));
    }

}

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

}

import { VerifiableCredentialsApiRequestFactory, VerifiableCredentialsApiResponseProcessor} from "../apis/VerifiableCredentialsApi";
export class ObservableVerifiableCredentialsApi {
    private requestFactory: VerifiableCredentialsApiRequestFactory;
    private responseProcessor: VerifiableCredentialsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VerifiableCredentialsApiRequestFactory,
        responseProcessor?: VerifiableCredentialsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VerifiableCredentialsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VerifiableCredentialsApiResponseProcessor();
    }

    /**
     * List VC templates
     */
    public listTemplates(_options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.listTemplates(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTemplates(rsp)));
            }));
    }

    /**
     * Load a VC template
     * @param id Retrieves a single VC template form the data store
     */
    public loadTemplate(id: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.loadTemplate(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loadTemplate(rsp)));
            }));
    }

}
