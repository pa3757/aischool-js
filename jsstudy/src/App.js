import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]); // []로 초기화
  useEffect(() => {
    // 포켓몬 api 불러와서 로그 찍어보기
    const getPokemon = async () => {
      const allpokemon = [];
      for (let i = 1; i <= 151; i++) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );
        const responseSpecies = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${i}`
        );
        const responseskill = await axios.get(
          `https://pokeapi.co/api/v2/move/${i}`
        );
        const koreanName = responseSpecies.data.names.find(
          (name) => name.language.name === "ko"
        );
        allpokemon.push({ ...response.data, koreanName: koreanName.name });
        console.log(responseSpecies.data);
        console.log(responseskill.data);
      }
      setPokemon(allpokemon);
      console.log(allpokemon);
    };
    getPokemon();
  }, []);
  return (
    <div>
      {pokemon.map((poke) => (
        <div key={poke.id}>
          <img
            src={poke.sprites.front_default}
            alt={poke.name}
            style={{ width: "150px", height: "150px" }}
          />
          <p>{poke.koreanName}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
