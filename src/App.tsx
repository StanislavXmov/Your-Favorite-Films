import { Global } from "@emotion/react";
import { MainLayout } from "containers";
import { globalStyles } from "styles";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Global styles={globalStyles} />
      <MainLayout></MainLayout>
    </div>
  );
}

export default App;
