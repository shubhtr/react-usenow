import useNow from "./hooks/useNow";

function App() {
  const now = useNow(1000);

  return (
    <>
      <div>
        <span>{now.toString()}</span>
      </div>
    </>
  );
}

export default App;
