// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgIssueDenom } from "./types/mt/tx";
import { MsgBurnMT } from "./types/mt/tx";
import { MsgTransferMT } from "./types/mt/tx";
import { MsgEditMT } from "./types/mt/tx";
import { MsgMintMT } from "./types/mt/tx";
import { MsgTransferDenom } from "./types/mt/tx";

import { Collection as typeCollection} from "./types"
import { Owner as typeOwner} from "./types"
import { DenomBalance as typeDenomBalance} from "./types"
import { Denom as typeDenom} from "./types"
import { MT as typeMT} from "./types"
import { Balance as typeBalance} from "./types"

export { MsgIssueDenom, MsgBurnMT, MsgTransferMT, MsgEditMT, MsgMintMT, MsgTransferDenom };

type sendMsgIssueDenomParams = {
  value: MsgIssueDenom,
  fee?: StdFee,
  memo?: string
};

type sendMsgBurnMTParams = {
  value: MsgBurnMT,
  fee?: StdFee,
  memo?: string
};

type sendMsgTransferMTParams = {
  value: MsgTransferMT,
  fee?: StdFee,
  memo?: string
};

type sendMsgEditMTParams = {
  value: MsgEditMT,
  fee?: StdFee,
  memo?: string
};

type sendMsgMintMTParams = {
  value: MsgMintMT,
  fee?: StdFee,
  memo?: string
};

type sendMsgTransferDenomParams = {
  value: MsgTransferDenom,
  fee?: StdFee,
  memo?: string
};


type msgIssueDenomParams = {
  value: MsgIssueDenom,
};

type msgBurnMTParams = {
  value: MsgBurnMT,
};

type msgTransferMTParams = {
  value: MsgTransferMT,
};

type msgEditMTParams = {
  value: MsgEditMT,
};

type msgMintMTParams = {
  value: MsgMintMT,
};

type msgTransferDenomParams = {
  value: MsgTransferDenom,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgIssueDenom({ value, fee, memo }: sendMsgIssueDenomParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgIssueDenom: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgIssueDenom({ value: MsgIssueDenom.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgIssueDenom: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgBurnMT({ value, fee, memo }: sendMsgBurnMTParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgBurnMT: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgBurnMT({ value: MsgBurnMT.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgBurnMT: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgTransferMT({ value, fee, memo }: sendMsgTransferMTParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgTransferMT: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgTransferMT({ value: MsgTransferMT.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgTransferMT: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgEditMT({ value, fee, memo }: sendMsgEditMTParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgEditMT: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgEditMT({ value: MsgEditMT.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgEditMT: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgMintMT({ value, fee, memo }: sendMsgMintMTParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgMintMT: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgMintMT({ value: MsgMintMT.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgMintMT: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgTransferDenom({ value, fee, memo }: sendMsgTransferDenomParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgTransferDenom: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgTransferDenom({ value: MsgTransferDenom.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgTransferDenom: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgIssueDenom({ value }: msgIssueDenomParams): EncodeObject {
			try {
				return { typeUrl: "/irismod.mt.MsgIssueDenom", value: MsgIssueDenom.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgIssueDenom: Could not create message: ' + e.message)
			}
		},
		
		msgBurnMT({ value }: msgBurnMTParams): EncodeObject {
			try {
				return { typeUrl: "/irismod.mt.MsgBurnMT", value: MsgBurnMT.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgBurnMT: Could not create message: ' + e.message)
			}
		},
		
		msgTransferMT({ value }: msgTransferMTParams): EncodeObject {
			try {
				return { typeUrl: "/irismod.mt.MsgTransferMT", value: MsgTransferMT.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgTransferMT: Could not create message: ' + e.message)
			}
		},
		
		msgEditMT({ value }: msgEditMTParams): EncodeObject {
			try {
				return { typeUrl: "/irismod.mt.MsgEditMT", value: MsgEditMT.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgEditMT: Could not create message: ' + e.message)
			}
		},
		
		msgMintMT({ value }: msgMintMTParams): EncodeObject {
			try {
				return { typeUrl: "/irismod.mt.MsgMintMT", value: MsgMintMT.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgMintMT: Could not create message: ' + e.message)
			}
		},
		
		msgTransferDenom({ value }: msgTransferDenomParams): EncodeObject {
			try {
				return { typeUrl: "/irismod.mt.MsgTransferDenom", value: MsgTransferDenom.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgTransferDenom: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						Collection: getStructure(typeCollection.fromPartial({})),
						Owner: getStructure(typeOwner.fromPartial({})),
						DenomBalance: getStructure(typeDenomBalance.fromPartial({})),
						Denom: getStructure(typeDenom.fromPartial({})),
						MT: getStructure(typeMT.fromPartial({})),
						Balance: getStructure(typeBalance.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			IrismodMt: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;