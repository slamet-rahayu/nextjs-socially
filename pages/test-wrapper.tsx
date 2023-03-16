/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import { ReactElement, useState } from 'react';

function TestWrapper(props: any): ReactElement {
  return (
    <div>
      <p>Hello</p>
      <p>{props.msg}</p>
      <button type="button" onClick={() => props.dispatchMsg('bangsat')}>
        dispatch
      </button>
    </div>
  );
}

function Page() {
  const [msg, setMsg] = useState<string>('Hi');

  const dispatchMsg = (msgPayload: string) => setMsg(msgPayload);

  const data = ['1', '2', '3'];

  const mapProps = {
    data,
    msg,
    dispatchMsg
  };

  return <TestWrapper {...mapProps} />;
}

export default Page;
