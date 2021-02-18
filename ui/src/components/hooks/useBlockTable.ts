import { useState, useEffect } from "react";
import axios from "axios";
import {QueryObserverIdleResult, useQuery} from "react-query";
import { BASE_API, REFETCH_INTERVAL } from "../../utils/constants";
import {IBlock, IData} from "../../utils/types";

const useBlocks = (blockNumber: string) => {
  return useQuery<IData, Error>(
    "block",
    async () => {
      const { data }:{data:IData} = await axios.get(
        `${BASE_API}block/${blockNumber ? blockNumber : "latest"}`
      );
      return data;
    },
    {
      // Refetch the data every second
      refetchInterval: REFETCH_INTERVAL,
    }
  );
};

export const useBlockTable = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [fetchedBlock, setFetchedBlock] = useState<string>("");
  const { isLoading, error, data, refetch, isFetching }: QueryObserverIdleResult<IData, Error> = useBlocks(
    fetchedBlock
  );

  useEffect(() => {
    refetch();
  }, [fetchedBlock, refetch]);

  const resetToLatest = () => {
    if (!fetchedBlock) {
      refetch();
      return;
    }
    setInputValue("");
    setFetchedBlock("");
  };

  const changeBlockNumber = (ev: any) => {
    const value: string = ev.target.value;
    if (value.match(/^\d+$/) || value === "") {
      setInputValue(value);
    }
  };

  const refetchWithBlockNumber = () => {
    setFetchedBlock(inputValue);
  };

  return {
    inputValue,
    isLoading,
    error,
    data,
    refetch,
    isFetching,
    resetToLatest,
    changeBlockNumber,
    refetchWithBlockNumber,
  };
};
