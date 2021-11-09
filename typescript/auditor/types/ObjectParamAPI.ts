import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { VerificationPolicy } from '../models/VerificationPolicy';
import { VerificationResult } from '../models/VerificationResult';

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

import { ObservableVerificationPoliciesApi } from "./ObservableAPI";
import { VerificationPoliciesApiRequestFactory, VerificationPoliciesApiResponseProcessor} from "../apis/VerificationPoliciesApi";

export interface VerificationPoliciesApiListPoliciesRequest {
}

export interface VerificationPoliciesApiVerifyVPRequest {
    /**
     * Optional comma-separated list for setting the policies to be verified.
     * @type string
     * @memberof VerificationPoliciesApiverifyVP
     */
    policyList?: string
    /**
     * VC or VP to be verified
     * @type string
     * @memberof VerificationPoliciesApiverifyVP
     */
    body?: string
}

export class ObjectVerificationPoliciesApi {
    private api: ObservableVerificationPoliciesApi

    public constructor(configuration: Configuration, requestFactory?: VerificationPoliciesApiRequestFactory, responseProcessor?: VerificationPoliciesApiResponseProcessor) {
        this.api = new ObservableVerificationPoliciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List verification policies
     * @param param the request object
     */
    public listPolicies(param: VerificationPoliciesApiListPoliciesRequest, options?: Configuration): Promise<Array<VerificationPolicy>> {
        return this.api.listPolicies( options).toPromise();
    }

    /**
     * Verify a W3C VerifiableCredential or VerifiablePresentation
     * @param param the request object
     */
    public verifyVP(param: VerificationPoliciesApiVerifyVPRequest, options?: Configuration): Promise<VerificationResult> {
        return this.api.verifyVP(param.policyList, param.body,  options).toPromise();
    }

}
