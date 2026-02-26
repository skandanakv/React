const ShimmerUI = () => {
    return (
        <div className="res-container">
            {Array(20).fill("").map((_, index) => (
                <div key={index} className="shimmer-card">
                    <div className="shimmer-img"></div>
                    <div className="shimmer-text"></div>
                    <div className="shimmer-text small"></div>
                    <div className="shimmer-text small"></div>
                </div>
            ))}
        </div>
    );
};

export default ShimmerUI;