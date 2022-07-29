import React from "react";
import HeaderComponent from "./partials/Header";
import FooterComponent from "./partials/Footer";
import ContentComponent from "./partials/Content";

const LayoutComponent = (props) => {
    return (
        <>
            <HeaderComponent/>
            <ContentComponent>
                {props.children}
            </ContentComponent>
            <FooterComponent/>
        </>
    )
}
export default React.memo(LayoutComponent);