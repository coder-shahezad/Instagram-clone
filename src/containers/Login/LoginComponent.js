import React from "react";
import { Form, Field } from "react-final-form";
import { validate, loginSchema } from "../../helpers/validations";
import { loginFormField } from "./loginFormField";
import { NxInputField } from "../../components/Controls/NxInputField/NxInputField";
import { NxButton } from "../../components/Controls/NxButton/NxButton";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NxBackdrop from "../../components/Backdrop/Backdrop";
import { Paper } from "@material-ui/core";
import { useHistory } from "react-router";

const LoginComponent = (props) => {
  const history = useHistory();
  return (
    <Container component="main" maxWidth="xs">
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Paper className="text-center mt-4">
          <Grid item xs={11} sm={10} className="wrapper mtb-3">
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Form
              onSubmit={props.onSubmit}
              validate={validate(loginSchema)}
              render={({ handleSubmit, invalid }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <Grid
                    container
                    spacing={1}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    {loginFormField.map(
                      ({ id, label, fullWidth, inputProps, type }) => (
                        <Field name={id} key={id}>
                          {({ input, meta }) => (
                            <Grid item xs={12} sm={!fullWidth ? 6 : undefined}>
                              <NxInputField
                                inputInfo={inputProps}
                                fullWidth={fullWidth}
                                input={input}
                                type={type}
                                id={id}
                                isMultiline={id === "address" ? true : false}
                                label={label}
                                meta={meta}
                                helperText={meta.error}
                              />
                            </Grid>
                          )}
                        </Field>
                      )
                    )}

                    <Grid item xs={12}>
                      <NxButton
                        type="submit"
                        text="Login"
                        size="large"
                        disabled={invalid}
                      />
                    </Grid>
                  </Grid>
                </form>
              )}
            />

            {props.loginLoading ? (
              <NxBackdrop open={props.loginLoading} />
            ) : null}

            <Typography className="text-right mt-2">
              Don't have an account?{" "}
              <Link
                href="#"
                onClick={() => {
                  history.push("/signup");
                }}
              >
                Click yours now.
              </Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
};

export default LoginComponent;
