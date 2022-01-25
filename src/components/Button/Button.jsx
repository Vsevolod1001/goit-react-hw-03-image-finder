import React from "react";
import { ButtonLm, BtnDiv } from "./Button.styled";

const Button = ({onClick}) => {
    return (
        <BtnDiv>
            <ButtonLm type="submit" onClick={() => onClick()}>
                Load more
            </ButtonLm>
        </BtnDiv>
    )

}
export default Button