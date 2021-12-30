import "./index.css";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <div className="top">
            <i class="fab fa-google"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-github"></i>
          </div>
          <p className="divider">
            <span>Or</span>
          </p>
          <form action="">
            <label>E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <label>Password</label>
            <input
              type="password"
              name="pwd"
              id="pwd"
              placeholder="Enter your password"
            />
            <div className="remember">
              <input type="checkbox" id="remember" checked="checked" />
              <p>Remember me</p>
            </div>
            <button>Login</button>
          </form>
          <div className="bottom">
            <p>Forget your password?</p>
            <a href="#">Reset password</a>
          </div>
          <p className="create">Create Account</p>
        </div>
        <div className="theme-toggle">
          <h2>Light Theme</h2>
          <i
            className={
              theme === "light" ? "fas fa-toggle-off" : "fas fa-toggle-on"
            }
            onClick={switchTheme}
          ></i>
        </div>
      </div>
    </div>
  );
}
export default App;
