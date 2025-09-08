import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Loader from "../components/Loader";

interface Details {
  id: number;
  images: string[];
  name: string;
  personal: {
    titles?: string[];
    birthdate?: string;
    bloodType?: string;
    clan?: string;
    occupation?: string;
    sex?: string;
    team?: string[];
  };
  family?: {
    mother?: string;
    father?: string;
    son?: string;
    wife?: string;
    daughter?: string;
    godfather?: string;
    "adoptive son"?: string;
  };
  voiceActors?: {
    english?: string[];
    japanese?: string[];
  };
  jutsu?: string[];
  natureType?: string[];
}

const CharacterDetail = () => {
  const [data, setData] = useState<Details | null>(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  console.log(data);
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://dattebayo-api.onrender.com/characters/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching character:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <Loader />;
  if (!data) return <p>No character found.</p>;

  return (
    <div className="flex justify-center p-6">
      <Card className="max-w-3xl w-full shadow-lg rounded-2xl overflow-hidden">
        <CardHeader className="text-center">
          <img
            src={data.images?.[0]}
            alt={data.name}
            className="mx-auto w-64 h-auto rounded-xl shadow-md"
          />
          <CardTitle className="text-3xl mt-4">{data.name}</CardTitle>
          <CardDescription>
            {Array.isArray(data.personal?.titles) &&
            data.personal.titles.length > 0
              ? data.personal.titles.join(", ")
              : "No titles available"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Family */}
          <div>
            <h3 className="font-semibold text-lg mb-1">Family</h3>
            <p>
              Father: {data.family?.father || "Unknown"} <br />
              Mother: {data.family?.mother || "Unknown"} <br />
              Daughter: {data.family?.daughter || "None"} <br />
              Wife: {data.family?.wife || "None"} <br />
              Son: {data.family?.son || "None"} <br />
              God Father: {data.family?.godfather || "None"} <br />
              Adoptive Son : {data.family?.["adoptive son"] || "None"}
            </p>
          </div>

          {/* Jutsu */}
          <div>
            <h3 className="font-semibold text-lg mb-1">Jutsu</h3>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(data.jutsu) && data.jutsu.length > 0 ? (
                data.jutsu.slice(0, 10).map((j, i) => (
                  <span
                    key={i}
                    className="bg-orange-200 px-2 py-1 rounded-full text-sm"
                  >
                    {j}
                  </span>
                ))
              ) : (
                <p>No jutsu available</p>
              )}
            </div>
          </div>

          {/* Voice Actors */}
          <div>
            <h3 className="font-semibold text-lg mb-1">Voice Actors</h3>
            <p>English: {data.voiceActors?.english?.[0] || "N/A"}</p>
            <p>Japanese: {data.voiceActors?.japanese?.[0] || "N/A"}</p>
          </div>

          {/* Nature Types */}
          <div>
            <h3 className="font-semibold text-lg mb-1">Nature Types</h3>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(data.natureType) && data.natureType.length > 0 ? (
                data.natureType.map((n, i) => (
                  <span
                    key={i}
                    className="bg-green-200 px-2 py-1 rounded-full text-sm"
                  >
                    {n}
                  </span>
                ))
              ) : (
                <p>No nature type</p>
              )}
            </div>
          </div>

          {/* Personal Details */}
          <div>
            <h3 className="font-semibold text-lg mb-1">Personal Details</h3>
            <p>Birthdate: {data.personal?.birthdate || "Unknown"}</p>
            <p>Blood Type: {data.personal?.bloodType || "N/A"}</p>
            <p>Clan: {data.personal?.clan || "Unknown"}</p>
            <p>Occupation: {data.personal?.occupation || "Unknown"}</p>
            <p>Sex: {data.personal?.sex || "N/A"}</p>

            {/* Team */}
            <div>
              <h4 className="font-semibold mt-2">Team</h4>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(data.personal?.team) &&
                data.personal.team.length > 0 ? (
                  data.personal.team.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-200 px-2 py-1 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))
                ) : (
                  <p>None</p>
                )}
              </div>
            </div>

            {/* Titles */}
            <div>
              <h4 className="font-semibold mt-2">Titles</h4>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(data.personal?.titles) &&
                data.personal.titles.length > 0 ? (
                  data.personal.titles.map((t, i) => (
                    <span
                      key={i}
                      className="bg-purple-200 px-2 py-1 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))
                ) : (
                  <p>None</p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CharacterDetail;
