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
          {data.images?.[0] && (
            <img
              src={data.images[0]}
              alt={data.name}
              className="mx-auto w-64 h-auto rounded-xl shadow-md"
            />
          )}
          <CardTitle className="text-3xl mt-4">{data.name}</CardTitle>
          {Array.isArray(data.personal?.titles) &&
            data.personal.titles.length > 0 && (
              <CardDescription>
                {data.personal.titles.join(", ")}
              </CardDescription>
            )}
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Family */}
          {data.family && Object.keys(data.family).length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-1">Family</h3>
              <p>
                {data.family.father && <>Father: {data.family.father} <br /></>}
                {data.family.mother && <>Mother: {data.family.mother} <br /></>}
                {data.family.daughter && <>Daughter: {data.family.daughter} <br /></>}
                {data.family.wife && <>Wife: {data.family.wife} <br /></>}
                {data.family.son && <>Son: {data.family.son} <br /></>}
                {data.family.godfather && <>God Father: {data.family.godfather} <br /></>}
                {data.family["adoptive son"] && <>Adoptive Son: {data.family["adoptive son"]} <br /></>}
              </p>
            </div>
          )}

          {/* Jutsu */}
          {Array.isArray(data.jutsu) && data.jutsu.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-1">Jutsu</h3>
              <div className="flex flex-wrap gap-2">
                {data.jutsu.slice(0, 10).map((j, i) => (
                  <span
                    key={i}
                    className="bg-orange-200 px-2 py-1 rounded-full text-sm"
                  >
                    {j}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Voice Actors */}
          {data.voiceActors &&
            (data.voiceActors.english?.length ||
              data.voiceActors.japanese?.length) && (
              <div>
                <h3 className="font-semibold text-lg mb-1">Voice Actors</h3>
                {data.voiceActors.english?.[0] && (
                  <p>English: {data.voiceActors.english[0]}</p>
                )}
                {data.voiceActors.japanese?.[0] && (
                  <p>Japanese: {data.voiceActors.japanese[0]}</p>
                )}
              </div>
            )}

          {/* Nature Types */}
          {Array.isArray(data.natureType) && data.natureType.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-1">Nature Types</h3>
              <div className="flex flex-wrap gap-2">
                {data.natureType.map((n, i) => (
                  <span
                    key={i}
                    className="bg-green-200 px-2 py-1 rounded-full text-sm"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Personal Details */}
          {(data.personal?.birthdate ||
            data.personal?.bloodType ||
            data.personal?.clan ||
            data.personal?.occupation ||
            data.personal?.sex) && (
            <div>
              <h3 className="font-semibold text-lg mb-1">Personal Details</h3>
              {data.personal.birthdate && <p>Birthdate: {data.personal.birthdate}</p>}
              {data.personal.bloodType && <p>Blood Type: {data.personal.bloodType}</p>}
              {data.personal.clan && <p>Clan: {data.personal.clan}</p>}
              {data.personal.occupation && <p>Occupation: {data.personal.occupation}</p>}
              {data.personal.sex && <p>Sex: {data.personal.sex}</p>}
            </div>
          )}

          {/* Team */}
          {Array.isArray(data.personal?.team) &&
            data.personal.team.length > 0 && (
              <div>
                <h4 className="font-semibold mt-2">Team</h4>
                <div className="flex flex-wrap gap-2">
                  {data.personal.team.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-200 px-2 py-1 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

          {/* Titles */}
          {Array.isArray(data.personal?.titles) &&
            data.personal.titles.length > 0 && (
              <div>
                <h4 className="font-semibold mt-2">Titles</h4>
                <div className="flex flex-wrap gap-2">
                  {data.personal.titles.map((t, i) => (
                    <span
                      key={i}
                      className="bg-purple-200 px-2 py-1 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CharacterDetail;
