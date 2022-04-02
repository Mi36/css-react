import { useState } from "react";
import styles from "./App.module.css";
import Background from "./components/Background/Background";
import Grid from "./components/Grid/Grid";
import Rocket from "./components/Rocket/Rocket";
import Smoke from "./components/Rocket/Smoke";
import Title from "./components/Title/Title";
import factsList from "./data/NASA_facts.json";

function App() {
  const [facts] = useState(factsList);
  return (
    <div className={styles.App}>
      <Title />
      <Background />
      <Rocket />
      <Smoke />
      <Grid facts={facts} />
    </div>
  );
}

export default App;
