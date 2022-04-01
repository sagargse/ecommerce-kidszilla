import "./loginPage.css";
import { useAuth } from "../../context/auth-context";

export const LoginPage = () => {
    const { loginHandler, changeHandler, formData, setFormData } = useAuth();
    return (
        <main className="middle-container">
            <div className="signup-container">
                <table className="signup-content">
                    <th colspan="2" className="signup-heading">Login</th>
                    <tr className="signup-row">
                        <td><label for="email">Email Address:</label></td>
                        <td><input
                            type="email"
                            name="email"
                            id="email"
                            className="signup-input"
                            placeholder="sagargse@gmail.com"
                            value={formData.email}
                            onChange={(e) => changeHandler(e)}
                            required />
                        </td>
                    </tr>
                    <tr className="signup-row">
                        <td><label for="password">Password:</label></td>
                        <td><input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="************"
                            value={formData.password}
                            className="signup-input"
                            onChange={(e) => changeHandler(e)}
                            required />
                        </td>
                    </tr>
                    <tr className="signup-row">
                        <td><input type="checkbox" name="condition" id="condition" />
                            <label for="condition">Remember Me</label></td>
                        <td><a className="forgot-link" href="#">Forgot your Password?</a></td>
                    </tr>
                    <tr className="signup-row">
                        <td colspan="2">
                            <button
                                className="btn-submit"
                                onClick={loginHandler}>Login
                            </button>
                        </td>
                    </tr>
                    <tr className="signup-row">
                        <td colSpan="2">
                            <button
                                className="btn-submit"
                                onClick={() =>
                                    setFormData({
                                        ...formData,
                                        email: "adarshbalika@gmail.com",
                                        password: "adarshbalika",
                                    })
                                }
                            >
                                Login as a Guest Credential
                            </button>
                        </td>
                    </tr>
                    <tr className="signup-row">
                        <td colspan="2"><a href="./signup.html" className="already-account">Create New Account</a></td>
                    </tr>
                </table>
            </div>
        </main>
    );
};