import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer, Model } from 'miragejs';
import { GlobalStyle } from './styles/global';

createServer({
  models: { transaction: Model },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'freelancer web site',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'compra de mouse',
          type: 'withdrawal',
          category: 'compra',
          amount: 250,
          createdAt: new Date('2021-02-15 09:00:00'),
        },
        {
          id: 3,
          title: 'pago de alquiler',
          type: 'withdrawal',
          category: 'alquiler',
          amount: 1800,
          createdAt: new Date('2021-03-05 09:00:00'),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('transactions', () => this.schema.all('transaction'));

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
