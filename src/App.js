import logo from './logo.svg';
import './App.css';
import HookComponent from './components/HookComponent';
import HookCounterTwo from './components/HookCounterTwo';
import ObjectComponent from './components/ObjectComponent';
import UseEffectHook from './components/UseEffectHook';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCount from './components/IntervalHookCount';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import React from 'react'
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentUC from './components/ParentUC';
import CounterUseMemo from './components/CounterUseMemo';
import Focusinput from './components/Focusinput';
import HookTimer from './components/HookTimer';

export const UserContext = React.createContext()

function App() {

  return (
    <div className="App">
      <HookTimer />
    </div>
  );
}

export default App;
