export type Category = {
  slug: string;
  name: string;
  color: string;
  bg: string;
};

// Lista provisória — troque pelos nomes/categorias definitivos quando você enviar.
// Cores derivadas da paleta oficial da logo (roxo) + tons complementares.
export const categories: Category[] = [
  { slug: "maquiagem", name: "Maquiagem", color: "#9D174D", bg: "#FBE4EC" },
  { slug: "skincare", name: "Skincare", color: "#B45309", bg: "#FDECD8" },
  { slug: "cabelo", name: "Cabelo", color: "#6E3487", bg: "#EFE2F6" },
  { slug: "moda", name: "Moda", color: "#B8860B", bg: "#FBF1D6" },
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
