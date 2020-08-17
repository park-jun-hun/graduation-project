import types from '../actions/types';

const initialState = {
    id: '',
    name: '',
    psw:'',
    checkpsw:'',
    isdate:'',
    asdate:'',
    ta:0,
    exe:0,
    le:0,
    ana:0,
    tadate_ori:[],
    exedate_ori:[],
    ledate_ori:[],
    anadate_ori:[],
    tadate2:[],
    exedate2:[],
    ledate2:[],
    anadate2:[],
    tadate3:[],
    exedate3:[],
    ledate3:[],
    anadate3:[],
    tacount:[],
    execount:[],
    lecount:[],
    anacount:[],
    
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ID:
            return {
                ...state,
                id: action.payload
            };
        case types.SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        case types.SET_PSW:
            return {
                ...state,
                psw: action.payload
            };
      case types.SET_CHECKPSW:
            return {
                ...state,
                checkpsw: action.payload
            };
     case types.SET_ISDATE:
            return {
                ...state,
                isdate: action.payload
            };
    case types.SET_ASDATE:
            return {
                ...state,
                asdate: action.payload
            };
  case types.SET_TADATE_ORI:
            return {
                ...state,
                tadate_ori: action.payload
            };
  case types.SET_EXEDATE_ORI:
            return {
                ...state,
                exedate_ori: action.payload
            };
  case types.SET_LEDATE_ORI:
            return {
                ...state,
                ledate_ori: action.payload
            };
  case types.SET_ANADATE_ORI:
            return {
                ...state,
                anadate_ori: action.payload
            };

  case types.SET_TA:
            return {
                ...state,
                ta: action.payload
            };
  case types.SET_EXE:
            return {
                ...state,
                exe: action.payload
            };
  case types.SET_LE:
            return {
                ...state,
                le: action.payload
            };
  case types.SET_ANA:
            return {
                ...state,
                ana: action.payload
            };
  case types.SET_TACOUNT:
            return {
                ...state,
                tacount: action.payload
            };
  case types.SET_EXECOUNT:
            return {
                ...state,
                execount: action.payload
            };
  case types.SET_LECOUNT:
            return {
                ...state,
                lecount: action.payload
            };
  case types.SET_ANACOUNT:
            return {
                ...state,
                anacount: action.payload
            };
  case types.SET_TADATE2:
            return {
                ...state,
                tadate2: action.payload
            };
 case types.SET_EXEDATE2:
            return {
                ...state,
                exedate2: action.payload
            };
 case types.SET_LEDATE2:
            return {
                ...state,
                ledate2: action.payload
            };
 case types.SET_ANADATE2:
            return {
                ...state,
                anadate2: action.payload
            };
  case types.SET_TADATE3:
            return {
                ...state,
                tadate3: action.payload
            };
 case types.SET_EXEDATE3:
            return {
                ...state,
                exedate3: action.payload
            };
 case types.SET_LEDATE3:
            return {
                ...state,
                ledate3: action.payload
            };
 case types.SET_ANADATE3:
            return {
                ...state,
                anadate3: action.payload
            };
        default:
            return state;
    }
};
