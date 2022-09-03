/* eslint-disable */
import { Link } from "react-router-dom";

export default function App() {
 
  return (
    <div>
      <h1>메인 페이지</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/main">메인페이지</Link> |{" "}
        <Link to="/write">글쓰기</Link>
      </nav>
    </div>
  );
}



