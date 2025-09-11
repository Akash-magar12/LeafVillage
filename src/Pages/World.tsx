import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Card, CardContent } from "../components/ui/card";
import { Users, MapPin, Swords, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

interface DataType {
  id: string | number;
  name: string;
}

const World = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("clans");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (reset = false) => {
    try {
      const response = await axios.get(
        `https://dattebayo-api.onrender.com/${category}?page=${
          reset ? 1 : page
        }&limit=20`
      );

      const newData = response.data[category];

      if (reset) {
        setData(newData);
        setPage(2);
      } else {
        setData((prev) => [...prev, ...newData]);
        setPage((prev) => prev + 1);
      }

      if (newData.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setHasMore(true);
    fetchData(true);
  }, [category]);

  if (loading && data.length === 0) {
    return <Loader />;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        🌍 Explore the Naruto World
      </h1>

      {/* Filter Section */}
      <Card className="shadow-sm border rounded-lg">
        <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Choose a Category
          </h2>
          <Select onValueChange={(val) => setCategory(val)} defaultValue="clans">
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
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Infinite Scroll List */}
      <InfiniteScroll
        dataLength={data.length}
        next={() => fetchData()}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <p className="text-center text-gray-500 mt-4">
            🎉 You’ve reached the end!
          </p>
        }
      >
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <Link key={item.id} to={`/${category}/${item.id}`}>
              <Card className="p-6 border rounded-lg hover:shadow-md transition duration-200">
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h3>
              </Card>
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default World;
