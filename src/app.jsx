import React from 'react';
import { render } from 'react-dom';

import HelloWorld from "./components/HelloWorld/index.jsx"

const container = document.body.appendChild(
    document.createElement('div')
);

render(
    <HelloWorld />,
    container
);