import React from 'react';

const Home = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <h1 className="text-3xl font-pop font-normal underline text-red-500">
                Hello world!
            </h1>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">accent</button>
            <button className="btn btn-neutral">neutral</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-error">Error</button>
        </div>
    );
};

export default Home;