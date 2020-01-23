const authPaths = [
  '/example',
]

const authPathsCheck = (authStatus, pathname, user) => {
  let pass = true

  if (authPaths.indexOf(pathname) !== -1) {
    pass = authStatus;
  }

  return pass;
}

export default authPathsCheck
