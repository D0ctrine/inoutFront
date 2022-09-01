import * as React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

function AccessHistory() {
    const { setMenu } = useStateContext();
    setMenu('출입권한 신청내역');
    return (
        <div>hi
              </div>
  );
}

export default AccessHistory