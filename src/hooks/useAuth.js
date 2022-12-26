export default function useAuth() {
  function login(email, password) {
    // verify credentials i.e email, password
    sessionStorage.setItem("token", "XXXauthtokenXXX");
    return true;
  }
  function isAuthorized() {
    let authorized = false;

    const token = sessionStorage.getItem("token");
    if (token === null || token === undefined) authorized = false;
    else {
      // verify and refresh token
      authorized = true;
    }

    return authorized;
  }

  return { login, isAuthorized };
}
