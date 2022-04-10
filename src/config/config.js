const host='https://reqres.in';
const apis={
  register: {
    url: `${host}/api/register`,
    opts: {
      method: 'POST',
    }
  },
  login:{
    url:`${host}/api/login`,
    opts:{
      method:'POST',
    }
  },
  add:{
    url:`${host}/api/user`,
    opts:{
      method:'POST',
    }
  }
}
export {apis}
