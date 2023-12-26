import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

type Props = {
  $active?: boolean;
};

const red = css`
  &,
  &:hover {
    color: red;
  }
`;

const Junk = styled.div<Props>`
  ${(props) => (props.$active ? red : null)}
`;

export default function Home() {
  const [active, setActive] = useState(false);

  const strictModeCrap = useRef(true);
  useEffect(() => {
    strictModeCrap.current &&
      setInterval(() => {
        setActive((val) => (val ? false : true));
      }, 2000);
    strictModeCrap.current = false;
  }, []);

  return (
    <main>
      <Junk $active={active}>Hello World - should be read {active ? "Yes" : "No"}</Junk>
    </main>
  );
}
