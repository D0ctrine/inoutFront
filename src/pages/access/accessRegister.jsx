import * as React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

function AccessRegister() {
    const { setMenu } = useStateContext();
    setMenu('출입권한 신청');
    return (
        <div>hi
              </div>
  );
}

export default AccessRegister