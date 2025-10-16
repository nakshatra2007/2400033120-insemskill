function Welcome({ name }) {
  return <h2 style={{ color: "teal", textAlign: "center" }}>Welcome, {name}!</h2>;
}

export default function App() {
  const students = ["Deepak", "Tara"];
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Dashboard</h1>
      {students.map((s, i) => (
        <Welcome key={i} name={s} />
      ))}
    </div>
  );
}
