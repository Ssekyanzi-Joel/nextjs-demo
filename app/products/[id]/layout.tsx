import React, { ReactNode } from "react";

type ProductLayoutProps = {
    children: ReactNode;
};

export default function ProductLayout({ children }: ProductLayoutProps) {
    return (
        <>
            <div>
                {children}
            </div>
            <div className="flex justify-center items-center p-4 bg-gray-100 dark:bg-gray-800">
                <h2>Featured Products </h2>
            </div>
        </>
    );
}