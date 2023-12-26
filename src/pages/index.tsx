import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

type Props = {
  active?: boolean;
};

const red = css`
  &,
  &:hover {
    color: red;
  }
`;

const Junk = styled.div<Props>`
  ${(props) => (props.active ? red : null)}
`;

export default function Home() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 2000);
  }, []);

  return (
    <main>
      <Junk active={active}>Hello World - should be read {active ? "Yes" : "No"}</Junk>
    </main>
  );
}
