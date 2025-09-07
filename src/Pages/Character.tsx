import axios from "axios";
import { useEffect, useState } from "react";

const Character = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          "https://dattebayo-api.onrender.com/characters"
        );
        setData(response.data.characters);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Characters</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data.slice(0, 20).map((char) => (
          <div
            key={char.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <img
              src={char.images?.[0]}
              alt={char.name}
              className="rounded-lg w-full h-40 object-cover"
            />
            <h2 className="text-lg font-semibold mt-3">{char.name}</h2>
            {char.debut?.anime && (
              <p className="text-sm text-gray-600">Debut: {char.debut.anime}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Character;
