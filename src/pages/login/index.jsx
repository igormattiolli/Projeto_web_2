import {
  Container,
  ContainerForm,
  ContainerTitle,
  ErroMessage,
} from "./styles";
import { Header } from "../../components/Header";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import firebase from "firebase";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function Login() {
  const [isNav, setIsNav] = useState(false);
  const Validator = yup.object().shape({
    email: yup
      .string()
      .required("Insira o e-mail")
      .min(3, "O e-mail deve conter pelo menos 3 dígitos")
      .email("E-mail inválido"),
    password: yup
      .string()
      .required("Insira a senha")
      .min(8, "A senha deve conter pelo menos 8 dígitos"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Validator),
  });

  function onSubmit(data) {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
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
          <ContainerTitle>
            <h1>
              Para acompanhar seus investimentos, ter acesso aos nossos produtos
              e serviços, faça o seu login
            </h1>
          </ContainerTitle>
          <ContainerForm>
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

            <button className="login" type="submit">
              Entrar
            </button>
          </ContainerForm>
        </div>
        {isNav ? <Redirect to="/Animes" /> : null}
      </Container>
    </>
  );
}
