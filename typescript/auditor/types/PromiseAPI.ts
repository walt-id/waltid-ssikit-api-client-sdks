import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { VerificationPolicy } from '../models/VerificationPolicy';
import { VerificationResult } from '../models/VerificationResult';
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



import { ObservableVerificationPoliciesApi } from './ObservableAPI';

import { VerificationPoliciesApiRequestFactory, VerificationPoliciesApiResponseProcessor} from "../apis/VerificationPoliciesApi";
export class PromiseVerificationPoliciesApi {
    private api: ObservableVerificationPoliciesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VerificationPoliciesApiRequestFactory,
        responseProcessor?: VerificationPoliciesApiResponseProcessor
    ) {
        this.api = new ObservableVerificationPoliciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List verification policies
     */
    public listPolicies(_options?: Configuration): Promise<Array<VerificationPolicy>> {
        const result = this.api.listPolicies(_options);
        return result.toPromise();
    }

    /**
     * Verify a W3C VerifiableCredential or VerifiablePresentation
     * @param policyList Optional comma-separated list for setting the policies to be verified.
     * @param body VC or VP to be verified
     */
    public verifyVP(policyList?: string, body?: string, _options?: Configuration): Promise<VerificationResult> {
        const result = this.api.verifyVP(policyList, body, _options);
        return result.toPromise();
    }


}



