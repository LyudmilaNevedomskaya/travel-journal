import Card from "./components/Card";
import Header from "./components/Header";
import data from './data';

export default function App() {
  const cards = data.map(item => {
    return (<Card 
              key={item.id}
              {...item}
            />)
  })
  return (
    <div className="App">
      <Header />
      <main className="main-container">{cards}</main>
    </div>
  );
};
