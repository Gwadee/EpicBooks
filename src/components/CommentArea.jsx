import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      if (!asin) {
        console.log("Nessun libro selezionato. Skipping fetch.");
        return;
      }

      setIsLoading(true);
      setIsError(false);

      try {
        console.log(`Fetching comments for ASIN: ${asin}`);
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzE3NWZjMzNkYmUxNDAwMTUxNTRkMjQiLCJpYXQiOjE3MzMyMjI4MzQsImV4cCI6MTczNDQzMjQzNH0.LMF3y8SNoU_w4oOT4es8Q0_LIhL0ujClbuiySY2Aags",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Dati ricevuti:", data);
          setComments(data);
        } else {
          console.error("Errore nella risposta API:", response.status);
          setIsError(true);
        }
      } catch (error) {
        console.error("Errore nella richiesta API:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getComments();
  }, [asin]);

  return (
    <div className="text-center mt-3">
      {isLoading && <Loading />}
      {isError && <Error />}
      {!isLoading && !isError && (
        <>
          <AddComment asin={asin} />
          <CommentList commentsToShow={comments} />
        </>
      )}
    </div>
  );
};

export default CommentArea;
