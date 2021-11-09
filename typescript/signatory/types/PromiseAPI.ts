import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { IssueCredentialRequest } from '../models/IssueCredentialRequest';
import { ProofConfig } from '../models/ProofConfig';
import { ObservableCredentialsApi } from './ObservableAPI';

import { CredentialsApiRequestFactory, CredentialsApiResponseProcessor} from "../apis/CredentialsApi";
export class PromiseCredentialsApi {
    private api: ObservableCredentialsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CredentialsApiRequestFactory,
        responseProcessor?: CredentialsApiResponseProcessor
    ) {
        this.api = new ObservableCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Issue a credential
     * @param issueCredentialRequest 
     */
    public issue(issueCredentialRequest?: IssueCredentialRequest, _options?: Configuration): Promise<string> {
        const result = this.api.issue(issueCredentialRequest, _options);
        return result.toPromise();
    }


}



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


}



import { ObservableVerifiableCredentialsApi } from './ObservableAPI';

import { VerifiableCredentialsApiRequestFactory, VerifiableCredentialsApiResponseProcessor} from "../apis/VerifiableCredentialsApi";
export class PromiseVerifiableCredentialsApi {
    private api: ObservableVerifiableCredentialsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VerifiableCredentialsApiRequestFactory,
        responseProcessor?: VerifiableCredentialsApiResponseProcessor
    ) {
        this.api = new ObservableVerifiableCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List VC templates
     */
    public listTemplates(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.listTemplates(_options);
        return result.toPromise();
    }

    /**
     * Load a VC template
     * @param id Retrieves a single VC template form the data store
     */
    public loadTemplate(id: string, _options?: Configuration): Promise<string> {
        const result = this.api.loadTemplate(id, _options);
        return result.toPromise();
    }


}



