import axios from 'axios';
import errorParser from '../utils/error-parser';

// eslint-disable-next-line
export default {
  /**
   * Company Service
   */
  save (detail) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:8070/company/save', detail).then(({ data }) => {
        resolve(data)
      }).catch((error) => {
        reject(errorParser.parse(error))
      })
    })
  },
  get (detail) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:8070/company/get/' + detail).then(({ data }) => {
        resolve(data)
      }).catch((error) => {
        reject(errorParser.parse(error))
      })
    })
  },
  list (detail) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:8070/company/list?' + detail).then(({ data }) => {
        data.REGNUMBER = data.REGNUMBER1 + data.REGNUMBER2 + data.REGNUMBER3
        data.PHONE = data.PHONE1 + data.PHONE2 + data.PHONE3
        resolve(data)
      }).catch((error) => {
        reject(errorParser.parse(error))
      })
    })
  },
  count (detail) {
    return new Promise((resolve, reject) => {
        //keyWord=address&flag=1&userId=1191214
      axios.get(`http://localhost:8070/company/count?keyWord=${detail.keyWord}&flag=${detail.flag}&userId=${detail.userId}`).then(({ data }) => {
        resolve(data)
      }).catch((error) => {
        reject(errorParser.parse(error))
      })
    })
  },
}