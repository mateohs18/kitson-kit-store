import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, SlidersHorizontal, X } from "lucide-react";

interface ProductFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  category: string;
  priceRange: string;
  sortBy: string;
}

export const ProductFilters = ({ onFilterChange }: ProductFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    priceRange: "all",
    sortBy: "featured"
  });

  const categories = [
    { value: "all", label: "Todas las categorías" },
    { value: "minecraft", label: "Minecraft" },
    { value: "fortnite", label: "Fortnite" },
    { value: "freefire", label: "Free Fire" },
    { value: "valorant", label: "Valorant" },
    { value: "roblox", label: "Roblox" }
  ];

  const priceRanges = [
    { value: "all", label: "Todos los precios" },
    { value: "0-10", label: "$0 - $10" },
    { value: "10-25", label: "$10 - $25" },
    { value: "25-50", label: "$25 - $50" },
    { value: "50+", label: "$50+" }
  ];

  const sortOptions = [
    { value: "featured", label: "Destacados" },
    { value: "price-low", label: "Precio: Menor a Mayor" },
    { value: "price-high", label: "Precio: Mayor a Menor" },
    { value: "newest", label: "Más Recientes" },
    { value: "popular", label: "Más Populares" }
  ];

  const updateFilter = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const defaultFilters = { category: "all", priceRange: "all", sortBy: "featured" };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  const hasActiveFilters = filters.category !== "all" || filters.priceRange !== "all";

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 mb-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-accent" />
          <h3 className="font-gaming text-lg text-foreground">Filtros</h3>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <X className="h-4 w-4 mr-1" />
            Limpiar
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Categoría</label>
          <Select value={filters.category} onValueChange={(value) => updateFilter("category", value)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Precio</label>
          <Select value={filters.priceRange} onValueChange={(value) => updateFilter("priceRange", value)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Ordenar por</label>
          <Select value={filters.sortBy} onValueChange={(value) => updateFilter("sortBy", value)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button 
            variant="outline" 
            className="w-full border-accent/20 hover:border-accent hover:bg-accent/10 transition-all duration-300"
          >
            <Filter className="h-4 w-4 mr-2" />
            Aplicar
          </Button>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/30">
          {filters.category !== "all" && (
            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
              {categories.find(c => c.value === filters.category)?.label}
              <button
                onClick={() => updateFilter("category", "all")}
                className="ml-2 hover:text-destructive transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {filters.priceRange !== "all" && (
            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
              {priceRanges.find(p => p.value === filters.priceRange)?.label}
              <button
                onClick={() => updateFilter("priceRange", "all")}
                className="ml-2 hover:text-destructive transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};