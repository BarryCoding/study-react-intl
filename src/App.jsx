import { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { IntlContext } from './components/IntlWrapper';
function App(props) {
  const context = useContext(IntlContext);
  console.log(`🚀 ~ file: App.jsx ~ line 8 ~ App ~ context`, context)
  
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <FormattedDate value={props.date} year='numeric' month='long' day='numeric' weekday='long' />
        </p>
        <p>
          <select value={context.locale} onChange={context.selectLanguage}>
            <option value="en-US">English</option>
            <option value="es-MX">Spanish</option>
          </select>
        </p>
        <p>
          <FormattedMessage
            id='app.header'
            values={{
              fileName: 'src/App.js',
              code: (word) => <strong>{word}</strong>,
            }}
          />
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FormattedMessage id='app.content' />
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
        <p>
          <FormattedMessage
            id='app.channel.plug'
            values={{ channelName: 'Coding with Springer' }}
          />
        </p>
      </header>
    </div>
  );
}

export default App;
