import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { Container, Nav, NavLink, Row, Col, Input } from "reactstrap";
import { FaCheck, FaSkull } from "react-icons/fa";

const Subtraction: React.FC = () => {
  const history = useHistory();
  const { term }: { term: string } = useParams();
  const [currentTerm, setCurrentTerm] = React.useState(
    /^[0-9]+$/.test(term) ? term : "2"
  );

  return (
    <Container style={{ marginBottom: "1.5em" }}>
      <Nav tabs style={{ marginBottom: "1.5em" }}>
        {[2, 3].map((i) => (
          <NavLink
            key={`subtraction-term-${i}`}
            active={`${i}` === currentTerm}
            href="#"
            onClick={() => {
              setCurrentTerm(`${i}`);
              history.push(`/subtraktion/${i}`);
            }}
          >
            {i} termer
          </NavLink>
        ))}
      </Nav>
      <h1 style={{ marginBottom: "1em" }}>Subtraktion, {currentTerm} termer</h1>
      <form>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div
            key={`${i}-${currentTerm}`}
            style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f9f9f9" }}
          >
            <SubtractionQuestion
              terms={parseInt(currentTerm, 10)}
              min={0}
              max={10}
            />
          </div>
        ))}
      </form>
    </Container>
  );
};

const SubtractionQuestion: React.FC<{
  min: number;
  max: number;
  terms: number;
}> = ({ min, max, terms }) => {
  const [value, setValue] = React.useState<string | number>("");
  const [validate, setValidate] = React.useState<boolean>(false);

  const [vals, setVals] = React.useState<number[]>([]);
  const [sum, setSum] = React.useState<number>(0);
  React.useEffect(() => {
    const arr = [];
    for (let i = 0; i < terms; i++) {
      let v;
      do {
        v = Math.floor(Math.random() * (max - min) + min);
      } while (i > 0 && v > arr[i - 1]);
      arr.push(v);
    }
    setVals(arr);
    setSum(arr.reduce((a, b) => a - b));
  }, [max, min, terms]);

  return (
    <Row style={{ marginBottom: "1em" }}>
      <Col xs={{ size: 5 }} md={{ size: 2 }}>
        <h3>{vals.join(" - ")} =</h3>
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
          {validate && typeof value === "number" && value === sum ? (
            <FaCheck style={{ color: "green" }} />
          ) : validate && typeof value === "number" && value !== sum ? (
            <FaSkull style={{ color: "red" }} />
          ) : null}
        </h3>
      </Col>
    </Row>
  );
};

export default Subtraction;
