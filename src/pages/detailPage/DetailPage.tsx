import React from "react";
import { useParams } from "react-router-dom";
import movies from "../../data";
import { TMovie } from "../../data";
import "./DetailPage.css"

const DetailPage: React.FC = () => {
    const { movieIndex } = useParams<{ movieIndex: string }>();
    const movie: TMovie | undefined = movies[Number(movieIndex)];

    if (!movie) {
        return <div>Movie not found</div>;
    }
// wenn useParams keinen movieIndex findet oder der Index nicht zu einem Film in der Liste passt, wird der Wert movie auf undefined gesetzt
    return (
        <div className="detail-page">
            <h3>{movie.title}</h3>
            <p>Release Year: {movie.year}</p>
            <p>Rating: {movie.rate}</p>
            <p>Genre: {movie.genre}</p>
            {/* <Link to="/" className="back-btn">Back to Home<Link /> */}
        {/* button funktioniert nicht, hier weitermachen */}
        </div>
    );
};

export default DetailPage;