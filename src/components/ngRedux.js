import Connector from './connector';

export default function ngReduxProvider() {
  let _store = undefined;
 
  this.setStore = (store) => {
    _store = store;
  };
  
  this.$get = ($injector) => ({ ..._store, connect: Connector(_store) });

  this.$get.$inject = ['$injector'];
} 