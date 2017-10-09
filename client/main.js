// Client entry point, imports all client code

import React, {Component} from 'react';
import { render } from 'react-dom';

import '../imports/startup/client/routes';
import Books from '../imports/ui/containers/Books';
import { App } from '../imports/startup/client/routes';

import '../imports/startup/both/accounts-config.js';
