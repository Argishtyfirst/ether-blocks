import Col from "react-bootstrap/Col";

type blockPropType = {
  title: string;
  value: number | string;
  isHash?: boolean;
  xs: number;
  md: number;
};
export const Block = ({ title, value, isHash, xs, md }: blockPropType) => {
  return (
    <Col xs={xs} md={md}>
      <div className="blockKeyValueWrapper">
        <p className="wrapperTitle">{title}</p>
        <span className={`wrapperValue ${isHash && "hashValue"}`}>{value}</span>
      </div>
    </Col>
  );
};
