"use client";
import React from 'react';
import { useEffect } from 'react';
export default function Error({ error }: { error: Error }) {
   useEffect(() => {
        console.error('An error occurred:', error);
    }, [error]);

    return (
        <div>
            <h1>Something went wrong!</h1>
            <p>{error.message}</p>
        </div>
    );
}
