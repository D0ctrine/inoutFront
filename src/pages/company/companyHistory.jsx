import * as React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

function CompanyHistory() {
    const { setMenu } = useStateContext();
    setMenu('업체 등록 내역');
    return (
        <div>hi
              </div>
  );
}

export default CompanyHistory