/* eslint-disable react/jsx-props-no-spreading */
export default function Wrapper(Component: any, props: any) {
  return function WrapperComponent() {
    return <Component {...props} />;
  };
}
