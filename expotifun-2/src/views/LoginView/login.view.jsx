import React from "react";

class LoginView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div>
            <form action="">
                <p class="welcome">
                    <div class="line line1">WELCOME TO #$%&?! </div>
                    <div class="line line2">please enter your </div>
                    <div class="line line3">credentials.<span class="blink">_</span></div>
                </p>
                <label for="">
                    Email:
                    <input type="text" />
                </label>
                <label for="">
                    Password:
                    <input type="password" />
                </label>
                    <button type="submit">[ login ]</button>
                </form>
        </div>);
    }
}

export default LoginView;