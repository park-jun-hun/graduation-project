import types from './types';

export function setID(ID) {
  return {
    type: types.SET_ID,
    payload: ID
  };
}
export function setName(name) {
  return {
    type: types.SET_NAME,
    payload: name
  };
}
  export function setpsw(psw) {
    return {
      type: types.SET_PSW,
      payload: psw
    };
}
    export function setcheckpsw(checkpsw) {
      return {
        type: types.SET_CHECKPSW,
        payload: checkpsw
      };
    }
      export function setisDate(isdate){
        return {
          type: types.SET_ISDATE,
          payload: isdate
      };
}
    export function setasDate(asdate){
      return {
        type: types.SET_ASDATE,
        payload: asdate
    };
}
export function settaDate_ori(tadate_ori){
  return {
    type: types.SET_TADATE_ORI,
    payload: tadate_ori
};
}
export function setexeDate_ori(exedate_ori){
  return {
    type: types.SET_EXEDATE_ORI,
    payload: exedate_ori
};
}
export function setleDate_ori(ledate_ori){
  return {
    type: types.SET_LEDATE_ORI,
    payload: ledate_ori
};
}
export function setanaDate_ori(anadate_ori){
  return {
    type: types.SET_ANADATE_ORI,
    payload: anadate_ori
};
}
export function setTa(ta){
  return {
    type: types.SET_TA,
    payload: ta
};
}
export function setExe(exe){
  return {
    type: types.SET_EXE,
    payload: exe
};
}
export function setLe(le){
  return {
    type: types.SET_LE,
    payload: le
};
}
export function setAna(ana){
  return {
    type: types.SET_ANA,
    payload: ana
};
}
export function settaCount(tacount){
  return {
    type: types.SET_TACOUNT,
    payload: tacount
};
}
export function setexeCount(execount){
  return {
    type: types.SET_EXECOUNT,
    payload: execount
};
}
export function setleCount(lecount){
  return {
    type: types.SET_LECOUNT,
    payload: lecount
};
}
export function setanaCount(anacount){
  return {
    type: types.SET_ANACOUNT,
    payload: anacount
};
}
export function settaDate2(tadate2){
  return {
    type: types.SET_TADATE2,
    payload: tadate2
};
}
export function setexeDate2(exedate2){
  return {
    type: types.SET_EXEDATE2,
    payload: exedate2
};
}
export function setleDate2(ledate2){
  return {
    type: types.SET_LEDATE2,
    payload: ledate2
};
}
export function setanaDate2(anadate2){
  return {
    type: types.SET_ANADATE2,
    payload: anadate2
};
}
export function settaDate3(tadate3){
  return {
    type: types.SET_TADATE3,
    payload: tadate3
};
}
export function setexeDate3(exedate3){
  return {
    type: types.SET_EXEDATE3,
    payload: exedate3
};
}
export function setleDate3(ledate3){
  return {
    type: types.SET_LEDATE3,
    payload: ledate3
};
}
export function setanaDate3(anadate3){
  return {
    type: types.SET_ANADATE3,
    payload: anadate3
};
}
