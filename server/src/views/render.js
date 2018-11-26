import React from 'react';
import { renderToString } from 'react-dom/server';

export default (Comp, props = {}) => {
    const content = renderToString(<Comp {...props} />);
    return `
        <html>
        <head></head>
        <body>
            <div id="root">${content}</div>           
            <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/recipes/ServerRendering.html#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(props).replace(
            /</g,
            '\\u003c'
        )}
            </script>
            <script src="/bundle.js"></script>
        </body>
        </html>
     `;
};