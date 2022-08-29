import { LoadingButton } from '@mui/lab';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import LinkComponent from '../../components/custom/link.component';
import FormikCheckBoxComponent from '../../components/formik/formik-check-box.component';
import FormikPasswordFieldComponent from '../../components/formik/formik-password-field.component';
import FormikTextFieldComponent from '../../components/formik/formik-text-field.component';
import { AppUrlEnum } from '../../routes/app-url.enum';
import { globalProps } from '../../styles/global.props';
import { signupValidationSchema } from '../../validations/auth/auth-validation';

const SignupScreen = () => {
  const { box1200 } = globalProps;
  /**
   * Local states
   */
  const [loading, setLoading] = useState(false);

  /**
   * Handlers
   */
  const handleSignup = async (
    email: string,
    password: string,
    resetForm: any
  ) => {
    setLoading(true);
    try {
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Input form
   */
  const signupForm = (
    <Formik
      initialValues={{
        email: '',
        password: '',
        acceptTerms: false,
      }}
      validationSchema={signupValidationSchema}
      onSubmit={async (values, { resetForm }) => {
        const { email, password } = values;
        return await handleSignup(email, password, resetForm);
      }}>
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="column" spacing={4} mt={3}>
            <FormikTextFieldComponent
              label="Email"
              name="email"
              size="large"
              disabled={loading}
            />
            <FormikPasswordFieldComponent formik={formik} loading={loading} />

            <FormikCheckBoxComponent
              name="acceptTerms"
              label={
                <Typography sx={{ fontSize: '0.9rem' }}>
                  I agree to the User Agreement, and acknowledge the Privacy
                  Policy.
                </Typography>
              }
            />

            <LoadingButton
              type="submit"
              loading={loading}
              variant="contained"
              fullWidth>
              Create account
            </LoadingButton>
          </Stack>
        </form>
      )}
    </Formik>
  );

  return (
    <Box
      sx={{
        height: '100vh',
      }}>
      <Box sx={{ ...box1200 }}>
        <Box
          sx={{
            margin: '100px auto 20px auto',
            maxWidth: '600px',
            padding: { xs: '10px', sm: '20px' },
          }}>
          <Paper
            elevation={5}
            sx={{
              borderRadius: 3,
              padding: '50px 20px',
            }}>
            <Typography
              sx={{ fontSize: '2rem', fontWeight: 500, textAlign: 'center' }}
              color="primary">
              Sign up
            </Typography>

            {signupForm}

            <Stack spacing={1} sx={{ marginTop: '20px' }}>
              <LinkComponent
                name="Already have an account? Sign in"
                linkTo={AppUrlEnum.Signin}
              />
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupScreen;