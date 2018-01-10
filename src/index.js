import WhoamiPlugin from './plugin';
import WhoamiActions from 'actions';
import WhoamiStore from 'stores';

/**
 * A sample role for the component.
 */
const ROLE = {
  name: 'Whoami',
  component: WhoamiPlugin
};

/**
 * Activate all the components in the Whoami package.
 * @param {Object} appRegistry - The Hadron appRegisrty to activate this plugin with.
 **/
function activate(appRegistry) {
  // Register the WhoamiPlugin as a role in Compass
  //
  // Available roles are:
  //   - Instance.Tab: { name: <String>, component: <React.Component>, order: <Number> }
  //   - Database.Tab: { name: <String>, component: <React.Component>, order: <Number> }
  //   - Collection.Tab: { name: <String>, component: <React.Component>, order: <Number> }
  //   - CollectionHUD.Item: { name <String>, component: <React.Component> }
  //   - Header.Item: { name: <String>, component: <React.Component>, alignment: <String> }

  appRegistry.registerRole('Header.Item', ROLE);
  appRegistry.registerAction('Whoami.Actions', WhoamiActions);
  appRegistry.registerStore('Whoami.Store', WhoamiStore);
}

/**
 * Deactivate all the components in the Whoami package.
 * @param {Object} appRegistry - The Hadron appRegisrty to deactivate this plugin with.
 **/
function deactivate(appRegistry) {
  appRegistry.deregisterRole('Header.Item', ROLE);
  appRegistry.deregisterAction('Whoami.Actions');
  appRegistry.deregisterStore('Whoami.Store');
}

export default WhoamiPlugin;
export { activate, deactivate };
