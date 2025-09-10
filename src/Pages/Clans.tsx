import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { Card } from "../components/ui/card";

interface CharacterProp {
  id: number;
  name: string;
  images: string[];
}

interface CategoryProp {
  id: number;
  name: string;
  characters: CharacterProp[];
}

const Clans = () => {
  const { category, id } = useParams(); // e.g. "clans/1"
  const [data, setData] = useState<CategoryProp | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        // 1️⃣ fetch clan/village/organization/etc. data
        const response = await axios.get(
          `https://dattebayo-api.onrender.com/${category}/${id}`
        );
        const clanData = response.data;

        // 2️⃣ fetch all characters in parallel
        const charDetails = await Promise.all(
          clanData.characters.map((charId: number) =>
            axios.get(`https://dattebayo-api.onrender.com/characters/${charId}`)
          )
        );

        // 3️⃣ update state with characters data
        setData({
          ...clanData,
          characters: charDetails.map((res) => res.data),
        });
      } catch (error) {
        console.error("Error fetching detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [category, id]);

  if (loading) return <Loader />;
  if (!data) return <p className="text-center">No details found ❌</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Card className="p-6">
        <h1 className="text-3xl font-bold mb-4">{data.name}</h1>

        <h2 className="text-xl font-semibold mt-6 mb-2">Characters</h2>
        <ul className="space-y-2">
          {data.characters.map((char) => (
            <li key={char.id} className="p-2 border rounded">
              <p className="font-medium">{char.name}</p>
              <img
                src={char.images?.[0]}
                alt={char.name}
                className="w-32 rounded mt-2"
              />
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Clans;
