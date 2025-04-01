interface Props {
  params: { id: string };
}
const getPokemon = async (id: string) => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache',
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(pokemon);
  return pokemon;
}
export default function PokemonPage({ params }: Props) {
  const pokemon = getPokemon(params.id);
  return (
    <div>
      <h1>Pokemon {params.id}</h1>
    </div>
  );
}