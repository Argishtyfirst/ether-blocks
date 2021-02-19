import React from "react";
import {
  Spinner,
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
import { Transactions } from "./Transactions";
import { Block } from "./Block";
import { useBlockTable } from "./hooks/useBlockTable";
import { IMessage, IResult, ITransaction, IUseBlock } from "../utils/types";

export const BlockTable = () => {
  const {
    inputValue,
    isLoading,
    error,
    data,
    isFetching,
    resetToLatest,
    changeBlockNumber,
    refetchWithBlockNumber,
  }: IUseBlock = useBlockTable();

  if (isLoading || !data) {
    return (
      <div className="loader">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) return <div>{`An error has occurred: ' ${error.message}`}</div>;

  const { result }: IMessage = data.message;

  const transactions: ITransaction[] = result?.transactions || [];
  const blockNumber: string | number = result
    ? parseInt(result.number, 16)
    : "Block doesn't exist";
  const blockHash: string = result ? result.hash : "Block doesn't exist";
  const inputPlaceholder: string = `Block number: ${
    result && parseInt(result.number, 16)
  }`;

  return (
    <Container fluid>
      <div className="spinner">
        {isFetching && <Spinner animation="border" size="sm" />}
      </div>
      <Row>
        <Col xs={12} md={3}>
          <div className="inputLatestWrapper">
            <div className="blockInputWrapper">
              <InputGroup className="mb-3" hasValidation>
                <FormControl
                  placeholder={inputPlaceholder}
                  aria-label="Block number"
                  value={inputValue}
                  onChange={changeBlockNumber}
                />
                <InputGroup.Append onClick={refetchWithBlockNumber}>
                  <Button variant="dark">Get block</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <Button variant="success" onClick={resetToLatest}>
              Get latest block
            </Button>
          </div>
        </Col>

        <Block title="Block number" value={blockNumber} xs={12} md={3} />

        <Block title="Hash" value={blockHash} isHash xs={12} md={6} />

        <Col xs={12} md={12}>
          <Transactions transactions={transactions} />
        </Col>
      </Row>
    </Container>
  );
};
