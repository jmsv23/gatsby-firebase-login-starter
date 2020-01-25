import React from 'react'
import isEmail from 'validator/lib/isEmail'
import { Grid, Button } from 'semantic-ui-react'
import { Form, withSubmit } from 'formcat'
import InputField from './inputField'
import { withAppContext } from '../context/AppContext'
import styles from './login.module.scss'

const onSubmit = (formState, context) => {
  context.firebase.doSignInWithEmailAndPassword(formState.data.user, formState.data.password)
}

const Submit = withSubmit(props => <Button {...props} />)

const testMail = value => ( isEmail(value) )

const login = props => (
  <Grid verticalAlign='middle' columns={12} centered className={styles.wrapper}>
    <Grid.Row>
      <Grid.Column mobile={10} tablet={8} computer={6}>
        <h1>Login</h1>
        <div className={styles.form}>
          <Form onSubmit={ values => onSubmit(values, props.context) }>
            <Grid columns={1}>
              <Grid.Row>
                <Grid.Column>
                  <InputField
                    required
                    name="user"
                    iconPosition="left"
                    placeholder="Email"
                    icon="at"
                    size="big"
                    type="text"
                    className={styles.input}
                    validations={[testMail]}
                />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <InputField
                    required
                    name="password"
                    iconPosition="left"
                    placeholder='Password'
                    icon="lock"
                    type="password"
                    size="big"
                    className={styles.input}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Submit primary>Login</Submit>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default withAppContext(login)
