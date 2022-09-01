import { Button, Grid, TextField } from '@mui/material';
import * as React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import companyService from '../../services/companyService';

function CompanyRegister() {
    const { setMenu } = useStateContext();
    setMenu('업체 등록 신청');
    const submitHandler = () => {
      let company = {
        code:null,// save하기 위해 Parameter 추가
        name: document.getElementById('companyName').value,
        rnumber1: document.getElementById('regNum1').value,
        rnumber2: document.getElementById('regNum2').value,
        rnumber3: document.getElementById('regNum3').value,
        pnumber1: document.getElementById('phoneNum1').value,
        pnumber2: document.getElementById('phoneNum2').value,
        pnumber3: document.getElementById('phoneNum3').value,
        mname: document.getElementById('ceoName').value,
        address: document.getElementById('address').value,
        createuser: '1191214'
      }
      companyService.save(company).then(data => {
        console.log(data);
      });
    }
    return (
      <div style={{border:'1px solid black',margin:'30px',backgroundColor:'white',maxWidth:'800px'}}>
        <Grid container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              margin={'30px'}
              width={'90%'}>
            <TextField id="companyName" label="회사명" variant="standard" style={{marginBottom:'10px'}}/>
            <Grid style={{marginBottom:'10px'}}>
              <TextField id="regNum1" label="사업자 등록번호1" variant="standard" type={'number'}/>
              <label style={{verticalAlign:'bottom'}}>  -  </label>
              <TextField id="regNum2" label="사업자 등록번호2" variant="standard" type={'number'}/>
              <label style={{verticalAlign:'bottom'}}>  -  </label>
              <TextField id="regNum3" label="사업자 등록번호3" variant="standard" type={'number'}/>
            </Grid>
            <Grid style={{marginBottom:'10px',verticalAlign:'bottom'}}>
              <TextField id="phoneNum1" label="전화번호1" variant="standard" type={'number'} value='010'/>
              <label style={{verticalAlign:'bottom'}}>  -  </label>
              <TextField id="phoneNum2" label="전화번호2" variant="standard" type={'number'}/>
              <label style={{verticalAlign:'bottom'}}>  -  </label>
              <TextField id="phoneNum3" label="전화번호3" variant="standard" type={'number'}/>
            </Grid>
            <TextField id="ceoName" label="대표자 명" variant="standard" style={{marginBottom:'10px'}}/>
            <TextField id="address" label="주소" variant="standard" style={{marginBottom:'10px'}}/>
            <div style={{width:'100%'}}>
              <Button variant="contained" style={{width:'200px',margin:'10px',float:'right'}} type="button" onClick={submitHandler}>제출</Button>
            </div>
        </Grid>
      </div>
  );
}

export default CompanyRegister