import React from "react";
import * as S from "./styles";

function AuthForm({ btnText, onSubmit }) {
  const [state, setState] = React.useState({ email: "", password: "" });

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label>
        email
        <S.Input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </S.Label>
      <S.Label>
        password
        <S.Input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </S.Label>
      <S.Button>{btnText}</S.Button>
    </S.Form>
  );
}

export default AuthForm;
