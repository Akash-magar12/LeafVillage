import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Card, CardContent } from "../components/ui/card";
import { Users, MapPin, Flame, Swords, Eye } from "lucide-react";

const World = () => {
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
          <Select>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="clan">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-500" /> Clan
                </div>
              </SelectItem>
              <SelectItem value="village">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-500" /> Villages
                </div>
              </SelectItem>
              <SelectItem value="akatsuki">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-red-500" /> Akatsuki
                </div>
              </SelectItem>
              <SelectItem value="team">
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
    </div>
  );
};

export default World;
