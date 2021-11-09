// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { VerificationPolicy } from '../models/VerificationPolicy';
import { VerificationResult } from '../models/VerificationResult';

/**
 * no description
 */
export class VerificationPoliciesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List verification policies
     */
    public async listPolicies(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/policies';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * Verify a W3C VerifiableCredential or VerifiablePresentation
     * @param policyList Optional comma-separated list for setting the policies to be verified.
     * @param body VC or VP to be verified
     */
    public async verifyVP(policyList?: string, body?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v1/verify';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (policyList !== undefined) {
            requestContext.setQueryParam("policyList", ObjectSerializer.serialize(policyList, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "text/plain"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "string", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

}

export class VerificationPoliciesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPolicies
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPolicies(response: ResponseContext): Promise<Array<VerificationPolicy> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<VerificationPolicy> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<VerificationPolicy>", ""
            ) as Array<VerificationPolicy>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<VerificationPolicy> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<VerificationPolicy>", ""
            ) as Array<VerificationPolicy>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyVP
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async verifyVP(response: ResponseContext): Promise<VerificationResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerificationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationResult", ""
            ) as VerificationResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VerificationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationResult", ""
            ) as VerificationResult;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
