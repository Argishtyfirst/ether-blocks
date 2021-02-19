import { QueryObserverResult, RefetchOptions } from "react-query";

export interface ITransaction {
  blockHash: string;
  blockNumber: string;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  nonce: string;
  r: string;
  s: string;
  to: string;
  transactionIndex: string;
  v: string;
  value: string;
}

export interface IResult {
  difficulty: string;
  extraData: string;
  gasLimit: string;
  gasUsed: string;
  hash: string;
  logsBloom: string;
  miner: string;
  mixHash: string;
  nonce: string;
  number: string;
  parentHash: string;
  receiptsRoot: string;
  sha3Uncles: string;
  size: string;
  stateRoot: string;
  timestamp: string;
  totalDifficulty: string;
  transactions: ITransaction[];
}

export interface IMessage {
  id: number;
  jsonrpc: string;
  result: IResult;
}
export interface IData {
  message: IMessage;
}
export interface IBlock {
  isLoading: boolean;
  error: Error;
  data: IData;
  refetch: () => (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<IData, Error>>;
  isFetching: boolean;
}
export interface IUseBlock {
  inputValue: string;
  isLoading: boolean;
  error: null | Error;
  data: IData | undefined;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<IData, Error>>;
  isFetching: boolean;
  resetToLatest: () => void;
  changeBlockNumber: (ev: any) => void;
  refetchWithBlockNumber: () => void;
}
