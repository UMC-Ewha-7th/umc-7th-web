import styled from "styled-components";

const WhiteSpan = styled.h1<{
    font_size?: string,
    margin_bottom?: string,
    margin_left?: string
}>`
    color: white;
    font-size: ${({font_size}) => font_size || '1.3em'};
    margin-bottom: ${({margin_bottom}) => margin_bottom || '25px'};
    display: block;
    margin-left: ${({margin_left}) => margin_left || '0'};
`

export default WhiteSpan;