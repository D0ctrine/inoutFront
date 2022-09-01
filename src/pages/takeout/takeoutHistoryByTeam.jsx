import * as React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

function TakeoutHistoryByTeam() {
    const { setMenu } = useStateContext();
    setMenu('반출 신청 내역(팀별)');
    return (
        <div>hi
              </div>
  );
}

export default TakeoutHistoryByTeam