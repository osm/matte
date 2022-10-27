import React from "react";
import { useParams } from "react-router";
import { Row, Col, Container, Input } from "reactstrap";
import { FaCheck, FaSkull } from "react-icons/fa";

const Entry: React.FC<{
  i: number;
  multiplicationTable: number;
}> = ({ i, multiplicationTable }) => {
  const [value, setValue] = React.useState<string | number>("");

  return (
    <Row style={{ marginBottom: "1em" }}>
      <Col xs={{ size: 5 }} md={{ size: 2 }}>
        <h3>
          {i} * {multiplicationTable} ={" "}
        </h3>
      </Col>
      <Col xs={{ size: 5 }} md={{ size: 1 }}>
        <Input
          value={value}
          type="number"
          onChange={({ target }) => setValue(parseInt(target.value, 10))}
        />
      </Col>
      <Col>
        <h3>
          {typeof value === "string" && value.length === 0 ? (
            ""
          ) : typeof value === "number" && value === i * multiplicationTable ? (
            <FaCheck style={{ color: "green" }} />
          ) : (
            <FaSkull style={{ color: "red" }} />
          )}
        </h3>
      </Col>
    </Row>
  );
};

const MultiplicationTable: React.FC = () => {
  const { multiplicationTable }: { multiplicationTable: string } = useParams();
  const mt = multiplicationTable ? parseInt(multiplicationTable, 10) : 1;

  return (
    <Container style={{ marginBottom: "1.5em" }}>
      <h1 style={{ marginBottom: "1em" }}>{mt}:ans multiplikationstabell</h1>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <div
          key={`${i}-${mt}`}
          style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f9f9f9" }}
        >
          <Entry i={i} multiplicationTable={mt} />
        </div>
      ))}
    </Container>
  );
};

export default MultiplicationTable;
