import { SimplePokemon } from "@/pokemons";
import Image from "next/image";
import { PokemonCard } from "./PokemonCard";

interface Props {
    pokemons: SimplePokemon[]
}

export const PokemonGrid = ({pokemons}: Props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
                pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    // <Image
                    //     key={pokemon.id}
                    //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
                    //     alt={pokemon.name}
                    //     width={96}
                    //     height={96}
                    // />
                    // <span key={pokemon.id}>ads</span>
                ))
            }
        </div>
    )
}
