import AppleCounter from './components/AppleCounter'
import Counter from './components/Counter'

const App = () => {

  const message="Hello"
  return (
    <div>
      <Counter hi="message" b={{ a: 5 }} a="kiki" c={"kili"} />
      {/* <AppleCounter /> */}
    </div>
  );
}

export default App
