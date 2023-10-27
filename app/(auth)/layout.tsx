import React from "react";

interface IAuthLayoutProps extends React.PropsWithChildren {
    
}

export default function ({children} : IAuthLayoutProps) {
    return (
        <div className="h-screen">
            {children}
        </div>
    );
}
