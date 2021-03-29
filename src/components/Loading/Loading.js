import React from "react";
import * as S from "./style";

function LoadingComp() {

    return (
        <S.LoadingStyle className="lds-roller"><div><h5>Loading...</h5></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></S.LoadingStyle>
    )
}

export default LoadingComp;