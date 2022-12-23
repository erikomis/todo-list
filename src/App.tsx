import { Header } from "./components/Header/Header";
import { TaskList } from "./containers/TaskList";
import "./global/global.css";
export function App() {
  return (
    <>
      <Header />
      <TaskList />
    </>
  );
}
