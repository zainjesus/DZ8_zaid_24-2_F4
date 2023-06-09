import React from 'react';

const ParentComponent = () => {
  return (
    <div>
      <h1>Пример использования props.children 1</h1>
      <ChildComponent>
        <p>Этот текст передается через props.children</p>
      </ChildComponent>
    </div>
  );
};

const ChildComponent = (props) => {
  return (
    <div>
      <h2>Дочерний компонент</h2>
      {props.children}
    </div>
  );
};

export default ParentComponent;