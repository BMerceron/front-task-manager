export default {
  isAuthenticated: false,
  login() {
    this.isAuthenticated = true;
  },
  logout() {
    this.isAuthenticated = false;
  },
};