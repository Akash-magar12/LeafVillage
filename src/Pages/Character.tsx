import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";

interface CardProp {
  name: string;
  id: number;
  images: string[];
}
const Character = () => {
  const [data, setData] = useState<CardProp[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(data);
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

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-background">
        <img src="/loading.gif" alt="Loading..." className="w-32 h-32 mb-4" />
        <p className="text-2xl font-heading font-medium text-muted-foreground animate-pulse">
          Summoning Characters...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div>
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-heading md:text-6xl font-bold text-foreground mb-4 tracking-wider">
            Naruto Characters
          </h1>
          <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
            Discover the legendary shinobi from the Hidden Leaf Village and
            beyond
          </p>
        </div>
      </div>

      {/* Characters Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.slice(0, 20).map((char: CardProp) => (
            <Card
              key={char.id}
              className="group overflow-hidden font-body cursor-pointer bg-card border-border relative transition-all hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={
                    char.images?.[0] ||
                    "/placeholder.svg?height=256&width=256&query=ninja character"
                  }
                  alt={char.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className=" text-center">
                <h2 className="text-xl  tracking-wider font-heading font-semibold text-card-foreground line-clamp-1">
                  {char.name}
                </h2>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
