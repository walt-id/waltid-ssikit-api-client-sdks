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

import { ObservableDecentralizedIdentifiersApi } from "./ObservableAPI";
import { DecentralizedIdentifiersApiRequestFactory, DecentralizedIdentifiersApiResponseProcessor} from "../apis/DecentralizedIdentifiersApi";

export interface DecentralizedIdentifiersApiCreateDidRequest {
    /**
     * Defines the DID method and optionally the key to be used
     * @type CreateDidRequest
     * @memberof DecentralizedIdentifiersApicreateDid
     */
    createDidRequest?: CreateDidRequest
}

export interface DecentralizedIdentifiersApiDeleteDidRequest {
    /**
     * 
     * @type string
     * @memberof DecentralizedIdentifiersApideleteDid
     */
    id: string
    /**
     * ID of the DID to be deleted
     * @type string
     * @memberof DecentralizedIdentifiersApideleteDid
     */
    body?: string
}

export interface DecentralizedIdentifiersApiImportDidRequest {
    /**
     * Imports the DID to the underlying data store
     * @type string
     * @memberof DecentralizedIdentifiersApiimportDid
     */
    body?: string
}

export interface DecentralizedIdentifiersApiListDidsRequest {
}

export interface DecentralizedIdentifiersApiLoadDidRequest {
    /**
     * 
     * @type string
     * @memberof DecentralizedIdentifiersApiloadDid
     */
    id: string
    /**
     * ID of the DID to be loaded
     * @type string
     * @memberof DecentralizedIdentifiersApiloadDid
     */
    body?: string
}

export interface DecentralizedIdentifiersApiResolveDidRequest {
    /**
     * Identifier to be resolved
     * @type ResolveDidRequest
     * @memberof DecentralizedIdentifiersApiresolveDid
     */
    resolveDidRequest?: ResolveDidRequest
}

export class ObjectDecentralizedIdentifiersApi {
    private api: ObservableDecentralizedIdentifiersApi

