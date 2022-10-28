import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { Container, Nav, NavLink, Row, Col, Input } from "reactstrap";
import { FaCheck, FaSkull } from "react-icons/fa";

const Multiplication: React.FC = () => {
  const history = useHistory();
  const { table }: { table: string } = useParams();
  const [currentTable, setCurrentTable] = React.useState(table ?? "1");

  return (
    <Container style={{ marginBottom: "1.5em" }}>
      <Nav tabs style={{ marginBottom: "1.5em" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <NavLink
            key={`multiplikation-table-${i}`}
            active={`${i}` === currentTable}
            href="#"
            onClick={() => {
              setCurrentTable(`${i}`);
              history.push(`/multiplikation/${i}`);
            }}
          >
            {i}
            {":ans"}
          </NavLink>
        ))}
      </Nav>
      <h1 style={{ marginBottom: "1em" }}>
        {currentTable}:ans multiplikationstabell
      </h1>
      <form>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div
            key={`${i}-${currentTable}`}
            style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f9f9f9" }}
          >
            <MultiplicationQuestion i={i} table={parseInt(currentTable, 10)} />
          </div>
        ))}
      </form>
    </Container>
  );
};

const MultiplicationQuestion: React.FC<{
  i: number;
  table: number;
}> = ({ i, table }) => {
  const [value, setValue] = React.useState<string | number>("");
  const [validate, setValidate] = React.useState<boolean>(false);

  return (
    <Row style={{ marginBottom: "1em" }}>
      <Col xs={{ size: 5 }} md={{ size: 2 }}>
        <h3>
          {i} * {table} ={" "}
        </h3>
      </Col>
      <Col xs={{ size: 5 }} md={{ size: 2 }}>
        <Input
          value={value}
          type="number"
          onKeyDown={(event) => {
            if (event.key.toLowerCase() === "enter") {
              setValidate(true);
              const form = event.target.form;
              const index = [...form].indexOf(event.target);
              if (index < form.length - 1) {
                form.elements[index + 1].focus();
              }
            }
          }}
          onBlur={() => setValidate(true)}
          onChange={({ target }) => {
            setValue(
              /^[0-9]+$/.test(target.value) ? parseInt(target.value, 10) : ""
            );
            setValidate(false);
          }}
        />
      </Col>
      <Col>
        <h3>
          {validate && typeof value === "number" && value === i * table ? (
            <FaCheck style={{ color: "green" }} />
          ) : validate && typeof value === "number" && value !== i * table ? (
            <FaSkull style={{ color: "red" }} />
          ) : null}
        </h3>
      </Col>
    </Row>
  );
};

export default Multiplication;
