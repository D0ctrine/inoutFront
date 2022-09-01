import * as React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

function VisitHistory() {
    const { setMenu } = useStateContext();
    setMenu('내방 신청 내역');
    return (
        <div>hi
              </div>
  );
}

export default VisitHistory