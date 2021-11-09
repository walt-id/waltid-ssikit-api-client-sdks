import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CreateDidRequest } from '../models/CreateDidRequest';
import { CreateVcRequest } from '../models/CreateVcRequest';
import { ExportKeyRequest } from '../models/ExportKeyRequest';
import { GenKeyRequest } from '../models/GenKeyRequest';
import { KeyId } from '../models/KeyId';
import { PresentVcRequest } from '../models/PresentVcRequest';
import { ResolveDidRequest } from '../models/ResolveDidRequest';
import { VerifyVcRequest } from '../models/VerifyVcRequest';
import { ObservableDecentralizedIdentifiersApi } from './ObservableAPI';

import { DecentralizedIdentifiersApiRequestFactory, DecentralizedIdentifiersApiResponseProcessor} from "../apis/DecentralizedIdentifiersApi";
export class PromiseDecentralizedIdentifiersApi {
    private api: ObservableDecentralizedIdentifiersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DecentralizedIdentifiersApiRequestFactory,
        responseProcessor?: DecentralizedIdentifiersApiResponseProcessor
    ) {
        this.api = new ObservableDecentralizedIdentifiersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create DID
     * @param createDidRequest Defines the DID method and optionally the key to be used
     */
    public createDid(createDidRequest?: CreateDidRequest, _options?: Configuration): Promise<string> {
        const result = this.api.createDid(createDidRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete DID
     * @param id 
     * @param body ID of the DID to be deleted
     */
    public deleteDid(id: string, body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.deleteDid(id, body, _options);
        return result.toPromise();
    }

    /**
     * Import DID
     * @param body Imports the DID to the underlying data store
     */
    public importDid(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.importDid(body, _options);
        return result.toPromise();
    }

    /**
     * List DIDs
     */
    public listDids(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.listDids(_options);
        return result.toPromise();
    }

    /**
     * Load DID
     * @param id 
     * @param body ID of the DID to be loaded
     */
    public loadDid(id: string, body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.loadDid(id, body, _options);
        return result.toPromise();
    }

    /**
     * Resolve DID
     * @param resolveDidRequest Identifier to be resolved
     */
    public resolveDid(resolveDidRequest?: ResolveDidRequest, _options?: Configuration): Promise<string> {
        const result = this.api.resolveDid(resolveDidRequest, _options);
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

    /**
     * Present VC
     * @param presentVcRequest Defines the VC to be presented
     */
    public presentVc(presentVcRequest?: PresentVcRequest, _options?: Configuration): Promise<string> {
        const result = this.api.presentVc(presentVcRequest, _options);
        return result.toPromise();
    }


}



import { ObservableKeyManagementApi } from './ObservableAPI';

import { KeyManagementApiRequestFactory, KeyManagementApiResponseProcessor} from "../apis/KeyManagementApi";
export class PromiseKeyManagementApi {
    private api: ObservableKeyManagementApi

    public constructor(
        configuration: Configuration,
        requestFactory?: KeyManagementApiRequestFactory,
        responseProcessor?: KeyManagementApiResponseProcessor
    ) {
        this.api = new ObservableKeyManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete key
     * @param id 
     * @param body ID of key to be deleted
     */
    public deleteKey(id: string, body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.deleteKey(id, body, _options);
        return result.toPromise();
    }

    /**
     * Exports public and private key part (if supported by underlying keystore)
     * @param exportKeyRequest Exports the key in JWK or PEM format
     */
    public exportKey(exportKeyRequest?: ExportKeyRequest, _options?: Configuration): Promise<string> {
        const result = this.api.exportKey(exportKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * Generate key
     * @param genKeyRequest The desired key algorithm (ECDSA_Secp256k1 or EdDSA_Ed25519)
     */
    public genKey(genKeyRequest?: GenKeyRequest, _options?: Configuration): Promise<KeyId> {
        const result = this.api.genKey(genKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * Load public key
     * @param id 
     */
    public getV1KeyWithId(id: string, _options?: Configuration): Promise<string> {
        const result = this.api.getV1KeyWithId(id, _options);
        return result.toPromise();
    }

    /**
     * Import key
     * @param body Imports the key (JWK format) to the key store
     */
    public importKey(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.importKey(body, _options);
        return result.toPromise();
    }

    /**
     * List of key IDs
     */
    public listKeys(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.listKeys(_options);
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
     * Create VC
     * @param createVcRequest Defines the credential issuer, holder and optionally a credential template  -  TODO: build credential based on the request e.g. load template, substitute values
     */
    public createVc(createVcRequest?: CreateVcRequest, _options?: Configuration): Promise<string> {
        const result = this.api.createVc(createVcRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete VC
     * @param id 
     * @param body ID of VC to be deleted
     */
    public deleteVc(id: string, body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.deleteVc(id, body, _options);
        return result.toPromise();
    }

    /**
     * Import VC
     * @param body 
     */
    public importVc(body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.importVc(body, _options);
        return result.toPromise();
    }

    /**
     * List VCs
     */
    public listVcs(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.listVcs(_options);
        return result.toPromise();
    }

    /**
     * Load VC
     * @param id 
     * @param body ID of the DID to be loaded
     */
    public loadVc(id: string, body?: string, _options?: Configuration): Promise<string> {
        const result = this.api.loadVc(id, body, _options);
        return result.toPromise();
    }

    /**
     * Verify VC
     * @param verifyVcRequest VC to be verified
     */
    public verifyVc(verifyVcRequest?: VerifyVcRequest, _options?: Configuration): Promise<VerifyVcRequest> {
        const result = this.api.verifyVc(verifyVcRequest, _options);
        return result.toPromise();
    }


}



