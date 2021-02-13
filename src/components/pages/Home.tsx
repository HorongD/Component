import React from "react";
import { Link } from "react-router-dom";

interface Props {}

export const Home = (props: Props) => {
  return (
    <ul>
      <li>
        <Link to="/instruction">인스트럭션</Link>
      </li>
      <li>
        <Link to="/smooth">스무스</Link>
      </li>
    </ul>
  );
};
