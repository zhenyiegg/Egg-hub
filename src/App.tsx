const App = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>🥚 EggHub Test</h1>
      <p>If you can see this, React is working!</p>
      <p>Base URL: {import.meta.env.BASE_URL}</p>
      <p>Mode: {import.meta.env.MODE}</p>
    </div>
  );
};

export default App;
