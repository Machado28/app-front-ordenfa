import { useContext, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import { CircularProgress, TextField, Fade } from '@material-ui/core';
import * as Yup from 'yup';
import  Progress  from '../../components/progress/index';
 
import * as S from '../../styles/stylePages/loginUsuario/style';
// import imgLogin from "../assets/img/"
import Footer from '../../components/footer/index';
import { AuthContext } from '../../contexts/AuthContext';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um Email Válido')
    .required('O Email é obrigatório'),
  password: Yup.string().required('Insira a Palavra Passe'),
});

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green ',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'green',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


function Login() {
  const { signIn, loading } = useContext(AuthContext);

  const classes = useStyles();
  

  const SendData = async (credenciais) => {
    console.log(credenciais);
    if (credenciais) {
      const data = {
        email: credenciais.email,
        password: credenciais.password,
      };
      await signIn(data);
    }
  };

  return (
    <>
    <S.ConatinerFundoLoginCadastrar>
      <S.Modal>
        <h1>Ordenfa-App</h1>
        <S.Session2>
          <S.HeaderModal>
            <h2>Início de Sessão</h2>
            <p>Façca login para continuar na Ordenfa-app</p>
          </S.HeaderModal>
          {loading && <Progress />}
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              SendData(values);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className={classes.root} onSubmit={handleSubmit}>
                <CssTextField
                  className={classes.margin}
                  label="E-mail"
                  variant="outlined"
                  name="email"
                  type="email"
                  id="custom-css-outlined-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <CssTextField
                  className={classes.margin}
                  label="Password"
                  variant="outlined"
                  name="password"
                  type="password"
                  id="custom-css-outlined-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}

                <S.ButtonELink>
                  <button type="submit" disabled={isSubmitting}>
                    Entrar
                  </button >

                  <div>
                    <p>Inscrever-se na Ordenfa-app?</p>
                    <S.LigarPages href="/inscricao">
                      Inscrever
                    </S.LigarPages>
                  </div>
                </S.ButtonELink>
              </form>
            )}
          </Formik>
        </S.Session2>
        <S.FooterModal>
          <li>Ajuda</li>
          <li>Privacidade</li>
          <li>Termos</li>
        </S.FooterModal>
      </S.Modal>
      
    </S.ConatinerFundoLoginCadastrar>
      </>
  );
}

export default Login;
