import React from 'react';

const ParentComponent2 = () => {
  return (
    <div>
      <h1>Пример использования props.children 2</h1>
      <ChildComponent2>
        {(name) => <p>Привет, {name}!</p>}
      </ChildComponent2>
    </div>
  );
};

const ChildComponent2 = (props) => {
  const name = "John";
  return (
    <div>
      <h2>Дочерний компонент</h2>
      {props.children(name)}
    </div>
  );
};

export default ParentComponent2;