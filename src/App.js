import "./App.css";
import Panel from "./layouts/Panel";
import Playground from "./layouts/Playground";

export default function App() {
  return (
    <div className="App">
      <div class="app_warp">
        <Playground />
        <Panel />
      </div>
    </div>
  );
}
