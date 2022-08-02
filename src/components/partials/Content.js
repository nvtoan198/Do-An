import React from "react";
import { Layout } from "antd";
import BreadcrumbComponent from "./Breadcrumb";

const { Content } = Layout;

const ContentComponent = (props) => {
  return (
    <>
      {!props.notShowBreadCrumb && <BreadcrumbComponent />}
      <Content>
        <div className="site-layout-content">{props.children}</div>
      </Content>
    </>
  );
};
export default React.memo(ContentComponent);
