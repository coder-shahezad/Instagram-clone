import React from "react";
import { Form, Field } from "react-final-form";
import { validate, signupSchema } from "../../helpers/validations";
import { signupFormFields } from "./signUpFormField";
import { NxInputField } from "../../components/Controls/NxInputField/NxInputField";
import { NxButton } from "../../components/Controls/NxButton/NxButton";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import { Paper } from "@material-ui/core";
import NxBackdrop from "../../components/Backdrop/Backdrop";

const SignUpComponent = (props) => {
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
              Sign Up
            </Typography>
            <Form
              onSubmit={props.onSubmit}
              validate={validate(signupSchema)}
              render={({ handleSubmit, invalid }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <Grid
                    container
                    spacing={1}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    {signupFormFields.map(
                      ({ id, label, fullWidth, inputProps, size, type }) => (
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
                        text="Sign Up"
                        size="large"
                        disabled={invalid}
                      />
                    </Grid>
                  </Grid>
                </form>
              )}
            />
            {props.signUpLoading ? (
              <NxBackdrop open={props.signUpLoading} />
            ) : null}
            <Typography className="text-right mt-2">
              <Link
                href="#"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Already have an Account?
              </Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
};

export default SignUpComponent;
