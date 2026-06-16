import { useState, useMemo } from 'react';
import { products, productTypes, Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const ipOptions = ['IP40', 'IP54', 'IP65', 'IP66', 'IP67', 'IP68'];

const Catalog = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedIp, setSelectedIp] = useState<string[]>([]);
  const [powerRange, setPowerRange] = useState<[number, number]>([40, 200]);
  const [priceRange, setPriceRange] = useState<[number, number]>([3200, 26400]);

  const toggle = (arr: string[], set: (v: string[]) => void, val: string) =>
    set(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);

  const filtered = useMemo(() => {
    return products.filter((p: Product) => {
      if (selectedTypes.length && !selectedTypes.includes(p.type)) return false;
      if (selectedIp.length && !selectedIp.includes(p.ip)) return false;
      if (p.power < powerRange[0] || p.power > powerRange[1]) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      return true;
    });
  }, [selectedTypes, selectedIp, powerRange, priceRange]);

  const reset = () => {
    setSelectedTypes([]);
    setSelectedIp([]);
    setPowerRange([40, 200]);
    setPriceRange([3200, 26400]);
  };

  return (
    <section id="catalog" className="py-24 relative">
      <div className="container">
        <div className="mb-12">
          <span className="text-primary font-display tracking-widest text-sm uppercase">Серия ПРОМСВЕТ</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Каталог светильников</h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Промышленное LED-освещение собственного производства. Подберите модель по параметрам.
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Фильтры */}
          <aside className="bg-card border border-border rounded-xl p-6 h-fit lg:sticky lg:top-24">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl font-semibold flex items-center gap-2">
                <Icon name="SlidersHorizontal" size={18} className="text-primary" /> Фильтры
              </h3>
              <button onClick={reset} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Сбросить
              </button>
            </div>

            <div className="mb-6">
              <p className="font-medium mb-3 text-sm">Тип светильника</p>
              <div className="space-y-2.5">
                {productTypes.map((t) => (
                  <label key={t} className="flex items-center gap-2.5 cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Checkbox checked={selectedTypes.includes(t)} onCheckedChange={() => toggle(selectedTypes, setSelectedTypes, t)} />
                    {t}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="font-medium mb-3 text-sm">Степень защиты (IP)</p>
              <div className="flex flex-wrap gap-2">
                {ipOptions.map((ip) => (
                  <button
                    key={ip}
                    onClick={() => toggle(selectedIp, setSelectedIp, ip)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all ${
                      selectedIp.includes(ip)
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border text-muted-foreground hover:border-primary'
                    }`}
                  >
                    {ip}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-3 text-sm">
                <span className="font-medium">Мощность</span>
                <span className="text-primary">{powerRange[0]}–{powerRange[1]} Вт</span>
              </div>
              <Slider min={40} max={200} step={10} value={powerRange} onValueChange={(v) => setPowerRange(v as [number, number])} />
            </div>

            <div>
              <div className="flex justify-between mb-3 text-sm">
                <span className="font-medium">Цена</span>
                <span className="text-primary">{priceRange[0].toLocaleString()}–{priceRange[1].toLocaleString()} ₽</span>
              </div>
              <Slider min={3200} max={26400} step={100} value={priceRange} onValueChange={(v) => setPriceRange(v as [number, number])} />
            </div>
          </aside>

          {/* Товары */}
          <div>
            <p className="text-sm text-muted-foreground mb-4">Найдено: {filtered.length}</p>
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <Icon name="PackageX" size={48} className="mx-auto mb-4 opacity-50" />
                Светильники не найдены. Измените параметры фильтра.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((p) => (
                  <div key={p.id} className="group bg-card border border-border rounded-xl p-5 hover:border-primary transition-all hover:glow-shadow">
                    <div className="flex items-center justify-center h-32 mb-4 rounded-lg bg-secondary/50 relative overflow-hidden">
                      <Icon name="Lightbulb" size={56} className="text-primary group-hover:animate-glow" />
                      <span className="absolute top-2 right-2 text-[10px] font-medium px-2 py-0.5 rounded bg-primary/20 text-primary">{p.ip}</span>
                    </div>
                    <span className="text-xs text-primary font-display tracking-wide">{p.type}</span>
                    <h4 className="font-display text-lg font-semibold mt-0.5">{p.name}</h4>
                    <p className="text-xs text-muted-foreground mb-3">{p.model}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Icon name="Zap" size={12} className="text-primary" /> {p.power} Вт</span>
                      <span className="flex items-center gap-1"><Icon name="Sun" size={12} className="text-primary" /> {p.lumen} лм</span>
                      <span className="flex items-center gap-1"><Icon name="Thermometer" size={12} className="text-primary" /> {p.temp}</span>
                      <span className="flex items-center gap-1"><Icon name="ShieldCheck" size={12} className="text-primary" /> {p.warranty} лет</span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="font-display text-xl font-bold">{p.price.toLocaleString()} ₽</span>
                      <Button size="sm" variant="secondary">В заявку</Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
