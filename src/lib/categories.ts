export type Category = {
  slug: string;
  name: string;
  color: string;
  bg: string;
  /** Slug of the parent category, when this is a subcategory. */
  parent?: string;
};

// Estrutura espelhada no planetahomem.com.br: 6 pilares principais no menu,
// alguns com subcategorias em dropdown. Cores derivadas da paleta oficial
// da logo (roxo) + tons complementares.
export const categories: Category[] = [
  // 1. Beleza
  { slug: "beleza", name: "Beleza", color: "#9D174D", bg: "#FBE4EC" },
  { slug: "maquiagem", name: "Maquiagem", color: "#9D174D", bg: "#FBE4EC", parent: "beleza" },
  { slug: "skincare", name: "Skincare", color: "#B45309", bg: "#FDECD8", parent: "beleza" },
  { slug: "cabelo", name: "Cabelo", color: "#6E3487", bg: "#EFE2F6", parent: "beleza" },

  // 2. Estilo & Vida
  { slug: "estilo-vida", name: "Estilo & Vida", color: "#B8860B", bg: "#FBF1D6" },
  { slug: "moda", name: "Moda", color: "#B8860B", bg: "#FBF1D6", parent: "estilo-vida" },
  { slug: "viagens", name: "Viagens", color: "#0E7490", bg: "#DFF3F8", parent: "estilo-vida" },
  { slug: "esportes", name: "Esportes", color: "#15803D", bg: "#E2F5E9", parent: "estilo-vida" },

  // 3. Carreira & Dinheiro (sem subcategorias)
  { slug: "carreira-dinheiro", name: "Carreira & Dinheiro", color: "#1D4ED8", bg: "#DCE6FB" },

  // 4. Relacionamentos
  { slug: "relacionamentos", name: "Relacionamentos", color: "#BE185D", bg: "#FCE4EF" },
  { slug: "casamento-familia", name: "Casamento & Família", color: "#BE185D", bg: "#FCE4EF", parent: "relacionamentos" },
  { slug: "maternidade", name: "Maternidade", color: "#C2410C", bg: "#FBE6DA", parent: "relacionamentos" },
  { slug: "amizades", name: "Amizades", color: "#0D9488", bg: "#D7F5F1", parent: "relacionamentos" },
  { slug: "comportamento", name: "Comportamento", color: "#7C3AED", bg: "#EDE4FC", parent: "relacionamentos" },

  // 5. Propósito & Fé (sem subcategorias)
  { slug: "proposito-fe", name: "Propósito & Fé", color: "#A16207", bg: "#FBF0D9" },

  // 6. Achadinhos (sem subcategorias — linka também para a loja externa)
  { slug: "achadinhos", name: "Achadinhos", color: "#0F766E", bg: "#DEF5F2" },
];

export function getCategory(slug: string): Category {
  return (
    categories.find((c) => c.slug === slug) ?? {
      slug,
      name: slug,
      color: "#6E3487",
      bg: "#EFE2F6",
    }
  );
}

/** Categorias de primeiro nível, na ordem do menu principal. */
export function getTopLevelCategories(): Category[] {
  return categories.filter((c) => !c.parent);
}

/** Subcategorias diretas de uma categoria pai (vazio se não houver). */
export function getChildCategories(parentSlug: string): Category[] {
  return categories.filter((c) => c.parent === parentSlug);
}
