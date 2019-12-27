import App from 'next/app'
import React from 'react'
import withReduxStore from '../src/redux/with-redux-store'
import { Provider } from 'react-redux'
import { appWithTranslation } from '../i18n';

class MyApp extends App<any> {
    render() {
      const { Component, pageProps, reduxStore } = this.props
      return (
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
      )
    }
  }
  
  const wrapTranslate = appWithTranslation(MyApp);
  const wrapRedux = withReduxStore(wrapTranslate)
  
  export default wrapRedux;