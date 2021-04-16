import { Container, ErroMessage } from "./styles";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { firebase } from "firebase";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function Register() {
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

  function onSubmit(data) {
    console.log(data);
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(data.email, data.password)
    //   .then((userCredential) => {
    //     console.log(userCredential.user);
    //   })
    //   .catch((error) => {
    //     console.log(error.code);
    //     console.log(error.message);
    //   });
  }
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3>Cadastro</h3>
        <input type="email" placeholder="E-mail" {...register("email")} />
        {errors.email?.message ? (
          <ErroMessage>{errors.email?.message}</ErroMessage>
        ) : null}
        <input type="password" placeholder="Senha" {...register("password")} />
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
    </Container>
  );
}
