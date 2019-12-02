require('dotenv').config();

/// ALSO, do a q server on 3333...
const Q = require('@nmq/q/server');
Q.start();

const queue = new Q('todoCrud');
queue.monitorEvent('save');
queue.monitorEvent('delete');
