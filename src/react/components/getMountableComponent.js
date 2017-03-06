import h from '../h';
import Provider from './Provider';

export default function getMountableComponent(app) {
  const Component = app.get('component');
  const providerProps = { app };
  const ComponentInProvider = (componentProps) => {
    return (
      <Provider {...providerProps}>
        <Component {...componentProps} />
      </Provider>
    );
  };

  return (props) => {
    return <ComponentInProvider {...props} />;
  };
}