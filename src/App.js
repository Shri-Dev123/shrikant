import React, { useEffect, useState } from "react";
import ImageDisplay from "./components/ImageDisplay";
import ShareButton from "./components/ShareButton";

const App = () => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetchRandomImage();
    }, []);

    const fetchRandomImage = () => {
        // Implement your logic to fetch a random image from an API or use a library here
        // For demonstration purposes, we'll use a placeholder image URL
        const randomImageUrl = "https://random.imagecdn.app/500/150";
        setImageUrl(randomImageUrl);
    };

    return (
        <div>
            <ImageDisplay imageUrl={imageUrl} />
            <ShareButton imageUrl={imageUrl} />
        </div>
    );
};

export default App;