    public constructor(configuration: Configuration, requestFactory?: DecentralizedIdentifiersApiRequestFactory, responseProcessor?: DecentralizedIdentifiersApiResponseProcessor) {
        this.api = new ObservableDecentralizedIdentifiersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create DID
     * @param param the request object
     */
    public createDid(param: DecentralizedIdentifiersApiCreateDidRequest, options?: Configuration): Promise<string> {
        return this.api.createDid(param.createDidRequest,  options).toPromise();
    }

    /**
     * Delete DID
     * @param param the request object
     */
    public deleteDid(param: DecentralizedIdentifiersApiDeleteDidRequest, options?: Configuration): Promise<string> {
        return this.api.deleteDid(param.id, param.body,  options).toPromise();
    }

    /**
     * Import DID
     * @param param the request object
     */
    public importDid(param: DecentralizedIdentifiersApiImportDidRequest, options?: Configuration): Promise<string> {
        return this.api.importDid(param.body,  options).toPromise();
    }

    /**
     * List DIDs
     * @param param the request object
     */
    public listDids(param: DecentralizedIdentifiersApiListDidsRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.listDids( options).toPromise();
    }

    /**
     * Load DID
     * @param param the request object
     */
    public loadDid(param: DecentralizedIdentifiersApiLoadDidRequest, options?: Configuration): Promise<string> {
        return this.api.loadDid(param.id, param.body,  options).toPromise();
    }

    /**
     * Resolve DID
     * @param param the request object
     */
    public resolveDid(param: DecentralizedIdentifiersApiResolveDidRequest, options?: Configuration): Promise<string> {
        return this.api.resolveDid(param.resolveDidRequest,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetApiRoutesRequest {
}

export interface DefaultApiHealthRequest {
}

export interface DefaultApiPresentVcRequest {
    /**
     * Defines the VC to be presented
     * @type PresentVcRequest
     * @memberof DefaultApipresentVc
     */
    presentVcRequest?: PresentVcRequest
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
     * Present VC
     * @param param the request object
     */
    public presentVc(param: DefaultApiPresentVcRequest, options?: Configuration): Promise<string> {
        return this.api.presentVc(param.presentVcRequest,  options).toPromise();
    }

}

import { ObservableKeyManagementApi } from "./ObservableAPI";
import { KeyManagementApiRequestFactory, KeyManagementApiResponseProcessor} from "../apis/KeyManagementApi";

export interface KeyManagementApiDeleteKeyRequest {
    /**
     * 
     * @type string
     * @memberof KeyManagementApideleteKey
     */
    id: string
    /**
     * ID of key to be deleted
     * @type string
     * @memberof KeyManagementApideleteKey
     */
    body?: string
}

export interface KeyManagementApiExportKeyRequest {
    /**
     * Exports the key in JWK or PEM format
     * @type ExportKeyRequest
     * @memberof KeyManagementApiexportKey
     */
    exportKeyRequest?: ExportKeyRequest
}

export interface KeyManagementApiGenKeyRequest {
    /**
     * The desired key algorithm (ECDSA_Secp256k1 or EdDSA_Ed25519)
     * @type GenKeyRequest
     * @memberof KeyManagementApigenKey
     */
    genKeyRequest?: GenKeyRequest
}

export interface KeyManagementApiGetV1KeyWithIdRequest {
    /**
     * 
     * @type string
     * @memberof KeyManagementApigetV1KeyWithId
     */
    id: string
}

export interface KeyManagementApiImportKeyRequest {
    /**
     * Imports the key (JWK format) to the key store
     * @type string
     * @memberof KeyManagementApiimportKey
     */
    body?: string
}

export interface KeyManagementApiListKeysRequest {
}

export class ObjectKeyManagementApi {
    private api: ObservableKeyManagementApi

    public constructor(configuration: Configuration, requestFactory?: KeyManagementApiRequestFactory, responseProcessor?: KeyManagementApiResponseProcessor) {
        this.api = new ObservableKeyManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete key
     * @param param the request object
     */
    public deleteKey(param: KeyManagementApiDeleteKeyRequest, options?: Configuration): Promise<string> {
        return this.api.deleteKey(param.id, param.body,  options).toPromise();
    }

    /**
     * Exports public and private key part (if supported by underlying keystore)
     * @param param the request object
     */
    public exportKey(param: KeyManagementApiExportKeyRequest, options?: Configuration): Promise<string> {
        return this.api.exportKey(param.exportKeyRequest,  options).toPromise();
    }

    /**
     * Generate key
     * @param param the request object
     */
    public genKey(param: KeyManagementApiGenKeyRequest, options?: Configuration): Promise<KeyId> {
        return this.api.genKey(param.genKeyRequest,  options).toPromise();
    }

    /**
     * Load public key
     * @param param the request object
     */
    public getV1KeyWithId(param: KeyManagementApiGetV1KeyWithIdRequest, options?: Configuration): Promise<string> {
        return this.api.getV1KeyWithId(param.id,  options).toPromise();
    }

    /**
     * Import key
     * @param param the request object
     */
    public importKey(param: KeyManagementApiImportKeyRequest, options?: Configuration): Promise<string> {
        return this.api.importKey(param.body,  options).toPromise();
    }

    /**
     * List of key IDs
     * @param param the request object
     */
    public listKeys(param: KeyManagementApiListKeysRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.listKeys( options).toPromise();
    }

}

import { ObservableVerifiableCredentialsApi } from "./ObservableAPI";
import { VerifiableCredentialsApiRequestFactory, VerifiableCredentialsApiResponseProcessor} from "../apis/VerifiableCredentialsApi";

export interface VerifiableCredentialsApiCreateVcRequest {
    /**
     * Defines the credential issuer, holder and optionally a credential template  -  TODO: build credential based on the request e.g. load template, substitute values
     * @type CreateVcRequest
     * @memberof VerifiableCredentialsApicreateVc
     */
    createVcRequest?: CreateVcRequest
}

export interface VerifiableCredentialsApiDeleteVcRequest {
    /**
     * 
     * @type string
     * @memberof VerifiableCredentialsApideleteVc
     */
    id: string
    /**
     * ID of VC to be deleted
     * @type string
     * @memberof VerifiableCredentialsApideleteVc
     */
    body?: string
}

export interface VerifiableCredentialsApiImportVcRequest {
    /**
     * 
     * @type string
     * @memberof VerifiableCredentialsApiimportVc
     */
    body?: string
}

export interface VerifiableCredentialsApiListVcsRequest {
}

export interface VerifiableCredentialsApiLoadVcRequest {
    /**
     * 
     * @type string
     * @memberof VerifiableCredentialsApiloadVc
     */
    id: string
    /**
     * ID of the DID to be loaded
     * @type string
     * @memberof VerifiableCredentialsApiloadVc
     */
    body?: string
}

export interface VerifiableCredentialsApiVerifyVcRequest {
    /**
     * VC to be verified
     * @type VerifyVcRequest
     * @memberof VerifiableCredentialsApiverifyVc
     */
    verifyVcRequest?: VerifyVcRequest
}

export class ObjectVerifiableCredentialsApi {
    private api: ObservableVerifiableCredentialsApi

    public constructor(configuration: Configuration, requestFactory?: VerifiableCredentialsApiRequestFactory, responseProcessor?: VerifiableCredentialsApiResponseProcessor) {
        this.api = new ObservableVerifiableCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create VC
     * @param param the request object
     */
    public createVc(param: VerifiableCredentialsApiCreateVcRequest, options?: Configuration): Promise<string> {
        return this.api.createVc(param.createVcRequest,  options).toPromise();
    }

    /**
     * Delete VC
     * @param param the request object
     */
    public deleteVc(param: VerifiableCredentialsApiDeleteVcRequest, options?: Configuration): Promise<string> {
        return this.api.deleteVc(param.id, param.body,  options).toPromise();
    }

    /**
     * Import VC
     * @param param the request object
     */
    public importVc(param: VerifiableCredentialsApiImportVcRequest, options?: Configuration): Promise<string> {
        return this.api.importVc(param.body,  options).toPromise();
    }

    /**
     * List VCs
     * @param param the request object
     */
    public listVcs(param: VerifiableCredentialsApiListVcsRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.listVcs( options).toPromise();
    }

    /**
     * Load VC
     * @param param the request object
     */
    public loadVc(param: VerifiableCredentialsApiLoadVcRequest, options?: Configuration): Promise<string> {
        return this.api.loadVc(param.id, param.body,  options).toPromise();
    }

    /**
     * Verify VC
     * @param param the request object
     */
    public verifyVc(param: VerifiableCredentialsApiVerifyVcRequest, options?: Configuration): Promise<VerifyVcRequest> {
        return this.api.verifyVc(param.verifyVcRequest,  options).toPromise();
    }

}
