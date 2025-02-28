function Header({ text = "Feedback UI" }) {
  return (
    <header style={{ backgroundColor: "blue", color: "red" }}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
}

export default Header;
