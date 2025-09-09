import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Card, CardContent } from "../components/ui/card";
import { Users, MapPin, Flame, Swords, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const World = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState("clans");
  console.log(category);
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://dattebayo-api.onrender.com/${category}`
        );
        setData(Object.values(response.data)[0]);
      } catch (error) {
        console.error("Error fetching clans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [category]);
  console.log(data);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">
        🌍 Explore the Naruto World
      </h1>

      {/* Filter Section */}
      <Card className="shadow-lg border border-orange-200">
        <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Choose a Category
          </h2>
          <Select onValueChange={(val) => setCategory(val)}>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Clans" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="clans">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-500" /> Clans
                </div>
              </SelectItem>
              <SelectItem value="villages">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-500" /> Villages
                </div>
              </SelectItem>
              <SelectItem value="akatsuki">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-red-500" /> Akatsuki
                </div>
              </SelectItem>
              <SelectItem value="teams">
                <div className="flex items-center gap-2">
                  <Swords className="w-4 h-4 text-blue-500" /> Teams
                </div>
              </SelectItem>
              <SelectItem value="kekkei-genkai">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-indigo-500" /> Kekkei Genkai
                </div>
              </SelectItem>
              <SelectItem value="tailed-beasts">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-500" /> Tailed Beasts
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {data.map((item) => (
          <Card key={item.id} className="p-4">
            <h3 className="font-bold text-lg">{item.name}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default World;
