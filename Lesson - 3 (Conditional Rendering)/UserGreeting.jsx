import PropTypes from "prop-types";

function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.userName}</h2>
  );
  const loginPrompt = (
    <h2 className="login-prompt">Please log in to continue</h2>
  );
  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
  userName: PropTypes.string,
  isLoggedIn: PropTypes.bool,
}

UserGreeting.defaultProps = {
  userName: "Guest",
  isLoggedIn: false,
}

export default UserGreeting;
