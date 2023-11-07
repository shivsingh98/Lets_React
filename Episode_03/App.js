import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element

// const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React🚀');

const elem = <span>React Elem</span>;

const title = (
  <>
    <h1 className="head" tabIndex="3">
      Namaste React using JSX 🚀🚀
    </h1>
    {elem}
    <h2 className="head" tabIndex="3">
      Namaste React using JSX 🚀🚀
    </h2>
    <h3 className="head" tabIndex="3">
      Namaste React using JSX 🚀🚀
    </h3>
  </>
);

const HeadingComponent = () => (
  <div>
    {3 + 5}
    {title}
    <h1>Namaste React🚀</h1>
    {/* <Title /> */}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(heading);

// console.log(jsxheading);

root.render(<HeadingComponent />);
