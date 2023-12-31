import React from 'react';
import ReactDOM from 'react-dom/client';

const main = React.createElement('div', { id: 'main' }, [
  React.createElement('h1', { id: 'main-heading' }, 'First React Project'),
  [
    React.createElement(
      'div',
      { id: 'box1' },
      React.createElement(
        'div',
        { id: 'box2' },
        React.createElement(
          'div',
          { id: 'box3' },
          React.createElement(
            'h3',
            { id: 'name', style: { color: 'blue' } },
            'Zeeva Singh'
          )
        )
      )
    ),
  ],
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(main);
