import * as React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

function VisitRegister() {
    const { setMenu } = useStateContext();
    setMenu('내방 신청');
    return (
        <div>hi
              </div>
  );
}

export default VisitRegister