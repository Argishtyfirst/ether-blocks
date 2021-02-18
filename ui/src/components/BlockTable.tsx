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
  } = useBlockTable();

  if (isLoading) {
    return (
      <div className="loader">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) return <div>{`An error has occurred: ' ${error.message}`}</div>;

  const { result } = data?.message;

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
                  placeholder={`Block number: ${
                    result ? parseInt(result.number, 16) : "Block exsist"
                  }`}
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

        <Block
          title="Block number"
          value={result ? parseInt(result.number, 16) : "Block doesn't exsist"}
          xs={12}
          md={3}
        />

        <Block
          title="Hash"
          value={result ? result.hash : "Block doesn't exsist"}
          isHash
          xs={12}
          md={6}
        />

        <Col xs={12} md={12}>
          <Transactions transactions={result ? result.transactions : []} />
        </Col>
      </Row>
    </Container>
  );
};
