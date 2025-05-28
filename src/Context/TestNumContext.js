import { createContext } from 'react';

const TestNumContext = createContext({
  testNum: 0,
  setTestNum: () => {},
});
export default TestNumContext;