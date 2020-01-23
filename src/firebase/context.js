import React from 'react'
const AppContext = React.createContext(null)

export const withFirebase = Component => props => (
  <AppContext.Consumer>
    {context => <Component {...props} context={context} />}
  </AppContext.Consumer>
);

export default AppContext;
