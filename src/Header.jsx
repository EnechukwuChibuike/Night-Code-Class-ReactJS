import "./Header.css";
import Button from "./Button";

function Header() {
  const login = () => {
    console.log("Login Successful");
  };

  const signup = () => {
    console.log("Signup Successful");
  };

  return (
    <header>
      <h1 style={{ fontSize: "30px", color: "red" }}>Header</h1>
      <div>
        <Button text={"Log in"} handleClick={login} />
        <Button text={"Sign Up"} handleClick={signup} />
      </div>
    </header>
  );
}

export default Header;
