import { Breadcrumb } from 'antd';
import React from 'react';
import { Link, useLocation } from "react-router-dom";

const BreadcrumbComponent = () => {
    const { pathname } = useLocation();
    let newPath = pathname.substring(1);
    newPath = newPath === '/' ? 'home' : newPath;
    return (
        <div class="page-header">
            <div className='container'>
                <h1 class="page-header-title">{newPath}</h1>
                <Breadcrumb
                    style={{
                    margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>{newPath}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
    )
}
export default React.memo(BreadcrumbComponent);