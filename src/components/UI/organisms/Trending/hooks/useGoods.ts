//hooks
import {useMemo} from "react";
import {useAppSelector} from "../../../../../store/hooks";
//action
import {useActions} from "../../../../../hooks/useActions";
//type
import {Pages} from "../../../../../store/goods/types";

export const useGoods = () => {
    const {goods, pages, currentPage} = useAppSelector(({goodsReducer}) => goodsReducer)
    const {
        GoodsActs: {changePage},
    } = useActions()

    const handleChangePage = (page: Pages) => changePage(page)

    const _goods = useMemo(
        () => {
            return goods.filter(({page}) => page === currentPage)
        },
        [currentPage, goods]
    )

    return {
        pages,
        currentPage,
        handleChangePage,
        goods: _goods,
    }
}