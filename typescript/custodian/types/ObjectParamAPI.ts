import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { GenerateKeyRequest } from '../models/GenerateKeyRequest';
import { StoreCredentialRequest } from '../models/StoreCredentialRequest';
import { VerifiableCredential } from '../models/VerifiableCredential';

import { ObservableCredentialsApi } from "./ObservableAPI";
import { CredentialsApiRequestFactory, CredentialsApiResponseProcessor} from "../apis/CredentialsApi";

export interface CredentialsApiDeleteCredentialRequest {
    /**
     * 
     * @type string
     * @memberof CredentialsApideleteCredential
     */
    alias: string
}

export interface CredentialsApiGetCredentialRequest {
    /**
     * 
     * @type string
     * @memberof CredentialsApigetCredential
     */
    id: string
}

export interface CredentialsApiListCredentialIdsRequest {
}

export interface CredentialsApiListCredentialsRequest {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof CredentialsApilistCredentials
     */
    id?: Array<string>
}

export interface CredentialsApiStoreCredentialRequest {
    /**
     * 
     * @type string
     * @memberof CredentialsApistoreCredential
     */
    alias: string
    /**
     * Store Credential Request
     * @type StoreCredentialRequest
     * @memberof CredentialsApistoreCredential
     */
    storeCredentialRequest?: StoreCredentialRequest
}

export class ObjectCredentialsApi {
    private api: ObservableCredentialsApi

    public constructor(configuration: Configuration, requestFactory?: CredentialsApiRequestFactory, responseProcessor?: CredentialsApiResponseProcessor) {
        this.api = new ObservableCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a specific credential by alias
     * @param param the request object
     */
    public deleteCredential(param: CredentialsApiDeleteCredentialRequest, options?: Configuration): Promise<string> {
        return this.api.deleteCredential(param.alias,  options).toPromise();
    }

    /**
     * Gets a specific Credential by id
     * @param param the request object
     */
    public getCredential(param: CredentialsApiGetCredentialRequest, options?: Configuration): Promise<string> {
        return this.api.getCredential(param.id,  options).toPromise();
    }

    /**
     * Lists all credential IDs the custodian knows of
     * @param param the request object
     */
    public listCredentialIds(param: CredentialsApiListCredentialIdsRequest, options?: Configuration): Promise<string> {
        return this.api.listCredentialIds( options).toPromise();
    }

    /**
     * Lists all credentials the custodian knows of
     * @param param the request object
     */
    public listCredentials(param: CredentialsApiListCredentialsRequest, options?: Configuration): Promise<string> {
        return this.api.listCredentials(param.id,  options).toPromise();
    }

    /**
     * Stores a credential
     * @param param the request object
     */
    public storeCredential(param: CredentialsApiStoreCredentialRequest, options?: Configuration): Promise<string> {
        return this.api.storeCredential(param.alias, param.storeCredentialRequest,  options).toPromise();
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

import { ObservableKeysApi } from "./ObservableAPI";
import { KeysApiRequestFactory, KeysApiResponseProcessor} from "../apis/KeysApi";

export interface KeysApiDeleteKeyRequest {
    /**
     * 
     * @type string
     * @memberof KeysApideleteKey
     */
    id: string
}

export interface KeysApiGenerateKeyRequest {
    /**
     * Generate Key Request
     * @type GenerateKeyRequest
     * @memberof KeysApigenerateKey
     */
    generateKeyRequest?: GenerateKeyRequest
}

export interface KeysApiGetKeyRequest {
    /**
     * 
     * @type string
     * @memberof KeysApigetKey
     */
    alias: string
}

export interface KeysApiListKeysRequest {
}

export interface KeysApiStoreKeyRequest {
}

export class ObjectKeysApi {
    private api: ObservableKeysApi

    public constructor(configuration: Configuration, requestFactory?: KeysApiRequestFactory, responseProcessor?: KeysApiResponseProcessor) {
        this.api = new ObservableKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a specific key
     * @param param the request object
     */
    public deleteKey(param: KeysApiDeleteKeyRequest, options?: Configuration): Promise<string> {
        return this.api.deleteKey(param.id,  options).toPromise();
    }

    /**
     * Generates a key with a specific key algorithm
     * @param param the request object
     */
    public generateKey(param: KeysApiGenerateKeyRequest, options?: Configuration): Promise<string> {
        return this.api.generateKey(param.generateKeyRequest,  options).toPromise();
    }

    /**
     * Gets a key specified by its alias
     * @param param the request object
     */
    public getKey(param: KeysApiGetKeyRequest, options?: Configuration): Promise<string> {
        return this.api.getKey(param.alias,  options).toPromise();
    }

    /**
     * Lists all keys the custodian knows of
     * @param param the request object
     */
    public listKeys(param: KeysApiListKeysRequest, options?: Configuration): Promise<string> {
        return this.api.listKeys( options).toPromise();
    }

    /**
     * Stores a key
     * @param param the request object
     */
    public storeKey(param: KeysApiStoreKeyRequest, options?: Configuration): Promise<string> {
        return this.api.storeKey( options).toPromise();
    }

}
