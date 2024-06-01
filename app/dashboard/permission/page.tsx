import PermissionList from '@/components/permission-list';
import React from 'react';
const PermissionPage: React.FC = () => {
    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Permission List</h1>
            <PermissionList />
        </div>
    );
};

export default PermissionPage;
