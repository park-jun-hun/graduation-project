import ActionCreator from "./actions";

export function mapStateToProps(state) {
    return {
        id: state.info.id,
        name: state.info.name,
        psw:state.info.psw,
        checkpsw:state.info.checkpsw,
        isdate:state.info.isdate,
        asdate:state.info.asdate,
        tadate_ori:state.info.tadate_ori,
        exedate_ori:state.info.exedate_ori,
        ledate_ori:state.info.ledate_ori,
        anadate_ori:state.info.anadate_ori,
        ta:state.info.ta,
        exe:state.info.exe,
        le:state.info.le,
        ana:state.info.ana,
        tacount: state.info.tacount,
        execount: state.info.execount,
        lecount: state.info.lecount,
        anacount: state.info.anacount,
        tadate2:state.info.tadate2,
        exedate2:state.info.exedate2,
        ledate2:state.info.ledate2,
        anadate2:state.info.anadate2,
        tadate3:state.info.tadate3,
        exedate3:state.info.exedate3,
        ledate3:state.info.ledate3,
        anadate3:state.info.anadate3
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        setID: (id) => {
            dispatch(ActionCreator.setID(id));
        },
        setName: (name) =>{
            dispatch(ActionCreator.setName(name));
        },
        setpsw:(psw)=>{
            dispatch(ActionCreator.setpsw(psw));
        },
        setcheckpsw:(checkpsw)=>{
            dispatch(ActionCreator.setcheckpsw(checkpsw));
        },
        setisDate: (isdate) =>{
            dispatch(ActionCreator.setisDate(isdate));
        },
        setasDate: (asdate) =>{
            dispatch(ActionCreator.setasDate(asdate));
        },
        settaDate_ori: (tadate_ori) =>{
            dispatch(ActionCreator.settaDate_ori(tadate_ori));
        },
        setexeDate_ori: (exedate_ori) =>{
            dispatch(ActionCreator.setexeDate_ori(exedate_ori));
        },
        setleDate_ori: (ledate_ori) =>{
            dispatch(ActionCreator.setleDate_ori(ledate_ori));
        },
        setanaDate_ori: (anadate_ori) =>{
            dispatch(ActionCreator.setanaDate_ori(anadate_ori));
        },
        setTa: (ta) =>{
            dispatch(ActionCreator.setTa(ta));
        },
        setExe: (exe) =>{
            dispatch(ActionCreator.setExe(exe));
        },
        setLe: (le) =>{
            dispatch(ActionCreator.setLe(le));
        },
        setAna: (ana) =>{
            dispatch(ActionCreator.setAna(ana));
        }
        ,
        settaCount: (tacount) =>{
            dispatch(ActionCreator.settaCount(tacount));
        },
        setexeCount: (execount) =>{
            dispatch(ActionCreator.setexeCount(execount));
        },
        setleCount: (lecount) =>{
            dispatch(ActionCreator.setleCount(lecount));
        },
        setanaCount: (anacount) =>{
            dispatch(ActionCreator.setanaCount(anacount));
        },
        settaDate2: (tadate2) =>{
            dispatch(ActionCreator.settaDate2(tadate2));
        },
        setexeDate2: (exedate2) =>{
            dispatch(ActionCreator.setexeDate2(exedate2));
        },
        setleDate2: (ledate2) =>{
            dispatch(ActionCreator.setleDate2(ledate2));
        },
        setanaDate2: (anadate2) =>{
            dispatch(ActionCreator.setanaDate2(anadate2));
        },
        settaDate3: (tadate3) =>{
            dispatch(ActionCreator.settaDate3(tadate3));
        },
        setexeDate3: (exedate3) =>{
            dispatch(ActionCreator.setexeDate3(exedate3));
        },
        setleDate3: (ledate3) =>{
            dispatch(ActionCreator.setleDate3(ledate3));
        },
        setanaDate3: (anadate3) =>{
            dispatch(ActionCreator.setanaDate3(anadate3));
        }
        
    };
}
 