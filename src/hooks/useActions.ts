import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {GoodsActions} from "../store/goods/slice";

export const useActions = () => {
    const dispatch = useDispatch()
    const GoodsActs = bindActionCreators({...GoodsActions}, dispatch)

    return {
        GoodsActs
    }
}