import { Container, ErroMessage } from "./styles";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Header } from "../../components/Header";
import firebase from "firebase";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function Register() {
  const [isNav, setIsNav] = useState(false);
  const Validator = yup.object().shape({
    email: yup.string().required("Insira o e-mail").email("E-mail inválido"),
    password: yup
      .string()
      .required("Insira a senha")
      .min(8, "A senha deve conter pelo menos 8 dígitos"),
    confirmPassword: yup
      .string()
      .required("Insira a confirmação senha")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Validator),
  });

  async function onSubmit(data) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        setIsNav(true);
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  }
  return (
    <>
      <Header />
      <Container onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3>Cadastro</h3>
          <input type="email" placeholder="E-mail" {...register("email")} />
          {errors.email?.message ? (
            <ErroMessage>{errors.email?.message}</ErroMessage>
          ) : null}
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password?.message ? (
            <ErroMessage>{errors.password?.message}</ErroMessage>
          ) : null}
          <input
            type="password"
            placeholder="Confirmar senha"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message ? (
            <ErroMessage>{errors.confirmPassword?.message}</ErroMessage>
          ) : null}
          <button type="submit">Enviar</button>
        </div>
        {isNav ? <Redirect to="/Animes" /> : null}
      </Container>
    </>
  );
}
