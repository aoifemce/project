/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from '../components/App';

// Child routes
import home from './home';
import login from './login';
import profile from './dashboardPages/profile';
import onlinestore from './dashboardPages/onlinestore';
import failed from './dashboardPages/failed';
import storeCheckout from './dashboardPages/storeCheckout';
import membershipReg from './dashboardPages/membershipReg';
import chat from './dashboardPages/chat';
import resultsFixtures from './dashboardPages/resultsFixtures';
import error from './error';
import clubs from './dashboardPages/clubs';
import ordered from './dashboardPages/ordered';
import morrisjscharts from './dashboardPages/morrisjsCharts';
import notification from './dashboardPages/notification';
import Header from '../components/Header';

export default [

  {
    path: '/login',
    children: [
      login,
    ],
    async action({ next, render, context }) {
      const component = await next();
      if (component === undefined) return component;
      return render(
        <App context={context}>{component}</App>
      );
    },
  },
   {
     path: '/home',
     children: [
       home,
     ],
     async action({ next, render, context }) {
       const component = await next();
       if (component === undefined) return component;
       return render(
         <App context={context}>{component}</App>
       );
     },
   },

  {
    path: '/',

  // keep in mind, routes are evaluated in order
    children: [
    home,
     login,
       clubs,
     ordered,
      notification,
      morrisjscharts,
      profile,
      failed,
      membershipReg,
      chat,
      resultsFixtures,
      onlinestore,
      storeCheckout,


      // place new routes before...
      // content,

    ],

    async action({ next, render, context }) {
      // console.log('inside dashboard');
      const component = await next();
      // console.log('inside dasdboard component', component);
      if (component === undefined) return component;
      return render(
        <div>
          <Header />
          <div id="page-wrapper" className="page-wrapper">
            <App context={context}>{component}</App>
          </div>
        </div>
      );
    },
  },
  {
    path: '/error',
    children: [
      error,
    ],
    async action({ next, render, context }) {
      // console.log('inside error');
      const component = await next();
      // console.log('inside error with component', component);
      if (component === undefined) return component;
      return render(
        <App context={context}>{component}</App>
      );
    },
  },
];
