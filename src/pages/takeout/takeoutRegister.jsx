import * as React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

function TakeoutRegister() {
    const { setMenu } = useStateContext();
    setMenu('반출 신청');
    return (
        <div>hi
              </div>
  );
}

export default TakeoutRegister