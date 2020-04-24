import React from 'react';
import ReactDOM from 'react-dom';
import NoStyledComponents from './components/NoStyledComponent';
import WithStyledComponents from './components/WithStyledComponents/HelloWorld';
import BasedOnProps from './components/WithStyledComponents/BasedOnProps';
import BasedOnProps2 from './components/WithStyledComponents/BasedOnPropsExample2';
import ExtendingStyles from './components/WithStyledComponents/ExtendingStyles';
import PseudoElements from './components/WithStyledComponents/PseudoElements';
import Animations from './components/WithStyledComponents/Animations';
import Theming from './components/WithStyledComponents/Theming';

ReactDOM.render(
  <React.StrictMode>
    <NoStyledComponents />

    <WithStyledComponents />

    <BasedOnProps />

    <BasedOnProps2 />

    <ExtendingStyles />

    <PseudoElements />

    <Animations />

    <Theming />
  </React.StrictMode>,
  document.getElementById('root')
);
