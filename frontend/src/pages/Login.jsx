export default function Login() {
  return (
    <div style={{ padding: "50px", maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>
      <input placeholder="Email" style={inputStyle} />
      <input placeholder="Password" type="password" style={inputStyle} />
      <button style={btnStyle}>Login</button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const btnStyle = {
  marginTop: "15px",
  width: "100%",
  padding: "12px",
  background: "#0e4b9d",
  border: "none",
  borderRadius: "8px",
  color: "white",
  cursor: "pointer"
};
