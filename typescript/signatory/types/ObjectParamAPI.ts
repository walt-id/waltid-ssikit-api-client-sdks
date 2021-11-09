import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { IssueCredentialRequest } from '../models/IssueCredentialRequest';
import { ProofConfig } from '../models/ProofConfig';

import { ObservableCredentialsApi } from "./ObservableAPI";
import { CredentialsApiRequestFactory, CredentialsApiResponseProcessor} from "../apis/CredentialsApi";

export interface CredentialsApiIssueRequest {
    /**
     * 
     * @type IssueCredentialRequest
     * @memberof CredentialsApiissue
     */
    issueCredentialRequest?: IssueCredentialRequest
}

export class ObjectCredentialsApi {
    private api: ObservableCredentialsApi

    public constructor(configuration: Configuration, requestFactory?: CredentialsApiRequestFactory, responseProcessor?: CredentialsApiResponseProcessor) {
        this.api = new ObservableCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Issue a credential
     * @param param the request object
     */
    public issue(param: CredentialsApiIssueRequest, options?: Configuration): Promise<string> {
        return this.api.issue(param.issueCredentialRequest,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetApiRoutesRequest {
}

export interface DefaultApiHealthRequest {
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

}

import { ObservableVerifiableCredentialsApi } from "./ObservableAPI";
import { VerifiableCredentialsApiRequestFactory, VerifiableCredentialsApiResponseProcessor} from "../apis/VerifiableCredentialsApi";

export interface VerifiableCredentialsApiListTemplatesRequest {
}

export interface VerifiableCredentialsApiLoadTemplateRequest {
    /**
     * Retrieves a single VC template form the data store
     * @type string
     * @memberof VerifiableCredentialsApiloadTemplate
     */
    id: string
}

export class ObjectVerifiableCredentialsApi {
    private api: ObservableVerifiableCredentialsApi

    public constructor(configuration: Configuration, requestFactory?: VerifiableCredentialsApiRequestFactory, responseProcessor?: VerifiableCredentialsApiResponseProcessor) {
        this.api = new ObservableVerifiableCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List VC templates
     * @param param the request object
     */
    public listTemplates(param: VerifiableCredentialsApiListTemplatesRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.listTemplates( options).toPromise();
    }

    /**
     * Load a VC template
     * @param param the request object
     */
    public loadTemplate(param: VerifiableCredentialsApiLoadTemplateRequest, options?: Configuration): Promise<string> {
        return this.api.loadTemplate(param.id,  options).toPromise();
    }

}
