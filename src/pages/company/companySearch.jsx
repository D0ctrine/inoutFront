import React from 'react';
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import { useStateContext } from '../../contexts/ContextProvider';
import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import TuiGrid from 'tui-grid';
import companyService from '../../services/companyService';

function CompanySearch() {
    const { setMenu } = useStateContext();
    setMenu('업체 검색');
    
    const columns = [
        {
            name: 'COMPANYCODE', 
            header: 'ID',
            hidden: true,
            align: 'center'
        },
        {
            name: 'COMPANYNAME', 
            header: 'Name',
            align: 'center'
        },
        {
            name: 'REGNUMBER', 
            header: '사업자번호',
            align: 'center'
        },
        {
            name: 'PHONE', 
            header: '전화번호',
            align: 'center'
        },
        {
            name: 'MASTERNAME', 
            header: '대표자명',
            align: 'center'
        },
        {
            name: 'REGDATE', 
            header: '등록일',
            align: 'center'
        }
    ];
    
    TuiGrid.applyTheme('default', {
        cell: {
            normal: {
                background: '#FFFFFF'
            },
            header: {
               background: '#1D1E23',
               text: '#FFFFFF',
            },
            selectedHeader: {
                background: '#1D1E23',
            }
        }
    });

    const [type, setType] = React.useState('');    
    const [companyCount, setCompanyCount] = React.useState(0);
    const [gridData, setGridData] = React.useState([]);
    const gridRef = React.useRef();

    // eslint-disable-next-line
    React.useEffect(async () => {
        await companyService.count({keyWord:null,flag:1,userId:''})
        .then(
            (data) => {
                setCompanyCount(data.CNT);
            },
            (error) => {
                console.log(error);
            }
        );  
        await companyService.list(`keyWord=address&keyValue=%&flag=1&userId=1191214&nowPage=1&nextPage=3`)
        .then(
            (data) => {
                setGridData(data);
                //gridRef.current.gridInst.resetData(data); //gridRef.current.gridInst.refreshLayout();
            },
            (error) => {
                console.log(error);
            }
        );
        }, []);
    const handleChange = (event) => {
        setType(event.target.value);
    };
    
    return (
        <div container spacing={2} style={{marginBottom:'5px',marginTop:'30px',marginLeft:'10px',marginRight:'10px',width:'96%'}}>
            <div  xs={3}>
                <Typography style={{fontSize:'12px',float:'left',marginTop:'14px'}}>
                    등록된 업체 수 : {companyCount} 개
                </Typography>
            </div>
            <div xs={8} style={{textAlign:'right'}}>
            <FormControl style={{width:'auto'}}>
                <InputLabel id="searchType" style={{fontSize:'12px'}}>구분</InputLabel>
                <Select
                labelId="searchType"
                id="demo-simple-select"
                value={type}
                label="Age"
                onChange={handleChange}
                style={{height:'30px',fontSize:'12px',minWidth:'80px'}}
                >
                <MenuItem value={'회사명'}>회사명</MenuItem>
                <MenuItem value={'전화번호'}>전화번호</MenuItem>
                <MenuItem value={'사업자번호'}>사업자번호</MenuItem>
                </Select>
            </FormControl>
            <TextField id="outlined-basic" label={type} size='small' inputProps={{style: {padding: 5,fontSize:'14px'}}}  style={{width:'150px',marginLeft:'10px',marginRight:'10px'}}/>
            </div>
            <Grid
                id='grid'
                ref={gridRef}
                data={gridData}
                columns={columns}
                bodyHeight={500}
                width='auto'
                rowHeight={'40px'}
                header={{height:'50'}}
                />
        </div>
  );
}

export default CompanySearch