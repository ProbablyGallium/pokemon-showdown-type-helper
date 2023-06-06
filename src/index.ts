import { PokemonShowdown } from "./pokemonShowdown";

const pokemonShowdown = new PokemonShowdown();

/**
 * Watches for new tooltips to be added to the DOM. Parses and injects type
 * damage relations when the appropriate tooltip element is found.
 */
const observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    for (let addedNode of mutation.addedNodes) {
      if (addedNode.nodeType !== 1) continue;

      const element = addedNode as Element;

      if (element.id !== pokemonShowdown.TOOLTIP_CONTAINER_ID) continue;

      const tooltipElement = document.querySelector(
        pokemonShowdown.POKEMON_TOOLTIP_SELECTOR
      ) as HTMLElement;

      if (tooltipElement === null) continue;

      pokemonShowdown.modifyTooltip(tooltipElement);
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });
