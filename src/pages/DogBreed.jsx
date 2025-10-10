import { useState, useEffect, useRef, useMemo } from 'react';
import { useForm } from 'react-hook-form';

// Utilities: parse "breed sub" into {breed, subBreed}
const parseBreed = (value) => {
  const parts = value.trim().toLowerCase().split(/\s+/);
  if (parts.length >= 2) {
    // try "breed sub-breed" order (dog.ceo uses /breed/{breed}/{sub})
    return { breed: parts[0], subBreed: parts.slice(1).join('-') };
  }
  return { breed: parts[0] || '', subBreed: '' };
};

// Build display label for suggestions including sub-breeds
const toDisplay = (breed, sub) => (sub ? `${breed} ${sub.replace(/-/g, ' ')}` : breed);

// Tailwind + inline styles for custom animation polish
const glassCard =
  'relative isolate rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl';
const containerPad = 'p-6 sm:p-8';
const imageWrap = 'relative w-full overflow-hidden rounded-xl shadow-lg';
const titleCls = 'mt-4 text-2xl sm:text-3xl font-semibold text-gray-900/90 tracking-tight capitalize';
const subtitleCls = 'text-sm sm:text-base text-gray-700/80 mt-1';
const badgeCls =
  'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-600/10 text-rose-700 ring-1 ring-rose-600/20';
const statPill =
  'inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium bg-white/70 text-gray-700 ring-1 ring-black/5';
const btnPrimary =
  'px-6 py-3 rounded-lg bg-rose-600 text-white shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 transition';
const inputCls =
  'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition';
const listboxCls =
  'absolute top-full left-0 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg max-h-60 overflow-auto z-10';
const optionCls =
  'px-4 py-2 cursor-pointer transition-colors duration-150 capitalize aria-selected:bg-blue-600 aria-selected:text-white hover:bg-blue-50 focus:bg-blue-50 focus:outline-none';

// Modern breed card with glass effect and subtle animations
const DogBreedCard = ({ breed, subBreed, image, facts }) => {
  return (
    <div
      className={`${glassCard} ${containerPad}`}
      style={{
        // shimmer highlight
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))',
      }}
    >
      <div
        className={`${imageWrap}`}
        style={{
          aspectRatio: '16 / 10',
        }}
      >
        <img
          src={image}
          alt={toDisplay(breed, subBreed)}
          className="h-full w-full object-cover transition-transform duration-700"
          style={{
            transformOrigin: 'center',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
        />

        {/* top-left badge */}
        <div className="absolute left-3 top-3">
          <span className={badgeCls}>Featured</span>
        </div>

        {/* gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.0) 60%)',
          }}
        />

        {/* shimmer sweep */}
        <div
          className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.0) 100%)',
            transform: 'skewX(-12deg)',
            animation: 'sweep 2.8s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-120%) skewX(-12deg); }
          60% { transform: translateX(160%) skewX(-12deg); }
          100% { transform: translateX(160%) skewX(-12deg); }
        }
      `}</style>

      <div className="mt-4">
        <h2 className={titleCls}>
          {toDisplay(breed, subBreed)}
        </h2>
        <p className={subtitleCls}>
          A beautiful and beloved breed with unique temperament and traits.
        </p>
      </div>

      {/* quick stats row */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className={statPill}>Popularity: High</span>
        <span className={statPill}>Energy: Medium</span>
        <span className={statPill}>Size: Medium</span>
      </div>

      {/* facts list */}
      {facts?.length ? (
        <ul className="mt-4 list-disc pl-5 text-sm text-gray-700/90">
          {facts.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

const DogBreed = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [allBreeds, setAllBreeds] = useState([]); // array of {breed, subBreed}
  const [suggestions, setSuggestions] = useState([]);
  const [dogImage, setDogImage] = useState('');
  const [breed, setBreed] = useState('');
  const [subBreed, setSubBreed] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const inputRef = useRef(null);
  const listboxRef = useRef(null);
  const query = watch('query') || '';

  // Fetch full list: supports breeds and sub-breeds
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((r) => r.json())
      .then((data) => {
        const obj = data.message || {};
        const expanded = [];
        Object.keys(obj).forEach((b) => {
          const subs = obj[b];
          if (Array.isArray(subs) && subs.length) {
            subs.forEach((s) => expanded.push({ breed: b, subBreed: s }));
          } else {
            expanded.push({ breed: b, subBreed: '' });
          }
        });
        setAllBreeds(expanded);
      });
  }, []);

  // Filter suggestions
  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setSuggestions([]);
      setActiveIndex(-1);
      return;
    }
    const filtered = allBreeds
      .filter(({ breed, subBreed }) =>
        toDisplay(breed, subBreed).toLowerCase().includes(q),
      )
      .slice(0, 12);
    setSuggestions(filtered);
    setActiveIndex(filtered.length ? 0 : -1);
  }, [query, allBreeds]);

  const fetchDogImage = ({ breed, subBreed }) => {
    if (!breed) return;
    setLoading(true);
    const url = subBreed
      ? `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`
      : `https://dog.ceo/api/breed/${breed}/images/random`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setValue('query', value);
  };

  const handleSuggestionClick = (sel) => {
    const label = toDisplay(sel.breed, sel.subBreed);
    setValue('query', label);
    setBreed(sel.breed);
    setSubBreed(sel.subBreed);
    setSuggestions([]);
    setActiveIndex(-1);
    fetchDogImage(sel);
  };

  const onSubmit = (data) => {
    setSuggestions([]);
    const { breed: b, subBreed: s } = parseBreed(data.query);
    setBreed(b);
    setSubBreed(s);
    fetchDogImage({ breed: b, subBreed: s });
  };

  // Keyboard navigation for combobox
  const onInputKeyDown = (e) => {
    if (!suggestions.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((idx) => (idx + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((idx) =>
        idx <= 0 ? suggestions.length - 1 : idx - 1,
      );
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0) {
        e.preventDefault();
        handleSuggestionClick(suggestions[activeIndex]);
      }
    } else if (e.key === 'Escape') {
      setSuggestions([]);
      setActiveIndex(-1);
    }
  };

  // derive some placeholder “facts” (could be replaced with real data)
  const facts = useMemo(() => {
    if (!breed) return [];
    const list = [];
    if (breed.includes('hound')) list.push('Excellent scent tracking.');
    if (breed.includes('terrier')) list.push('Spirited and confident personality.');
    if (!list.length) list.push('Friendly and loyal companion.');
    list.push('Enjoys daily activity and playtime.');
    return list;
  }, [breed]);

  return (
    <div className="mx-auto mt-8 w-full max-w-3xl px-4 sm:mt-10 sm:px-6">
      {/* Card / Skeleton */}
      {loading ? (
        <div className="w-full rounded-2xl bg-gray-100 p-6 shadow-lg animate-pulse">
          <div className="h-56 w-full rounded-xl bg-gray-300" />
          <div className="mt-4 h-6 w-40 rounded bg-gray-300" />
          <div className="mt-2 h-4 w-64 rounded bg-gray-200" />
        </div>
      ) : dogImage ? (
        <DogBreedCard breed={breed} subBreed={subBreed} image={dogImage} facts={facts} />
      ) : (
        <div className={`${glassCard} ${containerPad}`}>
          <p className="text-gray-700">
            Search a breed to see a featured card.
          </p>
        </div>
      )}

      {/* Search Form (Combobox) */}
      <form onSubmit={handleSubmit(onSubmit)} className="relative mt-6 space-y-3">
        <label htmlFor="breed-combobox" className="sr-only">
          Search for a dog breed
        </label>
        <input
          id="breed-combobox"
          type="text"
          autoComplete="off"
          role="combobox"
          aria-expanded={suggestions.length > 0}
          aria-controls="breed-listbox"
          aria-autocomplete="list"
          aria-activedescendant={
            activeIndex >= 0 ? `option-${activeIndex}` : undefined
          }
          {...register('query', { required: true })}
          onChange={handleSearchChange}
          onKeyDown={onInputKeyDown}
          ref={inputRef}
          placeholder="Search for a dog breed (e.g., bulldog french)…"
          className={inputCls}
        />

        {suggestions.length > 0 && (
          <ul
            id="breed-listbox"
            role="listbox"
            ref={listboxRef}
            className={listboxCls}
          >
            {suggestions.map((sugg, idx) => {
              const selected = idx === activeIndex;
              return (
                <li
                  key={`${sugg.breed}-${sugg.subBreed || 'root'}`}
                  id={`option-${idx}`}
                  role="option"
                  aria-selected={selected}
                  tabIndex={-1}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSuggestionClick(sugg)}
                  className={optionCls}
                >
                  {toDisplay(sugg.breed, sugg.subBreed)}
                </li>
              );
            })}
          </ul>
        )}

        <div className="flex justify-center">
          <button type="submit" className={btnPrimary}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default DogBreed;
