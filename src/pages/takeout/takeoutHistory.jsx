import * as React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

function TakeoutHistory() {
    const { setMenu } = useStateContext();
    setMenu('반출 신청 내역');
    return (
        <div>hi
              </div>
  );
}

export default TakeoutHistory