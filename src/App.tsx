import Klu from '@kluai/core';

const klu = new Klu('YOUR_API_KEY');

const App = () => {
  return (
    async function runAction() {
      const result = await klu.actions.prompt('6942f034-6872-4eed-9bb3-7e3bf18e5743', 'Write a sentence about Machine Learning.');
      console.log(result);
    }
  );
}

export default App;

